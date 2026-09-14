# IT Support Central

Portal web de suporte técnico corporativo — painel de telemetria, biblioteca de scripts Windows/AD/Office, gerador de comandos para impressoras e assistente de orientação com IA.

> **Modo demo / portfólio:** as rotinas de sistema (limpeza, SFC, spooler, etc.) são **simulação + geração de comandos**. O navegador não executa comandos na máquina do usuário. Telemetria e latência HTTP são reais.

![Status](https://img.shields.io/badge/status-demo%20%2F%20portfolio-blue)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Netlify-indigo)
![License](https://img.shields.io/badge/license-MIT-green)

## Funcionalidades

- **Painel** — host simulado, IP público, SO, latência média, telemetria do browser (CPU, RAM, tela, bateria)
- **Ferramentas** — limpeza, rede, sistema, impressoras e segurança (fluxo simulado + comando para copiar)
- **Scripts rápidos** — biblioteca filtrável (Rede, Limpeza, Impressoras, AD, Windows, Office)
- **Gerador de impressora de rede** — PowerShell + CMD a partir de IP/porta/driver
- **Assistente IA** — orientação técnica (requer Netlify Function + `ANTHROPIC_API_KEY`)
- **Console** — log filtrável e exportável

## Demo rápida

Abra `index.html` no navegador ou publique no Netlify (drag & drop da pasta).

## Deploy no Netlify

1. Publique a pasta (ou conecte este repositório).
2. Em **Site settings → Environment variables**, adicione:
   - `ANTHROPIC_API_KEY` = sua chave Anthropic (opcional, só para a IA)
3. A function fica em `/.netlify/functions/chat`.

Arquivos relevantes:

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | App principal |
| `netlify/functions/chat.js` | Proxy seguro para Claude |
| `netlify.toml` | Build + headers de segurança |

## Por que não executa comandos na máquina?

Limitação de segurança do navegador (sandbox). Execução real exigiria app desktop, agente local ou scripts que o técnico roda manualmente. Este projeto prioriza **segurança e clareza** — ideal como ferramenta de consulta e demonstração de produto de helpdesk.

## Autor

**Cristiano de Godoi Franciscano**  
Estudante de Análise de Dados · Experiência em gestão de incidentes e suporte técnico  
[GitHub](https://github.com/cristianogodoi1986)

## Licença

MIT
