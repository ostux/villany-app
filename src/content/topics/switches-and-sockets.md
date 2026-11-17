# Kapcsolók és dugaszolóaljzatok

## Kapcsolók magassága és elhelyezése

### Szabványos magasságok

| Szerelvény | Magasság (padló felett) |
|---|---|
| Kapcsolók, csengők, ipari aljzatok | 140–150 cm |
| Dugaszolóaljzatok | 40 cm |
| Dugaszolóaljzat párás, nedves helyiségben | 140–150 cm |
| Kötésdobozok | mennyezettől kb. 30 cm lejjebb |

> **Fontos:** Billenőkapcsolóknál a **felső benyomott állapot** jelezze a bekapcsolást.

### Fürdőszobák

Fürdőszobák szerelvényezése külön rajz alapján, zónáknak megfelelően.

## Kötések

**Kötést csak elágazó dobozban** készítünk:
- Csavaros összekötővel
- Sorkapoccsal
- A színjelzések betartásával

### Wago összekötők

- **Billenőkaros:** oldható, sodrott vezetékhez
- **Fix:** tömör vezetékhez

## Kapcsolók típusai (számjelölés)

| Szám | Kapcsoló | Megjegyzés |
|---|---|---|
| **101** | Egypólusú (egysarkú) kapcsoló | 1 lámpa/lámpacsoport egy helyről |
| **102** | Kétpólusú (kétsarkú) kapcsoló | Fázist és nullát is bont |
| **103** | Hárompólusú kapcsoló | Háromfázisú fogyasztóhoz (L1, L2, L3) |
| **105** | Csillárkapcsoló (két áramkörös) | Két lámpacsoport egy helyről |
| **106** | Alternatív (váltó) kapcsoló | Egy lámpa két helyről (106 + 106) |
| **106+6** | Kettős alternatív kapcsoló | Két lámpa két helyről |
| **107** | Keresztkapcsoló | 3 vagy több helyről: 106 – 107 – 106 |

### Példák kapcsolási rajzokra

**Egysarkú kapcsoló (101):**
- Fázis → Kapcsoló → Lámpa → Nulla
- 2 vezeték (fázis, visszavezetés)

**Váltókapcsoló (106-106):**
- Egy lámpa két helyről kapcsolható
- 3 vezeték (fázis, 2 összekötő, lámpa)

**Keresztváltó (106-107-106):**
- Egy lámpa három vagy több helyről kapcsolható
- 4 vezeték (fázis, 2×2 összekötő, lámpa)

## Kapcsolók szerelése

### Rögzítés

- **Körmös-csavaros** rögzítőelemmel
- Vagy a **dobozba hajtott csavarokkal**

### Bekötési sorrend

**Falon kívüli** kapcsolóba a vezetéket a kapcsoló **felszerelése és rögzítése után** kötjük be.

**Süllyesztett** kapcsolónál a **felszerelés előtt** kötjük be.

> **Fontos:** A kapcsoló **minden esetben a fázisvezetőt** szakítja meg → kikapcsolt állapotban feszültségmentesség.

## Dugaszolóaljzatok

### Feladata

Hordozható és áthelyezhető fogyasztók csatlakoztatása a rögzített hálózathoz.

### Fajták

| Típus | Leírás |
|---|---|
| **2P+PE** | Egyfázisú, védőföldeléssel |
| **3P+PE** | Háromfázisú, védőföldeléssel (nulla nélkül) |
| **3P+N+PE** | Háromfázisú, nullával és védőföldeléssel |

### Áramerősség

**Háztartási:**
- 10 A
- 16 A

**Ipari:**
- 16 A
- 32 A
- 63 A
- 125 A

### Védettség

**IP besorolás** szerint (pl. IP20, IP44, IP54, stb.)

> **Fontos:** Kerülni kell a **felfűzést** (egy aljzatot egy másik aljzat kapcsairól táplálni): túlterhelés, illetve vezetéklazulás/szakadás esetén a fázis, a nulla vagy a védővezető is megszakadhat.

## Követelmények

### Mechanikai követelmények

- Dugvilla és aljzat **szerszám nélkül nem bontható**
- Fázis- és védőérintkező **felcserélhetetlensége**
- Helytelen dugaszolhatóság elleni védelem (eltérő geometria feszültségszintenként)
- **Egypólusú dugaszolhatóság** megakadályozása

### Érintkezési sorrend

1. **Védőérintkező** (PE)
2. **Nulla és fázis(ok)** (N, L1, L2, L3)

> Ez biztosítja, hogy a készülék háza már földelve van, mielőtt feszültség alá kerülne.

## Mérhető feszültségek

### Helyes bekötés esetén (egyfázisú)

| Pontok | Feszültség |
|---|---:|
| L1 – N | 230 V |
| L1 – PE | 230 V |
| N – PE | 0 V |

### Háromfázisú aljzat (3F+N+PE)

**Bekötés a csatlakozó felől nézve balról jobbra: L1, L2, L3**

| Pontok | Feszültség |
|---|---:|
| L1–L2, L2–L3, L1–L3 | 400 V |
| L1–N, L2–N, L3–N | 230 V |
| L1–PE, L2–PE, L3–PE | 230 V |
| N – PE | 0 V |

## Ipari csatlakozók

### Színjelölése feszültség szerint

| Feszültség | Szín |
|---|---|
| 42 V | lila |
| 100–130 V | sárga |
| **230 V** (200–250 V) | **kék** |
| **400 V** | **piros** |
| 480–500 V | fekete |

### Felcserélhetetlenség

- Feszültségszint és áramnem szerint különböző érintkező-elrendezés → nem keverhetők össze
- Áramerősség szerint sem cserélhetők fel: a nagyobb áramúak érintkezői vastagabbak
- **400 V-os ipari csatlakozó:**
  - **4 pólusú** (3F+PE, nincs nulla)
  - **5 pólusú** (3F+N+PE, van nulla)

## Nyomvonal, vezetékhossz, hajlítás

### Nyomvonal

A nyomvonal **mindig vízszintes és függőleges**.

### Vezetékhossz számítása

**Vezetékhossz = nyomvonal + kötések + tartalék**

| Kötéshely | Kötéshossz |
|---|---|
| Leágazó doboz | 15–15 cm |
| Lakáselosztó | 30 cm |
| Lámpatest | 20 cm |
| Mérőhely | 50 cm |
| Tartalék | 5–10 cm |

### Hajlítás

- A vezeték **élre** vagy **lapra** hajtható
- **Lapra hajlításnál:** görbületi sugár = vezető átmérőjének **kétszerese**
- **Élre hajlításnál:** a vezetékek közti szalagrészt **10–15 cm** hosszan fel kell vágni

## Megvéshetőségi követelmények

### Teherhordó falak

**Nem szabad megvésni:**
- Függőleges falvégekhez közel
- Kéményeknél és szellőzőknél, ahol a fal **12 cm vagy vékonyabb**
- Boltozott nyílásáthidalókat, ha a nyílás **1,2 m-nél szélesebb**

### Válaszfalak

- **10 cm-nél vékonyabb** válaszfal csak **egy oldalon** vésható
- **Nem véshetők:**
  - Tömör téglából készült **6 cm-nél vékonyabb** válaszfal
  - **Vasbeton** fal
  - **Cementrabitz** fal
