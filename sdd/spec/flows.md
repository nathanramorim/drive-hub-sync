# Fluxos — drive-hub-sync

## Configurar (`/drive-setup`)
```
detecta ~/Library/CloudStorage/GoogleDrive-*  (ou pergunta o caminho)
  ↓
pergunta destino, nome do projeto e origens (uma por vez)
  ↓
mostra caminhos finais e pastas a criar  →  aguarda "sim"
  ↓
cria esqueleto de templates/hub/ + grava .drive-hub.json + sugere .gitignore
```

## Sincronizar (`/drive-sync`)
```
lê .drive-hub.json (ausente → manda rodar /drive-setup)
  ↓
escolhe mapeamentos (argumento, ou os afetados pelo git recente)
  ↓
resume o que será gravado  →  aguarda "sim"
  ↓
filtra: recusa código, segredos e binários
  ↓
grava só dentro de hubPath, atualiza o índice 00 e lista o que mudou
```
