# Villanyszerelő/CS 01 — Villamos alapismeretek

Helyi, offline tanulóalkalmazás a Villanyszerelő/CS 01 (Épületvillamosság) kurzus
"Villamos alapismeretek / Elektrotechnika" moduljához, a `01ea-villszer-202509.pdf (repo nem tartalmazza)`
tananyag alapján.

## Funkciók

- **Tananyag** — a 11 témakör (mértékegységek, Ohm törvénye, soros/párhuzamos
  kapcsolás, Kirchhoff törvényei, feszültség-/áramosztó, vezetők-szigetelők-
  félvezetők, ellenállások mint alkatrészek, teljesítmény/energia/hatásfok,
  vezetékméretezés, csillag-delta átalakítás) magyarázatokkal, képletekkel és
  kidolgozott példákkal.
- **Gyakorlás** — 33 numerikus feladat azonnali ellenőrzéssel és részletes
  magyarázattal, témakör szerint szűrhető.
- **Rajzos feladatok** — véletlenszerűen generált áramköri rajzok (soros,
  párhuzamos, vegyes kapcsolás, feszültségosztó) SVG-ábrával, több
  részkérdéssel (eredő ellenállás, áram, feszültség egyes pontok között),
  azonnali ellenőrzéssel és levezetéssel.
- **Teszt** — feleletválasztós kvíz (10/20/33 kérdés, véletlen sorrendben),
  a végén pontszámmal és minden kérdéshez fűzött magyarázattal.

## Indítás

Ehhez [Bun](https://bun.sh) (vagy Node.js + npm) szükséges, ami már telepítve van.

```bash
bun install     # csak első alkalommal
bun run dev     # fejlesztői szerver indítása (http://localhost:5173)
```

Ha véglegesen csak megnyitható statikus fájlokat szeretnél (böngészőben,
szerver nélkül is működik):

```bash
bun run build       # legyártja a dist/ mappát
bun run preview     # kipróbálja a végleges buildet helyben
```

A `dist/` mappa tartalma bármilyen statikus webszerverre feltölthető, vagy a
`dist/index.html` közvetlenül megnyitható böngészőben.

Az alkalmazás teljesen offline működik — nincs szükség internetkapcsolatra
használat közben, minden adat és logika helyben, a böngészőben fut.
