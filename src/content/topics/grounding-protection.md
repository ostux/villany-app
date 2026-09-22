# Földelés és érintésvédelem

## Közvetlen érintés vs. Közvetett érintés

### Közvetlen érintés

Az áramütéses balesetek egy része úgy következik be, hogy az ember (közvetlenül, vagy szerszámon, segédeszközön keresztül) általában a kezével **üzemszerűen feszültség alatt álló** (szabványos elnevezéssel: **aktív**) részt érint, ugyanakkor nem szigetelő talajon áll, vagy más testrészével földpotenciálon lévő fémrészhez ér.

Ezt a nemzetközi szabványok **közvetlen érintés**-nek, s az ezek megakadályozására szolgáló intézkedéseket **közvetlen érintés elleni védelem**-nek nevezi.

**Újabb elnevezés:** **alapvédelem** vagy **áramütés elleni védelem normálüzemben** (basic protection).

### Közvetett érintés

Az áramütéses balesetek nagy része azonban úgy következik be, hogy a balesetes a villamos szerkezet olyan részét (úgynevezett **test**-ét) érinti meg, amely üzemszerűen feszültségmentes, de hiba (testzárlat) következtében feszültség alá kerül.

Ezt a nemzetközi szabványok **közvetett érintés**-nek, s az ezek megakadályozására tett intézkedéseket **közvetett érintés elleni védelem**-nek nevezi.

**Újabb elnevezés:** **hibavédelem** (fault protection), amit a szakemberek simán **érintésvédelem**-nek hívnak.

## Védővezetős érintésvédelmi módok

A védővezetős érintésvédelmi módok közös jellemzője, hogy ezek alkalmazásánál a villamos berendezés testét (olyan vezetőanyagú - általában fém – érinthető részét, amely üzemszerűen nem áll feszültség alatt, de hiba esetén feszültség alá kerülhet) földelt védővezetővel (PE) kötik össze.

A tápláló áramkört annak túláramvédelme, vagy az abba beiktatott áram-védőkapcsolás által rövid idő alatt önműködően kikapcsolják, ha a védővezető testzárlat következtében veszélyes nagyságú érintési feszültségre kerül.

### Védővezető keresztmetszete

| Fázisvezető keresztmetszete | Védővezető (PE) keresztmetszete |
|---|---|
| ≤ 16 mm² | azonos a fázisvezetővel |
| 16–35 mm² | 16 mm² |
| > 35 mm² | a fázisvezető keresztmetszetének a fele |

## Áram-védőkapcsoló (AVK)

Az áram-védőkapcsoló (AVK) a védővezetős érintésvédelmi módoknál (főként a TN és TT rendszereknél) érintésvédelmi kikapcsolásra a túláramvédelem helyett igen előnyösen alkalmazott kikapcsoló szerv.

### Fontos jellemzők

> **Tehát nem külön érintésvédelmi mód!**

> **Túláramvédelmet nem lát el!**

Rövidítése: **AVK**

## Hálózati rendszerek összefoglalása

### TN rendszer (nullázás)

- A nullavezető védővezetőként is funkcionál
- Három változat: TN-C, TN-S, TN-C-S
- Leggyakoribb a TN-C-S (vegyes rendszer)

### TT rendszer (védőföldelés)

- A tápláló hálózat közvetlenül földelt
- A védett testek külön földelve vannak
- Kis ellenállású védőföldelés szükséges (Ra)

### IT rendszer

- A hálózat szigetelt vagy nagy impedancián keresztül földelt
- Szigetelés-ellenőrző készülék figyeli a hálózatot
- Csak különleges területeken (bányák, kórházak műtői)

## Egyenpotenciálra hozás (EPH)

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

## Megjegyzések

> **Fontos:** Szükséges megemlíteni, hogy a villamos balesetek nagy része nem áramütéses, hanem égési baleset, amit a berendezéseken fellépő villamos ív okoz!

> **Megjegyzés:** A védővezetőt a fázisvezetőkkel együtt (közös védőcsőben, közös többerű vezetékben) kell vezetni.
