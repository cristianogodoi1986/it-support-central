# IT Support Central — Deploy Netlify

## Arquivos
- `index.html` — app principal
- `netlify/functions/chat.js` — proxy seguro para Claude (API key no servidor)
- `netlify.toml` — build + headers de segurança

## Passos no Netlify
1. Crie um site novo (drag & drop ou Git).
2. Conecte este repositório ou faça upload da pasta.
3. Em **Site settings → Environment variables**, adicione:
   - `ANTHROPIC_API_KEY` = sua chave da Anthropic
4. Deploy. A IA passa a funcionar em `/.netlify/functions/chat`.

## Importante
- Ferramentas de limpeza/sistema são **simulação** + cópia de comandos (seguro para browser).
- Telemetria e latência são **reais** (browser APIs + fetch).
- Não exponha a API key no frontend.
