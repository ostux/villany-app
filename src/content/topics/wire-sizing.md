Egy anyagi rendszer (pl. huzal) ellenállása egyenesen arányos a hosszával, és fordítottan arányos a keresztmetszetével, továbbá függ az anyagától és a hőmérséklettől:

$$R = \rho \cdot \frac{l}{A}$$

ahol $\rho$ (ró) az anyag **fajlagos ellenállása**, $l$ a vezető hossza, $A$ a keresztmetszete. A fajlagos ellenállás az egységnyi hosszúságú és egységnyi keresztmetszetű anyag ellenállását mutatja meg — adott anyagra jellemző állandó.

Mértékegysége $\Omega \text{m}$, de a gyakorlatban praktikusabb $\Omega \text{mm}^2 / \text{m}$-ben számolni (mivel a keresztmetszetet $\text{mm}^2$-ben mérjük).

| Anyag | $\rho$ ($\Omega \text{mm}^2 / \text{m}$) |
|-------|------------|
| Ezüst | 0,016 |
| Réz | 0,0175 |
| Arany | 0,023 |
| Alumínium | 0,028 |
| Vas | 0,13 |
| Ólom | 0,208 |
| Manganin | 0,43 |
| Kanthal | 1,39 |

#### Kör keresztmetszet

Vezetékeknél az átmérőt ($d$) szokás megadni, mert könnyebben mérhető. A keresztmetszet:

$$A = \frac{d^2 \cdot \pi}{4}$$

#### Áramsűrűség

Az áramsűrűség (jele $J$) a vezeték egységnyi keresztmetszetére jutó áramerősség: $J = \frac{I}{A}$, mértékegysége $\text{A}/\text{mm}^2$. A kedvező értékek $2{-}8 \text{ A}/\text{mm}^2$ között vannak, de erősen függ a környezettől (hány vezeték megy egymás mellett, szellőzés, vakolat alatt/földben fut-e).

#### Vezeték méretezése feszültségesésre

A vezetéken is $P = I^2 \cdot R_v$ teljesítmény (hőveszteség) keletkezik, emiatt feszültség esik rajta, és a fogyasztóra kevesebb feszültség jut. A megengedett feszültségesés jellemzően **2%** világítási hálózaton.

```example
Példa: Garázs világítás $4 \times 60W$ izzó + 1,2kW motor, 18m-re a leágazási doboztól, réz vezeték ($\rho=0{,}0175$), max 2% feszültségesés.
$P_{\text{összes}} = 240+1200 = 1440W$ → $I = P/U = 1440/230 = 6{,}26A$
Max feszültségesés: $230 \cdot 0{,}02 = 4{,}6V$
Max ellenállás: $R = U/I = 4{,}6/6{,}26 = 0{,}735Ω$
$A = \rho \cdot l/R = 0{,}0175 \cdot 36/0{,}735 = 0{,}857\text{mm}^2$ (l=36m, mert oda-vissza számít!)
→ Felfelé kerekítve legalább $1\text{mm}^2$, de gyakorlatban $1{,}5\text{mm}^2$-nél kisebbet nem használunk.
```
