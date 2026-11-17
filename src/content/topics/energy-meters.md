# Fogyasztásmérők

## Mérés követelményei

Pontos, hiteles mérés kell a szerződés szerinti elszámoláshoz.

### Mit mérünk?

- **Lakásoknál:** csak a **hatásos teljesítményt** mérik
  - $W = P \cdot t = U \cdot I \cdot \cos\varphi \cdot t$
- **Ipari fogyasztóknál:** a **meddő** fogyasztást is mérik

## Analóg (indukciós) fogyasztásmérő

### Működési elv

Az indukciós fogyasztásmérő két tekercs segítségével működik:

**Áramtekercs:**
- Nagy keresztmetszetű
- Kis menetszámú

**Feszültségtekercs:**
- Nagy menetszámú
- Nagy ellenállású

### Működés

1. A két tekercs mágneses tere **örvényáramot** hoz létre az **alumíniumtárcsában**
2. A tárcsa forog
3. A forgási sebesség arányos a teljesítménnyel
4. **Fékmágnes:** állandó fogyasztásnál állandó sebességű forgást biztosít

## Elektronikus és smart mérők

### Elektronikus fogyasztásmérők

- Digitálisan határozzák meg a felhasznált energiát
- Memóriával rendelkeznek
- Rögzíthetik a fogyasztás időbeli alakulását és zavarait
- A szolgáltató kiolvashatja

### Smart mérők

- A vezetékhálózaton keresztül kommunikálnak
- **Távleolvasás** lehetséges
- Automatikus adatgyűjtés

### Napelemes ad-vesz órák

- Felváltva mutatják a **betáplált** és **elfogyasztott** energiát
- **Háromjegyű kód** vagy **kis nyíl** jelzi, hogy épp melyiket mutatja

## Fogyasztásmérőhely elhelyezése

### Új mérőhely

- **Épület külső falán** vagy **telekhatáron**
- Több fogyasztási hely esetén épületenként vagy szintenként
- Hozzáférhető közlekedő terekben

### Mérési mód

| Áramerősség | Mérési mód |
|---|---|
| **50 A-ig** (akár 80 A) | **Közvetlen mérés** |
| **50 A felett** | **Közvetett, áramváltós** mérés |

### Áramváltó

- Tulajdonképpen egy trafó
- Adott arányban csökkenti az áramot (pl. 1000/5 → 1000 A-ből 5 A)

```example
Példa: 5:1 áttételnél, ha $I_p = 100 \, \text{A}$, akkor $I_s = 20 \, \text{A}$
```

## Fogyasztásmérőhely kialakítása

### Általános követelmények

- **Tervdokumentáció** kell
- Környezetében **60 cm-en belül fémhálózat nem lehet**
- Méretlen fővezeték a lehető legrövidebb úton
- **Bérleményben, lakótérben nem haladhat**

### Méretezési követelmények

| Elem | Magasság |
|---|---:|
| Szekrény alsó része | min. 60 cm |
| Fogyasztásmérő | max. 180 cm |

### Többlakásos épület

- Minden fogyasztónak **külön zárható szekrény**
- Takarólap takarja a csatlakozási pontokat
- Tokozás fedele **átlátszó**
- Rögzítők **zárópecsételhetők**
- A kismegszakító a **fedél nyitása nélkül** működtethető

### Védőföldelés

- A szekrény erre kialakított részében kell a védőföldelés és a PE összekötését biztosítani
- **A PE és az N vezetőt a fogyasztásmérő után tilos összekötni**

### Többlakásos épület - méretlen hálózat

- A méretlen hálózatot a **csatlakozó főelosztó** fogadja
- Itt van az első túláramvédelmi készülék

## Példa: Társasház csatlakozási terv

**Általános adatok:**
- $U_n = 3 \times 230/400 \, \text{V}$
- $I_n = 250 \, \text{A}$
- $I_z = 10 \, \text{kA}$
- Rendszer: TN-S
- $R_e < 10 \, \Omega$

| Megnevezés | Teljesítmény [kVA] | Védőcső | Vezetéktípus | Keresztmetszet [mm²] |
|---|---|---|---|---|
| Betáplálás | 155 | d63 Mü III | H07V-K | 4×95 |
| Túlfeszültség-levezető | – | – | H07V-K | 4×85 |
| „A" felszálló fővezeték | 48 | d48 Mü III | H07V-K | 4×35+16 |
| „B" felszálló fővezeték | 47 | d48 Mü III | H07V-K | 4×35+16 |
| „C" felszálló fővezeték | 25 | d36 Mü III | H07V-K | 4×25+16 |
| „D" felszálló fővezeték | 25 | d36 Mü III | H07V-K | 4×25+16 |
| Ház közös fogyasztók | 10 | d36 Mü III | H07V-K | 5×10 |

> **Megjegyzés:** A felszálló fővezetékek 5 erűek (3 fázis + N + PE), mivel a PEN szétválasztás már megtörtént a főelosztóban.
