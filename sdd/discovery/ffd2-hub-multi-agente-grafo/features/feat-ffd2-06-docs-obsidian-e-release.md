# feat-ffd2-06: README, guia de Obsidian, site e release

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** feat-ffd2-04

## Modelo do módulo
enxuto: documentação e metadados.

## Decisões do projeto aplicadas
ADR-0004; Regra 12 (release notes com destaques reais).

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Instalação e uso | `README.md`, `site/index.html` | Claude Code e agy | estender | Tabela com os três agentes e guia de Obsidian |
| Release notes | `sdd/releases/history.md` | vazio | estender | Destaques reais |
| Versão | `.claude-plugin/plugin.json` | 0.1.2 | estender | Nova versão minor |

## Dependências novas
Nenhuma.

## Rules e IDs da Constituição Aplicáveis
`FLX-07`, `COD-05` (pt-BR), `SEG-05`. Rule: `.agents/rules/sdd-fluxo-e-portao.md`.

## Critérios de Aceitação Executáveis
1. O README tem a instalação nos três agentes e o guia de Obsidian: `grep -c 'Codex' README.md` e `grep -c 'Obsidian' README.md` retornam 1 ou mais.
2. `plugin.json` tem versão maior que 0.1.2, igual à do README e do site.
3. `sdd/releases/history.md` tem a entrada da versão com destaques.
4. Sem caminho pessoal nos arquivos alterados.
