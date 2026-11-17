# Épületvillamosság – Képletek összefoglaló

## Hálózatra csatlakozás

### Független zárlati áram

$$I_z = \frac{U_0}{Z_{L-PEN}}$$

ahol:
- $I_z$ = független zárlati áram (A)
- $U_0$ = névleges fázisfeszültség (V)
- $Z_{L-PEN}$ = hurokimpedancia a fázis és PEN vezető között (Ω)

## Földelés

### Rúdföldelő ellenállása (közelítő)

$$R \approx 0{,}9 \times \frac{\rho}{l}$$

ahol:
- $R$ = földelési ellenállás (Ω)
- $\rho$ = talaj fajlagos ellenállása (Ωm)
- $l$ = földelő hossza (m)

### Párhuzamos földelők eredője

$$\frac{1}{R_e} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots$$

vagy ideális esetben:

$$R_e = \frac{R}{n}$$

ahol $n$ = földelők száma (hatékonysági tényező = 1)

## Teljesítmény és energia

### Hatásos villamos munka

$$W = P \cdot t = U \cdot I \cdot \cos\varphi \cdot t$$

ahol:
- $W$ = villamos munka, energia (J vagy kWh)
- $P$ = teljesítmény (W vagy kW)
- $t$ = idő (s vagy h)
- $\cos\varphi$ = teljesítménytényező

## Lakás méretezése

### Egyidejűségi tényező

$$e = c + \frac{1-c}{\sqrt{n}}$$

ahol:
- $e$ = egyidejűségi tényező
- $c$ = állandó (jellemzően 0,2)
- $n$ = lakások száma

### Eredő teljesítményigény

$$P_e = n \cdot P_m \cdot e + \sum (P_f + P_v)$$

ahol:
- $P_e$ = eredő teljesítményigény
- $n$ = lakások száma
- $P_m$ = egy lakás maximális teljesítménye
- $e$ = egyidejűségi tényező
- $P_f$ = alapfűtés teljesítménye
- $P_v$ = forróvíz-tároló teljesítménye

## Áramszámítás

### Egyfázisú (cosφ nélkül)

$$I = \frac{P}{U}$$

ahol:
- $I$ = áram (A)
- $P$ = teljesítmény (W)
- $U$ = feszültség (V)

### Háromfázisú táplálás

**Vonali feszültség:**

$$U_v = \sqrt{3} \cdot U_f \approx 1{,}732 \cdot U_f$$

ahol:
- $U_v$ = vonali feszültség (V)
- $U_f$ = fázisfeszültség (V)

**Áram háromfázisú esetben:**

$$I = \frac{P}{\sqrt{3} \cdot U_v} = \frac{P}{U_v \cdot \sqrt{3}}$$

## Vezetékméretezés

### Feszültségesésre

$$R = \rho \cdot \frac{2l}{A} \quad \rightarrow \quad A = \rho \cdot \frac{2l}{R}$$

ahol:
- $A$ = vezeték keresztmetszete (mm²)
- $\rho$ = fajlagos ellenállás (Ωmm²/m)
- $l$ = vezeték hossza (m) – **oda-vissza, ezért 2l**
- $R$ = max. megengedett ellenállás (Ω)

**Megengedett ellenállás:**

$$R_{max} = \frac{\Delta U}{I}$$

ahol:
- $\Delta U$ = megengedett feszültségesés (V)
- $I$ = áram (A)

## Szelektivitás

### Kismegszakítók névleges árama

$$I_{n,\text{leágazás}} \leq \frac{I_{n,\text{betáp}}}{1{,}6}$$

ahol:
- $I_{n,\text{leágazás}}$ = leágazás kismegszakítójának névleges árama (A)
- $I_{n,\text{betáp}}$ = betápláló kismegszakító névleges árama (A)

## Túláramvédelem

### Bimetál kioldási határa

**Minimum elviselés:**
- $1{,}13 \times I_n$ – több mint 1 órán át

**Maximum kioldási idő:**
- $1{,}45 \times I_n$ – 1 órán belül

### Mágneses kioldás

| Típus | Kioldási tartomány |
|---|---|
| B | $3 \times I_n$ – $5 \times I_n$ |
| C | $5 \times I_n$ – $10 \times I_n$ |
| D | $10 \times I_n$ – $20 \times I_n$ |

## Megengedett értékek

### Földelési ellenállás

$$R_e \leq 10 \, \Omega$$

### Feszültségesés

**Csatlakozóvezeték:**
$$\epsilon \leq 1\%$$

**Fővezetékek összesen:**
$$\epsilon \leq 1\%$$

**Együttes feszültségesés:**
$$\epsilon_{összes} \leq 2\%$$

### Fogyasztásmérő magasság

$$h_{mérő} \leq 180 \, \text{cm}$$

### Kapcsolók és aljzatok magassága

| Szerelvény | Magasság |
|---|---|
| Kapcsolók | 140–150 cm |
| Dugalj (normál) | 40 cm |
| Dugalj (nedves helyiség) | 140–150 cm |

## Gyakran használt konstansok

| Paraméter | Érték |
|---|---|
| Réz fajlagos ellenállása | ρ = 0,0175 Ωmm²/m |
| Alumínium fajlagos ellenállása | ρ = 0,028 Ωmm²/m |
| Névleges fázisfeszültség | U₀ = 230 V |
| Névleges vonali feszültség | U_v = 400 V |
| Hálózati frekvencia | f = 50 Hz |
| √3 | ≈ 1,732 |
| Egyidejűségi állandó (c) | 0,2 |

## Szabványos keresztmetszetek [mm²]

**1,5** – **2,5** – **4** – **6** – **10** – **16** – **25** – 35 – 50 – 70 – 95 – 120 – 150 – 185 – 240 – 300 – 400 – 500

> A félkövérrel jelölt keresztmetszetek a leggyakrabban használtak lakásvillamossági szerelésekben.
