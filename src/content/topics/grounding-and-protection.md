# Földelés és érintésvédelem

## 1. Alapfogalmak

### Közvetlen érintés vs. Közvetett érintés

#### Közvetlen érintés

Az áramütéses balesetek egy része úgy következik be, hogy az ember (közvetlenül, vagy szerszámon, segédeszközön keresztül) általában a kezével **üzemszerűen feszültség alatt álló** (szabványos elnevezéssel: **aktív**) részt érint, ugyanakkor nem szigetelő talajon áll, vagy más testrészével földpotenciálon lévő fémrészhez ér.

Ezt a nemzetközi szabványok **közvetlen érintés**-nek, s az ezek megakadályozására szolgáló intézkedéseket **közvetlen érintés elleni védelem**-nek nevezi.

**Újabb elnevezés:** **alapvédelem** vagy **áramütés elleni védelem normálüzemben** (basic protection).

#### Közvetett érintés

Az áramütéses balesetek nagy része azonban úgy következik be, hogy a balesetes a villamos szerkezet olyan részét (úgynevezett **test**-ét) érinti meg, amely üzemszerűen feszültségmentes, de hiba (testzárlat) következtében feszültség alá kerül.

Ezt a nemzetközi szabványok **közvetett érintés**-nek, s az ezek megakadályozására tett intézkedéseket **közvetett érintés elleni védelem**-nek nevezi.

**Újabb elnevezés:** **hibavédelem** (fault protection), amit a szakemberek simán **érintésvédelem**-nek hívnak.

### Védővezetős érintésvédelmi módok

A védővezetős érintésvédelmi módok közös jellemzője, hogy ezek alkalmazásánál a villamos berendezés testét (olyan vezetőanyagú - általában fém – érinthető részét, amely üzemszerűen nem áll feszültség alatt, de hiba esetén feszültség alá kerülhet) földelt védővezetővel (PE) kötik össze.

A tápláló áramkört annak túláramvédelme, vagy az abba beiktatott áram-védőkapcsolás által rövid idő alatt önműködően kikapcsolják, ha a védővezető testzárlat következtében veszélyes nagyságú érintési feszültségre kerül.

---

## 2. Egyenpotenciálra hozás (EPH)

### Új neve: Védőösszekötő-vezetékrendszer

Az egyenpotenciálra hozás célja, hogy a különböző fém testek között ne alakuljon ki veszélyes potenciálkülönbség.

### Működési elv

A villamos készülékek testeinek és idegen vezetőképes részek villamos összekötése, azonos potenciálra hozása.

**Miért fontos?**

Ha egy testzárlatos villamos készüléket és pl. a vízvezetéket egyszerre érintjük, az EPH miatt **nem hidalunk át potenciálkülönbséget**, mert mindkettő azonos potenciálon van.

### Az EPH rendszer elemei

Az EPH vezetőn csak **kiegyenlítő áramok** folyhatnak. Az EPH rendszert **fémesen összekötjük** az érintésvédelmi fővezetővel (PE).

### Mit kell bevonni az EPH rendszerbe?

Kötelezően csatlakoztatandó elemek:
- **Közüzemi csővezetékek** (víz, gáz)
- **Szerkezeti fémrészek**
- **Központi fűtés** vezetékei
- **Légkondicionáló berendezés** fémrészei
- **Vasbetonszerkezet fémrészei**
- **Zuhanytálcák**
- **Fürdőkádak**
- **Helyhez kötött 500 litert meghaladó fémtartályok**

### EPH kialakítás módjai

**1. Hagyományos gyűrűs (gerincvezetékes) kialakítás:**

A hálózati PE-pontról indul egy EPH-gerincvezeték, amelyhez csatlakoznak a fém testek.

**2. Modern sugaras kialakítás:**

Ma már megengedett, hogy az eszközökhöz közeli elosztóból a védővezető sínről vagy a védővezetőről, **sugaras kialakítással** legyen megoldva az egyenpotenciálra hozás.

### EPH vezeték keresztmetszete

| EPH vezetők anyaga | EPH-gerincvezető | EPH-összekötő (mechanikai védelemmel, pl. védőcső) | EPH-összekötő (mechanikai védettség nélkül) |
|-------------------|------------------|--------------------------------------------------|-------------------------------------------|
| **Réz [mm²]** | 6 | 2,5 | 4 |
| **Alumínium [mm²]** | 16 | 16 | 16 |
| **Acél [mm²]** | 50 | – | – |

> **Megjegyzés:** Az EPH vezetékek jelölése: **zöld-sárga** színnel.

---

## 3. TN rendszerek (nullázás)

Ha a közvetlenül földelt közműhálózatot üzemeltető elosztóhálózati engedélyes (áramszolgáltató) ehhez hozzájárul, akkor a nullavezetőt védővezetőként is szabad felhasználni. Ez a **nullázás**, nemzetközi jelölése **TN rendszer**.

### Hálózati rendszerek jelölése

#### Első betű: az energiaellátó rendszer kapcsolata a földdel

- **T** (terra) – egy ponton közvetlenül földelt
- **I** (insulated) – a földtől elszigetelt, vagy impedancián keresztül földelt

#### Második betű: a villamos berendezés kapcsolata a földdel

- **T** – a villamos berendezés testei közvetlenül földeltek
- **N** (neutral) – a villamos berendezés testei közvetlenül csatlakoznak az energiaellátó rendszer földelt pontjához (nullavezetőhöz)

#### További jelölések a TN rendszereken belül

- **C** (common) – közös
- **S** (separated) – különálló
- **PE** (protective earth) – védővezető
- **PEN** – a védővezető és a nullavezető egyesítése

### A TN rendszer 3 változata

#### TN-C rendszer

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

#### TN-S rendszer

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

#### TN-C-S rendszer

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

### Védővezető leágazása (TN-C-S esetén)

TN rendszer esetén a védővezetőnek a PEN vezetőről való leágazását:
- az első túláramvédelmi készülék mellett elhelyezett **nullabontó előtt**, vagy
- a felhasználói mért **főelosztóban** kell megvalósítani.

A védővezetőt a fázisvezetőkkel együtt (közös védőcsőben, közös többerű vezetékben) kell vezetni.

Alelosztók alkalmazása esetén megengedett a védővezető leágazását a felhasználói főelosztó helyett az egyes alelosztókon megvalósítani.

> **Fontos:** Felszálló vezetéken **nem szabad PEN vezetőt** alkalmazni.

> **Fontos:** AVK (áramvédő kapcsoló) csak a **mért felhasználói hálózatban** lehet.

### Kismegszakítók (MCB) és jelleggörbék

A TN rendszerekben a túláramvédelem egyik leggyakoribb eszköze a **kismegszakító** (MCB - Miniature Circuit Breaker).

#### MCB jelleggörbék és kioldási szorzók

A kismegszakítók jelleggörbéje határozza meg, hogy hányszoros túláram esetén oldanak ki azonnal (mágneses kioldás):

| Jelleggörbe | Kioldási szorzó (α) | Alkalmazás |
|-------------|---------------------|------------|
| **B** | α = 5 | Háztartási, irodai fogyasztók |
| **C** | α = 10 | Általános célú, vegyes fogyasztók |
| **D** | α = 20 | Indukciós motorok, nagy bekapcsolási áramú fogyasztók |

#### Hurokimpedancia számítás

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

#### Kikapcsolási idők

A védelem hatékonyságához az előírt **kikapcsolási időt** be kell tartani:

| Feszültség (U₀) | TN rendszer | TT rendszer |
|-----------------|-------------|-------------|
| 120V | 0,8 s | 0,3 s |
| 230V | 0,4 s | 0,2 s |
| 400V | 0,2 s | 0,07 s |
| > 400V | 0,1 s | 0,04 s |

> **Fontos:** AVK használatával ezek az idők jelentősen csökkenthetők, ami nagyobb biztonságot nyújt.

### Áram-védőkapcsoló (AVK) a TN rendszerben

Az áram-védőkapcsoló (AVK) a védővezetős érintésvédelmi módoknál (főként a TN és TT rendszereknél) érintésvédelmi kikapcsolásra a túláramvédelem helyett igen előnyösen alkalmazott kikapcsoló szerv.

#### AVK vs. MCB érintésvédelemben

**Kismegszakító (MCB) használata:**
- Túláramvédelmet is ellát
- Hurokimpedancia ellenőrzés szükséges
- Nagyobb zárlati áram kell a biztos kioldáshoz

**Áram-védőkapcsoló (AVK) használata:**
- Sokkal kisebb hibaáram is kiold (30mA)
- Nem függ a hurokimpedanciától
- **Nem helyettesíti** a túláramvédelmet (MCB-vel együtt kell használni)
- **PEN vezetőn nem használható** (csak N és PE szétválasztás után)

> **Tehát nem külön érintésvédelmi mód!**

> **Túláramvédelmet nem lát el!**

> **Megjegyzés:** AVK esetén a védővezető és a nullavezető szétválasztása kötelező, tehát AVK csak TN-S vagy TN-C-S rendszer PE szakaszán alkalmazható.

---

## 4. TT rendszer (védőföldelés)

Ha a tápláló hálózat közvetlenül földelt, akkor az ilyen rendszert TT-rendszernek nevezik.

A jelölésnél:
- az első **T** betű azt jelenti, hogy a rendszer az áramforrásnál közvetlenül le van földelve
- a második **T** betű jelentése az, hogy az érintésvédelemmel védett testek földelve vannak

### Működési elv

A TT-rendszer működési elve az, hogy a védett test földelése következtében szigetelési hiba esetén a hibahelyen a földbe folyó áram lép fel, s ez földelés ellenállásán keresztül záródik.

- Ha az áram kicsi, akkor a földelési ellenálláson kis feszültségemelkedést hoz létre
- Ha viszont az áram nagy, akkor vagy a túláramvédelem, vagy erre a célra beépített áram-védőkapcsoló kiold

### Számítási képletek

$$I_z = \frac{U_0}{R_{cs} + R_a}$$

$$U_L = I_z \times R_a$$

ahol:
- $I_z$ = zárlati áramerősség
- $U_L$ = érintési feszültség
- $U_0$ = hálózati feszültség (fázis-föld, pl. 230V)
- $R_{cs}$ = csillagpont földelési ellenállása
- $R_a$ = védőföldelés ellenállása

### Méretezési feltétel

$$U_L < 50 \, \text{V} \quad \text{(általános esetben)}$$

A megengedett érintési feszültség ($U_L$) **kisebb legyen 50V-nál**.

### Példa

```example
Feladat: $U_0=230V$ esetén, mekkora lesz a zárlati áram és $U_L$, ha $R_a=10Ω$, $R_{cs}=10Ω$?

Megoldás:
$I_z = 230/(10+10) = 230/20 = 11{,}5$ A
$U_L = I_z \times R_a = 11{,}5 \times 10 = 115$ V

Eredmény: 115V túl nagy, nem megengedett!

Ha $R_a$ egy „jó" földelés, pl. 2 ohmos, akkor így alakul:
$I_z = 230/(10+2) = 230/12 = 19{,}16$ A
$U_L = 19{,}16 \times 2 = 38{,}3$ V

Következtetés: Kis ellenállású védőföldelés ($R_a$) szükséges!
```

### Hálózati ábra

```
          Transzformátor                 Berendezés
              │                              │
         L1 ──┼──────────────────────────────┤
         L2 ──┼──────────────────────────────┤
         L3 ──┼──────────────────────────────┤
          N ──┼──────────────────────────────┤
              │                              │
              │                         ╱    └─ PE ─┐
              ═ Rcs                    ╱            │
                                      hiba          ═ Ra
                                                (védőföldelés)
```

---

## 5. IT rendszer

Ha a tápláló hálózat **nem közvetlenül**, hanem **I** (igen nagy) **impedancián keresztül földelt**, vagy egyáltalán **nem földelt**, akkor ennek jele IT-rendszer.

A jelölésnél:
- az **I** betű a hálózati csillagpontba kötött impedanciát jelenti
- a **T** betű az érintésvédelemmel ellátott testek védőföldelését jelenti

### Jellemzők

A hálózat földelésébe beiktatott impedancia nagy értéke miatt a szigetelési hibahelyen fellépő hibaáram kicsi, ennek megfelelően ilyen földzárlat esetén **nem számolhatunk a túláram-védelem megszólalásával**.

### Alkalmazási területek

IT hálózatot csak **különleges fogyasztói területeken** alkalmaznak:
- **bányák** föld alatti részeiben
- **kórházak** műtőiben
- más különleges fogyasztói területeken

Saját transzformátorral vagy generátorral felszerelt, elkülönített berendezésekben használható.

### Felügyelet

A testzárlatos állapotot úgynevezett **szigetelés-ellenőrző készülékkel** figyelik, amely:
- méri a szigetelési ellenállás értékét
- hibajelzést ad testzárlat esetén

### Hálózati ábra

```
          Transzformátor                 Berendezés
              │                              │
         L1 ──┼──────────────────────────────┤
         L2 ──┼──────────────────────────────┤
         L3 ──┼──────────────────────────────┤
          N ──┼──────────────────────────────┤
              │                              │
              Z                         ╱    └─ PE ─┐
          (nagy                        ╱            │
        impedancia)                   hiba          ═
              │                                (védőföldelés)
              ═
```

> **Fontos:** Az IT rendszer esetén az első földzárlat esetén a hibaáram kicsi marad, ezért az áramkör **nem kapcsol ki automatikusan**. A szigetelés-ellenőrző készülék azonban jelzi a hibát, így a rendszert javítani lehet mielőtt második hiba lépne fel.

---

## 6. Védővezető méretezése

A védővezető keresztmetszete a fázisvezető keresztmetszetének függvényében:

| Fázisvezető keresztmetszete | Védővezető (PE) keresztmetszete |
|---|---|
| ≤ 16 mm² | azonos a fázisvezetővel |
| 16–35 mm² | 16 mm² |
| > 35 mm² | a fázisvezető keresztmetszetének a fele |

> **Megjegyzés:** A védővezetőt a fázisvezetőkkel együtt (közös védőcsőben, közös többerű vezetékben) kell vezetni.

---

## Fontos megjegyzések

> **Fontos:** Szükséges megemlíteni, hogy a villamos balesetek nagy része nem áramütéses, hanem égési baleset, amit a berendezéseken fellépő villamos ív okoz!
