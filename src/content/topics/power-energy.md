#### Villamos teljesítmény

$$P = U \cdot I \qquad [P] = W \text{ (watt)}$$

Ebből átrendezéssel:

$$I = \frac{P}{U} \qquad U = \frac{P}{I}$$

Mivel $U = I \cdot R$, a teljesítmény háromféleképpen is számítható, aszerint, hogy a három jellemző mennyiség közül melyik kettőt ismerjük:

$$P = U \cdot I = \frac{U^2}{R} = I^2 \cdot R$$

#### Villamos energia (munka)

$$W = P \cdot t = U \cdot I \cdot t$$

SI mértékegysége a joule ($J = W \cdot s$), de a gyakorlatban a villanyszerelők a **kWh**-t használják: $1 \text{ kWh} = 1000 \text{ Wh} = 3\,600\,000 \text{ Ws}$.

#### Hatásfok

Ha egy villamos hálózatban megkülönböztethető a hasznos és az összes teljesítmény, akkor a hatásfok ($\eta$, "éta"):

$$\eta = \frac{P_{\text{hasznos}}}{P_{\text{összes}}} \qquad \text{(mindig kisebb mint 1, azaz } <100\% \text{)}$$

#### Valódi (nem ideális) generátor

Minden valóságos feszültséggenerátor egy ideális feszültséggenerátorból és a vele sorba kapcsolódó belső ellenállásából ($R_b$) áll. Ezen belső ellenálláson veszteség keletkezik.

**Az ideális vs. valódi generátor:**

- **Ideális generátor**: Olyan elméleti feszültségforrás, amelynek nincs belső ellenállása ($R_b = 0$). A kapocsfeszültsége állandó, terheléstől függetlenül.
- **Valódi generátor**: Minden valós feszültségforrás (elem, akkumulátor, hálózati tápegység) rendelkezik belső ellenállással, ezen energia veszteségként hővé alakul.

**Fontos jelölések:**

- **$U_0$** (elektromotoros erő, EMF): A generátor "belső" feszültsége, amit terhelés nélkül (üresjárásban) mérhetünk. Ez az ideális feszültség.
- **$R_b$** (belső ellenállás): A generátor saját ellenállása, amely sorosan van az ideális feszültségforrással.
- **$R_t$** (terhelési ellenállás): A külső áramkör ellenállása (a fogyasztó).
- **$U_k$** (kapocsfeszültség): A generátor kivezetésein (kapcsain) ténylegesen mérhető feszültség terhelés alatt.

**Hogyan működik?**

Amikor a generátort megterheljük (áramot veszünk belőle), az áram a belső ellenálláson is keresztülfolyik. Ezen belső ellenálláson feszültség esik:

$$U_{R_b} = I \cdot R_b$$

Ezért a kapocsfeszültség kisebb lesz, mint az elektromotoros erő:

$$U_k = U_0 - I \cdot R_b$$

Az áramot a teljes áramkör (belső + külső ellenállás) határozza meg:

$$I = \frac{U_0}{R_b + R_t}$$

**Teljesítmények:**

- **$P_0$ (összes teljesítmény)**: A generátor által leadott teljes teljesítmény: $P_0 = U_0 \cdot I$
- **$P_h$ (hasznos teljesítmény)**: A külső terhelésen realizálódó teljesítmény: $P_h = U_k \cdot I = I^2 \cdot R_t$
- **$P_v$ (veszteségi teljesítmény)**: A belső ellenálláson hővé alakuló teljesítmény: $P_v = I^2 \cdot R_b$

Az energiamegmaradás miatt: $P_0 = P_h + P_v$

```example
Alappélda: $U_0=24V$ generátor, $R_b=2Ω$ belső ellenállás, $R_t=10Ω$ terhelés.
$I = U_0/(R_b+R_t) = 24/12 = 2A$
$U_k$ (kapocsfeszültség) $= I \cdot R_t = 20V$
$P_0$ (összes) $= U_0 \cdot I = 48W$
$P_h$ (hasznos) $= U_k \cdot I = 40W$, $P_v$ (veszteség) $= 8W$
$\eta = P_h/P_0 = 40/48 = 0{,}833 \rightarrow 83{,}3\%$
```

> **Fontos:** Ez egy alapvető, sokszor visszatérő példatípus — érdemes jól átgondolni és begyakorolni!

#### Generátorok kapcsolása (telepek)

- **Soros kapcsolás:** a feszültségek összeadódnak ($U_e = U_1 + U_2 + U_3$), a belső ellenállások is ($R_{be} = R_{b1} + R_{b2} + R_{b3}$).
- **Párhuzamos kapcsolás:** csak azonos feszültségű generátorok kapcsolhatók így! Az eredő feszültség nem változik ($U_e = U_0$), de a belső ellenállások eredője kisebb lesz ($n$ db azonos elemnél $R_{be} = \frac{R_b}{n}$) — nagyobb árammal terhelhető telepet kapunk.
