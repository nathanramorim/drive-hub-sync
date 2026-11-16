# Stack — drive-hub-sync

Plugin sem código executável: instruções em Markdown e configuração em JSON, rodadas pelo agente do usuário.

## Dependências

| Camada | Escolha | Versão | Motivo |
|--------|---------|--------|--------|
| Runtime | Agente: Claude Code (plugin) ou agy/Antigravity (skill) | versão do usuário | Quem executa as instruções (ADR-0001) |
| Formato | Markdown + JSON + SVG/HTML estático | — | Sem build, sem dependências de runtime (`ARQ-04`) |
| Armazenamento | Pasta do Google Drive for Desktop | — | O Drive sincroniza; o plugin só grava arquivos locais (ADR-0002) |
| DB | none | — | Estado só em arquivos |
| Testes | Conferência manual do roteiro setup/sync | — | Sem runtime para suíte automatizada (divergência `TST-01`) |
| Build | nenhum | — | Versão em `.claude-plugin/plugin.json` e tag git |

## Layout do projeto
```
.claude-plugin/   plugin.json e marketplace.json (distribuição Claude Code)
commands/         /drive-setup e /drive-sync (adaptadores finos)
skills/drive-hub/ SKILL.md: regras e procedimentos (fonte única, também para agy)
templates/        esqueleto do hub (templates/hub/) e mappings.sdd.json
site/             página de apresentação estática
docs/             banner.svg e ilustração
sdd/              metodologia Forge-SDD (spec, memória, discovery, releases)
```
