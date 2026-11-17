# Fürdőszoba zónák és elektromos szerelése

## Zónák és védettségi követelmények

A fürdőszobában a vízzel való érintkezés miatt szigorú **zónabeosztás** és **IP védettségi** követelmények vannak.

### 0. sáv (zóna)

**Hol van?** Kád/zuhanytálca belseje (vízzel érintkező terület)

**Követelmények:**
- Csak **12 V** váltakozó törpefeszültségről táplált készülék
- Legalább **IPX7** védettség (időszakos vízbemerítés ellen)
- Csak akkor, ha a műszaki leírás kifejezetten megengedi

### 1. sáv (zóna)

**Hol van?** Kád/zuhany körüli térség (függőleges zóna a kád/zuhanytálca fölött)

**Követelmények:**
- Legalább **IPX4** védettségű, rögzített és állandó csatlakozású fogyasztókészülék
- Csak akkor, ha a leírása megengedi
- Kapcsoló és dugalj csak törpefeszültségű lehet

### 2. sáv (zóna)

**Hol van?** A 1. sávtól számított kb. 60 cm távolság

**Követelmények:**
- Legalább **IPX4** védettségű fogyasztókészülék
- Törpefeszültségű kapcsoló és dugalj
- **Védőelválasztó trafóval egybeépített** dugalj megengedett

### 3. sáv (zóna) és azon kívül

**Hol van?** A 2. sávon kívüli terület

**Követelmények:**
- A dugaljak **nem lehetnek alul** (40 cm), csak a magasabb sávban (**140 cm**)
- Minden berendezést **30 mA-es vagy érzékenyebb AVK**-n át kell táplálni

## Zónaméretek

```
     ┌─────────────────────────────┐
     │                             │
     │       Mennyezet             │  2,25 m vagy 3,00 m
     │                             │  (zónahatár magassága)
     ├─────────────────────────────┤
     │  2. sáv  │  1. sáv │        │
     │  0,6 m   │  Kád/   │        │
     │          │ Zuhany  │        │
─────┴──────────┴─────────┴────────┴─────
     │0. sáv (kád belseje)│
     └────────────────────┘
```

**Méretkifejtés:**
- **0. sáv:** Kád/zuhanytálca belseje
- **1. sáv:** Függőlegesen a kád/zuhanytálca felett (a padlótól a mennyezetig vagy 2,25 m-ig)
- **2. sáv:** 0,6 m sáv az 1. sávtól számítva
- **Magasság:** 2,25 m normál helyiségmagasság esetén, 3,00 m magasabb fürdőszobákban

## Vezetékszerelés a zónákban

### 0. és 1. sáv

A vezeték **legalább 5 cm mélyen** lehet a vakolatban.

**Falon kívüli vezeték is megengedett!** (de megfelelő IP védelemmel)

## Potenciálkiegyenlítés

### Kád és vízcsap

**Kád és vízcsap egyenpotenciálra hozó vezetékkel** összekötve.

**Potenciálkiegyenlítő vezeték minimális keresztmetszete:**
- Réz: **4 mm²**

### Minden berendezés

A fürdőszoba minden fém berendezését össze kell kötni:
- Kád fémszerkezete
- Vízcsapok
- Fémcsövek
- Radiátor
- Zuhanykabin
- Esetleg fémlemez padló alatti megerősítés

## AVK követelmények

A fürdőszoba minden berendezését **30 mA-es vagy érzékenyebb AVK**-n át kell táplálni.

Ez lehet:
- Közös AVK a fürdőszoba összes áramkörére
- Vagy külön AVK minden áramkörre

> **Fontos:** A 30 mA-es AVK biztosítja a személyvédelmet, mivel halálos áramütés ellen véd (az érzékelési küszöb ~0,5 mA, az elengedési határ ~15 mA).

## Tipikus fürdőszoba áramkör

```example
**Fürdőszoba kialakítás:**

Lakáselosztó → AVK 30 mA → C16 kismegszakító

Áramkör tartalma:
- Fürdőszoba világítás (mennyezeti lámpa, tükör feletti lámpa)
- Fürdőszoba dugalj (140 cm magasan, IPX4 védett, kék színű)
- Fali fűtőtest (törölközőszárító radiátor)
- Bojler (ha van)

Vezeték: 3×2,5 mm²
Védelem: C16 (AVK 30 mA-val kombinálva vagy RCBO)
```

## Gyakori hibák

### 1. Aljzat rossz magasságban

❌ **Helytelen:** Dugalj 40 cm magasan fürdőszobában

✅ **Helyes:** Dugalj 140 cm magasan fürdőszobában

### 2. Nem megfelelő IP védettség

❌ **Helytelen:** Sima kapcsoló közvetlenül a zuhany mellett (IP20)

✅ **Helyes:** IPX4 védett kapcsoló, vagy kívül a 2. sávon

### 3. AVK hiánya

❌ **Helytelen:** Fürdőszoba áramkör AVK nélkül

✅ **Helyes:** 30 mA-es AVK minden fürdőszoba áramkörön

### 4. Potenciálkiegyenlítés hiánya

❌ **Helytelen:** Fém kád nincs földelve/kiegyenlítve

✅ **Helyes:** Minden fém berendezés kiegyenlítve 4 mm² vezetékkel

## Összefoglalás

| Zóna | IP védettség | Feszültség | Vezetékszerelés |
|---|---|---|---|
| **0. sáv** | IPX7 | max. 12 V AC | min. 5 cm mélyen |
| **1. sáv** | IPX4 | max. 12 V AC (kapcsoló, dugalj) | min. 5 cm mélyen |
| **2. sáv** | IPX4 | védőelválasztó transzformátoros dugalj | szabvány szerint |
| **3. sáv** | IP20 | 230 V (dugalj 140 cm magasan) | szabvány szerint |

> **Kritikus:** Minden áramkört 30 mA-es AVK-n keresztül kell táplálni!
