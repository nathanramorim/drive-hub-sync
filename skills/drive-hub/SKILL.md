---
name: drive-hub
description: Use ao configurar ou sincronizar o hub de documentação de um projeto no Google Drive (release, arquitetura/ADR, landing page, marketing). Aplica regras de exclusão de código-fonte.
---

# Hub de documentação no Google Drive

O hub é uma pasta no Drive sincronizada pelo Google Drive for Desktop. Ela guarda só documentação executiva do projeto, nunca código.

## Estrutura padrão (`<destino>/<projeto>/`)
- `00-LEIA-ME-INDICE-GERAL.md`: índice do hub.
- `01-Documentacao-Base-IA/Contexto-Mestre-para-IA.md`: contexto do projeto para IAs.
- `02-Arquitetura-e-Diagramas/`: arquitetura, ADRs e diagramas Mermaid.
- `03-Releases-e-Roadmap/Historico-de-Atualizacoes-e-Roadmap.md`: destaques de releases em linguagem de produto e estado do roadmap.
- `04-Marketing-e-Landing-Page/`: copy, `assets/` e `roteiros-e-posts/`.

## Configuração: `.drive-hub.json` (raiz do projeto, fora do git)
```json
{
  "hubPath": "/caminho/absoluto/para/Drive/Projetos/meu-projeto",
  "mappings": [
    { "gatilho": "release", "origem": ["CHANGELOG.md"], "destino": ["03-Releases-e-Roadmap/Historico-de-Atualizacoes-e-Roadmap.md"] },
    { "gatilho": "arquitetura", "origem": ["docs/adr/**"], "destino": ["01-Documentacao-Base-IA/Contexto-Mestre-para-IA.md", "02-Arquitetura-e-Diagramas/"] },
    { "gatilho": "marketing", "origem": ["site/**"], "destino": ["04-Marketing-e-Landing-Page/"] }
  ]
}
```
Caminhos de `origem` são relativos ao projeto; `destino`, relativos ao `hubPath`.

## Regras
1. **Sem código-fonte no Drive.** Nunca copie `.go`, `.js`, `.ts`, `.py`, `.java` etc., `node_modules`, `vendor`, binários, builds, `.env`, chaves, tokens ou credenciais. Aceite só Markdown, HTML, Mermaid, imagens, vídeo e PDF.
2. **Confirmação antes de gravar:** mostre os arquivos de destino e o resumo, e espere o "sim".
3. **Release ou fechamento de iniciativa:** atualize o arquivo de releases com destaques em linguagem de produto e o estado do roadmap.
4. **Mudança de arquitetura, comandos ou ADRs:** atualize o contexto mestre e o documento de arquitetura.
5. **Landing page ou peças de divulgação:** sincronize copy, ativos e roteiros/posts.
6. **Escreva só dentro de `hubPath`.** Valide que o caminho final resolve para dentro dele e não siga links simbólicos para fora.
7. **Não exponha dados pessoais** (e-mail, caminho de conta) em arquivos que irão ao git.

## Procedimentos (para agentes sem comandos de barra, como o agy)
**Configurar** (quando pedirem "configure o hub do Drive"):
1. Detecte `~/Library/CloudStorage/GoogleDrive-*/` (macOS) ou pergunte o caminho. Com mais de uma conta, pergunte qual.
2. Pergunte, uma por vez: pasta de destino no Drive, nome do projeto (padrão: nome da pasta do repositório) e pastas de origem. Se existir `sdd/`, sugira `templates/mappings.sdd.json`.
3. Mostre os caminhos finais e as pastas a criar; aguarde confirmação.
4. Crie o esqueleto a partir de `templates/hub/` (trocando `{{PROJETO}}`), grave `.drive-hub.json` e sugira colocá-lo no `.gitignore`.

**Sincronizar** (quando pedirem "sincronize com o Drive"):
1. Leia `.drive-hub.json`; se faltar, faça a configuração antes.
2. Escolha os mapeamentos pedidos (release, arquitetura, marketing ou todos); sem indicação, os afetados pelas mudanças recentes no git.
3. Resuma o que será gravado e peça confirmação.
4. Grave, aplicando as regras acima, atualize o índice 00 se surgirem arquivos novos e liste o que mudou.
