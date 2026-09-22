#### Soros kapcsolás

Soros kapcsolásban nincs elágazás, ezért ugyanakkora áram folyik át minden ellenálláson. Az eredő ellenállás:

$$R_e = R_1 + R_2 + R_3 + ...$$

A feszültségek összeadódnak: $U = U_1 + U_2 + U_3 + ...$

#### Párhuzamos kapcsolás

Párhuzamosan kapcsolt ellenállások eredője mindig kisebb a kapcsolást alkotó legkisebb ellenállásnál is. Két ellenállás esetén:

$$R = R_1 \times R_2 = \frac{R_1 \cdot R_2}{R_1 + R_2}$$

A "×" (replusz) jel csak **két tagra** érvényes egyszerre — ha 3 vagy több ellenállás van párhuzamosan, párban kell számolni!

**Több ellenállás párhuzamos kapcsolása — általános formula:**

Három vagy több ellenállás párhuzamos kapcsolásánál a reciprokokat (fordított értékeket) kell összeadni:

$$\frac{1}{R_e} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...$$

Majd az eredményt vissza kell fordítani:

$$R_e = \frac{1}{\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...}$$

```example
Példa: $R_1=47Ω$, $R_2=22Ω$, $R_3=16Ω$ párhuzamosan
$1/R_e = 1/47 + 1/22 + 1/16 = 0{,}0213 + 0{,}0455 + 0{,}0625 = 0{,}1292$
$R_e = 1/0{,}1292 = 7{,}74Ω$
```

**Speciális eset: Több egyforma ellenállás párhuzamosan**

Ha **n** darab egyforma $R$ ellenállást kapcsolunk párhuzamosan, az eredő ellenállás:

$$R_e = \frac{R}{n}$$

**Levezetés:**

Ha minden ellenállás értéke $R$, akkor:

$$\frac{1}{R_e} = \frac{1}{R} + \frac{1}{R} + \frac{1}{R} + ... \text{ (n-szer)}$$

$$\frac{1}{R_e} = n \cdot \frac{1}{R} = \frac{n}{R}$$

Visszafordítva:

$$R_e = \frac{1}{\frac{n}{R}} = \frac{R}{n}$$

```example
Példa: 4 darab 100Ω-os ellenállás párhuzamosan
$R_e = 100/4 = 25Ω$

Ellenőrzés a teljes formulával:
$1/R_e = 1/100 + 1/100 + 1/100 + 1/100 = 4/100 = 0{,}04$
$R_e = 1/0{,}04 = 25Ω$ ✓
```

```example
Példa: 3 darab 60Ω-os ellenállás párhuzamosan
$R_e = 60/3 = 20Ω$
```

#### Vegyes kapcsolás — módszer

Bonyolultabb hálózatoknál mindig a "legmélyebb" (áramkör belsejében lévő) egyszerű soros vagy párhuzamos részt vonjuk össze eredőbe, majd kifelé haladva ismételjük, amíg egyetlen eredő ellenállás nem marad.

```example
Példa: $R_1=20Ω$, $R_2=R_3=16Ω$ (párhuzamos), $R_4=12Ω$ sorba az előzővel, mindez párhuzamos $R_1$-gyel.
$R_2 \times R_3 = 16 \cdot 16/32 = 8Ω$
$8Ω + R_4 = 8+12 = 20Ω$
$R_e = R_1 \times 20 = 20 \cdot 20/40 = 10Ω$
```

```example
Példa: $R_1=10Ω$ sorban, majd $R_2=60Ω$, $R_3=40Ω$, $R_4=24Ω$ mind párhuzamosan egymással.
$R_2 \times R_3 = 40 \cdot 60/100 = 24Ω$
$24Ω \times R_4 = 24 \cdot 24/48 = 12Ω$
$R_e = R_1+12 = 10+12 = 22Ω$
```
