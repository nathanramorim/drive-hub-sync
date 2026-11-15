---
description: Configura o hub do Google Drive para este projeto (destino, pastas e mapeamentos) e cria o esqueleto.
---

Configure o hub do Drive deste projeto. Siga a skill `drive-hub`.

1. **Detecte o Drive:** liste `~/Library/CloudStorage/GoogleDrive-*/` (macOS) ou pergunte o caminho (Windows/Linux). Se houver mais de uma conta, pergunte qual usar.
2. **Pergunte ao usuário** (uma pergunta por vez, com padrão sugerido):
   - Pasta de destino dentro do Drive (ex.: `Meu Drive/Projetos`).
   - Nome do projeto (padrão: nome da pasta do repositório). O hub fica em `<destino>/<projeto>/`.
   - Origens a sincronizar. Se existir `sdd/`, sugira os mapeamentos padrão de `templates/mappings.sdd.json`. Caso contrário, peça pastas de releases, ADRs/arquitetura e site/marketing.
3. **Mostre o plano** (caminhos finais e pastas a criar) e **aguarde confirmação** antes de gravar.
4. Após confirmar:
   - Crie o esqueleto a partir de `templates/hub/` (pastas 00 a 04), trocando `{{PROJETO}}`.
   - Grave `.drive-hub.json` na raiz do projeto, seguindo o formato da skill.
   - Sugira adicionar `.drive-hub.json` ao `.gitignore`, pois contém caminho pessoal.
5. Nunca copie código-fonte. Reporte o que foi criado.
