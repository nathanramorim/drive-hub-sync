# feat-ffd2-05: `/drive-pull` e adaptador do Codex

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** feat-ffd2-04

## Modelo do módulo
enxuto: dois adaptadores finos em Markdown.

## Decisões do projeto aplicadas
ADR-0001 (adaptador fino) e ADR-0004 (formato do Codex).

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Comandos Claude Code | `commands/` | `drive-setup`, `drive-sync` | estender | Novo `drive-pull.md` no mesmo molde |
| Adaptador Codex | todo o repo | nada | criar | Fino, aponta para a skill |

## Dependências novas
Nenhuma. O formato do Codex vem da ADR-0004.

## Rules e IDs da Constituição Aplicáveis
`ARQ-06`, `DUP-06`, `DUP-10`, `DUP-03`. Rules: `.agents/rules/sdd-arquitetura.md`, `.agents/rules/sdd-reuso-e-duplicacao.md`.

## Critérios de Aceitação Executáveis
1. `commands/drive-pull.md` existe, tem `description` no frontmatter e `grep -c 'skills/drive-hub'` retorna 1 ou mais.
2. O adaptador do Codex existe, referencia a skill e cita a doc oficial consultada.
3. Nenhum dos dois repete a lista de exclusão: `grep -c 'node_modules'` retorna 0 em ambos.
4. `forge brief --check` retorna 0.
