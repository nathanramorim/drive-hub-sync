#!/bin/sh
# Valida o esqueleto do hub: links relativos resolvem, toda página tem
# "## Relacionados" e o índice 00 lista todas as páginas.
# Uso: scripts/check-hub-links.sh [diretorio]  (padrão: templates/hub)
dir="${1:-templates/hub}"
fail=0
index="$dir/00-LEIA-ME-INDICE-GERAL.md"
total=0
listed=0
for f in $(find "$dir" -name '*.md' | sort); do
  total=$((total + 1))
  base=$(dirname "$f")
  grep -q '^## Relacionados' "$f" || { echo "sem Relacionados: $f"; fail=1; }
  for l in $(grep -o ']([^)#]*\.md)' "$f" | sed 's/^](//; s/)$//'); do
    [ -f "$base/$l" ] || { echo "link quebrado em $f: $l"; fail=1; }
  done
  [ "$f" = "$index" ] && continue
  rel=${f#"$dir"/}
  grep -q "]($rel)" "$index" && listed=$((listed + 1)) || echo "fora do índice: $rel"
done
echo "páginas: $total (índice lista $listed + o próprio índice)"
[ $((listed + 1)) -eq "$total" ] || fail=1
exit $fail
