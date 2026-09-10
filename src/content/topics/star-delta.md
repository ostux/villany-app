## Mi az a csillag és delta kapcsolás?

Képzeld el, hogy három városba vezető utat akarsz megépíteni. Két különböző módon teheted meg:

**Csillag (Y) kapcsolás:** Mint egy **körforgalom**, ahonnan három út indul különböző irányokba. Van egy közös központi pont (a körforgalom közepén), és három ellenállás "sugár"-szerűen indul ebből a központból az A, B, C városok felé.

```
             A
             |
             Ra
             |
             |
             |
             * (központi pont)
            / \      
           /   \     
          /     \    
         /       \
        Rc        Rb   
       /           \  
      C             B

              
```

- **Ra:** ellenállás az "A" terminál és a központi pont között
- **Rb:** ellenállás a "B" terminál és a központi pont között
- **Rc:** ellenállás a "C" terminál és a központi pont között

**Delta (Δ vagy háromszög) kapcsolás:** Mint egy **háromszög alakú út**, ahol a három város közvetlenül össze van kötve egymással. Az ellenállások közvetlenül az A, B, C pontok között vannak, háromszöget alkotva.

```
          A
         / \
        /   \
       R3   R1
      /       \
     /         \
    C-----------B
         R2
```

- **R1:** ellenállás az "A" és "B" terminálok között (jobb oldali ág)
- **R2:** ellenállás a "B" és "C" terminálok között (alsó ág)
- **R3:** ellenállás a "C" és "A" terminálok között (bal oldali ág)

> **Fontos különbség:** A csillag kapcsolásban van egy "belső pont" (a központ), ahová három ellenállás fut be. A delta kapcsolásban nincs ilyen belső pont – minden ellenállás közvetlenül két külső pont között van.

## Mikor és miért használjuk ezt az átalakítást?

Bonyolultabb hálózatoknál előfordul, hogy a részek **nem tisztán sorosak vagy párhuzamosak** – ilyenkor **csillag-delta** vagy **delta-csillag** átalakítást kell végezni.

> **Tipikus felhasználás:** **Hídkapcsolású áramkörök** (Wheatstone-híd). Ezekben van egy "középső" ellenállás, ami miatt nem tudjuk egyszerű soros/párhuzamos szabályokkal kiszámolni az eredő ellenállást. Ha átalakítjuk a hálózat egy részét csillagból deltára (vagy fordítva), akkor hirtelen minden szépen sorba vagy párhuzamosba rendeződik!

**Példa helyzet:** Van egy hídkapcsolásod, és meg kell találnod az eredő ellenállást két pont között. Ha megpróbálod soros/párhuzamossal megoldani, beragadsz. DE ha az egyik részt (például a delta részt) csillaggá alakítod, akkor az egész hálózat egyszerűsödik, és már kiszámolható!

## Átalakítási képletek

### Csillag → Delta (Y→Δ) átalakítás

Ha adott egy **csillag kapcsolás** ($R_a$, $R_b$, $R_c$ ellenállásokkal), és szeretnéd kiszámolni az egyenértékű **delta kapcsolás** ellenállásait ($R_1$, $R_2$, $R_3$):

$$R_1 = \frac{R_a \cdot R_c}{R_Y} \qquad R_2 = \frac{R_b \cdot R_c}{R_Y} \qquad R_3 = \frac{R_a \cdot R_b}{R_Y}$$

ahol $R_Y = R_a + R_b + R_c$ (a csillag ellenállások összege).

**Megjegyezni:** Minden delta ellenállás = **két szomszédos csillag ellenállás szorzata osztva az összegükkel**.

**Példa:** $R_1$ (ami A és B között van a deltában) = $R_a \times R_c$ szorzata (ezek az A és B "melletti" csillag ellenállások) osztva $R_Y$-nal.

### Delta → Csillag (Δ→Y) átalakítás

Ha adott egy **delta kapcsolás** ($R_1$, $R_2$, $R_3$ ellenállásokkal), és szeretnéd kiszámolni az egyenértékű **csillag kapcsolás** ellenállásait ($R_a$, $R_b$, $R_c$):

$$R_a = \frac{R_1 \cdot R_3}{R_\Delta} \qquad R_b = \frac{R_2 \cdot R_3}{R_\Delta} \qquad R_c = \frac{R_1 \cdot R_2}{R_\Delta}$$

ahol $R_\Delta = R_1 + R_2 + R_3$ (a delta ellenállások összege).

**Megjegyezni:** Minden csillag ellenállás = **az adott terminálhoz csatlakozó két delta ellenállás szorzata osztva az összegükkel**.

**Példa:** $R_a$ (ami az "A" terminálhoz van kötve) = $R_1 \times R_3$ szorzata (ezek az "A"-hoz csatlakozó delta ellenállások) osztva $R_\Delta$-val.

## Példák lépésről lépésre

### 1. Példa: Egyenlő ellenállások - Csillag → Delta

**Feladat:** Van egy csillag kapcsolásunk, ahol mindhárom ellenállás $R_a = R_b = R_c = 9Ω$. Mennyi lesz az egyenértékű delta kapcsolás ellenállásai?

**Megoldás:**

```example
Adott: $R_a = R_b = R_c = 9Ω$

1. lépés: Számoljuk ki $R_Y$-t (csillag ellenállások összege)

   $$R_Y = R_a + R_b + R_c = 9 + 9 + 9 = 27Ω$$

2. lépés: Használjuk a Csillag→Delta képleteket

   $$R_1 = \frac{R_a \cdot R_c}{R_Y} = \frac{9 \cdot 9}{27} = \frac{81}{27} = 3Ω$$

   $$R_2 = \frac{R_b \cdot R_c}{R_Y} = \frac{9 \cdot 9}{27} = \frac{81}{27} = 3Ω$$

   $$R_3 = \frac{R_a \cdot R_b}{R_Y} = \frac{9 \cdot 9}{27} = \frac{81}{27} = 3Ω$$

Eredmény: $R_1 = R_2 = R_3 = 3Ω$
```

**Gyors szabály:** Ha minden csillag ellenállás egyforma (R), akkor minden delta ellenállás **3R** lesz!

### 2. Példa: Különböző ellenállások - Csillag → Delta

**Feladat:** Van egy csillag kapcsolásunk: $R_a = 6Ω$, $R_b = 12Ω$, $R_c = 18Ω$. Alakítsuk át delta kapcsolássá!

**Megoldás:**

```example
Adott: $R_a = 6Ω$, $R_b = 12Ω$, $R_c = 18Ω$

1. lépés: Számoljuk ki $R_Y$-t (csillag ellenállások összege)

   $$R_Y = R_a + R_b + R_c = 6 + 12 + 18 = 36Ω$$

2. lépés: Használjuk a Csillag→Delta képleteket

   $$R_1 = \frac{R_a \cdot R_c}{R_Y} = \frac{6 \cdot 18}{36} = \frac{108}{36} = 3Ω$$

   $$R_2 = \frac{R_b \cdot R_c}{R_Y} = \frac{12 \cdot 18}{36} = \frac{216}{36} = 6Ω$$

   $$R_3 = \frac{R_a \cdot R_b}{R_Y} = \frac{6 \cdot 12}{36} = \frac{72}{36} = 2Ω$$

Eredmény: $R_1 = 3Ω$ (A-B között), $R_2 = 6Ω$ (B-C között), $R_3 = 2Ω$ (C-A között)
```

### 3. Példa: Egyenlő ellenállások - Delta → Csillag

**Feladat:** Van egy delta kapcsolásunk, ahol mindhárom ellenállás $R_1 = R_2 = R_3 = 15Ω$. Alakítsuk át csillag kapcsolássá!

**Megoldás:**

```example
Adott: $R_1 = R_2 = R_3 = 15Ω$

1. lépés: Számoljuk ki $R_\Delta$-t (delta ellenállások összege)

   $$R_\Delta = R_1 + R_2 + R_3 = 15 + 15 + 15 = 45Ω$$

2. lépés: Használjuk a Delta→Csillag képleteket

   $$R_a = \frac{R_1 \cdot R_3}{R_\Delta} = \frac{15 \cdot 15}{45} = \frac{225}{45} = 5Ω$$

   $$R_b = \frac{R_2 \cdot R_3}{R_\Delta} = \frac{15 \cdot 15}{45} = \frac{225}{45} = 5Ω$$

   $$R_c = \frac{R_1 \cdot R_2}{R_\Delta} = \frac{15 \cdot 15}{45} = \frac{225}{45} = 5Ω$$

Eredmény: $R_a = R_b = R_c = 5Ω$
```

**Gyors szabály:** Ha minden delta ellenállás egyforma (R), akkor minden csillag ellenállás **R/3** lesz! (15Ω / 3 = 5Ω)

### 4. Példa: Különböző ellenállások - Delta → Csillag

**Feladat:** Van egy delta kapcsolásunk: $R_1 = 12Ω$ (A-B között), $R_2 = 18Ω$ (B-C között), $R_3 = 9Ω$ (C-A között). Alakítsuk át csillaggá!

**Megoldás:**

```example
Adott: $R_1 = 12Ω$, $R_2 = 18Ω$, $R_3 = 9Ω$

1. lépés: Számoljuk ki $R_\Delta$-t (delta ellenállások összege)

   $$R_\Delta = R_1 + R_2 + R_3 = 12 + 18 + 9 = 39Ω$$

2. lépés: Használjuk a Delta→Csillag képleteket

   $R_a$ (A terminálhoz):
   $$R_a = \frac{R_1 \cdot R_3}{R_\Delta} = \frac{12 \cdot 9}{39} = \frac{108}{39} \approx 2{,}77Ω$$

   $R_b$ (B terminálhoz):
   $$R_b = \frac{R_2 \cdot R_3}{R_\Delta} = \frac{18 \cdot 9}{39} = \frac{162}{39} \approx 4{,}15Ω$$

   $R_c$ (C terminálhoz):
   $$R_c = \frac{R_1 \cdot R_2}{R_\Delta} = \frac{12 \cdot 18}{39} = \frac{216}{39} \approx 5{,}54Ω$$

Eredmény: $R_a \approx 2{,}77Ω$, $R_b \approx 4{,}15Ω$, $R_c \approx 5{,}54Ω$
```

### 5. Példa: Hídkapcsolás egyszerűsítése (gyakorlati alkalmazás)

**Feladat:** Van egy hídkapcsolású áramkörünk. Két forrás terminál (E és F) között szeretnénk kiszámolni az eredő ellenállást. A hídban van egy delta rész (az A-B-C pontok között), és ha ezt csillaggá alakítjuk, az egész hálózat egyszerűsödik.

**Helyzet:**
- Delta az A-B-C pontok között: R1 = 6Ω (A-B), R2 = 6Ω (B-C), R3 = 6Ω (C-A)
- Plusz van még két 3Ω-os ellenállás sorosban az E-A és F-C ágakban

**Megoldás:**

```example
1. lépés: Alakítsuk a deltát csillaggá!

   $$R_\Delta = 6 + 6 + 6 = 18Ω$$

   $$R_a = \frac{R_1 \cdot R_3}{18} = \frac{6 \cdot 6}{18} = \frac{36}{18} = 2Ω$$

   $$R_b = \frac{R_2 \cdot R_3}{18} = \frac{6 \cdot 6}{18} = \frac{36}{18} = 2Ω$$

   $$R_c = \frac{R_1 \cdot R_2}{18} = \frac{6 \cdot 6}{18} = \frac{36}{18} = 2Ω$$

   (Gyors szabály: 6Ω delta → 2Ω csillag, mert $6/3 = 2$)

2. lépés: Most már van egy csillag a közepén (2-2-2Ω),
   és a külső ellenállások soros/párhuzamos módon kapcsolódnak.

3. lépés: Soros és párhuzamos szabályokkal tovább egyszerűsítünk.

   Például: E-től a központig: $3Ω + 2Ω = 5Ω$ (soros)

   Az így kapott ágakat párhuzamosba kapcsoljuk, stb.

Eredmény: Átalakítás nélkül NEM tudnánk kiszámolni!
          Átalakítás után: egyszerű soros/párhuzamos feladat.
```

## Speciális eset: egyenlő ellenállások

Ha **minden ellenállás egyforma** (szimmetrikus hálózat), akkor nagyon egyszerű szabályok vannak:

**Delta → Csillag:** Minden delta ellenállást **osszunk 3-mal**
- Delta $R$ ⟶ Csillag $\frac{R}{3}$

**Csillag → Delta:** Minden csillag ellenállást **szorozzunk 3-mal**
- Csillag $R$ ⟶ Delta $3R$

> **Gyors fejszámolás:** Ha látod, hogy minden ellenállás egyforma, azonnal használd a "×3" vagy "/3" szabályt! Nem kell semmit számolgatni.

```example
Példák:
- 12Ω delta → 4Ω csillag (12 / 3 = 4)
- 5Ω csillag → 15Ω delta (5 × 3 = 15)
- 30Ω delta → 10Ω csillag (30 / 3 = 10)
```

## Emlékeztető és tippek

### Hogyan jegyezd meg a képleteket?

**Csillag → Delta:**
- "Szomszédos csillag ellenállások **szorzata** osztva az **összeggel**"
- $R_1$ (A-B között a deltában) = $R_a$ és $R_c$ szorzata osztva az összegükkel
- Mindig a "szemközti" csillag ellenállásokat szorzod (nem a középsőt!)

**Delta → Csillag:**
- "Az adott terminálhoz **csatlakozó** két delta ellenállás szorzata osztva az összegükkel"
- $R_a$ (A terminálnál) = $R_1$ és $R_3$ szorzata (ezek érintik A-t)

### Ellenőrzési módszer

**Hogyan tudod, hogy jól számoltál?**

Válassz ki két terminált (például A és B), és számold ki az ellenállást közöttük **mindkét kapcsolásban**. Ha jól csináltad, **ugyanazt kell kapnod**!

```example
Ellenőrzés példa (1. példánkból):

Eredeti csillag ($R_a=R_b=R_c=9Ω$) esetén A-B ellenállás:
   $R_a + R_b = 9 + 9 = 18Ω$ (sorosan, mert C-n keresztül megy)
   (Valójában bonyolultabb, mert $R_c$ is párhuzamosan van...)

Átalakított delta ($R_1=R_2=R_3=3Ω$) esetén A-B ellenállás:
   $R_1 = 3Ω$ (direkt A és B között)
   (Plusz $R_2$ és $R_3$ párhuzamosan...)

A pontos ellenőrzés komplex, DE a terminálok közötti
eredő ellenállásoknak egyezniük kell!
```

### Gyakori hibák

1. **Rossz nevezőt használsz:** Figyelj, hogy $R_Y$ a csillag összege, $R_\Delta$ a delta összege!
2. **Elcseréled a képletet:** Delta→Csillag NEM ugyanaz, mint Csillag→Delta! Nézd meg, melyik irányba alakítasz!
3. **Rossz ellenállásokat szorzol:** $R_a$-hoz (A terminál) a deltából az $R_1$ és $R_3$ kell (ezek érintik A-t).
4. **Terminálokat elrontod:** Rajzolj egy ábrát, és jelöld be az A, B, C pontokat mindkét kapcsolásnál!

## Összefoglalás

A csillag-delta átalakítás egy **"trükk"**, amivel olyan áramköröket tudunk egyszerűsíteni, ahol a soros/párhuzamos szabályok nem működnek.

**Kulcspontok:**
1. **Csillag:** 3 ellenállás találkozik egy központi pontban
2. **Delta:** 3 ellenállás háromszöget alkot a terminálok között
3. **Miért hasznos?** Hídkapcsolások és komplex hálózatok egyszerűsítése
4. **Gyors szabály:** Egyforma ellenállásoknál: delta = 3× csillag, csillag = delta/3
5. **Ellenőrzés:** Az A-B-C terminálok közötti ellenállások egyeznek átalakítás előtt és után

> **Tipp:** Ha először találkozol ilyen feladattal, rajzold le mindkét kapcsolást papírra, jelöld a terminálokat, és nézd meg, melyik ellenállás hova kapcsolódik. Az ábrával sokkal könnyebb megérteni a képleteket!
