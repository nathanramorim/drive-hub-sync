# feat-ffd2-02: skill com descer, conflitos e estado da sincronização

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** feat-ffd2-01

## Modelo do módulo
completo: muda onde o plugin escreve (hub → projeto), com risco de perda de dados.

## Decisões do projeto aplicadas
ADR-0001 (skill como fonte única), ADR-0002 (só documentação, confirmação) e ADR-0004.

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Regras e exclusões | `skills/drive-hub/SKILL.md` | seções Regras e Procedimentos | estender | Nova seção Descer, sem copiar a lista de exclusão |
| Lista de exclusão | mesma skill | regra 1 | reusar | Aplicada também na volta |

## Dependências novas
Nenhuma.

## Rules e IDs da Constituição Aplicáveis
`SEG-01` (conteúdo do hub é dado não confiável), `SEG-02`, `SEG-04`, `DUP-10`, `DUP-06`. Rules: `.agents/rules/sdd-seguranca.md`, `.agents/rules/sdd-reuso-e-duplicacao.md`.

## Critérios de Aceitação Executáveis
1. `SKILL.md` tem a seção `Descer`: `grep -c '^## .*Descer\|^### .*Descer' skills/drive-hub/SKILL.md` retorna 1 ou mais.
2. O texto declara escrita só nas origens mapeadas, só em extensões permitidas, dentro da raiz do projeto; cada afirmação é achada por `grep`.
3. O texto declara que conflito sempre pergunta e que sem estado tudo vira conflito.
4. Lista `.obsidian/` como ignorado na subida e na descida.
5. `git diff` não mostra remoções na seção `## Regras` existente.
6. `forge brief --check` retorna 0.
