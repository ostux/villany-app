# Földelési rendszerek

## Főföldelő sín (MET - Main Earthing Terminal)

A **főföldelő sín** (MET) a villamos létesítmény központi földelési pontja, ahol a következő elemek kapcsolódnak:

- **Védővezetők** (PE)
- **Földelővezeték** (a földelő elektródától)
- **Potenciálkiegyenlítő vezetékek**
- **Funkcionális földelések** (ha szükséges)

> **Fontos:** A főföldelő sínnek könnyen hozzáférhetőnek és jól láthatónak kell lennie, hogy bármikor ellenőrizhető és mérhető legyen.

## Földelő elektródák típusai

### 1. Függőleges földelő rúd

A leggyakoribb földelési módszer:

- **Anyag:** horganyzott acél vagy réz bevonatú acél
- **Méret:**
  - Átmérő: 14-16 mm
  - Hossz: 1,5-3 m (általában 2 m)
- **Telepítés:** függőlegesen a földbe verve
- **Előny:** kis helyen is elhelyezhető, könnyen telepíthető

```
      Földszint
         │
    ═════╪═════  ← talaj felszíne
         │
         │  ← földelő rúd
         │     (2 m hosszú)
         │
         ●
```

### 2. Vízszintes szalag földelő

Nagyobb földelési területet fed le:

- **Anyag:** horganyzott acélszalag vagy réz szalag
- **Méret:**
  - Szélesség: 25-30 mm
  - Vastagság: 4 mm
  - Hossz: változó (10-50 m)
- **Telepítés:** 0,5-1 m mélyen vízszintesen
- **Előny:** nagy felületen érintkezik a talajjal

```
    ═════════════════════  ← talaj felszíne
         │
    0,5-1 m
         │
    ─────────────────────  ← szalag földelő
```

### 3. Lemez földelő

Nagyobb földelési felület biztosítására:

- **Anyag:** horganyzott acél vagy réz lemez
- **Méret:** min. 0,5 m²
- **Telepítés:** legalább 1 m mélyen
- **Előny:** kis fajlagos talaj ellenállás esetén hatékony

### 4. Alapozási földelő

Épület alapozásának felhasználása:

- **Anyag:** vasbeton alapozás betonacélja
- **Méret:** az épület alapozásának mérete szerint
- **Előny:**
  - nagy érintkezési felület
  - tartós és megbízható
  - nem igényel külön telepítést
- **Követelmény:** min. Ø 10 mm betonacél

> **Megjegyzés:** Az alapozási földelő a leghatékonyabb és legmegbízhatóbb földelési mód új építésű épületeknél.

## Talaj fajlagos ellenállása

A földelés hatékonyságát nagymértékben befolyásolja a **talaj fajlagos ellenállása** (ρ):

| Talaj típusa | Fajlagos ellenállás (Ωm) |
|--------------|--------------------------|
| Mocsaras, lápos talaj | 10-40 |
| Agyag, agyagos talaj | 40-100 |
| Homokos agyag | 100-200 |
| Homok | 200-2000 |
| Kavics | 1000-5000 |
| Szikla, kőzet | 2000-10000 |

> **Fontos:** Minél kisebb a fajlagos ellenállás, annál jobb a földelés hatékonysága. Rossz talaj esetén több elektródát kell párhuzamosan alkalmazni.

## Földelő elektróda ellenállásának számítása

### Függőleges rúd földelő

$$R_a = \frac{\rho}{2\pi L} \times \ln\left(\frac{4L}{d}\right)$$

ahol:
- $R_a$ = földelési ellenállás (Ω)
- $\rho$ = talaj fajlagos ellenállása (Ωm)
- $L$ = rúd hossza (m)
- $d$ = rúd átmérője (m)
- $\ln$ = természetes logaritmus

```example
Példa: ρ=100 Ωm, L=2m, d=0,016m esetén:

$R_a = \frac{100}{2\pi \times 2} \times \ln\left(\frac{4 \times 2}{0{,}016}\right)$

$R_a = \frac{100}{12{,}57} \times \ln(500)$

$R_a = 7{,}96 \times 6{,}21 \approx 49{,}4 \, \Omega$
```

### Párhuzamosan kapcsolt elektródák

Ha több földelő elektródát használunk párhuzamosan:

$$R_{a(\text{összes})} = \frac{R_{a(\text{egy})}}{n \times \eta}$$

ahol:
- $n$ = elektródák száma
- $\eta$ = hatékonysági tényező (0,5-0,9, távolságfüggő)

> **Fontos:** A hatékonysági tényező azt mutatja, hogy a párhuzamosan kapcsolt elektródák mennyire befolyásolják egymást. Minél távolabb vannak egymástól, annál közelebb van η értéke 1-hez.

## Földelővezeték

A **földelővezeték** köti össze a földelő elektródát a főföldelő sínnel (MET).

### Minimális keresztmetszet

| Védelem típusa | Réz | Acél |
|----------------|-----|------|
| Mechanikai sérülés ellen védett | 6 mm² | 50 mm² |
| Mechanikai sérülés ellen nem védett | 16 mm² | 50 mm² |

### Telepítési követelmények

- **Védett vezetés:** földben csőben, vagy épületben fixen szerelve
- **Jelölés:** zöld-sárga színnel jelölve
- **Csatlakozás:** korrózióálló csatlakozással
- **Hozzáférhetőség:** ellenőrző pontokon mérhető legyen

## Potenciálkiegyenlítés

A **potenciálkiegyenlítő rendszer** célja, hogy az épület különböző fém részei között ne alakuljon ki veszélyes potenciálkülönbség.

### Főpotenciál-kiegyenlítés

Össze kell kötni a főföldelő sínnel:

- Védővezetőket (PE)
- Fémvízvezetékeket
- Fémgázvezetékeket
- Fűtési és klíma csöveket
- Épület szerkezeti fém részeit
- Villámvédelmi levezetőket

### Kiegészítő potenciálkiegyenlítés

Speciális helyiségekben (fürdőszoba, konyha) további helyi kiegyenlítés:

- Fürdőkád fémszerkezete
- Zuhanykabin fémszerkezete
- Csaptelepek fémrészei
- Fém radiátorok

> **Megjegyzés:** A kiegészítő potenciálkiegyenlítés különösen fontos a vizes helyiségekben, ahol megnövekedett az áramütés veszélye.

## Földelés ellenőrzése

### Földelési ellenállás mérése

A földelési ellenállást rendszeresen ellenőrizni kell:

- **Mérési módszer:** 3 vagy 4 pólus mérés földelés mérővel
- **Gyakoriság:** évente, új létesítménynél üzembe helyezéskor
- **Határérték:** az adott rendszer által megkövetelt Ra érték (TT rendszernél kritikus)

### Vizuális ellenőrzés

- Csatlakozások integritása
- Korrózió ellenőrzése
- Vezetékek épségének ellenőrzése
- Jelölések megléte

> **Figyelem:** Rossz vagy hibás földelés az érintésvédelem teljes meghibásodását okozhatja, ezért a rendszeres ellenőrzés életbevágóan fontos!
