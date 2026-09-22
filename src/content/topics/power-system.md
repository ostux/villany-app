# Villamosenergia-rendszer

A **villamosenergia-rendszer** a villamos energia termelésének, továbbításának és elosztásának összessége.

## Miért terjedt el a villamos energia?

### Előnyök

- **Könnyen átalakítható** más energiafajtává (hő, fény, mozgás)
- **Felhasználásakor nincs melléktermék** (tiszta energiafelhasználás)
- **Könnyen szállítható nagy távolságra** (veszteség minimalizálható)
- **Hatékonyan szabályozható**

### Egyetlen hátránya

- **Nem tárolható** gazdaságosan nagy mennyiségben
- A termelésnek és fogyasztásnak **minden pillanatban meg kell egyeznie**

> **Fontos:** Az energia-egyensúly fenntartása a villamosenergia-rendszer működésének alapfeltétele.

## A villamosenergia-rendszer felépítése

A rendszer három fő részből áll:

```
Erőmű → Hálózat → Fogyasztó
```

### Erőművek

- Villamos energia előállítása
- Különböző típusok: hőerőművek, atomerőművek, vízerőművek, szélerőművek, naperőművek
- Háztartási méretű kiserőművek (HMKE) - az utóbbi 10 évben jelentek meg

### Hálózat

A hálózatokat alkotják:

- **Gyűjtősínek** (kapcsolóállomásokban)
- **Szabadvezetékek** (légvezetékek)
- **Kábelek** (föld alatti vagy épületbeli vezetékek)

### Állomások

- Transzformátor állomások (feszültségszint váltás)
- Kapcsolóállomások (hálózatok összekötése)

## Feszültségszintek

A villamos hálózatokat **feszültségszint** szerint csoportosítjuk:

| Feszültségszint | Váltakozó (AC) | Egyenáram (DC) | Jelölés |
|----------------|----------------|-----------------|----------|
| **Törpefeszültség** | ≤ 50 V | ≤ 120 V | ELV |
| **Kisfeszültség** | ≤ 1000 V | ≤ 1500 V | KIF/LV |
| **Középfeszültség** | ≤ 35 kV | - | KÖF/MV |
| **Nagyfeszültség** | > 35 kV | - | NAF/HV |

### Közcélú elosztóhálózat feszültsége

Magyarországon: **3 × 400/230 V, 50 Hz**

- 400 V: fázisok közötti (vonali) feszültség
- 230 V: fázis és nulla között (fázisfeszültség)
- 50 Hz: hálózati frekvencia

## Frekvencia

### Európa

- **50 Hz** - szabványos hálózati frekvencia
- A frekvencia állandóságáról az **erőművek** kötelesek gondoskodni

### Világ más részei

- Néhány országban: **60 Hz** (pl. USA, Japán)
- Vasúti vontatás: **16⅔ Hz** (különleges alkalmazás)

## Hálózatok csoportosítása

### Áramnem szerint

- **DC** (egyenáram) - növekvő jelentőségű a teljesítményelektronika fejlődésével
- **AC** (váltakozó áram) - jelenleg domináns

### Rendeltetés szerint

#### Nemzetközi kooperációs hálózat

- **750 kV, 400 kV, 220 kV**
- Országok közötti energia-kereskedelem
- Nagy távolságú energiaszállítás

#### Alaphalózat

- **750 kV, 400 kV, 220 kV, 132 kV**
- Erőművektől a főelosztó hálózathoz

#### Főelosztó hálózat

- Többnyire **132 kV** szinten működik
- Nagy/ipari fogyasztók ellátása

#### Középfeszültségű hálózat (KÖF)

- **11 kV, 22 kV, 35 kV**
- Tápponti állomásoktól a fogyasztói transzformátorokig

#### Kisfeszültségű hálózat (KIF)

- **3 × 400/230 V**
- Háztartások és kisfogyasztók ellátása
- 4 vezetékes rendszer: L1, L2, L3, PEN

## Feszültségszint választás

### Gazdaságossági szempontok

**Azonos teljesítmény átviteléhez:**

- Minél nagyobb a feszültségszint → annál kisebb az áramerősség
- Kisebb áramerősség → kisebb vezeték keresztmetszet → kisebb veszteség

**De:**

- Nagyobb feszültség → jobb szigetelés szükséges
- Nagyobb feszültség → nagyobb fázistávolságok

### Optimális feszültségszint

Egy adott átviendő teljesítményhez meg kell állapítani az **optimális feszültségszintet** gazdaságossági szempontból.

## Magyar Villamosenergia-ipari Átviteli Rendszerirányító (MAVIR)

A **MAVIR** feladata:

- Az országos villamosenergia-rendszer **irányítása**
- Termelés és fogyasztás **összehangolása**
- Rendszerszintű szolgáltatások biztosítása
- Hálózati stabilitás fenntartása

### Szervezeti hierarchia

1. **MAVIR** - Magyar Villamosenergia-ipari Átviteli Rendszerirányító
   - Országos szintű irányítás

2. **KDSZ-ek** - Körzeti Diszpécser Szolgálatok
   - Regionális irányítás

3. **ÜIK-ok** - Üzemirányító Központok
   - Helyi szintű irányítás

## Továbbítás és elosztás

### Szabványos feszültségszintek

Az átvitelhez **szabványos feszültségszinteket** állapítottak meg a hatékonyság és kompatibilitás érdekében.

### Alacsony hálózati veszteség

A továbbítás és elosztás **alacsony hálózati veszteséggel** történik - modern rendszerekben a veszteség < 10%.

### Koncentrált termelés

Az energiatermelés **koncentrálódott** a régi viszonyokhoz képest:

- Nagyobb erőművek
- Jobb hatásfok nagy teljesítmény esetén
- Kisebb удельные költségek

> **Trend:** Az utóbbi években viszont megjelentek a **decentralizált** energiatermelők (naperőművek, szélerőművek, HMKE-k), ami új kihívásokat jelent a hálózati irányítás szempontjából.
