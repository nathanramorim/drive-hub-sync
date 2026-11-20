# feat-6ba7-01: Layout de pastas configurável (padrão por empresa), além do modelo fixo de 5 pastas

**Iniciativa:** `6ba7-layout-configuravel` · **Refs #5** · **Depende de:** nenhuma feature · **Bloqueia:** #6 e #9 (usam o destino resolvido); ordem sugerida: antes de #6

## Problema
O plugin cria um layout fixo por projeto (`00-` a `04-`). Uma empresa que organiza o Drive por cliente e departamento (ex.: `02 - Clientes/<cliente>/delivery/<departamento>/<pasta>/files`) não consegue usar. Falta um padrão de destino configurável, com variáveis `{cliente}`, `{departamento}` e `{pasta}`, definido por quem instala, com o layout atual como padrão de fábrica.

## Modelo do módulo
`enxuto`: novo campo opcional na configuração e regra de resolução do destino, na casa da configuração (`skills/drive-hub`).

## Decisões do projeto aplicadas
ADR-0003 (configuração por usuário fora do git): o padrão vive em `.drive-hub.json`, nunca fixo no código. ADR-0002 (escrita só dentro de `hubPath`, sem seguir links simbólicos). ADR-0001: ver "Dependência de decisão". Fluxos Configurar e Sincronizar.

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Formato da configuração | `skills/drive-hub/SKILL.md`, `.drive-hub.json` | `hubPath`, `mappings`, `sentido` | estender | Campo opcional para o padrão; sem campo, vale o modelo atual (compatibilidade) |
| Estrutura padrão 00 a 04 | `SKILL.md` e `templates/hub/` | modelo fixo | reusar | Vira o padrão de fábrica |
| Mapeamentos prontos | `templates/mappings.sdd.json` | destinos no modelo fixo | reusar | Continuam válidos sem configuração |
| Validação de caminho | `SKILL.md`, regra 6 | destino resolvido dentro de `hubPath` | estender | Acrescenta recusa de `..` e de caminho absoluto em cada segmento |
| Pergunta de configuração | `commands/drive-setup.md` | pergunta destino e projeto | estender | Pergunta opcional do padrão; só no PR de implementação |

## Dependências novas
Nenhuma prevista (`SEG-07`).

## Rules e IDs da Constituição Aplicáveis
`ARQ-06`, `SEG-01`, `SEG-02`, `DUP-01`, `DUP-04`, `TST-01`, `TST-03`. Rules: `.agents/rules/sdd-arquitetura.md`, `.agents/rules/sdd-seguranca.md`, `.agents/rules/sdd-reuso-e-duplicacao.md`.

## Critérios de Aceitação Executáveis
1. Com padrão configurado, o destino é resolvido a partir dele: teste com `{cliente}`, `{departamento}` e `{pasta}` gera o caminho esperado em pasta temporária.
2. Nenhum padrão aparece fixo no código ou na skill além do padrão de fábrica documentado; `grep` confirma.
3. Pastas ausentes do destino são criadas dentro de `hubPath`.
4. Valor de variável ou segmento com `..` ou caminho absoluto é recusado com mensagem clara e nada é gravado.
5. Sem o campo de padrão, o modelo `00-` a `04-` continua funcionando; `scripts/check-hub-links.sh` retorna 0.
6. Variável desconhecida no padrão (ex.: `{xyz}`) é recusada.
7. Nenhum exemplo contém nome de pessoa, empresa, caminho pessoal ou segredo; `.drive-hub.json` segue no `.gitignore`.

## Riscos
- Variáveis com caracteres especiais (barra, ponto inicial, unicode) quebram o caminho: definir saneamento.
- Interação com `mappings`: o padrão decide a raiz, os mapeamentos decidem o resto; evitar dois donos do destino.

## Em aberto para o Gate
Nome do campo e sintaxe do padrão; origem dos valores das variáveis (perguntados, configurados ou do manifesto de #6); saneamento permitido.

## Dependência de decisão (comum às cinco features)
O `SKILL.md` e a ADR-0001 definem um plugin sem runtime, onde o agente segue instruções em Markdown. Esta feature pede comportamento verificável por teste automatizado (`TST-01`), o que hoje é divergência registrada na Constitution. Antes de implementar, o Gate decide como a lógica determinística vive no repositório (ADR nova ou ajuste da ADR-0001, `GOV-01`). A spec não escolhe a tecnologia; os critérios abaixo valem para qualquer escolha que respeite `ARQ-04` (dependências mínimas).

## Visão geral e ordem sugerida
Ordem sugerida: #7, #8, #5, #6, #9. Cada branch sai de `origin/main`; a ordem só indica a sequência de implementação e merge.
Mapa: #7 e #8 são independentes; #5 e #8 são base de #6; #5, #8 e #6 são base de #9.
