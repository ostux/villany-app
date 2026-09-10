#### Feszültségosztó (terheletlen)

Két sorba kötött ellenállás ($R_1$, $R_2$) esetén a kimeneti feszültség:

$$U_{ki} = U_{be} \cdot \frac{R_2}{R_1 + R_2}$$

```example
Példa: $R_1=200Ω$, $R_2=300Ω$, $U_{be}=12V$. $U_{ki} = 12 \cdot 300/500 = 7{,}2V$
```

#### Terhelt feszültségosztó

Ha a kimenetre egy $R_t$ terhelést kapcsolunk, az megváltoztatja az osztásarányt, mert $R_2$ és $R_t$ párhuzamos eredőjével kell számolni:

$$U_{ki} = U_{be} \cdot \frac{R_2 \times R_t}{R_1 + (R_2 \times R_t)}$$

#### Áramosztó

Egy áramkör párhuzamosan kapcsolt ágainak áramai fordítottan arányosak az egyes ágak ellenállásaival. A párhuzamos ágakon eső feszültségek megegyeznek:

$$I_1 = I \cdot \frac{R_2}{R_1 + R_2} \qquad I_2 = I \cdot \frac{R_1}{R_1 + R_2}$$

Két ellenállás esetén: $\frac{I_1}{I_2} = \frac{R_2}{R_1}$ — tehát a **kisebb ellenálláson folyik a nagyobb áram**.

```example
Példa: AB pontok közé 100V, $R_1=22Ω$ (sorban), $R_2=10Ω$, $R_3=15Ω$ (párhuzamos). Mekkora áram folyik $R_2$-n?
$R_e = R_1+(R_2 \times R_3) = 22+(150/25) = 28Ω$
Főági áram: $I = U/R_e = 100/28 = 3{,}57A$
$I_2 = I \cdot R_3/(R_2+R_3) = 3{,}57 \cdot 15/25 = 2{,}142A$
```
