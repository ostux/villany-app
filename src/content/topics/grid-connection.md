# Hálózatra csatlakozás

## A csatlakozás célja és követelményei

A hálózatra csatlakozás célja a fogyasztó **megfelelő minőségű villamosenergia-ellátásának** biztosítása.

### Feszültség követelmények

- Hosszabb ideig a névleges **230 V**-os értéktől **max. ±10%**-ot térhet el a fogyasztói feszültség
- Ne legyen a hálózaton se hosszú, se rövid időtartamú feszültségingadozás
- A jelalak ne térjen el számottevően a szinuszostól

### Jogi és műszaki követelmények

- **Szerződés:** a fogyasztónak szerződést kell kötnie az áramszolgáltatóval (újabb nevén: **hálózati engedélyes**)
- **Mérés:**
  - Nagy teljesítményű fogyasztóknál a **meddő energiát** is mérik
  - Lakossági fogyasztóknál csak a **hatásos villamos munkát**
- **Szabványok:** MSZ 447:2019 és a VET (Villamos Energia Törvény)

## Csatlakozó vezeték

### Méretezés és kivitelezés

- A névleges csatlakozási teljesítményt a **szerződésben** rögzítik
- A csatlakozó vezeték keresztmetszetét méretezik
- Egy- vagy háromfázisú kivitelben készül
- **Feszültségesése max. 1%**
- Új csatlakozó vezeték legkisebb keresztmetszete: **16 mm²**
- Egyfázisú csatlakozásnál az első túláramvédelmi készülék **legalább 32 A**-es

### Hálózat típusok

A közcélú kisfeszültségű hálózat lehet:
- **Légvezetékes** (szabadvezetékes)
- **Földkábeles**

> **Fontos:** Minden fogyasztásmérő berendezéshez a szerződésben meghatározott áramerősségű **zárlat- és túlterhelés-védelmet** kell létesíteni.

## Első túláramvédelmi eszköz

### Feladata

1. A fogyasztóberendezés túláramvédelme
2. A fogyasztói teljesítmény behatárolása
3. A fogyasztó lekapcsolása a hálózatról

### Alkalmazható készülékek

- **Kismegszakító** – közvetlen mérés esetén
- **Késes olvadóbiztosító** – mérőváltós mérés esetén
- Túlterhelés- és zárlatkioldással ellátott kismegszakító

> **Fontos:** Kisfeszültségű hálózat csatlakozási pontjánál **min. 5 kA zárlati szilárdsággal** kell számolni.

### Csatlakozó főelosztó

Ha a csatlakozó vezeték több felhasználót szolgál ki → **csatlakozó főelosztót** kell kiépíteni, ebben van az első túláramvédelmi készülék.

A csatlakozó főelosztótól a méretlen felszálló vezetékek **minden esetben ötvezetősek**.

### Példa feladat: Független zárlati áram

```example
**Feladat:** Mekkora lesz a csatlakozási helyen a független zárlati áram ($I_z$), ha a fázis- és PEN-vezető között 0,04 Ω hurokimpedanciát ($Z_{L-PEN}$) mértek? A névleges fázisfeszültség $U_0 = 230 \, \text{V}$.

**Megoldás:**
$$I_z = \frac{U_0}{Z_{L-PEN}} = \frac{230}{0{,}04} = 5750 \, \text{A}$$

**Válasz:** 5750 A
```

## TN rendszer, PEN szétválasztás

- Mivel a közcélú hálózat **TN rendszerű**, a csatlakozó hálózatnak is TN rendszerűnek kell lennie
- A PEN vezető szétválasztását (N és PE-re) az első túláramvédelmi készülék mellett elhelyezett **nullabontó előtt**, vagy a **főelosztóban** kell megvalósítani
- A továbbiakban a védővezetőt a fázisvezetővel együtt kell vezetni

## Szabadvezetékes csatlakozás

### Általános jellemzők

- Kisfeszültségű közcélú szabadvezeték-hálózatról **szabadvezetékes vagy földkábeles** csatlakozás készíthető
- Újabban a földkábeles csatlakozást részesítik előnyben
- Méretlen vezeték vastagfalú (**Mü I**) védőcsőben, amelynek belső átmérője **legalább 36 mm**
- Lehetőleg függőleges vezetéssel, legkevesebb iránytöréssel – **max. 2**

### Vezeték fogadása

- **Falihoroggal** vagy **tetőtartóval**
- A csatlakozóvezetéket az elosztóhálózati engedélyes (áramszolgáltató) vagy az általa megbízott szakipari cég létesítheti
- Számításba kell venni a vezeték **belógását**, be kell tartani a **védőtávolságokat**, figyelni a keresztező vezetékekre
- A vezeték a lehető legrövidebb legyen, lehetőleg idegen ingatlant ne keresztezzen

### Tetőtartó

- Legalább **2"-os varratnélküli cső**
- Korrózióvédett
- Szigetelőcsővel bélelt

### Vezetéktípusok

Létesíthető:
- Csupasz sodrony esetén
- Kötegelt hálózat esetén (pl. NFA2X 4×25RM 1 kV)

### Föld feletti magasságok és távolságok

| Jellemző | Érték |
|---|---:|
| Max. oszlopköz (oszlop–épület) | 50 m |
| Min. magasság út felett | 5,5 m |
| Min. magasság járda felett | 4 m |
| Min. magasság az épületnél (bekötési pont) | 3 m |
| Távolság telefonhálózat felett | 0,5 m |
| Távolság középfeszültségű vezeték alatt | 2 m |
| Fogyasztásmérő hely max. magassága | 1,8 m |

## Földkábeles csatlakozás

### Általános jellemzők

- Évtizedek óta előnyben részesítik, elsősorban **településképi okokból**
- A kábelt az oszlopon **2,5 m magasságig 63 mm átmérőjű, 5,6 mm falvastagságú KPE** (kemény polietilén) csőben kell elhelyezni
- Az oszlop aljához **kb. 1 m kábelkarikát** kell fektetni (tartalék)
- Csatlakozó szekrény a kerítéstől **max. 1 m**-re, a kábel max. ~10 m

### Előnyei

- Üzemzavart okozó külső hatások (időjárás) elleni védettség
- Élőlényekre, tárgyakra veszélytelen
- Kis induktív és nagy kapacitív ellenállása csökkenti a feszültségesést

### Alkalmazása

Ipartelepek, lakótelepek elosztóhálózata.

### Hátránya

A fektetési költség nagyobb, mint az azonos energiát átvivő szabadvezetéké.

## Csatlakozóvezeték szabályai

- A szabadvezetékes csatlakozóvezeték **szigetelt** legyen, és **megszakítás nélkül** érje el a fogyasztásmérőt
- A csatlakozási pont és a fogyasztásmérőhely között **doboz ne legyen**
- Méretlen vezető **elzárt belsőtérben nem haladhat**; nyomvonala **szemmel követhető** legyen
- Földkábeles fogyasztói csatlakozást nagyobb teljesítményigény esetén az elosztóhálózati engedélyes kezdeményezi
- A méretlen fővezeték a **kerítésbe épített csatlakozószekrénybe** érkezzen, ebbe kell beépíteni a fogyasztásmérőt is
- Szekrény max. 1 m-re a kerítéstől

### Földkábel keresztmetszetek

A földkábel **háromfázisú** kivitelű:

| Anyag | Keresztmetszetek [mm²] |
|---|---|
| **Alumínium** | 16 – 25 – 50 |
| **Réz** | 10 – 16 – 25 |

## Csatlakozási pont kiépítése

A csatlakozási pont elhelyezése:

- Több felhasználási helyű épület közterületre nyíló kapuval → a **kapualjban**, könnyen hozzáférhetően
- Közterülettel érintkező fal esetén → lehetőleg annak **külső oldalán**
- Kerítéssel elválasztott ingatlan → a **kerítés vonalában**, közterület felől megközelíthetően, a kerítéstől **max. 1 m**-re

## Vezetéktípusok részletesen

### Sodrony

- Huzalokból (elemi szálakból) álló szabadvezeték, egymással érintkező sodratot alkotnak
- Közepén a mag (acélhuzal)
- Acél-alumínium sodronynál:
  - A terhet az acél hordja
  - Az áramot az alumínium vezeti
  - Pl. 1 acél / 6 Al vagy 7 acél / 26 Al

**Szabványos sodrony-keresztmetszetek [mm²]:**

10 – 16 – 25 – 35 – 50 – 70 – 95 – 120 – 150 – 185 – 240 – 300 – 400 – 500

### Légkábel

- Egyerű szigetelt, szabványos keresztmetszetű vezeték
- **16 mm²-nél kisebb** sodronyt nem szabad használni
- Szigetelése vastagított, hideg- és fényálló PVC

### Erősáramú kábel

- Egy- vagy többerű szigetelt vezeték
- Szigetelése és védőburkolata vegyi és mechanikai behatások ellen véd
- Nagy teljesítmény nagy távolságra vitelére
- Fázisvezetőit földpotenciálon lévő fémköpeny (szalagozás) veszi körül
- Vezetője lágy alumínium vagy vörösréz
- Földbe, akár tengervízbe is fektethető

## Villamos méretezés

A csatlakozó és fővezetékeket **feszültségesésre, melegedésre és áramütés elleni védelemre** kell méretezni.

### Együttes feszültségesés

**Max. 2%:**
- **1%** a csatlakozóvezetékre
- **1%** az összes fővezetékre
