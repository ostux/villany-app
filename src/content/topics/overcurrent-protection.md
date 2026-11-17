# Túláramvédelem

## Alapfogalmak

### Megengedett áram

**Megengedett áram:** tartós terhelés esetén sem okoz termikus károsodást.

Készülékeknél ezt **névleges áramnak** (In) nevezzük.

### Túláram

**Túláram:** a megengedettnél nagyobb áram.

**Okai:**
- **Zárlat** (rövidzár)
- **Túlterhelés**

> **A védelem feladata:** a túláram időbeni megszakítása, mielőtt károsodás következik be.

## A kismegszakító felépítése

### Részei

1. **Működtető kar** – kézi be/kikapcsoláshoz és a kioldási állapot jelzéséhez
2. **Működtetőszerkezet** – mechanikus kioldó rendszer
3. **Érintkezések** – az áramkör szakításához
4. **Csatlakozó csavarok** – vezetékek bekötéséhez
5. **Bimetál** – túlterhelés érzékelő
6. **Kalibráló csavarok** – gyári beállításhoz
7. **Zárlati kioldó tekercs** – elektromágnes zárlat esetén
8. **Ívoltókamra** – az ív biztonságos eloltásához

## Védelem működése

### Túlterhelés ellen

**Bimetál (ikerfémes hőkioldó):**
- Tartós túlterhelésnél melegszik és meghajlik
- **1,13 × In**-t több mint 1 órán át elvisel
- **1,45 × In** esetén **1 órán belül** le kell kapcsolnia
- Olcsó, de pontatlan

### Zárlat ellen

**Elektromágnes (mágneses kioldó):**
- Nagy zárlati áramnál azonnal kiold
- Gyors reakció (ms-okban)

> **Fontos:** A bimetál és az elektromágnes ugyanazt a mechanikát működteti, amely kézi kikapcsolásra is alkalmas.

## Kioldási jelleggörbék

### Mágneses kioldási tartományok

| Típus | Mágneses kioldás (× In) | Alkalmazás |
|---|---|---|
| **A** | 2–3 | Ritkán használt |
| **B** | 3–5 | Generátorok, személyek és hosszú kábelek védelme |
| **C** | 5–10 | Általános fogyasztókat ellátó kábelek védelme |
| **D** | 10–20 | Nagy bekapcsolási áramú fogyasztók |

**Szabványok:** MSZ EN 60947-2 és MSZ EN 60898

### Példa: Bekapcsolási áram

```example
Egy **C16** kismegszakító:
- Névleges áram: 16 A
- **1,13 × 16 A = 18 A** – több mint 1 órán át elviseli
- **1,45 × 16 A = 23 A** – 1 órán belül kiold
- **5 × 16 A = 80 A** – azonnal kiold (mágneses tartomány kezdete)
- **10 × 16 A = 160 A** – biztosan azonnal kiold (mágneses tartomány vége)
```

## Kismegszakító feliratai

### Példa (C16 kismegszakító):

- **Névleges megszakítóképesség:** 6000 A (6 kA)
- **Áramnem:** váltóáram (~)
- **Névleges áram:** 16 A
- **Névleges feszültség:** 230 V
- **Jelleggörbe:** C

> **Fontos:** A megszakítóképesség azt mutatja meg, mekkora zárlati áramot képes megszakítani a kismegszakító károsodás nélkül.

## Olvadóbiztosító

### Határáram

**Határáram (Ih):** a névleges áram **1,3–1,6-szorosa**.

Ennél kisebb áramnál a biztosító **nem** olvad el, nagyobbnál **biztosan** elolvad.

### Használat

> **TILOS új szereléseknél olvadóbiztosító használata!**

Csak régi létesítményekben, cserénél azonos paraméterűre!

## Védelem méretezése

### Feltételek

A védőkészülék névleges áramának (In) teljesítenie kell:

$$I_b \leq I_n \leq I_z$$

ahol:
- $I_b$ = áramkör tervezett terhelőárama
- $I_n$ = védőkészülék névleges árama
- $I_z$ = vezeték megengedett terhelhetősége

```example
**Példa:** Egy áramkörön $I_b = 14 \, \text{A}$ várható terhelés, a vezeték $I_z = 20 \, \text{A}$ terhelhetőségű.

Választható kismegszakító: **16 A**

(mert $14 \leq 16 \leq 20$)
```

## Védelmi koordináció

### Szelektivitás

A szelektivitás azt jelenti, hogy hiba esetén **csak a meghibásodott áramkör védelmi készüléke** old ki, a felsőbb szintű védelem nem.

**Szabály:**
$$I_{n,\text{le}} \leq \frac{I_{n,\text{fel}}}{1{,}6}$$

```example
**Példa:** Főbiztosíték C32, leágazás legfeljebb:
$$\frac{32}{1{,}6} = 20 \, \text{A}$$
```

## Speciális kismegszakítók

### RCBO (kombinált készülék)

Egy készülékben:
- Túláramvédelem (kismegszakító)
- Hibaáram-védelem (AVK funkció)

Helytakarékos megoldás kis elosztókban.

### Szelektív kismegszakítók (S típus)

Lassított kioldással a szelektivitás javítása érdekében.
