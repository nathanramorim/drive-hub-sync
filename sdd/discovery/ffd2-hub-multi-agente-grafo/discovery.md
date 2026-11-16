# Discovery ffd2: hub no Drive como cérebro em grafo para qualquer IA

## Clarify (respostas)
- O Drive **continua sendo o centro**: a documentação do projeto é sincronizada lá para virar um "cérebro" que qualquer interface de IA consiga usar.
- Esta iniciativa é **complementar**, não substitui nem redireciona o sync atual.
- Agentes-alvo agora: **Claude Code, Codex e agy**.
- O NotebookLM era só um exemplo de leitor; "free" deixa de ser requisito de produto. O que importa é o hub ser aberto e legível por qualquer leitor.

Premissa a confirmar: "grafo" = documentos ligados entre si por links relativos (e um índice de relações), de modo que uma IA navegue de um documento a outro.

## Problema
1. O hub tem pastas fixas, mas os documentos **não se referenciam**: uma IA vê arquivos soltos, sem relações (ADR ↔ release ↔ módulo ↔ fluxo).
2. O plugin só tem adaptadores para Claude Code (`commands/`) e agy (skill copiada à mão). **Codex não é atendido.**

## Para quem
Quem usa Claude Code, Codex ou agy e quer o mesmo contexto do projeto em qualquer um deles, ou em outra interface de IA que leia o Drive.

## Jornada
1. Em qualquer dos três agentes, o usuário configura e sincroniza com o mesmo resultado.
2. O hub sai com documentos ligados e um índice de relações.
3. Outra IA, abrindo só o Drive, navega o grafo e responde com base nele.

## Regras de negócio
- A skill continua sendo a fonte única das regras (ADR-0001, `DUP-10`); cada agente ganha só um adaptador fino.
- O grafo usa apenas Markdown com links relativos, sem formato proprietário.
- Continuam valendo: sem código no Drive e confirmação antes de gravar (ADR-0002).

## Escopo
**Dentro:**
- Adaptador para Codex (a verificar como o Codex carrega skills ou instruções).
- Padrão de links entre documentos do hub e índice de relações (`00-LEIA-ME`, ou arquivo próprio).
- Ajustes em `SKILL.md`, templates e `mappings.sdd.json`.
- Documentação da instalação nos três agentes.

**Fora:** leitores específicos (MCP, Projetos do Claude, NotebookLM por API); busca semântica ou embeddings; substituir o Drive; servidor próprio.

## Riscos
| Risco | Mitigação |
|-------|-----------|
| Codex carrega skills de forma diferente | Verificar na documentação oficial antes de desenhar (`SEG-07`) |
| Links quebram quando o usuário move arquivos no Drive | Links relativos dentro do hub e checagem no `/drive-sync` |
| Grafo gerado por IA fica inconsistente | Índice montado a partir de links reais, com confirmação antes de gravar |
| Duplicar regras entre três adaptadores | Adaptadores só apontam para a skill (`DUP-10`) |
