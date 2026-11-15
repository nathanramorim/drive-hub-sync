---
description: Sincroniza docs, releases, diagramas e marketing do projeto com o hub do Drive, após confirmação.
argument-hint: "[release|arquitetura|marketing|tudo]"
---

Sincronize o projeto com o hub do Drive. Siga a skill `drive-hub`.

1. Leia `.drive-hub.json` na raiz. Se não existir, instrua a rodar `/drive-setup` e pare.
2. Escolha os mapeamentos conforme `$ARGUMENTS` (vazio = os afetados pelas mudanças recentes via `git status`/`git log`; `tudo` = todos).
3. Para cada mapeamento, resuma o que será atualizado no Drive (arquivo de destino e conteúdo em linguagem de produto) e **peça confirmação**.
4. Aplique as regras de exclusão da skill: recuse qualquer arquivo de código, segredo ou binário compilado.
5. Grave no Drive, atualize o `00-LEIA-ME-INDICE-GERAL.md` se surgirem arquivos novos e liste o que mudou.
