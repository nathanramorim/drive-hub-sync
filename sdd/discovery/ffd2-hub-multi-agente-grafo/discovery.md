# Discovery ffd2: hub no Drive com sync nos dois sentidos, em grafo, para qualquer IA

## Clarify (respostas)
- O Drive **continua sendo o centro**: a documentação do projeto sobe para lá e vira um "cérebro" que qualquer interface de IA consegue usar.
- O NotebookLM está **fora**: o Claude não tem suporte e não vamos depender dele.
- O leitor sugerido passa a ser o **Obsidian** (gratuito, abre a pasta do hub como vault, com visão de grafo). Qualquer outra IA que leia a pasta também serve.
- O plugin ganha **subir e descer** num só: subir já existe; descer é novo.
- Agentes-alvo: **Claude Code, Codex e agy**. O formato de plugin e a skill como fonte única continuam.

Premissas a confirmar:
1. "Grafo" = documentos ligados por links relativos em Markdown, mais um índice de relações.
2. O transporte é o Google Drive for Desktop, que espelha o hub numa pasta local.
3. Descer sempre pede confirmação e só grava em arquivos de documentação mapeados.

## Problema
1. Os documentos do hub **não se referenciam**: uma IA ou o Obsidian vê arquivos soltos, sem relações.
2. O hub é **só de escrita**. Quem edita no Obsidian ou no Drive não consegue trazer a mudança de volta ao projeto.
3. Não há adaptador para o **Codex**.

## Para quem
Quem usa Claude Code, Codex ou agy e quer o mesmo contexto do projeto em qualquer um deles, navegável no Obsidian, sem pagar nada além do que já usa.

## Jornada
1. Em qualquer dos três agentes, o usuário configura e **sobe** a documentação; o hub sai com links e índice de relações.
2. Abre a pasta do hub no Obsidian e navega pelo grafo, ou pergunta a outra IA que leia o Drive.
3. Edita um documento no hub. No projeto, roda o comando de **descer**; o plugin mostra as diferenças e, após o "sim", atualiza só os documentos de origem.
4. Se o documento mudou dos dois lados, o plugin pergunta o que manter. Nunca sobrescreve em silêncio.

## Regras de negócio
- A skill é a fonte única das regras (ADR-0001, `DUP-10`); cada agente ganha só um adaptador fino.
- Subir e descer sempre mostram o plano e esperam confirmação.
- **Descer** grava só nas origens mapeadas em `.drive-hub.json` e só em Markdown, HTML, Mermaid, imagens, vídeo e PDF. Código-fonte e arquivos fora dos mapeamentos nunca são tocados, e a escrita não sai da raiz do projeto.
- O estado da última sincronização (hashes por arquivo) fica em arquivo local, fora do git, sem dados pessoais.
- O grafo usa só Markdown com links relativos, sem formato proprietário.
- Arquivos de ferramenta de leitura (como `.obsidian/`) não são enviados nem trazidos de volta.

## Escopo
**Dentro:**
- Comando e procedimento de **descer** (hub → projeto), com diff, confirmação e tratamento de conflito.
- Estado da última sincronização para detectar mudança nos dois lados.
- Links relativos e índice de relações nos templates e na skill.
- Adaptador do Codex (a verificar como ele carrega skills ou instruções).
- Guia curto de uso com Obsidian e instalação nos três agentes.
- ADR nova, que ajusta ADR-0002 e ADR-0003.

**Fora:** integração com NotebookLM; MCP ou servidor próprio; busca semântica e embeddings; criar documentos novos no projeto a partir de arquivos que só existem no hub (fica para depois); mesclagem automática de texto.

## Riscos
| Risco | Mitigação |
|-------|-----------|
| Descer sobrescreve trabalho do projeto | Diff, confirmação e política de conflito: perguntar, nunca sobrescrever |
| Escrita de volta alcança arquivo indevido | Lista de permissão pelos mapeamentos e por extensão; validar o caminho final dentro do projeto (`SEG-02`) |
| Hub contém algo que não deveria voltar (por exemplo, código colado) | Mesma lista de exclusão da skill aplicada na volta |
| Drive for Desktop com arquivos "só online" ou atrasos de sincronização | Avisar quando o arquivo não estiver disponível localmente |
| Pasta `.obsidian/` no hub | Ignorar na subida e na descida; documentar |
| Estado de sincronização corrompido ou apagado | Sem estado, tratar tudo como conflito e perguntar |
| Codex carrega skills de forma diferente | Verificar a doc oficial antes de desenhar (`SEG-07`) |
| Links quebram quando o usuário move arquivos | Links relativos dentro do hub e checagem na subida |
