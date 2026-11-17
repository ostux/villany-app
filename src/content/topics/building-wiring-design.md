# Épület villanyszerelés tervezése

## Fogyasztók teljesítményigénye

Az áramkörök meghatározásához, a csatlakozóvezeték méretezéséhez és a védelmi/kapcsolókészülékek kiválasztásához pontosan ismerni kell a fogyasztók számát és teljesítményigényét.

### Fogyasztók hozzávetőleges teljesítményigénye

| Fogyasztó | Teljesítmény | Legkisebb vezeték-keresztmetszet [mm²] | Kismegszakító |
|---|---|---|---|
| Világítás | változó | 1,5 | 10 A, 13 A (B), (C) |
| Dugaszolóaljzat 10/16 A | 2300 W | 1,5; 2,5 | 13 A, 16 A (C) |
| Forróvíz-tároló bojler | 2,3–3,6 kW | 2,5 | 16 A (B) |
| Mosogatógép | 1,6–2,3 kW | 2,5 | 16 A (C) |
| Mosógép | 2,3 kW | 2,5 | 16 A (C) |
| Elektromos fűtés | 2,3 kW | 2,5 | 13 A, 16 A (B) |
| Villanytűzhely (4 főzőlap + sütő) | 6–6,5 kW | 4 (3 fázis + N); 6 (1 fázis) | 16 A, 20 A |
| Klímaegység | 2,3 kW | 2,5 | 16 A (C) |

## Lakás méretezése

### Alap teljesítményigények

**Egyfázisú:** 1×32 A = **7,36 kW**

**Háromfázisú:** 3×20 A = **13,8 kW**

### Egyidejűségi tényező

Több lakásnál **egyidejűségi tényezőt** alkalmazunk, mivel nem minden fogyasztó üzemel egyszerre:

$$e = c + \frac{1-c}{\sqrt{n}}$$

ahol:
- $e$ = egyidejűségi tényező
- $c$ = állandó (jellemzően 0,2)
- $n$ = lakások száma

### Példa feladat: Társasház teljesítményigénye

```example
**Feladat:** Határozza meg egy társasház teljesítményigényét! 4 egyfázisú betáplálású lakás (lakásonként $P_f = 7{,}36 \, \text{kW}$), villamos alapfűtés nincs. A meleg vizet lakásonként 120 literes, $P_v = 1800 \, \text{W}$ névleges teljesítményű forróvíz-tárolók állítják elő.

**Megoldás:**
$$e = 0{,}2 + \frac{1-0{,}2}{\sqrt{4}} = 0{,}2 + \frac{0{,}8}{2} = 0{,}6$$

$$P_e = n \cdot P_m \cdot e + \sum (P_f + P_v)$$

$$P_e = 4 \cdot 7{,}36 \cdot 0{,}6 + 4 \cdot (0 + 1{,}8) = 17{,}66 + 7{,}2 = 24{,}86 \, \text{kW}$$

**Válasz:** 24,86 kW (Egyidejűségi tényező nélkül 36,64 kW lenne.)
```

## Méretezési szempontok

### Feszültségesésre méretezés

Egyszerűsítve a **hatásos** teljesítményt vesszük figyelembe.

### Terhelhetőségre méretezés

A **látszólagos** teljesítményt kell figyelembe venni, **cosφ = 0,7**-tel számolva (fázisjavítást figyelmen kívül hagyva).

## Lakásáramkörök kialakítása

### Logikus felosztás

Törekedjünk logikus, átlátható felosztásra:

**Nagyfogyasztóknak külön áramkör:**
- Bojler
- Fix fűtőtest
- Villanytűzhely
- Mosógép
- Klíma
- **Cirkó** (külön áramtalanítási kötelezettség!)

**Lehet külön:**
- Világítási áramkör
- Dugalj áramkör
- Vegyes áramkör (világítás + dugalj együtt)

## Szelektivitás

### Mi a szelektivitás?

Lehetőleg csak a meghibásodott áramkör kismegszakítója oldjon le, ne a főbiztosíték.

### Szabály

Egymás utáni kismegszakítók névleges árama között **két fokozat** vagy **1,6-szoros** különbség legyen.

```formula
$I_{n,\text{leágazás}} \leq \frac{I_{n,\text{betáp}}}{1{,}6}$
```

### Példa feladat: Szelektivitás

```example
**Feladat:** Egy lakáselosztó betáplálási oldalán C32 kismegszakító van. Legfeljebb mekkora lehet a leágazásokba épített kismegszakító névleges árama, ha a lakásban csak dugaszolóaljzat és világítási áramkörök vannak?

**Megoldás:**
$$\frac{32}{1{,}6} = 20 \, \text{A}$$

vagy kisebb biztosítja a szelektivitást.

Az erősáramú vezeték legkisebb keresztmetszete 1,5 mm² (vezérlő: 0,5 mm², 1,5 mm²).
- 1,5 mm² védelme: 10 vagy 13 A
- 2,5 mm² védelme: 16 A

Egyfázisú dugaszolóaljzat és világítási áramköröknél 16 A-nél nagyobb fogyasztói teljesítménnyel nem számolunk.

**Válasz:** 16 A
```

## Túláramvédelem

### Kismegszakító funkciói

A kismegszakító **túlterhelés- és zárlatvédelmet** egyaránt ellát:

- **Bimetál:** tartós túlterhelés ellen
- **Elektromágnes:** zárlati áram ellen

### Olvadóbiztosító

> **Fontos:** **Új szereléseknél olvadóbiztosító használata tilos!**

## Védővezető

A védővezetőt rögzítetten szerelt **II. érintésvédelmi osztály** esetén is ki kell építeni.

## Induktív fogyasztók

Induktív fogyasztók (motorok, kompresszorok) bekapcsolási áramfelvétele nagy → **C karakterisztikájú** kismegszakító szükséges.

> **Megjegyzés:** Rezisztív fogyasztóknál (fűtés, bojler) B karakterisztika is elegendő.
