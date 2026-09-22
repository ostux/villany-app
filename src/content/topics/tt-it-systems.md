# TT és IT rendszerek

## TT rendszer (védőföldelés)

Ha a tápláló hálózat közvetlenül földelt, akkor az ilyen rendszert TT-rendszernek nevezik.

A jelölésnél:
- az első **T** betű azt jelenti, hogy a rendszer az áramforrásnál közvetlenül le van földelve
- a második **T** betű jelentése az, hogy az érintésvédelemmel védett testek földelve vannak

### Működési elv

A TT-rendszer működési elve az, hogy a védett test földelése következtében szigetelési hiba esetén a hibahelyen a földbe folyó áram lép fel, s ez földelés ellenállásán keresztül záródik.

- Ha az áram kicsi, akkor a földelési ellenálláson kis feszültségemelkedést hoz létre
- Ha viszont az áram nagy, akkor vagy a túláramvédelem, vagy erre a célra beépített áram-védőkapcsoló kiold

### Számítási képletek

$$I_z = \frac{U_0}{R_{cs} + R_a}$$

$$U_L = I_z \times R_a$$

ahol:
- $I_z$ = zárlati áramerősség
- $U_L$ = érintési feszültség
- $U_0$ = hálózati feszültség (fázis-föld, pl. 230V)
- $R_{cs}$ = csillagpont földelési ellenállása
- $R_a$ = védőföldelés ellenállása

### Méretezési feltétel

$$U_L < 50 \, \text{V} \quad \text{(általános esetben)}$$

A megengedett érintési feszültség ($U_L$) **kisebb legyen 50V-nál**.

### Példa

```example
Feladat: $U_0=230V$ esetén, mekkora lesz a zárlati áram és $U_L$, ha $R_a=10Ω$, $R_{cs}=10Ω$?

Megoldás:
$I_z = 230/(10+10) = 230/20 = 11{,}5$ A
$U_L = I_z \times R_a = 11{,}5 \times 10 = 115$ V

Eredmény: 115V túl nagy, nem megengedett!

Ha $R_a$ egy „jó" földelés, pl. 2 ohmos, akkor így alakul:
$I_z = 230/(10+2) = 230/12 = 19{,}16$ A
$U_L = 19{,}16 \times 2 = 38{,}3$ V

Következtetés: Kis ellenállású védőföldelés ($R_a$) szükséges!
```

### Hálózati ábra

```
          Transzformátor                 Berendezés
              │                              │
         L1 ──┼──────────────────────────────┤
         L2 ──┼──────────────────────────────┤
         L3 ──┼──────────────────────────────┤
          N ──┼──────────────────────────────┤
              │                              │
              │                         ╱    └─ PE ─┐
              ═ Rcs                    ╱            │
                                      hiba          ═ Ra
                                                (védőföldelés)
```

---

## IT rendszer

Ha a tápláló hálózat **nem közvetlenül**, hanem **I** (igen nagy) **impedancián keresztül földelt**, vagy egyáltalán **nem földelt**, akkor ennek jele IT-rendszer.

A jelölésnél:
- az **I** betű a hálózati csillagpontba kötött impedanciát jelenti
- a **T** betű az érintésvédelemmel ellátott testek védőföldelését jelenti

### Jellemzők

A hálózat földelésébe beiktatott impedancia nagy értéke miatt a szigetelési hibahelyen fellépő hibaáram kicsi, ennek megfelelően ilyen földzárlat esetén **nem számolhatunk a túláram-védelem megszólalásával**.

### Alkalmazási területek

IT hálózatot csak **különleges fogyasztói területeken** alkalmaznak:
- **bányák** föld alatti részeiben
- **kórházak** műtőiben
- más különleges fogyasztói területeken

Saját transzformátorral vagy generátorral felszerelt, elkülönített berendezésekben használható.

### Felügyelet

A testzárlatos állapotot úgynevezett **szigetelés-ellenőrző készülékkel** figyelik, amely:
- méri a szigetelési ellenállás értékét
- hibajelzést ad testzárlat esetén

### Hálózati ábra

```
          Transzformátor                 Berendezés
              │                              │
         L1 ──┼──────────────────────────────┤
         L2 ──┼──────────────────────────────┤
         L3 ──┼──────────────────────────────┤
          N ──┼──────────────────────────────┤
              │                              │
              Z                         ╱    └─ PE ─┐
          (nagy                        ╱            │
        impedancia)                   hiba          ═
              │                                (védőföldelés)
              ═
```

> **Fontos:** Az IT rendszer esetén az első földzárlat esetén a hibaáram kicsi marad, ezért az áramkör **nem kapcsol ki automatikusan**. A szigetelés-ellenőrző készülék azonban jelzi a hibát, így a rendszert javítani lehet mielőtt második hiba lépne fel.
