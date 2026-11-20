# feat-c62c-01: Aceitar mídia (imagem, vídeo, PDF, documento e planilha) e manter a recusa de código e segredo

**Iniciativa:** `c62c-midia-aceita-recusa-codigo` · **Refs #7** · **Depende de:** nenhuma feature (independente) · **Bloqueia:** nada

## Problema
O README fala em textos, imagens e vídeos, mas entregas de conteúdo também têm PDF, documentos e planilhas. Hoje a regra 1 da skill aceita só Markdown, HTML, Mermaid, imagens, vídeo e PDF, sem lista por extensão e tipo MIME e sem teste. É preciso uma lista explícita de aceitos e manter, com teste, a recusa de código-fonte, `.env`, chaves e certificados.

## Modelo do módulo
`enxuto`: uma lista de tipos e uma verificação, ambas na casa das regras de exclusão (`skills/drive-hub`).

## Decisões do projeto aplicadas
ADR-0002 (sem código no Drive, lista de permissão): a feature a amplia com documentos e planilhas, o que exige ajuste na ADR-0002 (`GOV-01`). ADR-0001 (sem runtime): ver "Dependência de decisão". Módulo `skills/drive-hub` (dono das regras). Fluxos Sincronizar e Descer.

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Regra de exclusão e lista de tipos | `skills/drive-hub/SKILL.md`, regra 1 e seção Descer | lista por categoria, sem MIME e sem teste | estender | Casa única das regras (`DUP-01`); comandos só referenciam |
| Descrição pública dos tipos aceitos | `README.md` (tabela "Por que usar") | "textos, imagens e vídeos" | estender | Só no PR de implementação; nesta spec o README não muda |
| Comandos que citam a regra | `commands/drive-sync.md`, `commands/drive-pull.md` | referenciam a skill | reusar | Nenhuma cópia da lista |
| Harness de testes | nenhum | n/a | criar (se for a primeira feature implementada) | Reusado por #8, #5, #6 e #9 |

## Dependências novas
Nenhuma prevista (`SEG-07`); qualquer uma entra na decisão do Gate.

## Rules e IDs da Constituição Aplicáveis
`SEG-01`, `SEG-02`, `SEG-04`, `TST-01`, `TST-03`, `DUP-01`, `DUP-04`, `GOV-01`. Rules: `.agents/rules/sdd-seguranca.md`, `.agents/rules/sdd-codigo-e-testes.md`, `.agents/rules/sdd-reuso-e-duplicacao.md`.

## Critérios de Aceitação Executáveis
1. A lista de aceitos existe em um único lugar, por extensão e por tipo MIME, cobrindo texto/Markdown, HTML, Mermaid, imagem, vídeo, PDF, documento e planilha; `grep` da lista fora da skill retorna vazio.
2. Teste automatizado aceita um arquivo de cada tipo da lista e retorna 0.
3. Teste recusa código-fonte (`.go`, `.js`, `.ts`, `.py`, `.java`), `.env`, chaves privadas e certificados (`.pem`, `.key`, `.p12`) e retorna a lista de recusados.
4. Extensão enganosa é recusada: arquivo `.pdf` ou `.png` cujo conteúdo é código ou segredo falha pela verificação do tipo real.
5. Caminho com `..` ou absoluto é recusado, com mensagem clara.
6. O teste roda sem tocar o Drive real (pasta temporária) e é determinístico (`TST-04`).
7. Nenhum exemplo do repositório contém nome de pessoa, empresa, caminho pessoal ou segredo.

## Riscos
- Planilha e documento podem conter macros ou dados sensíveis: decidir se macros (`.xlsm`, `.docm`) ficam fora da lista.
- Verificar o tipo real pode exigir ferramenta externa (dependência, `SEG-07`).
- Ampliar a lista contraria o texto atual da ADR-0002: precisa de ajuste registrado.

## Em aberto para o Gate
Lista final de extensões e MIME; macros dentro ou fora; forma do ajuste da ADR-0002.

## Dependência de decisão (comum às cinco features)
O `SKILL.md` e a ADR-0001 definem um plugin sem runtime, onde o agente segue instruções em Markdown. Esta feature pede comportamento verificável por teste automatizado (`TST-01`), o que hoje é divergência registrada na Constitution. Antes de implementar, o Gate decide como a lógica determinística vive no repositório (ADR nova ou ajuste da ADR-0001, `GOV-01`). A spec não escolhe a tecnologia; os critérios abaixo valem para qualquer escolha que respeite `ARQ-04` (dependências mínimas).

## Visão geral e ordem sugerida
Ordem sugerida: #7, #8, #5, #6, #9. Cada branch sai de `origin/main`; a ordem só indica a sequência de implementação e merge.
Mapa: #7 e #8 são independentes; #5 e #8 são base de #6; #5, #8 e #6 são base de #9.
