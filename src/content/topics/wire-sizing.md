Egy anyagi rendszer (pl. huzal) ellenállása egyenesen arányos a hosszával, és fordítottan arányos a keresztmetszetével, továbbá függ az anyagától és a hőmérséklettől:

$$R = \rho \cdot \frac{l}{A}$$

ahol $\rho$ (ró) az anyag **fajlagos ellenállása**, $l$ a vezető hossza, $A$ a keresztmetszete. A fajlagos ellenállás az egységnyi hosszúságú és egységnyi keresztmetszetű anyag ellenállását mutatja meg — adott anyagra jellemző állandó.

Mértékegysége $\Omega \text{m}$, de a gyakorlatban praktikusabb $\Omega \text{mm}^2 / \text{m}$-ben számolni (mivel a keresztmetszetet $\text{mm}^2$-ben mérjük).

| Anyag | $\rho$ ($\Omega \text{mm}^2 / \text{m}$) |
|-------|------------|
| Ezüst | 0,016 |
| Réz | 0,0175 |
| Arany | 0,023 |
| Alumínium | 0,028 |
| Vas | 0,13 |
| Ólom | 0,208 |
| Manganin | 0,43 |
| Kanthal | 1,39 |

#### Kör keresztmetszet

Vezetékeknél az átmérőt ($d$) szokás megadni, mert könnyebben mérhető. A keresztmetszet:

$$A = \frac{d^2 \cdot \pi}{4}$$

#### Áramsűrűség

Az áramsűrűség (jele $J$) a vezeték egységnyi keresztmetszetére jutó áramerősség: $J = \frac{I}{A}$, mértékegysége $\text{A}/\text{mm}^2$. A kedvező értékek $2{-}8 \text{ A}/\text{mm}^2$ között vannak, de erősen függ a környezettől (hány vezeték megy egymás mellett, szellőzés, vakolat alatt/földben fut-e).

#### Vezeték méretezése feszültségesésre

A vezetéken is $P = I^2 \cdot R_v$ teljesítmény (hőveszteség) keletkezik, emiatt feszültség esik rajta, és a fogyasztóra kevesebb feszültség jut. A megengedett feszültségesés jellemzően **2%** világítási hálózaton.

```example
Példa: Garázs világítás $4 \times 60W$ izzó + 1,2kW motor, 18m-re a leágazási doboztól, réz vezeték ($\rho=0{,}0175$), max 2% feszültségesés.
$P_{\text{összes}} = 240+1200 = 1440W$ → $I = P/U = 1440/230 = 6{,}26A$
Max feszültségesés: $230 \cdot 0{,}02 = 4{,}6V$
Max ellenállás: $R = U/I = 4{,}6/6{,}26 = 0{,}735Ω$
$A = \rho \cdot l/R = 0{,}0175 \cdot 36/0{,}735 = 0{,}857\text{mm}^2$ (l=36m, mert oda-vissza számít!)
→ Felfelé kerekítve legalább $1\text{mm}^2$, de gyakorlatban $1{,}5\text{mm}^2$-nél kisebbet nem használunk.
```

## Vezeték méretezése melegedésre (terhelhetőség)

A feszültségesésre történő méretezés után **mindig el kell végezni a melegedésre való ellenőrzést** is. A vezetéken folyó áram hőt termel, és a vezeték nem melegedhet túl.

### Terhelési csoportok

A vezeték terhelhetősége függ a szerelési módtól és a hőelvezetési lehetőségektől:

- **A csoport** (legrosszabb hőelvezetés):
  - Egyerű vezeték vakolat alatti védőcsőbe húzva
  - 5 db egyerű vezeték szabadon szerelt védőcsőben, vezetékcsatornában
  - 9 db egyerű vezeték kötegelve

- **B csoport** (közepes hőelvezetés):
  - Vakolatba fektetett vagy falra ragasztott vezeték
  - 5 db egyerű vezeték szabadon szerelt védőcsőben/vezetékcsatornában, ha 10 mm távolságra több védőcső/csatorna halad párhuzamosan

- **C csoport** (legjobb hőelvezetés):
  - Egyerű vezeték szabadon szerelve

### Terhelhetőségi táblázat

**Megengedett terhelés (A) és ajánlott kismegszakító:**

| Keresztmetszet | A csoport | A csoport | B csoport | B csoport | C csoport | C csoport | Kismegszakító |
| [mm²] | Cu | Al | Cu | Al | Cu | Al | [A] |
|---|---:|---:|---:|---:|---:|---:|---:|
| 0,5 | 7 | – | 10 | – | 13 | – | – |
| 0,75 | 10 | – | 13 | – | 16 | – | – |
| 1 | 12 | – | 16 | – | 20 | – | 6 |
| **1,5** | **16** | 13 | **20** | 17 | **25** | 22 | **10** |
| **2,5** | **21** | 16 | **27** | 21 | **34** | 27 | **16** |
| **4** | **27** | 21 | **36** | 29 | **45** | 35 | **20** |
| **6** | **35** | 27 | **47** | 37 | **57** | 45 | **25** |
| **10** | **48** | 36 | **65** | 51 | **78** | 61 | **35** |
| **16** | **63** | 51 | **87** | 68 | **104** | 82 | **50** |
| 25 | 83 | 65 | 115 | 90 | 137 | 107 | 63 |
| 35 | 110 | 86 | 143 | 112 | 168 | 132 | 80 |
| 50 | 140 | 110 | 178 | 140 | 210 | 165 | 100 |

> **Fontos:** A táblázatból kiválasztott vezeték-keresztmetszetnek meg kell felelnie mind a feszültségesésre, mind a melegedésre történő méretezésnek. Ha nem felel meg, a következő nagyobb szabványos keresztmetszetet kell választani.

### Szabványos vezeték-keresztmetszetek

Réz és alumínium vezetékek szabványos keresztmetszetei (mm²):

**1,5** – **2,5** – **4** – **6** – **10** – **16** – **25** – 35 – 50 – 70 – 95 – 120 – 150 – 185 – 240 – 300 – 400 – 500

> A félkövérrel jelölt keresztmetszetek a leggyakrabban használtak lakásvillamossági szerelésekben.

### Gyakorlati példa: Indukciós tűzhely bekötése

```example
**Feladat:** Konyhába indukciós tűzhelyet építenek be, legnagyobb teljesítménye 6,6 kW, U = 230 V egyfázisú. Mekkora áramfelvétel? Mekkora keresztmetszetű vezeték és védőcső kell falban csövezett hozzávezetéshez (A csoport)? Mekkora kismegszakító?

**Megoldás:**
$I = P/U = 6600/230 = 28{,}69 \, \text{A}$

A táblázatból A csoport, Cu esetén:
- 4 mm² → 27 A (NEM elegendő, 28,69 A > 27 A)
- **6 mm² → 35 A** ✓ (megfelelő, 28,69 A < 35 A)

Mü III cső: **Ø 23 mm** (3 db 6 mm² vezetékhez)

Kismegszakító: **32 A** (megjegyzés: a táblázat szerint 6 mm²-hez 25 A-es kismegszakító tartozik, de a fogyasztó 28,69 A-t vesz fel, ezért 32 A szükséges)
```

```example
**Háromfázisú táplálás esetén** (ugyanaz a 6,6 kW tűzhely):

$U_v = U_f \times \sqrt{3} = 230 \times 1{,}732 = 398{,}4 \, \text{V} \approx 400 \, \text{V}$

$I = \frac{P}{U_v \times \sqrt{3}} = \frac{6600}{398{,}4 \times 1{,}732} = 9{,}56 \, \text{A}$

5 vezeték (L1, L2, L3, N, PE), szerelési utasítás szerint általában **2,5 mm²**

Mü III cső: **Ø 16 mm** (5 × 2,5 mm²)

**Következtetés:** Háromfázisú táplálás sokkal előnyösebb nagy teljesítményű fogyasztóknál!
```
