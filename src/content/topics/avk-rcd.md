# Áram-védőkapcsoló (AVK / RCD)

## Mi az áram-védőkapcsoló?

Az **áram-védőkapcsoló** (AVK, angolul RCD - Residual Current Device) olyan védőeszköz, amely a **hibaáram** (maradványáram) alapján kapcsol ki.

### Alapelv

Normál működés esetén:
```
Bemenő áram (fázis) = Kimenő áram (nulla)
```

Testzárlat vagy földzárlat esetén:
```
Bemenő áram ≠ Kimenő áram  →  Hibaáram van!
```

> **Az AVK ezt az árammegkülönbözést érzékeli és kiold.**

## Működési elv

### Áramváltó elv

Az AVK egy **összegező áramváltót** tartalmaz, amelyen a fázis- és nullavezetők áthaladnak:

```
    ┌──────────────────────────┐
    │   Összegező áramváltó    │
    │                          │
 L ─┼─────→  I_fázis          │
    │         ║                │
    │         ║   ╔══════╗     │
    │         ╚═══╣ Vas- ║     │
    │             ║ mag  ║     │
    │         ╔═══╣      ║     │
    │         ║   ╚══════╝     │
 N ─┼─────←  I_nulla           │
    │                      │   │
    │                   Kioldó │
    │                   tekercs│
    └──────────────────────────┘
```

### Normál üzem

Ha nincs hiba:

$$I_{\text{fázis}} = I_{\text{nulla}}$$

→ mágneses tér kölcsönösen kioltja egymást
→ nincs indukált feszültség
→ NEM old ki

### Hibaáram esetén

Ha testzárlat van:

$$I_{\text{fázis}} > I_{\text{nulla}} \quad \text{(a hibaáram a földön folyik vissza)}$$

→ mágneses tér egyensúly felbomlik
→ indukált feszültség keletkezik
→ kioldó tekercs működik
→ AVK KIOLD

## AVK típusok és jellemzők

### AVK típusok összefoglalása

#### a) AC típusú AVK

<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
  <!-- Square box -->
  <rect x="15" y="15" width="50" height="50" fill="none" stroke="#22c55e" stroke-width="2.5"></rect>
  <!-- Sine wave inside -->
  <path d="M 20,40 Q 27.5,30 35,40 T 50,40 T 60,40" fill="none" stroke="#22c55e" stroke-width="2"></path>
</svg>

- Csak tiszta **szinuszos váltakozó** hibaáramra érzékeny
- Háztartási, irodai alkalmazások (régebbi építések)

#### b) A típusú AVK

<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
  <!-- Square box -->
  <rect x="15" y="15" width="50" height="50" fill="none" stroke="#3b82f6" stroke-width="2.5"></rect>
  <!-- Sine wave on top -->
  <path d="M 20,32 Q 27.5,24 35,32 T 50,32" fill="none" stroke="#3b82f6" stroke-width="2"></path>
  <!-- Line-arch-line-arch-line on bottom -->
  <line x1="20" y1="48" x2="26" y2="48" stroke="#3b82f6" stroke-width="2"></line>
  <path d="M 26,48 Q 30,40 34,48" fill="none" stroke="#3b82f6" stroke-width="2"></path>
  <line x1="34" y1="48" x2="40" y2="48" stroke="#3b82f6" stroke-width="2"></line>
  <path d="M 40,48 Q 44,40 48,48" fill="none" stroke="#3b82f6" stroke-width="2"></path>
  <line x1="48" y1="48" x2="54" y2="48" stroke="#3b82f6" stroke-width="2"></line>
</svg>

- **Váltakozó áramra** és **pulzáló egyenáramra** is érzékeny
- Modern háztartási eszközökhöz (mosógép, főzőlap, LED meghajtók)
- **Lakásokba ajánlott!**

#### c) B típusú AVK

<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
  <!-- Square box -->
  <rect x="15" y="15" width="50" height="50" fill="none" stroke="#a855f7" stroke-width="2.5"></rect>
  <!-- Continuous line on top -->
  <line x1="20" y1="32" x2="60" y2="32" stroke="#a855f7" stroke-width="2"></line>
  <!-- Dashed line underneath -->
  <line x1="20" y1="48" x2="28" y2="48" stroke="#a855f7" stroke-width="2"></line>
  <line x1="32" y1="48" x2="40" y2="48" stroke="#a855f7" stroke-width="2"></line>
  <line x1="44" y1="48" x2="52" y2="48" stroke="#a855f7" stroke-width="2"></line>
  <line x1="56" y1="48" x2="60" y2="48" stroke="#a855f7" stroke-width="2"></line>
</svg>

- **Váltakozó áram** + **pulzáló egyenáram** + **tiszta egyenáram**
- Ipari alkalmazások, frekvenciaváltók

#### d) S típusú (szelektív) AVK

<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
  <!-- Square box -->
  <rect x="15" y="15" width="50" height="50" fill="none" stroke="#f97316" stroke-width="2.5"></rect>
  <!-- Capital S letter as text -->
  <text x="40" y="40" font-size="32" font-weight="bold" fill="#f97316" text-anchor="middle" dominant-baseline="middle">S</text>
</svg>

- **Időkésleltetett** kioldás (S = Szelektív)
- **Meg nem szólalási időhatár: min. 130 ms**
- Főelosztókban, szelektív védelem biztosítására

> **Fontos:** Modern háztartási készülékeknél (mosógép, mosogatógép) **A típusú AVK szükséges**, mert ezek pulzáló egyenáramot is termelhetnek.

### Típusok hibaáram jellege szerint (részletes)

| Típus | Jellemző | Alkalmazás |
|-------|----------|------------|
| **AC típus** | Váltakozó hibaáramra érzékeny | Háztartási, irodai alkalmazások |
| **A típus** | AC + pulzáló egyenáramra érzékeny | Mosógépek, főzőlapok, LED meghajtók |
| **B típus** | AC + pulzáló + sima egyenáramra | Ipari alkalmazások, frekvenciaváltók |

### Kioldási áram szerint

Leggyakoribb névleges hibaáramok (IΔn):

| IΔn | Alkalmazás |
|-----|------------|
| **10 mA** | Különleges veszélyes helyek (pl. építkezés) |
| **30 mA** | **Személyvédelem** (általános kötelező érték) |
| **100 mA** | Tűzvédelem, nagyobb áramkörök |
| **300 mA** | Ipari alkalmazások, fő elosztók |

> **Szabvány szerint:** Személyvédelem céljából **max. 30 mA** hibaáramra kioldó AVK szükséges!

### Kioldási idő szerint

| Típus | Kioldási idő | Alkalmazás |
|-------|--------------|------------|
| **Általános (nem késleltetett)** | < 0,3 s (30 mA-nél) | Végkörök védelme |
| **S típus (szelektív)** | 0,13-0,5 s késleltetés | Fő elosztókban, szelektív védelem |
| **Kábel védelem 30 mA** | 0,03 s (gyorsan kioldó) | Kábelégés védelem |

## AVK telepítési követelmények

### Hol kötelező AVK?

Kötelező alkalmazási helyek:

1. **Konektorok esetén:**
   - 20 A-nél kisebb névleges áramú csatlakozó aljzatok (háztartási, irodai)
   - Kültéri csatlakozók
   - Vizes helyiségek csatlakozói

2. **Speciális helyek:**
   - Fürdőszobák
   - Konyhák
   - Udvari csatlakozók
   - Építkezések ideiglenes ellátása

3. **Egyéb előírások szerint:**
   - Kézi fémszerszámok (ha nincs II. osztályú védelem)
   - Mozgatható berendezések

### Telepítési korlátozások

**AVK NEM használható:**

- **PEN vezetőn!** (TN-C rendszerben tilos)
- Olyan áramkörben, ahol a védő- és nullavezető nincs szétválasztva

**AVK CSAK alkalmazható:**

- TN-S rendszerben (teljes PE és N szétválasztás)
- TN-C-S rendszer PE szakaszán (PEN szétválasztás után)
- TT rendszerben
- IT rendszerben (speciális kialakítással)

```
TN-C-S rendszer helyes AVK elhelyezése:

PEN ────┬──── N ──── [AVK] ──── fogyasztó
        │
        └──── PE ────────────── fogyasztó teste
        │
        ═ (földelés)
```

> **Kritikus szabály:** Az AVK után a PE és N vezetők **SOHA nem csatlakozhatnak össze!**

## AVK vs. Túláramvédelem

### Mit NEM lát el az AVK?

Az AVK **NEM nyújt túláramvédelmet!**

- Nem véd rövidzárlat ellen
- Nem véd túlterhelés ellen
- Csak hibaáramra reagál

### Kötelező kombinálás

**AVK mindig MCB-vel (kismegszakító) vagy biztosítékkal együtt használandó:**

```
[MCB] + [AVK] ──── fogyasztó
```

vagy kombinált készülék:

```
[RCBO] ──── fogyasztó
(AVK + MCB egy készülékben)
```

## AVK tesztelése

### Beépített teszt gomb

Minden AVK-n van egy **TEST (T)** gomb:

- Havonta egyszer meg kell nyomni
- Mesterséges hibaáramot hoz létre
- Ha kiold → AVK működik ✓
- Ha nem old ki → AVK hibás, cserélni kell! ✗

> **Fontos:** Az AVK tesztelése az üzemeltető feladata. Elhanyagolása veszélyes!

### Professzionális tesztelés

Villanyszerelő speciális AVK teszterrel ellenőrzi:

- Kioldási áram pontosságát
- Kioldási időt
- Érintési feszültséget

## Gyakori hibák és problémák

### 1. AVK indokolatlanul kiold

**Lehetséges okok:**

- Természetes szivárgó áramok összeadódása (túl sok készülék egy AVK-n)
- Szigetelési hiba a hálózaton
- Nedvesség a kapcsolókban/csatlakozókban
- Hibás készülék

**Megoldás:** Szigetelés mérése, hibás készülék megkeresése, több AVK alkalmazása

### 2. AVK nem old ki teszt esetén

**Ok:** Az AVK meghibásodott

**Megoldás:** Azonnali csere szükséges!

### 3. AVK beépítése PEN vezetőre

**Ok:** Szabálytalan telepítés

**Megoldás:** PE és N szétválasztása, AVK áthelyezése

## AVK előnyei érintésvédelemben

| Szempont | MCB védelem | AVK védelem |
|----------|-------------|-------------|
| Kioldási áram | 50-100 A vagy több | 30 mA (személyvédelem) |
| Kioldási idő | 0,2-0,4 s | < 0,03 s (30 mA-nél) |
| Függés a Zs-től | Igen, hurokimpedancia kritikus | Nem függ a hurokimpedanciától |
| Túláramvédelem | Igen | **NEM** |
| Alkalmazhatóság | Mindenhol | Csak PE/N szétválasztás után |

> **Következtetés:** Az AVK sokkal nagyobb biztonságot nyújt személyek védelmére, de **nem helyettesíti** a túláramvédelmet!

## RCBO - Kombinált áram-védőkapcsoló

Az **RCBO** (Residual Current Breaker with Overcurrent protection) egy kombinált készülék, amely **egyben tartalmazza** a kismegszakító és az áram-védőkapcsoló funkcióit.

### Hivatalos neve

**Áram-védőkapcsoló beépített túláram védelemmel** (hibaáram által működtetett áramköri megszakító beépített túláram védelemmel)

### Funkciók (2 in 1)

Az RCBO egyaránt ellátja:
- **Rövidzárlat védelem** (MCB funkció)
- **Túláram védelem** (MCB funkció)
- **Földzárlati hibaáram védelem** (AVK funkció)

### Előnyök

- Helytakarékos megoldás (1 modul szélesség helyett 2)
- Nincs szükség külön MCB és AVK kombinációra
- Komplett védelem egy készülékben

### Kiválasztási paraméterek

A megfelelő RCBO kiválasztásához figyelembe kell venni:
- Névleges áram ($I_n$)
- Kioldási jelleggörbe (B, C, D)
- Hibaáram érzékenység ($I_{\Delta n}$: általában 30 mA)
- AVK típus (AC, A, B, S)
- Névleges feszültség (230/400V)
- Modul szám

> **Fontos:** Lakásokban **A típusú** RCBO javasolt, mert a modern háztartási eszközök pulzáló egyenáramot is termelnek.

## Szabványi követelmények

Az **MSZ HD 60364-4-41:2018** szabvány szerint:

- 20 A-nél kisebb konektoroknál 30 mA AVK kötelező
- Fürdőszobákban minden áramkör védve legyen AVK-val
- AVK tesztelése havonta ajánlott, évente kötelező ellenőrzés szakemberrel
- PEN vezetőn AVK használata tilos

> **Megjegyzés:** Az AVK használata az elmúlt évtizedekben jelentősen csökkentette a halálos kimenetelű áramütéses balesetek számát.
