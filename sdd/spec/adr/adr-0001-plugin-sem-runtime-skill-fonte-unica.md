# ADR-0001: Plugin sem runtime, com a skill como fonte única

- **Data:** 2026-11-16
- **Status:** `aprovado`
- **Regras afetadas (IDs da constitution):** `ARQ-01`, `ARQ-04`, `DUP-10`
- **Autor / Responsável:** Nathan Ramos Amorim

## Contexto

O projeto precisa funcionar no Claude Code e no agy, sem exigir que o usuário instale linguagem ou binário.

## Opções Consideradas

1. **CLI/binário próprio:** controle total, mas exige build, distribuição e dependências.
2. **Instruções em Markdown executadas pelo agente:** sem build e sem dependências; depende do agente seguir o texto.
3. **Duas implementações (uma por agente):** duplica regras e diverge com o tempo.

## Decisão

Opção 2. `skills/drive-hub/SKILL.md` guarda regras e procedimentos; `commands/` são adaptadores finos para o Claude Code. Não altera regras da Constitution.

## Consequências

- **Positivas:** instalação simples, nenhuma dependência de runtime, regras em um só lugar.
- **Negativas / Trade-offs:** sem testes automatizados; o comportamento depende do agente (divergência `TST-01` e `ARQ-01` registrada na Constitution).
- **Ações de acompanhamento:** definir validação por feature (decisão aberta D4).
