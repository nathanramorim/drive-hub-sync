# Overview — drive-hub-sync

Plugin do Claude Code e skill do agy que criam, para cada projeto, uma pasta padronizada no Google Drive e a atualizam sob demanda com documentação executiva (releases, arquitetura, marketing). Nunca copiam código. Toda gravação passa por confirmação do usuário.

## Índice
- `stack.md` — tecnologias
- `modules.md` — componentes
- `flows.md` — fluxos principais
- `decisions.md` — decisões de design e ADRs
- `concepts.md` — conceitos e donos

---

## Arquitetura (C4 Model)

### Nível 1: Contexto
```mermaid
graph TB
  User((Usuário)) -->|/drive-setup, /drive-sync| Plugin[drive-hub-sync]
  Plugin -->|lê docs| Repo[Projeto do usuário]
  Plugin -->|grava arquivos| Drive[Google Drive for Desktop]
  Drive --> Cloud[(Google Drive na nuvem)]
```

### Nível 2: Containers
```mermaid
graph LR
  Cmd[commands: drive-setup, drive-sync] --> Skill[skills/drive-hub]
  Skill --> Tpl[templates/hub e mappings]
  Skill --> Cfg[.drive-hub.json do usuário]
  Skill --> Hub[(hubPath no Drive)]
```
