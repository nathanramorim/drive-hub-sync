# feat-ffd2-01: ADR-0004 (sync bidirecional, grafo e adaptador Codex)

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** nenhuma

## Modelo do módulo
enxuto: só documentação de decisão.

## Decisões do projeto aplicadas
ADR-0001, ADR-0002 e ADR-0003 vigentes; as duas últimas recebem nota de ajuste (`GOV-01`).

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| ADRs existentes | `sdd/spec/adr/` | ADR-0001 a 0003 | estender | Notas de ajuste nas 0002 e 0003 |
| Modelo de ADR | `adr-0000-modelo.md` | modelo | reusar | Estrutura padrão |

## Dependências novas
Nenhuma no plugin. Consultar a doc oficial do Codex (como carrega skills, prompts ou `AGENTS.md`) com versão exata (`SEG-07`).

## Rules e IDs da Constituição Aplicáveis
`SEG-07`, `FLX-05`, `GOV-01`, `DUP-10`. Rule: `.agents/rules/sdd-fluxo-e-portao.md`, `.agents/rules/sdd-seguranca.md`.

## Critérios de Aceitação Executáveis
1. `test -f sdd/spec/adr/adr-0004-*.md` retorna 0.
2. A ADR-0004 contém as seções do modelo e os termos `conflito`, `estado`, `grafo` e `Codex`: `grep -ci` de cada um retorna 1 ou mais.
3. As ADR-0002 e 0003 citam `ADR-0004`: `grep -l ADR-0004 sdd/spec/adr/adr-000[23]-*.md` lista os dois arquivos.
4. `sdd/spec/decisions.md` indexa a ADR-0004.
5. `forge brief --check` retorna 0.
