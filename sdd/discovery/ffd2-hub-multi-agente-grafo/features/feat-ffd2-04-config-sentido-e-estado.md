# feat-ffd2-04: `.drive-hub.json` com sentido por mapeamento e estado fora do git

**Iniciativa:** `ffd2-hub-multi-agente-grafo` · **Depende de:** feat-ffd2-02

## Modelo do módulo
enxuto: formato de configuração e `.gitignore`.

## Decisões do projeto aplicadas
ADR-0003 (config fora do git, ajustada pela ADR-0004).

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Formato de config | `SKILL.md`, `.drive-hub.json` | `hubPath`, `mappings` | estender | Campo opcional de sentido por mapeamento, compatível com o atual |
| Mapeamentos SDD | `templates/mappings.sdd.json` | release, arquitetura, marketing | estender | Declarar quais aceitam descer |
| Ignorados do git | `.gitignore` | `.drive-hub.json` | estender | Arquivo de estado da sincronização |

## Dependências novas
Nenhuma.

## Rules e IDs da Constituição Aplicáveis
`ARQ-06`, `DUP-04`, `SEG-04`, `SEG-05`. Rules: `.agents/rules/sdd-arquitetura.md`, `.agents/rules/sdd-seguranca.md`.

## Critérios de Aceitação Executáveis
1. `templates/mappings.sdd.json` é JSON válido: `python3 -m json.tool` retorna 0.
2. Config antiga sem o campo de sentido continua válida e vale como "só subir" (documentado na skill).
3. `.gitignore` lista o arquivo de estado: `git check-ignore` retorna 0.
4. Nenhum arquivo versionado contém caminho pessoal.
