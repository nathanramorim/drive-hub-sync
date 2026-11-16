# feat-ffd2-07: validação final nos três agentes

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** feat-ffd2-05, feat-ffd2-06

## Modelo do módulo
enxuto: execução de verificações, sem código novo.

## Decisões do projeto aplicadas
Todas as ADRs vigentes (0001 a 0004).

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Critérios da iniciativa | `criteria.md` | 10 critérios | reusar | Esta task só os executa |

## Dependências novas
Nenhuma.

## Rules e IDs da Constituição Aplicáveis
`TST-01`, `TST-05`, `FLX-06`. Rule: `.agents/rules/sdd-codigo-e-testes.md`.

## Critérios de Aceitação Executáveis
1. Critérios 1 a 9 de `criteria.md` verificados por comando e registrados em `status.md`.
2. Teste manual do critério 10 num hub de exemplo, nos 3 agentes, com o mesmo resultado: subir com links, descer só o mapeado, conflito pergunta, `.js` no hub recusado.
3. `forge brief --check` retorna 0 e `forge gate` passa.
