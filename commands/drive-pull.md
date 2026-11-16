---
description: Traz para o projeto as edições feitas no hub do Drive, com diff e confirmação; conflito sempre pergunta.
argument-hint: "[release|arquitetura|marketing|tudo]"
---

Desça as edições do hub para o projeto. Siga a seção "Descer" da skill `drive-hub` (`skills/drive-hub/SKILL.md`).

1. Leia `.drive-hub.json` e `.drive-hub-state.json`. Se a config não existir, instrua a rodar `/drive-setup` e pare.
2. Escolha os mapeamentos com `sentido: "ambos"` conforme `$ARGUMENTS` (vazio ou `tudo` = todos).
3. Mostre o diff, os conflitos e os arquivos recusados pelas regras da skill, e **peça confirmação**.
4. Em cada conflito, pergunte qual lado manter.
5. Grave, atualize o estado e liste o que mudou.
