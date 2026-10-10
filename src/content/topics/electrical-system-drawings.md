> **Megjegyzés:** Ez az anyag előkövetelmény, de nem része a villanyszerelő elméleti vizsgának.

# Villamos rendszerek rajzai

## Bevezetés

A **villamos rajz** olyan szerkesztési dokumentáció, ami rajzjelekkel (grafikus formában, esetleg beágyazott szöveggel kiegészítve) ábrázolja az objektum alkotórészeit és a közöttük lévő kapcsolatot.

### Alapfogalmak

**Objektum:** A leírt berendezés, készülék stb. gyűjtőfogalma. Minden objektum részegységekből épül fel, amelyeket elemek alkotnak.

**Elem:** Az objektum azon legegyszerűbb része, amelynek önálló funkciója és rajzjele van, további önálló funkciójú részekre már nem bontható.

**Részegység:** Az egy szerkezetbe foglalt elemek összessége.

## A villamos rajzok csoportosítása

A villamos rajzok az egyes elemek egymáshoz való csatlakoztatása szempontjából lehetnek egy- vagy többvonalas kapcsolási rajzok.

### Többvonalas kapcsolási rajz

Az egyes csatlakozási pontokat önálló vonallal köti össze. Egyértelmű, de összetett berendezés esetén "kusza" lehet.

**Előnyök:**
- Egyértelmű ábrázolás
- Jól követhető a vezetékek útvonala

**Hátrányok:**
- Összetett rendszereknél áttekinthetetlen
- Nagy helyet igényel

### Egyvonlas kapcsolási rajz

Több, egymással funkcionális vagy logikai kapcsolatban lévő vezetéket egyetlen vonallal ábrázol. Áttekinthető, de nehezebb a hibakeresés.

**Előnyök:**
- Tiszta, átlátható
- Helyhatékony

**Hátrányok:**
- Részletesebb elemzéshez nehézkesebb

## A villamos rajzok fajtái

A berendezésre vonatkozó információk különböző rajzfajtákkal adhatók meg.

### Fő rajzfajták

1. **Tömbvázlat**
2. **Elvi rajz**
3. **Kapcsolási rajz**
4. **Méretezési részletrajz**
5. **Elvi huzalozási rajz**
6. **Általános kapcsolási vázlat**
7. **Bekötési rajz**
8. **Elrendezési rajz**
9. **Szerelési rajz**
10. **Állapotdiagram**
11. **Idődiagram**
12. **NYÁK rajz**
13. **Beültetési (szerelési rajz)**

## Tömbvázlat

Az objektum részeit téglalapokkal jelölve megadja az egyes részek rendeltetését és egymáshoz való kapcsolódását. Az egyes részek jellemzőit a téglalapokban szöveges formában tartalmazza.

Az objektum általános felépítésének bemutatásra szolgál.

**Jellemzők:**
- Egyszerű, áttekinthető
- Blokkokkal és nyilakkal dolgozik
- A funkciók kapcsolatát mutatja
- Nem tartalmaz konkrét alkatrész-információkat

**Példa:** Digitális mérőrendszer tömbvázlata:
```
Feszültség-osztó → Mintavevő → A/D átalakító → Kijelző
                                        ↑
                                  Vezérlő-egység
```

## Elvi rajz

A tömbvázlat speciális változata, amelyben a téglalapok helyett szabványos rajzjeleket alkalmazunk.

Az objektum működési elvét ismertető, a berendezés minden elemét és azok kapcsolatát tartalmazó egyvonalas rajz.

**Célok:**
- A rendszer teljes működésének bemutatása
- Minden elem és kapcsolat feltüntetése
- Szokásos kapcsolási rajzjelekkel

**Alkalmazás:**
- Szerviz dokumentációban
- Hibaelhárításhoz
- Rendszertervezéshez

## Kapcsolási rajz

Az objektumban vagy annak egyes részeiben lezajló folyamatokat rajzjelekkel leíró rajz, amelyben végigkövethető a berendezés működése.

Az objektum elméleti (ideális) működését írja le, nem veszi figyelembe a megvalósítás során fellépő hatásokat.

**Típusok:**

### Egyvon alas kapcsolási rajz
- Több vezeték egy vonallal ábrázolva
- Kompakt, átlátható
- 3 fázisú rendszerek ábrázolásához ideális

**Példa jelölés:**
```
L ——/3—— (háromfázisú hálózat)
     3
```

### Többvonalas kapcsolási rajz
- Minden vezeték külön vonallal
- Részletesebb, de helyet igényel
- Könnyebb a vezetékek követése

## Méretezési részletrajz

A szükséges információkkal kiegészített szokásos rajzjelekből (az ún. tervjelekből) áll.

**Tartalom:**
- Alkatrészek típusjelzése
- Névleges értékek
- Teljesítményadatok

**Példa jelölések:**
- Izzólámpa: `L 12 V/6 W`
- Ellenállás: `R₅ 1 MΩ 0,5 W, indukció-szegény kivitel`
- Motor: `M 3×400 V, 3 kW, 3~`

## Elvi huzalozási rajz

Az objektumot alkotó részegységek csatlakozásait, a vezetékeket, kábeleket és azok csatlakozásait megadó rajz.

**Jellemzők:**
- Vezetékek és kábel trák nyomvonala
- Csatlakozási pontok
- Kötési pontok
- Gyakran épület alaprajzra rajzolva

**Alkalmazás:**
- Épületvillamosság
- Gépjárművek huzalozása
- Ipari berendezések szerelése

## Általános kapcsolási vázlat

A berendezést vagy annak egy részét alkotó elemek jellemzőinek feltüntetése nélküli, csak a lényeges kapcsolati információkat tartalmazó rajz.

**Célja:**
- Gyors áttekintés
- Logikai kapcsolatok bemutatása
- Egyszerűsített dokumentáció

## Bekötési rajz

Az objektumot alkotó részegységek csatlakozásait, a vezetékeket, kábel eket és azok csatlakozásait megadó rajz.

**Tartalom:**
- Pontos csatlakozási pontok
- Érintésvédelmi információk
- Vezetékszínek
- Vezetékkeresztmetszetek

**Speciális jelölések:**
- L = Fázis (barna)
- N = Nulla (kék)
- PE = Védőföldelés (sárga-zöld)

## Elrendezési rajz

Az objektum elemeinek vagy részegységeinek elhelyezkedését meghatározó, szükség esetén villamos kapcsolatokat is tartalmazó rajz.

**Jellemzők:**
- Fizikai elrendezés
- Térbeli információk
- Méretezett rajz
- Szerelési segédlet

**Alkalmazás:**
- Szekrényépítés
- Kapcsolószekrények
- Gépek villamos felszerelése

## Szerelési rajz

Az objektum elemeinek vagy részegységeinek elhelyezkedését meghatározó, szükség esetén villamos kapcsolatokat is tartalmazó rajz.

A szerelési rajz a pontos szerelési útmutatást tartalmazza:
- Rögzítési pontok
- Csavarok, rögzítőelemek
- Szerelési sorrend
- Vezetékvezetés részletei

**Példa információk:**
- Kábelcsatornák méretei
- Szerelvények elhelyezése (pl. kapcsolók, aljzatok)
- Védőfelszerelések (védőkapcsolók, megszakítók)

## Állapotdiagram

Irányítási rendszer vagy áramkör egyes működési állapotait, azok sorrendjét és az állapotváltozások feltételeit tartalmazó diagram vagy táblázat.

Főleg sorrendi digitális rendszerek, ill. számítógépes rendszerek működésének leírásához szükséges információkat tartalmaz.

**Jellemzők:**
- Állapotok és átmenetek
- Feltételek és kimenetek
- Grafikus vagy táblázatos forma

**Alkalmazás:**
- Automatizálási rendszerek
- Programozható logikai vezérlők (PLC)
- Digitális áramkörök tervezése

**Példa:** Négybites számláló állapotdiagramja:
```
1111 → 0111 → 0011 → 0001 → 1000 → 0100 → ...
  ↓                                          ↑
1110                                        0010
  ↓                                          ↑
1101 ← 1010 ← 0101 ← 1011 ← 0110 ← 1100 ← 1001
```

## NYÁK rajz (Nyomtatott áramköri kártya)

A nyomtatott áramköri kártyák rajzi dokumentációja.

**Részei:**
1. **Mesterrajz (fóliarajz)** - A rézkiszigetelések pontos mintája
2. **Furatózási rajz** - Furatok helye és mérete
3. **Kivágási (bemetszési) rajz** - A NYÁK körvonala
4. **Felirati rajz** - Alkatrész-jelölések
5. **Beültetési rajz** - Alkatrészek elhelyezése

### NYÁK tervezési szempontok

**Rétegek:**
- Egyrétegű NYÁK
- Kétrétegű NYÁK
- Többrétegű NYÁK

**Vezetők:**
- Minimális vezetőszélesség
- Minimális távolság vezetők között
- Áramterhelhetőség

**Furatók:**
- Furátméretek szabványosítása
- Furatrácsszer

## Idődiagram

Az objektumban vagy annak egyes részeiben lezajló folyamatok időbeli lefolyását ábrázoló diagram.

**Jellemzők:**
- Vízszintes tengely: idő
- Függőleges tengely: jelek állapota
- Logikai szintek megjelenítése

**Alkalmazás:**
- Digitális rendszerek
- Impulzustechnika
- Kommunikációs protokollok
- Szinkronizálás tervezése

## Vezetékek rajzolása

A rajzon a vezetékekkel összekapcsolt elemekből álló berendezést vonallal összekapcsolt rajzjelekkel ábrázoljuk.

### Vezetékek jelölése

**Függőleges vagy vízszintes vonalak:**
- Minél kevesebb töréssel
- Minél kevesebb keresztezéssel

**A rajzjeleket összekötő vonalak lehetnek:**
- Vízszintesek
- Függőlegesek

> A vonalakat minél kevesebb töréssel, keresztezéssel kell megrajzolni.

### Speciális jelölések

**Több, egymás mellett futó vezeték összevonása:**
- Egyetlen vonalba (csoportba) foglalhatók
- A vonalszám jelölése szükséges

**Jelölési módok:**
```
——//—— vagy ——/2——  (2 vezeték)
——///—— vagy ——/3——  (3 vezeték)
——////—— vagy ——/4——  (4 vezeték)
        vagy ——/5——  (5 vezeték)
```

### Vezetékszínek szabványa

**Váltakozó áramú hálózatok:**
- **L1, L2, L3** (Fázisvezetők) - Barna, Fekete, Szürke
- **N** (Nulla vezető) - Kék
- **PE** (Védővezető) - Sárga-zöld

**Egyenáramú rendszerek:**
- **Pozitív (+)** - Piros
- **Negatív (-)** - Fekete vagy Kék
- **Védővezető** - Sárga-zöld

---

> **Fontos:** A villamos rendszerek rajzainak elkészítésekor mindig az érvényes MSZ és IEC szabványokat kell alkalmazni. A rajzok olvasása és értelmezése alapvető szakmai kompetencia villanyszerelői munkában.
