# Módulos — drive-hub-sync

## skills/drive-hub (dono das regras)
**Responsabilidade:** definir a estrutura do hub, o formato de `.drive-hub.json`, as regras de exclusão e os procedimentos de configurar e sincronizar.

- [x] Estrutura padrão `00` a `04` do hub
- [x] Regras: sem código-fonte, confirmação antes de gravar, escrita só em `hubPath`, sem dados pessoais no git
- [x] Procedimentos para agentes sem comandos de barra (agy)

## commands (entrada Claude Code)
**Responsabilidade:** adaptadores finos `/drive-setup` e `/drive-sync` que chamam a skill, sem duplicar regras (`DUP-10`).

- [x] `/drive-setup`: detecta o Drive, pergunta destino, mostra o plano, cria o esqueleto
- [x] `/drive-sync [release|arquitetura|marketing|tudo]`: resume, pede confirmação, grava

## templates (conteúdo estático)
**Responsabilidade:** esqueleto do hub (`templates/hub/`, com `{{PROJETO}}`) e mapeamentos prontos para projetos com `sdd/` (`mappings.sdd.json`).

## .claude-plugin (distribuição)
**Responsabilidade:** metadados e versão do plugin e do marketplace.

## site e docs (divulgação)
**Responsabilidade:** página de apresentação em linguagem simples, banner e ilustração. Não participam do fluxo de sincronização.

**Limites:** `commands` e `templates` dependem de `skills`; `skills` não depende de ninguém (`ARQ-02`).
