// Study materials, exercises, and quiz questions for the Electrician/CS 01 - Electrical Fundamentals (Electrotechnology) module
// Source: 01ea-villszer-202509.pdf

export interface Topic {
  id: string;
  title: string;
  summary: string;
  contentPath: string; // Path to markdown file
  musicPath?: string; // Optional path to music file
}

export interface Exercise {
  id: string;
  topic: string;
  question: string;
  answer: number;
  unit: string;
  tolerance: number;
  explanation: string;
}

// Note: QuizQuestion interface has been moved to quizData.ts

export const TOPICS: Topic[] = [
  {
    id: "units",
    title: "1. Mértékegységrendszer (SI)",
    summary: "Az alapmennyiségek, prefixumok és a legfontosabb származtatott villamos mértékegységek.",
    contentPath: "/src/content/topics/units.md"
  },
  {
    id: "basic-concepts",
    title: "2. Töltés, áram, feszültség, ellenállás",
    summary: "Az elektromos feszültség és áram fogalma, a generátorok, valamint az áramkör alapfogalmai.",
    contentPath: "/src/content/topics/basic-concepts.md"
  },
  {
    id: "ohms-law",
    title: "3. Ohm törvénye, az ellenállás",
    summary: "Ohm törvénye, az ellenállás és a vezetőképesség fogalma, alapszámítások.",
    contentPath: "/src/content/topics/ohms-law.md"
  },
  {
    id: "series-parallel",
    title: "4. Soros és párhuzamos kapcsolás",
    summary: "Ellenállások soros és párhuzamos eredőjének számítása, vegyes kapcsolások.",
    contentPath: "/src/content/topics/series-parallel.md"
  },
  {
    id: "kirchhoff",
    title: "5. Kirchhoff törvényei",
    summary: "A csomóponti törvény és a huroktörvény, alkalmazásuk áramkörökben.",
    contentPath: "/src/content/topics/kirchhoffs-laws.md"
  },
  {
    id: "voltage-divider",
    title: "6. Feszültségosztás, áramosztás",
    summary: "Terheletlen és terhelt feszültségosztó, valamint az áramosztó képlet és alkalmazása.",
    contentPath: "/src/content/topics/voltage-divider.md"
  },
  {
    id: "conductors-insulators",
    title: "7. Vezetők, szigetelők, félvezetők",
    summary: "Az anyagok elektromos vezetőképesség szerinti csoportosítása, sávelmélet.",
    contentPath: "/src/content/topics/conductors-insulators.md"
  },
  {
    id: "resistor-component",
    title: "8. Az ellenállás mint alkatrész",
    summary: "Felépítés, névleges érték, tűrés, teljesítmény, színkód, hőfokfüggés, potenciométerek.",
    contentPath: "/src/content/topics/resistor-component.md",
    musicPath: "/music/ellenallas-dal.mp3"
  },
  {
    id: "power-energy",
    title: "9. Teljesítmény, munka, hatásfok",
    summary: "Villamos teljesítmény és energia számítása, hatásfok, valódi generátor.",
    contentPath: "/src/content/topics/power-energy.md"
  },
  {
    id: "wire-sizing",
    title: "10. Fajlagos ellenállás, vezeték méretezése",
    summary: "A vezeték ellenállásának számítása, keresztmetszet meghatározása feszültségesésre.",
    contentPath: "/src/content/topics/wire-sizing.md"
  },
  {
    id: "star-delta",
    title: "11. Csillag–delta átalakítás",
    summary: "Háromszög (delta) és csillag (Y) kapcsolású ellenállás-hálózatok átalakítása egymásba.",
    contentPath: "/src/content/topics/star-delta.md"
  }
];

// OLD HTML CONTENT BELOW - TO BE REMOVED AFTER ALL TOPICS ARE CONVERTED
/*
const OLD_TOPICS_HTML = [
  {
    id: "mertekegysegek",
    content: `
<p>A nemzetközi mértékegységrendszer (<b>SI</b>) alapegységekből, kiegészítő egységekből és származtatott egységekből áll.</p>
<h4>SI alapegységek</h4>
<table>
<tr><th>Mennyiség</th><th>Jele</th><th>Mértékegység</th><th>Jele</th></tr>
<tr><td>hosszúság</td><td>l</td><td>méter</td><td>m</td></tr>
<tr><td>tömeg</td><td>m</td><td>kilogramm</td><td>kg</td></tr>
<tr><td>idő</td><td>t</td><td>másodperc</td><td>s</td></tr>
<tr><td>elektromos áramerősség</td><td>I</td><td>amper</td><td>A</td></tr>
<tr><td>abszolút hőmérséklet</td><td>T</td><td>kelvin</td><td>K</td></tr>
<tr><td>anyagmennyiség</td><td>n</td><td>mól</td><td>mol</td></tr>
<tr><td>fényerősség</td><td>Iv</td><td>kandela</td><td>cd</td></tr>
</table>
<h4>Prefixumok (10 hatványai)</h4>
<table>
<tr><th>Szorzószám</th><th>Név</th><th>Jel</th></tr>
<tr><td>10<sup>18</sup></td><td>exa</td><td>E</td></tr>
<tr><td>10<sup>15</sup></td><td>peta</td><td>P</td></tr>
<tr><td>10<sup>12</sup></td><td>tera</td><td>T</td></tr>
<tr><td>10<sup>9</sup></td><td>giga</td><td>G</td></tr>
<tr><td>10<sup>6</sup></td><td>mega</td><td>M</td></tr>
<tr><td>10<sup>3</sup></td><td>kilo</td><td>k</td></tr>
<tr><td>10<sup>-3</sup></td><td>milli</td><td>m</td></tr>
<tr><td>10<sup>-6</sup></td><td>mikro</td><td>µ</td></tr>
<tr><td>10<sup>-9</sup></td><td>nano</td><td>n</td></tr>
<tr><td>10<sup>-12</sup></td><td>piko</td><td>p</td></tr>
<tr><td>10<sup>-15</sup></td><td>femto</td><td>f</td></tr>
<tr><td>10<sup>-18</sup></td><td>atto</td><td>a</td></tr>
</table>
<h4>Fontosabb villamos származtatott egységek</h4>
<table>
<tr><th>Mennyiség</th><th>Egység neve</th><th>Jele</th><th>SI alapegységekkel</th></tr>
<tr><td>frekvencia</td><td>hertz</td><td>Hz</td><td>s<sup>-1</sup></td></tr>
<tr><td>elektromos töltés</td><td>coulomb</td><td>C</td><td>A·s</td></tr>
<tr><td>feszültség</td><td>volt</td><td>V</td><td>m²·kg·s<sup>-3</sup>·A<sup>-1</sup></td></tr>
<tr><td>ellenállás</td><td>ohm</td><td>Ω</td><td>m²·kg·s<sup>-3</sup>·A<sup>-2</sup></td></tr>
<tr><td>vezetőképesség</td><td>siemens</td><td>S</td><td>Ω<sup>-1</sup></td></tr>
<tr><td>teljesítmény</td><td>watt</td><td>W</td><td>J·s<sup>-1</sup></td></tr>
<tr><td>energia, munka</td><td>joule</td><td>J</td><td>N·m</td></tr>
</table>
<p class="tip"><b>Fontos:</b> a hatványokkal való szorzás/osztás szabálya: 10<sup>a</sup>·10<sup>b</sup>=10<sup>a+b</sup>, 10<sup>a</sup>:10<sup>b</sup>=10<sup>a-b</sup>, (10<sup>a</sup>)<sup>b</sup>=10<sup>a·b</sup>.</p>
`
  },
  {
    id: "alapfogalmak",
    title: "2. Töltés, áram, feszültség, ellenállás",
    summary: "Az elektromos feszültség és áram fogalma, a generátorok, valamint az áramkör alapfogalmai.",
    content: `
<h4>Elektromos feszültség</h4>
<p>Elektromos mezőben két pont között az <b>elektromos feszültség</b> megadja, hogy mennyi munkát végez a mező egységnyi töltésen, míg a töltés az egyik pontból elmozdul a másikba. Mértékegysége a joule/coulomb, amit <b>voltnak</b> neveznek (V).</p>
<h4>Elektromos áram</h4>
<p>Az <b>elektromos áram</b> az elektromos töltéssel rendelkező részecskék (töltéshordozók) sokaságának elektromos mező hatására kialakuló rendezett mozgása. Az áram irányát a pozitív töltéshordozók mozgásának irányával definiáljuk. Mértékegysége az amper (A).</p>
<p>Áramlás irányának váltakozása alapján beszélhetünk <b>váltakozó</b>, vagy áramlás irányának állandósága esetén <b>egyenáramról</b>.</p>
<h4>Generátorok</h4>
<p>A generátorok villamos energia előállítására alkalmas készülékek (vegyi energia: galvánelemek, akkumulátorok; fényenergia: napelemek; mechanikai energia: generátorok).</p>
<ul>
<li><b>Ideális feszültséggenerátor:</b> kapcsai közötti feszültség a rá kapcsolt fogyasztóktól függetlenül állandó.</li>
<li><b>Ideális áramgenerátor:</b> árama a rá kapcsolt fogyasztóktól függetlenül állandó.</li>
</ul>
<h4>Rövidzár és szakadás</h4>
<p>Rövidzár esetén R=0, a feszültség nulla. Szakadás esetén R=∞, az áram nulla. Áram csak <b>zárt áramkörben</b> folyik.</p>
`
  },
  {
    id: "ohm-torveny",
    title: "3. Ohm törvénye, az ellenállás",
    summary: "Ohm törvénye, az ellenállás és a vezetőképesség fogalma, alapszámítások.",
    content: `
<p>Ohm törvénye kimondja, hogy az elektromosan vezető anyagok a bennük áramló töltések mozgásával szemben a közegellenálláshoz hasonlítható <b>elektromos ellenállással</b> rendelkeznek.</p>
<p>Az áramerősség a vezeték két rögzített pontja között mérhető feszültséggel egyenesen arányos:</p>
<p class="formula">R = U / I</p>
<p>Az <b>UIR-háromszög</b> segít megjegyezni az átrendezéseket: U = I·R, I = U/R, R = U/I.</p>
<h4>Vezetőképesség</h4>
<p>Azt, hogy a testek mennyire jó vezetők, az <b>elektromos vezetőképességgel</b> jellemezzük, jele: G. A vezetőképesség az ellenállás reciproka: G = 1/R. Mértékegysége a siemens (S).</p>
<h4>Példák</h4>
<p class="example"><b>Példa:</b> Egy 12V-os akkumulátorra egy 20 ohmos ellenállást kapcsolunk. Mekkora áram folyik?<br>
I = U/R = 12/20 = 0,6 A</p>
<p class="example"><b>Példa:</b> 1,5A folyik a 10 ohmos ellenálláson. Mekkora a tápfeszültség?<br>
U = R·I = 10·1,5 = 15 V</p>
<p class="example"><b>Példa:</b> Mekkora az ismeretlen ellenállás értéke, ha 20V-ra kapcsolva 2A folyik az áramkörben?<br>
R = U/I = 20/2 = 10 Ω</p>
`
  },
  {
    id: "soros-parhuzamos",
    title: "4. Soros és párhuzamos kapcsolás",
    summary: "Ellenállások soros és párhuzamos eredőjének számítása, vegyes kapcsolások.",
    content: `
<h4>Soros kapcsolás</h4>
<p>Soros kapcsolásban nincs elágazás, ezért ugyanakkora áram folyik át minden ellenálláson. Az eredő ellenállás:</p>
<p class="formula">Re = R1 + R2 + R3 + ...</p>
<p>A feszültségek összeadódnak: U = U1 + U2 + U3 + ...</p>
<h4>Párhuzamos kapcsolás</h4>
<p>Párhuzamosan kapcsolt ellenállások eredője mindig kisebb a kapcsolást alkotó legkisebb ellenállásnál is. Két ellenállás esetén:</p>
<p class="formula">R = R1 × R2 = (R1·R2) / (R1+R2)</p>
<p>A "×" (replusz) jel csak <b>két tagra</b> érvényes egyszerre — ha 3 vagy több ellenállás van párhuzamosan, párban kell számolni!</p>
<p>Több egyforma R ellenállás párhuzamos eredője: R/n (n = darabszám).</p>
<h4>Vegyes kapcsolás — módszer</h4>
<p>Bonyolultabb hálózatoknál mindig a "legmélyebb" (áramkör belsejében lévő) egyszerű soros vagy párhuzamos részt vonjuk össze eredőbe, majd kifelé haladva ismételjük, amíg egyetlen eredő ellenállás nem marad.</p>
<p class="example"><b>Példa:</b> R1=20Ω, R2=R3=16Ω (párhuzamos), R4=12Ω sorba az előzővel, mindez párhuzamos R1-gyel.<br>
R2×R3 = 16·16/32 = 8Ω<br>
8Ω + R4 = 8+12 = 20Ω<br>
Re = R1×20 = 20·20/40 = 10Ω</p>
<p class="example"><b>Példa:</b> R1=10Ω sorban, majd R2=60Ω, R3=40Ω, R4=24Ω mind párhuzamosan egymással.<br>
R2×R3 = 40·60/100 = 24Ω<br>
24Ω×R4 = 24·24/48 = 12Ω<br>
Re = R1+12 = 10+12 = 22Ω</p>
`
  },
  {
    id: "kirchhoff",
    title: "5. Kirchhoff törvényei",
    summary: "A csomóponti törvény és a huroktörvény, alkalmazásuk áramkörökben.",
    content: `
<h4>Kirchhoff I. törvénye (csomóponti törvény)</h4>
<p>Párhuzamos (elágazó) áramkörökre vonatkozik. A törvény szerint <b>a csomópontba befolyó áramok összege megegyezik az onnan elfolyó áramok összegével</b>, mert egy villamos hálózat csomópontjaiban nincs töltésfelhalmozódás.</p>
<p class="formula">ΣI = 0</p>
<h4>Kirchhoff II. törvénye (huroktörvény)</h4>
<p>Sorosan kapcsolt áramköri elemekre vonatkozik. A törvény szerint <b>bármely zárt hurokban a feszültségek előjeles összege nulla</b>. Egy tetszőleges körüljárási irányt véve fel, a feszültségforrások összege megegyezik a feszültségesések összegével.</p>
<p class="formula">ΣU = 0</p>
<p class="tip">Ezek a törvények minden összetett hálózat elemzésének alapját adják — ezekből vezethető le a soros/párhuzamos eredő, a feszültség- és áramosztó képlete is.</p>
`
  },
  {
    id: "feszultsegosztas",
    title: "6. Feszültségosztás, áramosztás",
    summary: "Terheletlen és terhelt feszültségosztó, valamint az áramosztó képlet és alkalmazása.",
    content: `
<h4>Feszültségosztó (terheletlen)</h4>
<p>Két sorba kötött ellenállás (R1, R2) esetén a kimeneti feszültség:</p>
<p class="formula">Uki = Ube · R2 / (R1+R2)</p>
<p class="example"><b>Példa:</b> R1=200Ω, R2=300Ω, Ube=12V. Uki = 12·300/500 = 7,2V</p>
<h4>Terhelt feszültségosztó</h4>
<p>Ha a kimenetre egy Rt terhelést kapcsolunk, az megváltoztatja az osztásarányt, mert R2 és Rt párhuzamos eredőjével kell számolni:</p>
<p class="formula">Uki = Ube · (R2×Rt) / (R1 + (R2×Rt))</p>
<h4>Áramosztó</h4>
<p>Egy áramkör párhuzamosan kapcsolt ágainak áramai fordítottan arányosak az egyes ágak ellenállásaival. A párhuzamos ágakon eső feszültségek megegyeznek:</p>
<p class="formula">I1 = I · R2/(R1+R2) &nbsp;&nbsp; I2 = I · R1/(R1+R2)</p>
<p>Két ellenállás esetén: I1/I2 = R2/R1 — tehát a <b>kisebb ellenálláson folyik a nagyobb áram</b>.</p>
<p class="example"><b>Példa:</b> AB pontok közé 100V, R1=22Ω (sorban), R2=10Ω, R3=15Ω (párhuzamos). Mekkora áram folyik R2-n?<br>
Re = R1+(R2×R3) = 22+(150/25) = 28Ω<br>
Főági áram: I = U/Re = 100/28 = 3,57A<br>
I2 = I·R3/(R2+R3) = 3,57·15/25 = 2,142A</p>
`
  },
  {
    id: "vezetok-szigetelok",
    title: "7. Vezetők, szigetelők, félvezetők",
    summary: "Az anyagok elektromos vezetőképesség szerinti csoportosítása, sávelmélet.",
    content: `
<h4>Vezetők</h4>
<p>A vezető anyagok kristályos szerkezetűek, sok szabad elektront tartalmaznak, ezért jó vezetőképességűek. Elsőrendű vezetőknek a tiszta fémeket tekintjük (pl. ezüst, réz, alumínium, arany). A vezetőknél a <b>tiltott sáv</b> kicsi vagy nincs (átfedés van a valencia- és vezetési sáv között).</p>
<h4>Szigetelők</h4>
<p>A tiltott sáv szélessége nagy (>3 eV), amit szobahőmérsékleten csak nagyon kevés elektron tud átugrani. Kevés a szabad elektron, az anyag gyakorlatilag nem vezet. Példák: gázok, olajok, üveg, műanyagok, kerámiák, csillám.</p>
<h4>Félvezetők</h4>
<p>A tiltott sáv szélessége kicsi (3 eV alatt), ezért szobahőmérsékleten már viszonylag sok elektron jut a vezetési sávba. Az anyag gyengén vezet. Félvezető tulajdonságokkal rendelkezik nagy tisztaságú állapotban a germánium (Ge), a szilícium (Si), a szelén (Se).</p>
`
  },
  {
    id: "ellenallas-alkatresz",
    title: "8. Az ellenállás mint alkatrész",
    summary: "Felépítés, névleges érték, tűrés, teljesítmény, színkód, hőfokfüggés, potenciométerek.",
    content: `
<h4>Felépítés és fajták</h4>
<p>Az ellenállás fém sapkából, vezető rétegből (huzal vagy réteg: szén/fém) és kerámia hordozóból épül fel.</p>
<h4>Névleges érték és E-sorok</h4>
<p>Az értékeket úgy választották meg, hogy relatív eltérésük mindenhol azonos legyen (mértani sor): E6 (±20%), E12 (±10%), E24 (±5%), és pontosabb sorozatok: E48, E96.</p>
<h4>Színkód</h4>
<p>Az ellenállás értékét és tűrését színes gyűrűkkel jelölik. Négysávos jelölésnél: 1-2. gyűrű az értékjegyek, 3. gyűrű a szorzó, 4. gyűrű a tűrés. Ötsávos jelölésnél 3 értékjegy van.</p>
<table>
<tr><th>Szín</th><th>Érték</th><th>Szorzó</th><th>Tűrés</th></tr>
<tr><td>Fekete</td><td>0</td><td>×10⁰</td><td>-</td></tr>
<tr><td>Barna</td><td>1</td><td>×10¹</td><td>±1%</td></tr>
<tr><td>Piros</td><td>2</td><td>×10²</td><td>±2%</td></tr>
<tr><td>Narancs</td><td>3</td><td>×10³</td><td>-</td></tr>
<tr><td>Sárga</td><td>4</td><td>×10⁴</td><td>-</td></tr>
<tr><td>Zöld</td><td>5</td><td>×10⁵</td><td>±0,5%</td></tr>
<tr><td>Kék</td><td>6</td><td>×10⁶</td><td>±0,25%</td></tr>
<tr><td>Lila</td><td>7</td><td>×10⁷</td><td>±0,1%</td></tr>
<tr><td>Szürke</td><td>8</td><td>×10⁸</td><td>-</td></tr>
<tr><td>Fehér</td><td>9</td><td>×10⁹</td><td>-</td></tr>
<tr><td>Arany</td><td>-</td><td>×10⁻¹</td><td>±5%</td></tr>
<tr><td>Ezüst</td><td>-</td><td>×10⁻²</td><td>±10%</td></tr>
</table>
<p class="example"><b>Példa:</b> Vörös-Fekete-Zöld-Vörös-Vörös → 2-0-5-×10²-±2% → 20500Ω = 20,5 kΩ ±2%</p>
<h4>Teljesítmény</h4>
<p>Az ellenállásnak a névleges érték mellett fontos adata a tűrése és a teljesítménye (P=U·I=U²/R=I²·R). Ha a szükségesnél kisebb teljesítményű ellenállást használunk, túlmelegszik és tönkremehet — mindig hagyjunk tartalékot (kb. 30-50%-kal nagyobb teljesítményűt válasszunk).</p>
<h4>Hőfokfüggés</h4>
<ul>
<li><b>PTK (PTC):</b> az ellenállás névleges értéke növekvő hőmérséklettel nő.</li>
<li><b>NTK (NTC):</b> az ellenállás növekvő hőmérséklettel csökken. Kiválóan használhatók hőmérséklet érzékelésére, olcsók, de pontatlanok.</li>
<li><b>VDR:</b> feszültségfüggő ellenállás — bizonyos feszültségig nem változik, aztán hirtelen lecsökken.</li>
<li><b>Fotoellenállás (LDR):</b> fény hatására meredeken csökken az ellenállása.</li>
<li>Az izzólámpa izzószálának ellenállása hidegen kicsi, melegen akár 10-szeres is lehet.</li>
</ul>
<h4>Potenciométerek</h4>
<p>A feszültségosztók gyakorlati alkalmazása a változtatható értékű ellenállás (potenciométer, "poti"). A potenciométer osztásarányát egy csúszóérintkező mozgatásával változtatjuk. Az ellenálláspálya anyaga lehet szén, fém, huzal, cermet. A trimmer potméterek csak gyártáskor/szervizeléskor hozzáférhető beállító elemek.</p>
`
  },
  {
    id: "teljesitmeny-energia",
    title: "9. Teljesítmény, munka, hatásfok",
    summary: "Villamos teljesítmény és energia számítása, hatásfok, valódi generátor.",
    content: `
<h4>Villamos teljesítmény</h4>
<p class="formula">P = U · I &nbsp;&nbsp; [P] = W (watt)</p>
<p>Mivel U=IR, a teljesítmény háromféleképpen is számítható, aszerint, hogy a három jellemző mennyiség közül melyik kettőt ismerjük:</p>
<p class="formula">P = U·I = U²/R = I²·R</p>
<h4>Villamos energia (munka)</h4>
<p class="formula">W = P · t = U·I·t</p>
<p>SI mértékegysége a joule (J = W·s), de a gyakorlatban a villanyszerelők a <b>kWh</b>-t használják: 1 kWh = 1000 Wh = 3 600 000 Ws.</p>
<h4>Hatásfok</h4>
<p>Ha egy villamos hálózatban megkülönböztethető a hasznos és az összes teljesítmény, akkor a hatásfok (η, "éta"):</p>
<p class="formula">η = Phasznos / Pösszes &nbsp; (mindig kisebb mint 1, azaz &lt;100%)</p>
<h4>Valódi (nem ideális) generátor</h4>
<p>Minden valóságos feszültséggenerátor egy ideális feszültséggenerátorból és a vele sorba kapcsolódó belső ellenállásából (Rb) áll. Ezen belső ellenálláson veszteség keletkezik.</p>
<p class="example"><b>Alappélda:</b> U0=24V generátor, Rb=2Ω belső ellenállás, Rt=10Ω terhelés.<br>
I = U0/(Rb+Rt) = 24/12 = 2A<br>
Uk (kapocsfeszültség) = I·Rt = 20V<br>
P0 (összes) = U0·I = 48W<br>
Ph (hasznos) = Uk·I = 40W, Pv (veszteség) = 8W<br>
η = Ph/P0 = 40/48 = 0,833 → 83,3%</p>
<p class="tip">Ez egy alapvető, sokszor visszatérő példatípus — érdemes jól átgondolni és begyakorolni!</p>
<h4>Generátorok kapcsolása (telepek)</h4>
<ul>
<li><b>Soros kapcsolás:</b> a feszültségek összeadódnak (Ue=U1+U2+U3), a belső ellenállások is (Rbe=Rb1+Rb2+Rb3).</li>
<li><b>Párhuzamos kapcsolás:</b> csak azonos feszültségű generátorok kapcsolhatók így! Az eredő feszültség nem változik (Ue=U0), de a belső ellenállások eredője kisebb lesz (n db azonos elemnél Rbe=Rb/n) — nagyobb árammal terhelhető telepet kapunk.</li>
</ul>
`
  },
  {
    id: "vezetek-meretezes",
    title: "10. Fajlagos ellenállás, vezeték méretezése",
    summary: "A vezeték ellenállásának számítása, keresztmetszet meghatározása feszültségesésre.",
    content: `
<p>Egy anyagi rendszer (pl. huzal) ellenállása egyenesen arányos a hosszával, és fordítottan arányos a keresztmetszetével, továbbá függ az anyagától és a hőmérséklettől:</p>
<p class="formula">R = ρ · l / A</p>
<p>ahol ρ (ró) az anyag <b>fajlagos ellenállása</b>, l a vezető hossza, A a keresztmetszete. A fajlagos ellenállás az egységnyi hosszúságú és egységnyi keresztmetszetű anyag ellenállását mutatja meg — adott anyagra jellemző állandó.</p>
<p>Mértékegysége Ωm, de a gyakorlatban praktikusabb Ωmm²/m-ben számolni (mivel a keresztmetszetet mm²-ben mérjük).</p>
<table>
<tr><th>Anyag</th><th>ρ (Ωmm²/m)</th></tr>
<tr><td>Ezüst</td><td>0,016</td></tr>
<tr><td>Réz</td><td>0,0175</td></tr>
<tr><td>Arany</td><td>0,023</td></tr>
<tr><td>Alumínium</td><td>0,028</td></tr>
<tr><td>Vas</td><td>0,13</td></tr>
<tr><td>Ólom</td><td>0,208</td></tr>
<tr><td>Manganin</td><td>0,43</td></tr>
<tr><td>Kanthal</td><td>1,39</td></tr>
</table>
<h4>Kör keresztmetszet</h4>
<p>Vezetékeknél az átmérőt (d) szokás megadni, mert könnyebben mérhető. A keresztmetszet:</p>
<p class="formula">A = d²·π / 4</p>
<h4>Áramsűrűség</h4>
<p>Az áramsűrűség (jele J) a vezeték egységnyi keresztmetszetére jutó áramerősség: J = I/A, mértékegysége A/mm². A kedvező értékek 2-8 A/mm² között vannak, de erősen függ a környezettől (hány vezeték megy egymás mellett, szellőzés, vakolat alatt/földben fut-e).</p>
<h4>Vezeték méretezése feszültségesésre</h4>
<p>A vezetéken is P=I²·Rv teljesítmény (hőveszteség) keletkezik, emiatt feszültség esik rajta, és a fogyasztóra kevesebb feszültség jut. A megengedett feszültségesés jellemzően <b>2%</b> világítási hálózaton.</p>
<p class="example"><b>Példa:</b> Garázs világítás 4×60W izzó + 1,2kW motor, 18m-re a leágazási doboztól, réz vezeték (ρ=0,0175), max 2% feszültségesés.<br>
P összes = 240+1200 = 1440W → I = P/U = 1440/230 = 6,26A<br>
Max feszültségesés: 230·0,02 = 4,6V<br>
Max ellenállás: R = U/I = 4,6/6,26 = 0,735Ω<br>
A = ρ·l/R = 0,0175·36/0,735 = 0,857mm² (l=36m, mert oda-vissza számít!)<br>
→ Felfelé kerekítve legalább 1mm², de gyakorlatban 1,5mm²-nél kisebbet nem használunk.</p>
`
  },
  {
    id: "csillag-delta",
    title: "11. Csillag–delta átalakítás",
    summary: "Háromszög (delta) és csillag (Y) kapcsolású ellenállás-hálózatok átalakítása egymásba.",
    content: `
<p>Bonyolultabb hálózatoknál előfordul, hogy a részek nem tisztán sorosak vagy párhuzamosak — ilyenkor <b>csillag-delta</b>, vagy <b>delta-csillag</b> átalakítást kell végezni, hogy lássuk, mi van sorban, mi párhuzamosan.</p>
<h4>Csillag → Delta (Y→Δ)</h4>
<p class="formula">R1 = Ra·Rc / RY &nbsp;&nbsp; R2 = Rb·Rc / RY &nbsp;&nbsp; R3 = Ra·Rb / RY</p>
<p>ahol RY = Ra+Rb+Rc.</p>
<h4>Delta → Csillag (Δ→Y)</h4>
<p class="formula">Ra = R1·R3 / RΔ &nbsp;&nbsp; Rb = R2·R3 / RΔ &nbsp;&nbsp; Rc = R1·R2 / RΔ</p>
<p>ahol RΔ = R1+R2+R3.</p>
<h4>Speciális eset: egyenlő ellenállások</h4>
<ul>
<li>Egy <b>R</b> ellenállásokból álló <b>delta</b> kapcsolás egyenértékű egy <b>R/3</b> nagyságú ellenállásokból álló <b>csillag</b> kapcsolással.</li>
<li>Egy <b>R</b> ellenállásokból álló <b>csillag</b> kapcsolás egyenértékű egy <b>3R</b> nagyságú ellenállásokból álló <b>delta</b> kapcsolással.</li>
</ul>
<p class="tip">Ez a "szorzat/3" illetve "×3" szabály gyors fejszámolásra is alkalmas, ha a hálózat szimmetrikus (minden ellenállás egyforma).</p>
`
  }
];
*/

// Practice exercises - numerical input exercises with instant validation
export const EXERCISES: Exercise[] = [
  // --- Unit conversions ---
  { id: "e1", topic: "units", question: "Váltsd át: 1500 µV = ? mV", answer: 1.5, unit: "mV", tolerance: 0.01, explanation: "1500 µV = 1500 / 1000 mV = 1,5 mV (µ→m: osztás 1000-rel)." },
  { id: "e2", topic: "units", question: "Váltsd át: 1,5 kV = ? V", answer: 1500, unit: "V", tolerance: 1, explanation: "1,5 kV = 1,5 · 1000 V = 1500 V." },
  { id: "e3", topic: "units", question: "Váltsd át: 50 V = ? mV", answer: 50000, unit: "mV", tolerance: 1, explanation: "50 V = 50 · 1000 mV = 50 000 mV." },
  { id: "e4", topic: "units", question: "Váltsd át: 5000 mA = ? A", answer: 5, unit: "A", tolerance: 0.01, explanation: "5000 mA = 5000/1000 A = 5 A." },
  { id: "e5", topic: "units", question: "Váltsd át: 2000 µA = ? mA", answer: 2, unit: "mA", tolerance: 0.01, explanation: "2000 µA = 2000/1000 mA = 2 mA." },
  { id: "e6", topic: "units", question: "Váltsd át: 10 A = ? mA", answer: 10000, unit: "mA", tolerance: 1, explanation: "10 A = 10 · 1000 mA = 10 000 mA." },
  { id: "e7", topic: "units", question: "Váltsd át: 1 MΩ = ? kΩ", answer: 1000, unit: "kΩ", tolerance: 1, explanation: "1 MΩ = 1 · 1000 kΩ = 1000 kΩ." },
  { id: "e8", topic: "units", question: "Váltsd át: 30 kΩ = ? Ω", answer: 30000, unit: "Ω", tolerance: 1, explanation: "30 kΩ = 30 · 1000 Ω = 30 000 Ω." },
  { id: "e9", topic: "units", question: "Váltsd át: 3 Ω = ? mΩ", answer: 3000, unit: "mΩ", tolerance: 1, explanation: "3 Ω = 3 · 1000 mΩ = 3000 mΩ." },
  { id: "e10", topic: "units", question: "Váltsd át: 4 mS = ? Ω (Tipp: G=1/R, mS-t S-re válts előbb!)", answer: 250, unit: "Ω", tolerance: 1, explanation: "4 mS = 0,004 S. R = 1/G = 1/0,004 = 250 Ω." },
  { id: "e11", topic: "units", question: "Számítsd ki: 10² · 10⁵ = 10^?", answer: 7, unit: "(kitevő)", tolerance: 0, explanation: "Szorzásnál a kitevők összeadódnak: 2+5=7, tehát 10⁷." },
  { id: "e12", topic: "units", question: "Számítsd ki: 10⁸ : 10³ = 10^?", answer: 5, unit: "(kitevő)", tolerance: 0, explanation: "Osztásnál a kitevők kivonódnak: 8-3=5, tehát 10⁵." },
  { id: "e13", topic: "units", question: "Számítsd ki: (10²)³ = 10^?", answer: 6, unit: "(kitevő)", tolerance: 0, explanation: "Hatványozásnál a kitevők szorzódnak: 2·3=6, tehát 10⁶." },

  // --- Ohm's law ---
  { id: "e14", topic: "ohms-law", question: "Egy 9V-os elemre 45Ω-os ellenállást kapcsolunk. Mekkora áram folyik? (A)", answer: 0.2, unit: "A", tolerance: 0.01, explanation: "I = U/R = 9/45 = 0,2 A." },
  { id: "e15", topic: "ohms-law", question: "2A folyik egy ellenálláson, rajta 30V esik. Mekkora az ellenállás? (Ω)", answer: 15, unit: "Ω", tolerance: 0.1, explanation: "R = U/I = 30/2 = 15 Ω." },
  { id: "e16", topic: "ohms-law", question: "Egy 100Ω-os ellenálláson 0,5A folyik. Mekkora a feszültség rajta? (V)", answer: 50, unit: "V", tolerance: 0.5, explanation: "U = R·I = 100·0,5 = 50 V." },

  // --- Series/parallel equivalents ---
  { id: "e17", topic: "series-parallel", question: "R1=5Ω, R2=10Ω, R3=15Ω sorba kapcsolva. Mekkora az eredő? (Ω)", answer: 30, unit: "Ω", tolerance: 0.1, explanation: "Soros eredő: Re = R1+R2+R3 = 5+10+15 = 30 Ω." },
  { id: "e18", topic: "series-parallel", question: "R1=6Ω és R2=3Ω párhuzamosan. Mekkora az eredő? (Ω)", answer: 2, unit: "Ω", tolerance: 0.05, explanation: "R = R1·R2/(R1+R2) = 6·3/9 = 18/9 = 2 Ω." },
  { id: "e19", topic: "series-parallel", question: "R1=R2=R3=30Ω mind párhuzamosan. Mekkora az eredő? (Ω)", answer: 10, unit: "Ω", tolerance: 0.1, explanation: "Egyforma ellenállásoknál Re = R/n = 30/3 = 10 Ω." },
  { id: "e20", topic: "series-parallel", question: "R1=4Ω sorban van a (R2=6Ω és R3=3Ω párhuzamos eredőjével). Mekkora a teljes eredő? (Ω)", answer: 6, unit: "Ω", tolerance: 0.1, explanation: "R2×R3 = 6·3/9 = 2Ω. Teljes eredő = R1+2 = 4+2 = 6Ω." },

  // --- Kirchhoff / voltage divider / current divider ---
  { id: "e21", topic: "voltage-divider", question: "R1=100Ω, R2=400Ω sorba kötve, Ube=10V. Mekkora Uki (R2 kimeneti feszültsége)? (V)", answer: 8, unit: "V", tolerance: 0.1, explanation: "Uki = Ube·R2/(R1+R2) = 10·400/500 = 8 V." },
  { id: "e22", topic: "voltage-divider", question: "Egy hurokban U1=5V és U2=7V esik két ellenálláson sorosan. Ha a generátor Ug feszültsége ezekkel egyenlő az összeg szerint, mekkora Ug? (V)", answer: 12, unit: "V", tolerance: 0.1, explanation: "Kirchhoff II. törvénye: ΣU=0, tehát Ug = U1+U2 = 5+7 = 12V." },
  { id: "e23", topic: "voltage-divider", question: "Egy csomópontba 3A és 2A folyik be, és 4A folyik ki egy ágon. Mennyi folyik ki a másik ágon? (A)", answer: 1, unit: "A", tolerance: 0.05, explanation: "Kirchhoff I. törvénye: befolyó=elfolyó. 3+2=5A folyik be, ebből 4A egy ágon folyik ki, a másikon 5-4=1A." },
  { id: "e24", topic: "voltage-divider", question: "R1=10Ω és R2=40Ω párhuzamos ágon 5A folyik be összesen. Mekkora áram jut R1-re? (A) (Tipp: a kisebb ellenálláson folyik a nagyobb áram)", answer: 4, unit: "A", tolerance: 0.1, explanation: "I1 = I·R2/(R1+R2) = 5·40/50 = 4A." },

  // --- Specific resistance / wire sizing ---
  { id: "e25", topic: "wire-sizing", question: "Számítsd ki egy 50m hosszú réz vezeték ellenállását, ha keresztmetszete 2,5mm² (ρ_Cu=0,0175 Ωmm²/m). (Ω)", answer: 0.35, unit: "Ω", tolerance: 0.02, explanation: "R = ρ·l/A = 0,0175·50/2,5 = 0,35 Ω." },
  { id: "e26", topic: "wire-sizing", question: "Mekkora egy 4mm² átmérőjű kör keresztmetszete? (mm², kerekítve 2 tizedesre)", answer: 12.57, unit: "mm²", tolerance: 0.1, explanation: "A = d²·π/4 = 16·3,1416/4 = 12,57 mm²." },

  // --- Power / energy / efficiency ---
  { id: "e27", topic: "power-energy", question: "Egy 230V-os hálózatról 8A-t felvevő fogyasztó teljesítménye? (W)", answer: 1840, unit: "W", tolerance: 5, explanation: "P = U·I = 230·8 = 1840 W." },
  { id: "e28", topic: "power-energy", question: "Egy 3kW teljesítményű fűtőtest mekkora áramot vesz fel 230V-on? (A, 2 tizedesre kerekítve)", answer: 13.04, unit: "A", tolerance: 0.1, explanation: "I = P/U = 3000/230 = 13,04 A." },
  { id: "e29", topic: "power-energy", question: "Egy 1500W-os hősugárzót naponta 4 órán át használnak. Hány kWh energiát fogyaszt egy nap alatt?", answer: 6, unit: "kWh", tolerance: 0.1, explanation: "W = P·t = 1,5kW·4h = 6 kWh." },
  { id: "e30", topic: "power-energy", question: "Egy generátor U0=12V, Rb=1Ω belső ellenállással, Rt=5Ω terheléssel. Mekkora az áram a körben? (A)", answer: 2, unit: "A", tolerance: 0.05, explanation: "I = U0/(Rb+Rt) = 12/6 = 2A." },
  { id: "e31", topic: "power-energy", question: "Az előző generátornál (U0=12V, Rb=1Ω, Rt=5Ω, I=2A) mekkora a hatásfok százalékban? (kerekítve egész %-ra)", answer: 83, unit: "%", tolerance: 1, explanation: "Uk=I·Rt=10V, Ph=Uk·I=20W, P0=U0·I=24W. η=20/24=0,833 → 83%." },

  // --- Star-delta transformation ---
  { id: "e32", topic: "star-delta", question: "Egy delta kapcsolásban minden ellenállás 9Ω. Mekkora lesz az egyenértékű csillag kapcsolás minden ága? (Ω)", answer: 3, unit: "Ω", tolerance: 0.1, explanation: "Delta→csillag egyenlő ellenállásoknál: RY = R/3 = 9/3 = 3Ω." },
  { id: "e33", topic: "star-delta", question: "Egy csillag kapcsolásban minden ág 4Ω. Mekkora lesz az egyenértékű delta kapcsolás minden oldala? (Ω)", answer: 12, unit: "Ω", tolerance: 0.1, explanation: "Csillag→delta egyenlő ellenállásoknál: RΔ = 3R = 3·4 = 12Ω." }
];

