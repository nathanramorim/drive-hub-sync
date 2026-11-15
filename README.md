<p align="center">
  <img src="docs/banner.svg" alt="drive-hub-sync: seus projetos organizados no Google Drive" width="100%">
</p>

<p align="center">
  <a href="https://github.com/nathanramorim/drive-hub-sync/releases"><img alt="versão" src="https://img.shields.io/github/v/tag/nathanramorim/drive-hub-sync?label=vers%C3%A3o&color=2563eb"></a>
  <img alt="licença" src="https://img.shields.io/badge/licen%C3%A7a-MIT-16a34a">
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude%20Code-plugin-7c3aed">
  <img alt="agy" src="https://img.shields.io/badge/agy-skill-06b6d4">
  <img alt="sem código" src="https://img.shields.io/badge/c%C3%B3digo%20no%20Drive-nunca-f59e0b">
</p>

<h3 align="center">Seus projetos organizados no Google Drive.<br>Sem copiar uma linha de código.</h3>

---

## O que é

Todo projeto tem documentos: novidades de cada versão, desenhos de como tudo funciona, textos do site, ideias de posts. Com o tempo eles se espalham.

O **drive-hub-sync** cria uma pasta arrumada no seu Google Drive para cada projeto e a mantém atualizada quando você pede. A estrutura é a mesma em todos os projetos.

```
Meu Drive/Projetos/meu-projeto/
├── 00-LEIA-ME-INDICE-GERAL.md
├── 01-Documentacao-Base-IA/
├── 02-Arquitetura-e-Diagramas/
├── 03-Releases-e-Roadmap/
└── 04-Marketing-e-Landing-Page/
```

## Por que usar

| | |
|---|---|
| 🗂️ **Padrão único** | Todos os projetos com as mesmas pastas, fáceis de achar. |
| 🔒 **Sem código** | Só vão textos, imagens e vídeos. Código, senhas e arquivos secretos são recusados. |
| ✅ **Você aprova** | Ele mostra o que vai gravar e espera o seu "sim". |
| 🧳 **Para qualquer pessoa** | O destino é escolhido por quem instala. Cada um usa o seu Drive. |

## Antes de começar

1. **Google Drive para computador** instalado e com login feito.
2. **Claude Code** ou **agy (Antigravity)**.

## Instalação

### No Claude Code

```
/plugin marketplace add nathanramorim/drive-hub-sync
/plugin install drive-hub-sync@drive-hub-sync
```

### No agy (Antigravity)

```bash
git clone https://github.com/nathanramorim/drive-hub-sync.git
mkdir -p .agents/skills
cp -R drive-hub-sync/skills/drive-hub .agents/skills/
```

> Teste no seu agy: o plugin usa a pasta `.agents/skills/` do projeto. Se o seu agy usar outro local para skills, copie a pasta `drive-hub` para lá.

## Como usar

**1. Configurar (uma vez por projeto)**

| Claude Code | agy |
|---|---|
| `/drive-setup` | "Configure o hub do Drive para este projeto" |

Ele pergunta a pasta de destino (ex.: `Meu Drive/Projetos`), o nome do projeto e de onde ler os documentos. Mostra o plano e espera a confirmação.

**2. Atualizar (quando houver novidade)**

| Claude Code | agy |
|---|---|
| `/drive-sync` | "Sincronize o projeto com o Drive" |

No Claude, escolha uma parte: `/drive-sync release`, `/drive-sync arquitetura` ou `/drive-sync marketing`.

## Segurança

- Nunca copia código-fonte, senhas ou binários.
- Escreve só dentro da pasta do projeto no Drive.
- Sempre pede confirmação antes de gravar.
- Seu caminho pessoal fica em `.drive-hub.json`, que está no `.gitignore`.

## Personalização

Edite `mappings` em `.drive-hub.json` para ligar suas pastas de origem às pastas do hub. Para projetos que usam `sdd/`, há um exemplo em [`templates/mappings.sdd.json`](templates/mappings.sdd.json).

## Página de apresentação

Há uma versão ilustrada, em linguagem simples, em [`site/index.html`](site/index.html).

## Versões

| Versão | Novidades |
|---|---|
| **0.1.0** | Primeira versão: `/drive-setup`, `/drive-sync`, skill `drive-hub`, esqueleto do hub e página de apresentação. |

## Licença

[MIT](LICENSE)
