# ADR-0002: Sem código-fonte no Drive e confirmação antes de gravar

- **Data:** 2026-11-16
- **Status:** `aprovado`
- **Regras afetadas (IDs da constitution):** `SEG-01`, `SEG-02`, `SEG-04`
- **Autor / Responsável:** Nathan Ramos Amorim

## Contexto

O Drive é compartilhável e sincroniza para a nuvem. Código, `.env`, chaves e binários ali seriam um vazamento.

## Opções Consideradas

1. **Copiar tudo e filtrar depois:** simples, mas arriscado.
2. **Lista de permissão (só documentação) mais confirmação:** mais restritiva e previsível.

## Decisão

Opção 2. Só Markdown, HTML, Mermaid, imagens, vídeo e PDF são gravados. A escrita fica dentro de `hubPath`, sem seguir links simbólicos para fora, e o usuário confirma o plano antes de gravar. A confirmação faz o papel de simulação (`ARQ-05`).

## Consequências

- **Positivas:** menor risco de vazamento; o usuário sempre vê o que vai ao Drive.
- **Negativas / Trade-offs:** mais um passo de confirmação; formatos fora da lista são recusados.
- **Ações de acompanhamento:** manter a lista de exclusão apenas na skill (`DUP-06`).

> **Ajuste (ADR-0004):** a regra de só circular documentação e confirmar antes de gravar vale também para a descida (hub → projeto).
