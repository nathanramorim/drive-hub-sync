# feat-ee95-01: Idempotência e conferência por sha256, sem sobrescrever e com sufixo para arquivo diferente

**Iniciativa:** `ee95-idempotencia-sha256-sufixo` · **Refs #8** · **Depende de:** nenhuma feature (independente) · **Bloqueia:** #6 (modo não interativo) e #9 (recibo e limpeza)

## Problema
Reenviar uma entrega não deve duplicar nem sobrescrever em silêncio. Hoje a skill grava após o "sim" sem comparar conteúdo nem conferir o que foi gravado.

## Modelo do módulo
`enxuto`: regra de gravação segura e sua verificação, na casa das regras (`skills/drive-hub`).

## Decisões do projeto aplicadas
ADR-0002 (confirmação antes de gravar, escrita só dentro de `hubPath`). ADR-0004 (conflito sempre pergunta, estado em `.drive-hub-state.json`): esta feature reaproveita o hash do estado quando existir. ADR-0001: ver "Dependência de decisão". Fluxos Sincronizar e Descer.

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Hash por arquivo | `skills/drive-hub/SKILL.md` (estado da sincronização) | `.drive-hub-state.json` guarda hash da última versão | reusar | O sha256 de comparação usa a mesma noção de hash do estado (`DUP-04`) |
| Conflito na descida | `SKILL.md`, seção Descer | pergunta o lado e nunca sobrescreve em silêncio | estender | Subida ganha regra análoga: igual pula, diferente ganha sufixo |
| Gravação na subida | `SKILL.md`, procedimento Sincronizar, passo 4 | "Grave, aplicando as regras" sem conferência | estender | Acrescenta comparação antes e conferência depois |
| Harness de testes | nenhum | n/a | criar ou reusar | Ver #7 |

## Dependências novas
Nenhuma prevista (`SEG-07`); cálculo de sha256 vem de ferramenta já presente no sistema, a confirmar pelo Gate.

## Rules e IDs da Constituição Aplicáveis
`SEG-01`, `SEG-02`, `SEG-05`, `ARQ-05`, `TST-01`, `TST-03`, `TST-04`, `DUP-04`. Rules: `.agents/rules/sdd-seguranca.md`, `.agents/rules/sdd-arquitetura.md`, `.agents/rules/sdd-codigo-e-testes.md`.

## Critérios de Aceitação Executáveis
1. Reenviar o mesmo arquivo (mesmo sha256 no destino) não cria cópia nem altera o destino: teste compara hash e lista de arquivos antes e depois.
2. Arquivo diferente com o mesmo nome é gravado como `<nome>-<sha8>.<ext>` (8 primeiros caracteres do sha256 do novo conteúdo), o original no destino permanece intacto e o resultado traz um aviso.
3. Depois de gravar, tamanho e sha256 do arquivo gravado são conferidos contra a origem.
4. Divergência na conferência devolve erro com código diferente de 0 e a origem permanece intacta.
5. Se o sufixo já existir com o mesmo conteúdo, o arquivo é pulado (idempotência do segundo envio).
6. Testes em pasta temporária, sem Drive real, determinísticos.
7. Saídas e logs não expõem conteúdo de arquivos nem caminho pessoal (`SEG-05`).

## Riscos
- Conflito de nomes entre o sufixo `-<sha8>` e arquivos já existentes com esse padrão.
- Arquivo grande: custo do hash; decidir limite ou leitura em fluxo contínuo.
- O Drive para computador pode ainda estar sincronizando: a conferência vale para o arquivo local gravado.

## Em aberto para o Gate
Forma do hash (ferramenta do sistema ou outra); política para sufixo repetido; relação com o estado da descida.

## Dependência de decisão (comum às cinco features)
O `SKILL.md` e a ADR-0001 definem um plugin sem runtime, onde o agente segue instruções em Markdown. Esta feature pede comportamento verificável por teste automatizado (`TST-01`), o que hoje é divergência registrada na Constitution. Antes de implementar, o Gate decide como a lógica determinística vive no repositório (ADR nova ou ajuste da ADR-0001, `GOV-01`). A spec não escolhe a tecnologia; os critérios abaixo valem para qualquer escolha que respeite `ARQ-04` (dependências mínimas).

## Visão geral e ordem sugerida
Ordem sugerida: #7, #8, #5, #6, #9. Cada branch sai de `origin/main`; a ordem só indica a sequência de implementação e merge.
Mapa: #7 e #8 são independentes; #5 e #8 são base de #6; #5, #8 e #6 são base de #9.
