# feat-1fc7-01: Recibo da entrega e limpeza do temporário depois de conferido

**Iniciativa:** `1fc7-recibo-e-limpeza-origem` · **Refs #9** · **Depende de:** conferência por sha256 (#8), layout configurável (#5) e modo aplicar (#6) · **Bloqueia:** nada

## Problema
Quem gera conteúdo em uma pasta temporária não quer ocupar disco de forma permanente: depois de enviado ao Drive, o arquivo deve ficar só lá. É preciso gravar um recibo pequeno e só de texto (nome, caminho no Drive, sha256, tamanho, data) e permitir apagar a origem somente depois da conferência e do recibo. Nada é apagado se o Drive estiver inacessível ou se a conferência divergir. Avisar, no modo "espelhar" do Drive para computador (que mantém cópia local), e recomendar "transmitir".

## Modelo do módulo
`enxuto`: etapa final do fluxo de gravação, reaproveitando conferência e plano de #8 e #6.

## Decisões do projeto aplicadas
ADR-0002 (confirmação e escrita só dentro de `hubPath`): apagar a origem é a única operação destrutiva do plugin e precisa de regra explícita (ajuste ou ADR, `GOV-01`). ADR-0001: ver "Dependência de decisão". Fluxo Sincronizar.

## O que já existe
| Procurei | Onde | Achei | Decisão | Justificativa |
|---|---|---|---|---|
| Conferência de tamanho e sha256 | #8 | a implementar | reusar | A limpeza só começa após a conferência de #8 |
| Aplicar a partir do manifesto | #6 | a implementar | estender | Flag de limpeza e recibo no fim de `aplicar` |
| Destino resolvido | #5 | a implementar | reusar | O caminho do recibo vem do destino resolvido |
| Registro de saída | `SKILL.md`, Sincronizar passo 4 | lista o que mudou | estender | Recibo é o registro estável e só de texto |
| Apagar arquivos | nenhum | o plugin nunca apaga | criar | Operação nova, limitada à origem conferida |

## Dependências novas
Nenhuma prevista (`SEG-07`).

## Rules e IDs da Constituição Aplicáveis
`SEG-01`, `SEG-02`, `SEG-04`, `SEG-05`, `ARQ-05`, `TST-01`, `TST-03`, `TST-04`, `GOV-01`. Rules: `.agents/rules/sdd-seguranca.md`, `.agents/rules/sdd-arquitetura.md`, `.agents/rules/sdd-codigo-e-testes.md`.

## Critérios de Aceitação Executáveis
1. O recibo é texto simples, pequeno e contém nome, caminho no Drive, sha256, tamanho e data; teste confirma os campos e que não há conteúdo do arquivo.
2. A origem só é apagada depois da conferência e do recibo gravado: teste com Drive falso em pasta temporária.
3. Sem recibo, a origem só é apagada com flag explícita, e essa flag fica registrada na saída.
4. Com o Drive inacessível, nada é apagado e o erro é claro (código diferente de 0).
5. Com divergência na conferência, nada é apagado e a origem permanece intacta.
6. Quando o modo "espelhar" for detectado ou não puder ser descartado, a saída avisa que existe cópia local e recomenda "transmitir".
7. A limpeza recusa caminho fora da pasta de origem informada (`..`, absoluto, link simbólico).
8. O recibo não contém segredo nem caminho pessoal além do caminho relativo no Drive.

## Riscos
- Operação destrutiva: um erro de caminho apaga dado do usuário; limitar à origem listada e conferida.
- Detectar o modo "espelhar" pode não ser possível de forma confiável: o aviso deve ser sempre dado.
- Recibo é dado de auditoria e pode revelar nomes de arquivo: tratar como sensível se o repositório for público.

## Em aberto para o Gate
Formato e local do recibo; nome da flag de apagar sem recibo; se o apagar vale para o uso interativo; detecção do modo espelhar.

## Dependência de decisão (comum às cinco features)
O `SKILL.md` e a ADR-0001 definem um plugin sem runtime, onde o agente segue instruções em Markdown. Esta feature pede comportamento verificável por teste automatizado (`TST-01`), o que hoje é divergência registrada na Constitution. Antes de implementar, o Gate decide como a lógica determinística vive no repositório (ADR nova ou ajuste da ADR-0001, `GOV-01`). A spec não escolhe a tecnologia; os critérios abaixo valem para qualquer escolha que respeite `ARQ-04` (dependências mínimas).

## Visão geral e ordem sugerida
Ordem sugerida: #7, #8, #5, #6, #9. Cada branch sai de `origin/main`; a ordem só indica a sequência de implementação e merge.
Mapa: #7 e #8 são independentes; #5 e #8 são base de #6; #5, #8 e #6 são base de #9.
