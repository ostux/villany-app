# TN rendszerek (nullázás)

Ha a közvetlenül földelt közműhálózatot üzemeltető elosztóhálózati engedélyes (áramszolgáltató) ehhez hozzájárul, akkor a nullavezetőt védővezetőként is szabad felhasználni. Ez a **nullázás**, nemzetközi jelölése **TN rendszer**.

## Hálózati rendszerek jelölése

### Első betű: az energiaellátó rendszer kapcsolata a földdel

- **T** (terra) – egy ponton közvetlenül földelt
- **I** (insulated) – a földtől elszigetelt, vagy impedancián keresztül földelt

### Második betű: a villamos berendezés kapcsolata a földdel

- **T** – a villamos berendezés testei közvetlenül földeltek
- **N** (neutral) – a villamos berendezés testei közvetlenül csatlakoznak az energiaellátó rendszer földelt pontjához (nullavezetőhöz)

### További jelölések a TN rendszereken belül

- **C** (common) – közös
- **S** (separated) – különálló
- **PE** (protective earth) – védővezető
- **PEN** – a védővezető és a nullavezető egyesítése

## A TN rendszer 3 változata

### TN-C rendszer

Sehol sem építenek ki külön védővezetőt, az egyfázisú üzemi áramok vezetésére szolgáló nullavezetőt (N=neutral) kötik minden fogyasztó készülék testére.

```
          Transzformátor
              │
         L1 ──┼────────────
         L2 ──┼────────────
         L3 ──┼────────────
        PEN ──┼────────────── (közös védő+nulla vezető)
              │
              ═ (földelés)
```

> **Figyelem:** 10 mm² -nél kisebb keresztmetszetű vezetékeknél a közösítést a szabvány tiltja a közös vezető megszakadásának veszélye miatt!

### TN-S rendszer

A védővezetőt mindjárt a tápláló transzformátortól kezdve külön választják az egyfázisú üzemi áramokat vezető nullavezetőtől.

```
          Transzformátor
              │
         L1 ──┼────────────
         L2 ──┼────────────
         L3 ──┼────────────
          N ──┼────────────── (nullavezető)
         PE ──┼─ ─ ─ ─ ─ ─ ─ (védővezető, külön)
              │
              ═ (földelés)
```

> **Fontos megjegyzés:** A TN-S rendszert az áramszolgáltató **nem használja** a hálózaton (gazdasági okok miatt költségesebb 5 ér helyett 4 eret vezetni). Viszont a **háztartásokban** (felhasználói főelosztótól az épületen belül) ez a **megszokott megoldás**, mert az N és PE már szétválasztva kerül vezetésre az alelosztókba és végpontokba.

### TN-C-S rendszer

A leggyakoribb megoldás. Egy szakaszon a PEN vezetőt használjuk, majd egy ponton (általában a felhasználói főelosztóban) szétválasztjuk N és PE vezetőkre.

```
          Transzformátor          Főelosztó              Fogyasztó
              │                      │                       │
         L1 ──┼──────────────────────┼───────────────────────┤
         L2 ──┼──────────────────────┼───────────────────────┤
         L3 ──┼──────────────────────┼───────────────────────┤
        PEN ──┼──────────────────────┼── N ───┼──────────────┤
              │                      │        └─ PE ─ ─ ─ ─ ─┤ (test)
              ═                      │
          (földelés)                 ═ (földelés)
```

## Védővezető leágazása (TN-C-S esetén)

TN rendszer esetén a védővezetőnek a PEN vezetőről való leágazását:
- az első túláramvédelmi készülék mellett elhelyezett **nullabontó előtt**, vagy
- a felhasználói mért **főelosztóban** kell megvalósítani.

A védővezetőt a fázisvezetőkkel együtt (közös védőcsőben, közös többerű vezetékben) kell vezetni.

Alelosztók alkalmazása esetén megengedett a védővezető leágazását a felhasználói főelosztó helyett az egyes alelosztókon megvalósítani.

> **Fontos:** Felszálló vezetéken **nem szabad PEN vezetőt** alkalmazni.

> **Fontos:** AVK (áramvédő kapcsoló) csak a **mért felhasználói hálózatban** lehet.

## Védővezető keresztmetszete

A védővezető keresztmetszete:

| Fázisvezető keresztmetszete | Védővezető (PE) keresztmetszete |
|---|---|
| ≤ 16 mm² | azonos a fázisvezetővel |
| 16–35 mm² | 16 mm² |
| > 35 mm² | a fázisvezető keresztmetszetének a fele |

## Működési elv

A védővezetős érintésvédelmi módok közös jellemzője, hogy ezek alkalmazásánál a villamos berendezés testét (olyan vezetőanyagú – általában fém – érinthető részét, amely üzemszerűen nem áll feszültség alatt, de hiba esetén feszültség alá kerülhet) földelt védővezetővel (PE) kötik össze.

A tápláló áramkört annak túláramvédelme, vagy az abba beiktatott áram-védőkapcsolás által rövid idő alatt önműködően kikapcsolják, ha a védővezető tesszárlat következtében veszélyes nagyságú érintési feszültségre kerül.

## Kismegszakítók (MCB) és jelleggörbék

A TN rendszerekben a túláramvédelem egyik leggyakoribb eszköze a **kismegszakító** (MCB - Miniature Circuit Breaker).

### MCB jelleggörbék és kioldási szorzók

A kismegszakítók jelleggörbéje határozza meg, hogy hányszoros túláram esetén oldanak ki azonnal (mágneses kioldás):

| Jelleggörbe | Kioldási szorzó (α) | Alkalmazás |
|-------------|---------------------|------------|
| **B** | α = 5 | Háztartási, irodai fogyasztók |
| **C** | α = 10 | Általános célú, vegyes fogyasztók |
| **D** | α = 20 | Indukciós motorok, nagy bekapcsolási áramú fogyasztók |

### Hurokimpedancia számítás

A TN rendszerben a védelem működéséhez a **hurokimpedancia** (Zs) értékét kell ellenőrizni:

$$Z_s < \frac{U_0}{\alpha \times I_n}$$

ahol:
- $Z_s$ = a hurok impedanciája (Ω)
- $U_0$ = fázisfeszültség (230V)
- $\alpha$ = kioldási szorzó (B=5, C=10, D=20)
- $I_n$ = az MCB névleges árama (A)

```example
Példa B10 kismegszakítóval:
$Z_s < \frac{230}{5 \times 10} = \frac{230}{50} = 4{,}6 \, \Omega$

Tehát a hurokimpedancia nem lehet nagyobb 4,6 Ω-nál.
```

### Kikapcsolási idők

A védelem hatékonyságához az előírt **kikapcsolási időt** be kell tartani:

| Feszültség (U₀) | TN rendszer | TT rendszer |
|-----------------|-------------|-------------|
| 120V | 0,8 s | 0,3 s |
| 230V | 0,4 s | 0,2 s |
| 400V | 0,2 s | 0,07 s |
| > 400V | 0,1 s | 0,04 s |

> **Fontos:** AVK használatával ezek az idők jelentősen csökkenthetők, ami nagyobb biztonságot nyújt.

## AVK vs. MCB érintésvédelemben

### Kismegszakító (MCB) használata

- Túláramvédelmet is ellát
- Hurokimpedancia ellenőrzés szükséges
- Nagyobb zárlati áram kell a biztos kioldáshoz

### Áram-védőkapcsoló (AVK) használata

- Sokkal kisebb hibaáram is kiold (30mA)
- Nem függ a hurokimpedanciától
- **Nem helyettesíti** a túláramvédelmet (MCB-vel együtt kell használni)
- **PEN vezetőn nem használható** (csak N és PE szétválasztás után)

> **Megjegyzés:** AVK esetén a védővezető és a nullavezető szétválasztása kötelező, tehát AVK csak TN-S vagy TN-C-S rendszer PE szakaszán alkalmazható.
