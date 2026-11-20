# feat-3da3-01: Modo não interativo, com plano e aplicar a partir de um manifesto

**Iniciativa:** `3da3-modo-nao-interativo-plano-aplicar` · **Refs #6** · **Depende de:** layout configurável (#5) e conferência por sha256 (#8) · **Bloqueia:** #9 (recibo e limpeza)

## Problema
O plugin mostra o plano e espera um "sim" a cada uso, o que impede automação (uma fila de entregas geradas por agentes, por exemplo). São necessários dois passos separados e scriptáveis: `plano` (lê um manifesto e mostra o que iria para onde, sem gravar) e `aplicar` (executa o plano já aprovado). O manifesto lista caminho, tipo, sha256 e tamanho de cada arquivo. A confirmação humana continua sendo o padrão no uso interativo.

## Modelo do módulo
`completo`: contrato novo e público (manifesto, dois comandos, saída em texto e `--json`) que cruza configuração, gravação e conferência.

## Decisões do projeto aplicadas
ADR-0002: a confirmação humana segue como padrão; o plano aprovado é o equivalente da confirmação e a aprovação da fila é um ato humano ou de política explícita, nunca implícito (`ARQ-05`: `plano` não grava). ADR-0003 (configuração fora do git). ADR-0001: ver "Dependência de decisão". Fluxo Sincronizar.

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Plano mostrado antes de gravar | `SKILL.md`, regra 2 e procedimento Sincronizar | resumo e espera do "sim" | estender | `plano` formaliza o resumo; `aplicar` formaliza a gravação |
| Destino por padrão configurável | #5 | a implementar | reusar | `plano` resolve destinos pelo padrão de #5 |
| Conferência e sufixo | #8 | a implementar | reusar | `aplicar` usa a gravação segura de #8 |
| Lista de tipos aceitos | #7 e `SKILL.md` regra 1 | a implementar e texto atual | reusar | `plano` marca recusados pela lista única |
| Comandos de entrada | `commands/` | três comandos finos | estender | Entrada nova só referencia a skill (`DUP-01`) |
| Dry-run | `sdd/memory/constitution.md`, divergência ARQ-05 | plano confirmado como simulação | estender | `plano` passa a ser a simulação real |

## Dependências novas
Nenhuma prevista (`SEG-07`); leitura de JSON pode exigir ferramenta, a decidir.

## Rules e IDs da Constituição Aplicáveis
`ARQ-05`, `ARQ-06`, `SEG-01`, `SEG-02`, `SEG-05`, `TST-01`, `TST-03`, `TST-04`, `DUP-01`. Rules: `.agents/rules/sdd-arquitetura.md`, `.agents/rules/sdd-seguranca.md`, `.agents/rules/sdd-codigo-e-testes.md`.

## Critérios de Aceitação Executáveis
1. `plano` com um manifesto válido lista cada arquivo e o destino e não grava nada: teste compara a árvore do destino antes e depois.
2. `aplicar` executa só o plano aprovado, com saída em texto curto e em `--json` (JSON válido, `python3 -m json.tool` retorna 0).
3. Com o Drive para computador inacessível (pasta de destino inexistente ou sem permissão no teste), `aplicar` falha com mensagem clara, código diferente de 0 e nada da origem é apagado.
4. Manifesto malformado, com caminho `..` ou absoluto, ou com tipo recusado, falha na validação de `plano` e nada é gravado.
5. Sha256 e tamanho do manifesto divergentes do arquivo real fazem `plano` falhar para aquele item.
6. No uso interativo (sem manifesto), a confirmação humana continua sendo exigida; teste ou roteiro documentado confirma.
7. Testes em pasta temporária, sem Drive real, sem nome de pessoa, empresa ou caminho pessoal.

## Riscos
- Automação sem humano amplia o risco de vazamento: a recusa de código e segredo e o limite de `hubPath` valem igual e sem desvio por flag.
- Manifesto gerado por agente é entrada não confiável (`SEG-01`).
- Ordem de implementação: sem #5 e #8 o escopo se duplica.

## Em aberto para o Gate
Formato do manifesto (campos e versão); quem pode aprovar um plano sem humano (política explícita); nomes finais dos comandos; saída de erro em `--json`.

## Dependência de decisão (comum às cinco features)
O `SKILL.md` e a ADR-0001 definem um plugin sem runtime, onde o agente segue instruções em Markdown. Esta feature pede comportamento verificável por teste automatizado (`TST-01`), o que hoje é divergência registrada na Constitution. Antes de implementar, o Gate decide como a lógica determinística vive no repositório (ADR nova ou ajuste da ADR-0001, `GOV-01`). A spec não escolhe a tecnologia; os critérios abaixo valem para qualquer escolha que respeite `ARQ-04` (dependências mínimas).

## Visão geral e ordem sugerida
Ordem sugerida: #7, #8, #5, #6, #9. Cada branch sai de `origin/main`; a ordem só indica a sequência de implementação e merge.
Mapa: #7 e #8 são independentes; #5 e #8 são base de #6; #5, #8 e #6 são base de #9.
