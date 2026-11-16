# Discovery ffd2: integrar o hub com o Claude, sem custo

## Clarify (respostas)
O usuário mandou criar sem responder às 4 perguntas. Seguem como **premissas**, a confirmar em `status.md`:
- "Integrar com o Claude" = o Claude **consultar** o conteúdo do hub (leitura), no lugar do NotebookLM.
- "Free" = uso pessoal no plano gratuito ou open source, sem assinatura paga.
- O Drive continua sendo a fonte da verdade; o hub não muda.
- Quem consulta: o próprio usuário.

## Problema
O hub no Drive foi pensado para o NotebookLM ler como fonte. O plugin só **grava** no Drive; nada permite ao Claude **ler** o hub como base de conhecimento. O usuário quer um caminho equivalente ao NotebookLM que funcione com o Claude e não custe nada.

## Para quem
Quem instala o plugin e quer perguntar ao Claude sobre a documentação do próprio projeto.

## Jornada
1. Usuário roda `/drive-sync` e o hub é atualizado.
2. Usuário roda um passo novo de "conectar ao Claude" (nome a definir).
3. O Claude responde perguntas usando os documentos do hub, citando o arquivo de origem.

## Regras de negócio
- O Claude só lê o hub; nunca grava nele por esse caminho.
- Só o conteúdo já permitido (ADR-0002) fica visível ao Claude.
- Nenhuma credencial entra no repositório (ADR-0003, `SEG-04`).

## Opções a avaliar (não verificadas; conferir versão e plano gratuito antes de decidir)
| Opção | Ideia | Pontos a checar |
|-------|-------|-----------------|
| A. Projetos do Claude | Subir os arquivos do hub como conhecimento do projeto | Limites do plano gratuito; upload manual ou automático |
| B. MCP de arquivos | Servidor MCP lendo a pasta local do Drive for Desktop | Custo zero, sem upload; só funciona onde há MCP |
| C. Vault Obsidian + MCP | Pasta Markdown navegável, com MCP de leitura | Exige instalar Obsidian |
| D. Alternativa open source ao NotebookLM | Por exemplo Open Notebook | Uso de modelos próprios ou chave de API paga |

Hipótese de trabalho: **B**, por ser local, sem custo e sem dependência nova no plugin. Conferir com context7 antes de fixar.

## Escopo
**Dentro:** comparar as opções; escolher uma; documentar como conectar; ajustar skill e comando para o passo de conexão; atualizar README e site.
**Fora:** substituir o Drive; escrever servidor próprio; indexação, embeddings ou busca semântica; suporte a NotebookLM por API.

## Riscos
| Risco | Mitigação |
|-------|-----------|
| Plano gratuito muda ou tem limite baixo | Registrar o limite na ADR; preferir opção local |
| MCP de terceiros lê além do hub | Apontar o MCP só para `hubPath` (`SEG-02`) |
| Dependência nova no plugin | Só documentar a configuração; sem runtime novo (`ARQ-04`) |
| Premissas erradas | Confirmar em `status.md` antes do `/split-features` |
