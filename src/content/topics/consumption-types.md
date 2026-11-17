# Általános és vezérelt fogyasztás

## A vezérelt fogyasztás célja

A hálózat terhelésének időbeni kiegyenlítésére a nem folyamatos üzemű nagyobb fogyasztókat az áramszolgáltató **távvezérli**.

### Tipikus vezérelt fogyasztók

- **Bojler** (forróvíz-tároló)
- **Hőtárolós kályha**
- **Hőszivattyú**
- **Elektromos fűtés**

## Vezérlés módja

### Áramszolgáltató által vezérelt

- Az áramszolgáltató jelével kapcsolnak be/ki
- Általában éjszaka és napközben kedvezőbb időszakokban üzemelnek
- **Külön árszabás** alá esnek
- **Külön mérik** – külön hálózat, külön fogyasztásmérő

### Méréstechnika

- **Külön fogyasztásmérő** a vezérelt fogyasztásra
- Vagy **kéttarifás mérő** (nappal/éjjel regisztrálás)
- A vezérlőjel fogadása az épület elektromos rendszerén keresztül történik

## Általános fogyasztás

### Mért fogyasztói oldal

A mért fogyasztói oldal a megrendelő (fogyasztó) **kezelésében**, **üzemeltetésében** van.

### Áramkörök tervezése

Az áramkörszámokat **előrelátóan** kell meghatározni:
- Jövőbeli bővítési lehetőségek
- Tartalék áramkörök
- Megfelelő felosztás a terhelés kiegyensúlyozására

## Tarifák és árszabások

### MVM lakossági tarifák (példa, 2022. augusztus 1-jétől)

Különböző árszabások a fogyasztás típusa szerint:

- **A1 árszabás:** Általános háztartási fogyasztás
- **B árszabás:** Vezérelt fogyasztók (bojler, fűtés)
- **A2 árszabás:** Éjszakai áram
- **H árszabás:** Hőszivattyús fűtés
- **GEO árszabás:** Geotermikus fűtés

### Költségmegtakarítás

A vezérelt fogyasztás esetén **kedvezőbb árat** számítanak fel, mivel:
- Csúcsidőn kívül használják a hálózatot
- Segíti a hálózat terhelésének kiegyenlítését
- Olcsóbb az áramtermelés a csúcsidőn kívül

```example
**Példa:** 120 literes bojler, 1800 W teljesítménnyel

**Általános áram esetén:**
Napi felmelegítés: ~3 óra = 1,8 kW × 3 h = 5,4 kWh
Költség (40 Ft/kWh): 216 Ft/nap

**Vezérelt áram esetén (éjszakai tarifa):**
Napi felmelegítés: ~3 óra = 1,8 kW × 3 h = 5,4 kWh
Költség (25 Ft/kWh): 135 Ft/nap

**Megtakarítás:** 81 Ft/nap = ~2400 Ft/hó
```

## Hálózati követelmények

### Vezérelt fogyasztáshoz

- **Külön fővezeték** a fogyasztásmérőtől
- **Külön áramkörök** az elosztóban
- Vezérlőrelé vagy kontaktor a bekapcsoláshoz
- Megfelelő keresztmetszetű vezetékek (bojler: 2,5 mm², fűtés: nagyobb)

### Általános fogyasztáshoz

- Szabványos lakáshálózat kialakítás
- AVK védelem
- Túláramvédelem minden áramkörön

> **Fontos:** A vezérelt és általános fogyasztás szigorúan elkülönített hálózatokon kell, hogy működjön. Tilos a két hálózat összekapcsolása!
