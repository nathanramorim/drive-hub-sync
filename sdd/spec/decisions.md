# Decisões — drive-hub-sync

## Resolvidas

| # | Decisão | Resolução | Motivo |
|---|---------|-----------|--------|
| D1 | Formato de distribuição | Plugin Claude Code + skill agy, skill como fonte única | Uma só casa para as regras (`DUP-10`); ver [ADR-0001](adr/adr-0001-plugin-sem-runtime-skill-fonte-unica.md) |
| D2 | O que vai ao Drive | Só documentação (Markdown, HTML, Mermaid, imagens, vídeo, PDF) | Evita vazar código e segredos; ver [ADR-0002](adr/adr-0002-sem-codigo-e-confirmacao-antes-de-gravar.md) |
| D3 | Onde fica a configuração | `.drive-hub.json` na raiz, no `.gitignore` | Caminho pessoal não vai ao git; ver [ADR-0003](adr/adr-0003-configuracao-por-usuario-fora-do-git.md) |
| D6 | Sync nos dois sentidos, grafo e Codex | Descer com estado e conflito que pergunta; links relativos; adaptador `AGENTS.md` | Edições do hub voltam sem perda; ver [ADR-0004](adr/adr-0004-sync-bidirecional-grafo-e-codex.md) |

## Abertas

| # | Questão |
|---|---------|
| D4 | [ ] Como validar a skill de forma automatizada (hoje só conferência manual)? |
| D5 | [ ] Confirmar o local de skills do agy (o README ainda pede teste). |

## Índice de ADRs
- `adr-0001-plugin-sem-runtime-skill-fonte-unica.md`
- `adr-0002-sem-codigo-e-confirmacao-antes-de-gravar.md`
- `adr-0003-configuracao-por-usuario-fora-do-git.md`
- `adr-0004-sync-bidirecional-grafo-e-codex.md`
