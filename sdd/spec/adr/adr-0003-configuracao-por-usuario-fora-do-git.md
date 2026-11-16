# ADR-0003: Configuração por usuário fora do git

- **Data:** 2026-11-16
- **Status:** `aprovado`
- **Regras afetadas (IDs da constitution):** `SEG-05`, `ARQ-03`
- **Autor / Responsável:** Nathan Ramos Amorim

## Contexto

O destino no Drive depende da conta e do computador de cada pessoa. O caminho contém dados pessoais.

## Opções Consideradas

1. **Config versionada no repositório:** compartilha, mas expõe o caminho pessoal.
2. **`.drive-hub.json` local no `.gitignore`:** cada pessoa usa o seu Drive.

## Decisão

Opção 2. O `/drive-setup` grava `.drive-hub.json` na raiz do projeto do usuário e sugere ignorá-lo no git. `mappings` ligam origens a destinos; `templates/mappings.sdd.json` serve de exemplo.

## Consequências

- **Positivas:** nenhum dado pessoal no repositório; qualquer pessoa pode usar o plugin.
- **Negativas / Trade-offs:** a configuração não é compartilhada entre a equipe.
- **Ações de acompanhamento:** nenhuma.

> **Ajuste (ADR-0004):** o estado da sincronização (`.drive-hub-state.json`) também fica fora do git, e `mappings` aceitam o campo opcional `sentido`.
