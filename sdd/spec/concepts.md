# Catálogo de Conceitos e Contratos (`DUP-01`) — drive-hub-sync

Regra `DUP-01`: **Um conceito = uma casa.** Antes de criar uma nova entidade, módulo ou utilitário, consulte esta tabela para identificar o módulo dono do conceito e reutilizar ou estender seu contrato público (`DUP-02`).

| Conceito | Pacote/Domínio Dono | Entidade/Struct Mestra | Contrato Público | Observação |
| --- | --- | --- | --- | --- |
| Regras de exclusão e segurança | `skills/drive-hub` | seção `## Regras` | `SKILL.md` | Comandos apenas referenciam, nunca copiam |
| Estrutura do hub (pastas 00 a 04) | `skills/drive-hub` | seção `## Estrutura padrão` | `SKILL.md` | `templates/hub/` materializa a estrutura |
| Configuração do usuário | `skills/drive-hub` | `.drive-hub.json` (`hubPath`, `mappings`) | formato em `SKILL.md` | Fica fora do git |
| Mapeamentos para projetos SDD | `templates` | `mappings.sdd.json` | lista de `gatilho/origem/destino` | Exemplo reutilizável |
| Versão do plugin | `.claude-plugin` | `plugin.json` | campo `version` | README e site refletem a mesma versão |
