# Hálózatok alakzat szerinti csoportosítása

A villamos hálózatok **topológiája** (alakzata) meghatározza az ellátás megbízhatóságát, a veszteségeket és a költségeket.

## 1. Sugaras hálózat

### Jellemzők

- A fogyasztó **egyetlen vezetéken, egy úton** kap villamos energiát
- **Üzembiztonsága alacsony**
- Legegyszerűbb és legolcsóbb megoldás
- A lakás elosztóhálózata is ilyen

### Hátrányok

- Ha a vezeték megszakad, az összes utána lévő fogyasztó áram nélkül marad
- Nincs tartalék ellátási út

### Alkalmazás

- Kisfogyasztók ellátása
- Lakáshálózatok
- Kis teljesítményű ipari fogyasztók

```
         Táppont
            │
            │
      ┌─────┼─────┐
      │     │     │
    Leágazás, fogyasztó
```

## 2. Gyűrűs hálózat

### Jellemzők

- Az azonos táppontból kiinduló gerincvezetékek **egy pontban találkoznak**
- Az összekötés helyén **kapcsolót** alkalmaznak
- Veszteség és feszültségesés szempontjából **kedvező** üzemállapot
- **Üzembiztos**

### Működés

Normál üzemben:
- A gyűrű egy pontján **nyitott kapcsoló** van (biztonsági okokból)
- Két irányból táplálható, de egyszerre csak egyikből történik az ellátás

Hiba esetén:
- A hibás szakaszt leválasztják
- A kapcsolót bekapcsolva a fogyasztók a másik irányból kapnak energiát

### Előnyök

- Meghibásodás esetén gyorsan helyreállítható az ellátás
- Alacsony veszteség
- Jobb feszültségviszonyok

```
         Táppont
            │
        ┌───┴───┐
        │       │
        │   ×   │  (× = kapcsoló, normálisan nyitott)
        │       │
      Fogyasztók
```

## 3. Íves hálózat

### Jellemzők

- Kialakítása azonos a gyűrűs hálózattal
- **Egymástól független táppontokból** indulnak a vezetékek
- **Előnyük:** bármelyik táppont kiesése esetén biztosítható az ellátás

### Működés

- Két táppont között kapcsoló van
- Normál esetben mindkét irányból táplálás lehetséges
- Egyik táppont kiesése esetén is biztonságos az ellátás

### Alkalmazás

- Fontos fogyasztók ellátása
- Kórházak, adatközpontok
- Ipari nagyfogyasztók

```
     Táppont         Táppont
        │               │
        └───────×───────┘
                │
           Fogyasztók
```

## 4. Két végén táplált vezeték

### Jellemzők

- Lényegében **íves hálózatot** hozunk létre
- A fogyasztók **folyamatosan kapcsolódnak** mindkét táppontra
- Az ív **nincs középen bontva**
- Az energiaellátás **biztonságosabb**

### Előnyök

- Minden fogyasztó kétirányú ellátást kap
- Veszteségek alacsonyabbak (energia megoszlik)
- Feszültségesés kisebb

### Alkalmazás

- Fontosabb ellátási területek
- Városközpontok
- Ipari parkok

```
Táppont ────────────────────── Táppont
           ↓  ↓  ↓  ↓
         Fogyasztók
```

## 5. Párhuzamos vezeték

### Jellemzők

- Fontos csomópontok összekötésére használják
- **Csökkenti a hálózat veszteségét**, hiszen az energia megoszlik
- Redundancia biztosítása

### Működés

- Két vezeték párhuzamosan köt össze két pontot
- Az áram megoszlik a vezetékek között
- Egyik vezeték kiesése esetén a másik átveszi a terhelést

```
Táppont ═════════════════ Táppont
        ═════════════════
        (két párhuzamos vezeték)
```

## 6. Körvezeték

### Jellemzők

- **Azonos táppontból táplált** alakzat
- Az összes fogyasztót ellátva **ismét visszatér a táppontba**
- Valamennyi fogyasztó **kétirányú ellátást** kap

### Előnyök

- Nagy üzembiztonság
- Kiegyenlített feszültségviszonyok
- Alacsony veszteség

### Alkalmazás

- Kórházak
- Adatközpontok
- Kritikus infrastruktúra

```
        Táppont
       ╱       ╲
      │         │
      │         │
    Fogyasztók  │
      │         │
       ╲       ╱
        ───────
```

## 7. Hurkolt hálózat

### Jellemzők

- **Egyidejűleg több tápponton keresztül** látja el a fogyasztókat
- A **biztonság a legnagyobb**
- A hálózat **minőségi jellemzői is a legjobbak**
- **Hátránya:** drága, bonyolult

### Előnyök

- Maximális üzembiztonság
- Több tartalék útvonal
- Kiegyenlített terhelés
- Minimális veszteség

### Hátrányok

- Magas beruházási költség
- Bonyolult üzemeltetés
- Komplex védelmi rendszer szükséges

### Alkalmazás

- Nagyvárosok központi területei
- Kritikus infrastruktúra
- Nagy ipari létesítmények

```
   Táppont      Táppont
      │     ╱╲     │
      │    ╱  ╲    │
      │   ╱    ╲   │
      └──┼──────┼──┘
         │      │
    Fogyasztók
         │
      Táppont
```

## Összehasonlítás

| Hálózattípus | Üzembiztonság | Költség | Veszteség | Alkalmazás |
|--------------|---------------|---------|-----------|------------|
| **Sugaras** | Alacsony | Alacsony | Közepes | Lakások, kisfogyasztók |
| **Gyűrűs** | Jó | Közepes | Alacsony | Város részek |
| **Íves** | Nagyon jó | Magas | Alacsony | Fontos fogyasztók |
| **Két végén táplált** | Nagyon jó | Magas | Nagyon alacsony | Városközpontok |
| **Körvezeték** | Kiváló | Magas | Nagyon alacsony | Kritikus létesítmények |
| **Hurkolt** | Maximális | Nagyon magas | Minimális | Nagyvárosok központja |

## Állomások

Az **állomások** azoknak a berendezéseknek az összessége, amelyek a villamos energiát le vagy feltranszformálják, elosztják, a hálózat vezetékeit összekötik, kapcsolják, védik.

### Rendeltetés szerint

- **Erőművi alállomás** - erőműből kiinduló kapcsolás
- **Hálózati állomás** - hálózatok összekapcsolása
- **Fogyasztói alállomás** - fogyasztók ellátása

### Funkció szerint

- **Kapcsolóállomás** - vezetékek kapcsolása (nincs feszültségváltás)
- **Transzformátor állomás** - feszültségszint váltás

### Elhelyezés szerint

- **Szabadtéri állomás** - nagyfeszültségű hálózatoknál
- **Belsőtéri állomás** - kisfeszültségű, középfeszültségű hálózatoknál

## Kisfeszültségű elosztóhálózat jellemzői

### Tápláló transzformátor

- Szekunder tekercse **csillag kapcsolású**
- Csillagpontja **mereven földelt**

### PEN vezető földelése

A fogyasztók csatlakoztatásánál:
- Csatlakozási főelosztónál
- Mérőhelynél

A PEN vezető potenciálját ismét a **földhöz rögzítik**.

### Vezetők

- A kisfeszültségű hálózat **négyvezetős**: L1, L2, L3, PEN

### Fogyasztók csatlakozása

- **Kisebb fogyasztók:** egyfázisra csatlakoznak
- **Nagyobb teljesítményigényűek:** háromfázisra

### Fázisok kiegyenlítése

Az egyfázisú fogyasztókat **amennyire lehetséges egyenletesen** kell elosztani a fázisok között.

> **Fontos:** A fázisok közötti egyenlőtlen terhelés feszültség-aszimmetriát okoz, ami károsítja a berendezéseket!
