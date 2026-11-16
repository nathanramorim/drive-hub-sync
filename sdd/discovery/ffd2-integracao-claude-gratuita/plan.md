# Plano ffd2 (1 onda, 5 tasks)

| # | Task | Depende de | Paralelo | Rules/IDs |
|---|------|-----------|----------|-----------|
| 1 | Pesquisar opções A a D (context7, docs oficiais) e redigir ADR-0004 com a escolha | — | — | `SEG-07`, `FLX-05` |
| 2 | Estender `SKILL.md` com a seção "Conectar ao Claude" e o campo opcional em `.drive-hub.json` | 1 | — | `DUP-10`, `SEG-02` |
| 3 | Criar `commands/drive-connect.md` (adaptador fino) | 2 | com 4 | `ARQ-06`, `DUP-06` |
| 4 | Atualizar README, site e `sdd/releases/history.md`; subir versão em `plugin.json` | 2 | com 3 | `FLX-07` |
| 5 | Validar os critérios 1 a 7 e rodar `forge gate` | 3, 4 | — | `TST-01`, `TST-05` |
