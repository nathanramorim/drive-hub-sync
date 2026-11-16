# Plano ffd2 (1 onda, 6 tasks)

| # | Task | Depende de | Paralelo | Rules/IDs |
|---|------|-----------|----------|-----------|
| 1 | Consultar a doc oficial do Codex (skills, prompts, AGENTS.md) e redigir ADR-0004 (grafo e adaptador Codex) | — | — | `SEG-07`, `FLX-05` |
| 2 | Estender `templates/hub/` com seção `Relacionados` e índice de relações | 1 | com 3 | `DUP-04`, `ARQ-03` |
| 3 | Estender `SKILL.md`: regras de links, índice e instalação nos 3 agentes | 1 | com 2 | `DUP-10`, `SEG-02` |
| 4 | Criar o adaptador do Codex (fino, aponta para a skill) | 3 | com 5 | `ARQ-06`, `DUP-06` |
| 5 | Atualizar `mappings.sdd.json`, README, site e `sdd/releases/history.md`; subir versão | 2, 3 | com 4 | `FLX-07` |
| 6 | Validar os critérios 1 a 8 e rodar `forge gate` | 4, 5 | — | `TST-01`, `TST-05` |
