# Plano ffd2 (2 ondas, 7 tasks no máximo por onda)

## Onda 1: decisão e núcleo (de baixo para cima)
| # | Task | Depende de | Paralelo | Rules/IDs |
|---|------|-----------|----------|-----------|
| 1 | Consultar a doc oficial do Codex; redigir ADR-0004 (bidirecional, conflito, estado, grafo, Codex) e notas de ajuste nas ADR-0002 e 0003 | — | — | `SEG-07`, `FLX-05`, `GOV-01` |
| 2 | Estender `SKILL.md`: procedimento de descer, política de conflito, estado da sincronização e lista de ignorados | 1 | com 3 | `DUP-10`, `SEG-02`, `SEG-01` |
| 3 | Estender `templates/hub/` com `Relacionados` e índice de relações; script de checagem de links | 1 | com 2 | `DUP-04`, `ARQ-03` |
| 4 | Estender `mappings.sdd.json` e o formato de `.drive-hub.json` (sentido por mapeamento) e `.gitignore` do estado | 2 | — | `ARQ-06`, `SEG-04` |

## Onda 2: adaptadores e entrega
| # | Task | Depende de | Paralelo | Rules/IDs |
|---|------|-----------|----------|-----------|
| 5 | Criar `commands/drive-pull.md` e o adaptador do Codex (finos, apontam para a skill) | 4 | com 6 | `ARQ-06`, `DUP-06` |
| 6 | README, guia de Obsidian, site e `sdd/releases/history.md`; subir versão | 4 | com 5 | `FLX-07` |
| 7 | Validar os critérios 1 a 10 nos três agentes e rodar `forge gate` | 5, 6 | — | `TST-01`, `TST-05` |
