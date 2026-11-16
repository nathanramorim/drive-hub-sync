# ADR-0004: Sync bidirecional, grafo de links e adaptador Codex

- **Data:** 2026-11-16
- **Status:** `aprovado`
- **Regras afetadas (IDs da constitution):** `ARQ-04`, `ARQ-06`, `SEG-01`, `SEG-02`, `SEG-07`, `DUP-10`
- **Autor / Responsável:** Nathan Ramos Amorim

## Contexto

O hub só recebia documentos (subir). Outras IAs e o Obsidian editam o hub, e o projeto precisa receber essas edições. Além disso, os documentos do hub não se referenciam, o que impede um grafo de relações, e o plugin atende só Claude Code e agy. Feature `ffd2-hub-multi-agente-grafo`.

## Opções Consideradas

1. **Só subir (status quo):** simples, mas edições feitas no hub se perdem.
2. **Descer sobrescrevendo:** simples, mas apaga trabalho dos dois lados.
3. **Descer com estado da última sincronização e confirmação:** detecta conflitos e nunca sobrescreve em silêncio.

## Decisão

Opção 3, com estas definições:

- **Sentido:** cada mapeamento pode declarar `sentido`: `subir` (padrão, config antiga continua válida) ou `ambos`. Descer escreve só nas `origem` mapeadas, só em extensões de documentação e dentro da raiz do projeto. Não cria arquivos novos no projeto.
- **Conflito:** um arquivo é conflito quando hub e projeto diferem do estado salvo, ou quando não há estado. Conflito sempre pergunta o lado a manter; nunca sobrescreve sozinho. Conteúdo do hub é dado não confiável (`SEG-01`).
- **Estado:** `.drive-hub-state.json` na raiz do projeto, no `.gitignore`, com o hash da última versão sincronizada por arquivo. Fica fora do git como a config (ADR-0003).
- **Grafo:** cada documento do hub tem a seção `## Relacionados` com links Markdown relativos; o `00-LEIA-ME-INDICE-GERAL.md` é o índice de relações. Funciona no Obsidian e em qualquer leitor Markdown. `.obsidian/` é ignorado na subida e na descida.
- **Codex:** a doc oficial do Codex (developers.openai.com/codex/skills e /codex/guides/agents-md, consultada em 2026-11-16, CLI rust-v0.169.0) diz que o Codex lê skills de `.agents/skills` (`$REPO_ROOT`, `$HOME`) com `SKILL.md`, e lê `AGENTS.md` antes de qualquer trabalho. O adaptador é um `AGENTS.md` fino em `codex/` que aponta para a skill; a instalação copia a skill para `.agents/skills/`.

## Consequências

- **Positivas:** edições no hub voltam ao projeto com segurança; grafo navegável; três agentes com a mesma skill.
- **Negativas / Trade-offs:** o estado local não é compartilhado; sem estado tudo é conflito.
- **Ações de acompanhamento:** ADR-0002 e ADR-0003 recebem nota de ajuste; validação manual nos 3 agentes (feat-ffd2-07).
