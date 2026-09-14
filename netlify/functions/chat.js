/**
 * Netlify Function — Proxy seguro para Anthropic Claude
 * Configure a variável de ambiente ANTHROPIC_API_KEY no painel Netlify.
 *
 * Deploy: coloque esta pasta na raiz do site (ou ajuste netlify.toml).
 */
exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'ANTHROPIC_API_KEY não configurada. Defina no painel Netlify → Site settings → Environment variables.',
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { system, messages, model = 'claude-sonnet-4-20250514', max_tokens = 1000 } = body;

    if (!messages || !Array.isArray(messages)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'messages é obrigatório' }) };
    }

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens,
        system: system || undefined,
        messages,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return {
        statusCode: res.status,
        headers,
        body: JSON.stringify({ error: data.error?.message || 'Erro na API Anthropic', details: data }),
      };
    }

    return { statusCode: 200, headers, body: JSON.stringify(data) };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || 'Erro interno' }),
    };
  }
};
