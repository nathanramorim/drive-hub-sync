# feat-ffd2-03: templates com links relativos e índice de relações

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** feat-ffd2-01

## Modelo do módulo
enxuto: só templates Markdown e um script de shell de checagem.

## Decisões do projeto aplicadas
ADR-0001 e ADR-0004 (padrão de grafo).

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Esqueleto do hub | `templates/hub/` | 00 a 04, sem links entre docs | estender | Seção `Relacionados` e índice |
| Script de checagem | todo o repo | nada | criar | Um único script de shell, sem dependências |

## Dependências novas
Nenhuma (script em shell POSIX).

## Rules e IDs da Constituição Aplicáveis
`DUP-04`, `ARQ-03`, `ARQ-04`, `TST-02`. Rule: `.agents/rules/sdd-arquitetura.md`.

## Critérios de Aceitação Executáveis
1. Todo `.md` de `templates/hub/` (exceto `.gitkeep`) tem a seção `Relacionados`: `grep -L '^## Relacionados' <arquivos>` não lista nenhum.
2. O script de checagem resolve cada link relativo dos templates e retorna 0 sem links quebrados; retorna diferente de 0 num link quebrado de teste.
3. O índice de relações lista todos os `.md` do esqueleto: contagem de arquivos igual à de entradas.
4. Nenhum template contém caminho pessoal: `grep -rn 'CloudStorage/GoogleDrive-' templates` sem ocorrências.
