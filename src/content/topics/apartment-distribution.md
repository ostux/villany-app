# Lakás elosztótábla

## Elhelyezés és funkció

A lakás elosztótábla a **mérőóra után**, lakáson belül a **bejárat közelében** helyezkedik el.

## Tartalma

### Védelmi és kapcsoló készülékek

- Túláramvédelmi készülékek
- Biztosítók, kismegszakítók
- Kapcsolók
- Nullavezető-szorítók
- **AVK** (Áram-védőkapcsoló)

## Típusok

### Felszerelés szerint

- **Falon kívüli** (felületre szerelt)
- **Süllyesztett** (falba épített)

### Fázisszám szerint

- **Egyfázisú** (1×230 V)
- **Többfázisú** (3×230/400 V)

### Rendeltetés szerint

- **Világítási** elosztó
- **Ipari** elosztó (erősebb terhelés)

### Áramkörök szerint

- **Egy áramkörös**
- **Több áramkörös**

## Moduláris felépítés

### 35 mm-es alapsín

- Erre pattinthatók a moduláris készülékek
- Szabványos DIN sín
- Gyors szerelés és cserélhetőség

### Modulszélességek

- 1 modul = 18 mm
- Kismegszakítók: 1-2 modul
- AVK: 2-4 modul
- Mérőműszerek: 1-4 modul

## Áramkörök kialakítása

### Szokásos külön áramkörök

**Világítás:**
- Vezeték: 3×1,5 mm²
- Védelem: 10 A kismegszakító

**Dugaszolóaljzat:**
- Vezeték: 3×2,5 mm²
- Védelem: 16 A kismegszakító

**Fixen szerelt fogyasztók (külön megszakítót igénylő):**
- Bojler: 3×2,5 mm², 16 A
- Villanytűzhely: 5×4 mm² (háromfázisú) vagy 3×6 mm² (egyfázisú), 16-32 A
- Fűtőtest: 3×2,5 mm², 16 A

## Feliratoz

ás és jelölés

A szerelt elosztótáblát **feliratokkal** kell ellátni, hogy félreérthetetlen legyen a készülékek hovatartozása.

### Példa feliratokra

```
[C16] Konyha dugalj
[C16] Nappali dugalj
[B10] Világítás
[C16] Bojler
[C16] Fürdőszoba
[AVK 30mA] Főáram-védőkapcsoló
```

## Példa: Tipikus lakáselosztó

### 60 m² lakás, egyfázisú

| Áramkör | Vezeték | Védelem |
|---|---|---|
| Főbiztosíték | – | C32 |
| AVK (főág) | – | 40 A / 30 mA |
| Világítás | 3×1,5 mm² | B10 |
| Konyha dugalj | 3×2,5 mm² | C16 |
| Nappali dugalj | 3×2,5 mm² | C16 |
| Hálószoba dugalj | 3×2,5 mm² | C16 |
| Fürdőszoba | 3×2,5 mm² | C16 |
| Bojler | 3×2,5 mm² | B16 |

> **Megjegyzés:** A bojler B karakterisztikájú (nem C), mert nincs nagy bekapcsolási árama.

### 80 m² lakás, háromfázisú

| Áramkör | Vezeték | Védelem | Fázis |
|---|---|---|---|
| Főbiztosíték | – | 3×20 A | L1, L2, L3 |
| AVK (főág) | – | 40 A / 30 mA | – |
| Világítás | 3×1,5 mm² | B10 | L1 |
| Konyha dugalj | 3×2,5 mm² | C16 | L2 |
| Nappali/hálószoba dugalj | 3×2,5 mm² | C16 | L3 |
| Fürdőszoba | 3×2,5 mm² | C16 | L1 |
| Bojler | 3×2,5 mm² | B16 | L2 |
| Villanytűzhely | 5×4 mm² | C20 | L1, L2, L3 |

> **Fontos:** Háromfázisú esetén az áramköröket egyenletesen kell elosztani a fázisok között a kiegyensúlyozott terhelés érdekében.

## Bővíthetőség

### Tartalék helyek

- Legalább **2-3 tartalék hely** az alapszínen
- Jövőbeli bővítéshez (pl. klíma, mosogatógép)
- A tartalékokat felirattal kell jelölni: "TARTALÉK"

## Biztonságtechnika

### Érintésvédelem

- Az elosztó fémdoboza **földelve** legyen
- PE sín a védővezetők csatlakoztatásához
- N sín a nullavezetők csatlakoztatásához
- **PE és N szigorúan elkülönítve** (TN-S rendszerben)

### Tűzvédelem

- Nem éghető anyagból (fém, műanyag)
- IP védettség legalább IP40
- Megfelelő szellőzés (hővédelem)
