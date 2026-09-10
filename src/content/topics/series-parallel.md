#### Soros kapcsolás

Soros kapcsolásban nincs elágazás, ezért ugyanakkora áram folyik át minden ellenálláson. Az eredő ellenállás:

$$R_e = R_1 + R_2 + R_3 + ...$$

A feszültségek összeadódnak: $U = U_1 + U_2 + U_3 + ...$

#### Párhuzamos kapcsolás

Párhuzamosan kapcsolt ellenállások eredője mindig kisebb a kapcsolást alkotó legkisebb ellenállásnál is. Két ellenállás esetén:

$$R = R_1 \times R_2 = \frac{R_1 \cdot R_2}{R_1 + R_2}$$

A "×" (replusz) jel csak **két tagra** érvényes egyszerre — ha 3 vagy több ellenállás van párhuzamosan, párban kell számolni!

Több egyforma $R$ ellenállás párhuzamos eredője: $\frac{R}{n}$ (n = darabszám).

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
