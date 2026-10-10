<script setup lang="ts">
import { ref } from "vue";
import { CATEGORIES } from "../data";

const selectedCategory = ref<string | null>(null);

const toggleCategory = (categoryId: string) => {
  selectedCategory.value = selectedCategory.value === categoryId ? null : categoryId;
};

// Cheat sheet content organized by category
const cheatSheetData = {
  electrotechnics: [
    {
      title: "SI mértékegységek",
      items: [
        "Alapegységek: m, kg, s, **A**, K, mol, cd",
        "Prefixumok: M (10⁶), k (10³), m (10⁻³), µ (10⁻⁶), n (10⁻⁹)",
        "Villamos egységek: V (volt), Ω (ohm), S (siemens), W (watt), J (joule), C (coulomb), Hz (hertz)",
        "Hatványok: $10^a \\cdot 10^b = 10^{a+b}$, $10^a : 10^b = 10^{a-b}$"
      ]
    },
    {
      title: "Alapfogalmak",
      items: [
        "Feszültség: $U$ [V] — villamos potenciálkülönbség",
        "Áram: $I$ [A] — töltéshordozók mozgása",
        "Ellenállás: $R$ [Ω] — árammal szembeni ellenállás",
        "Rövidzár: $R = 0$, $U = 0$ | Szakadás: $R = \\infty$, $I = 0$"
      ]
    },
    {
      title: "Ohm törvénye",
      items: [
        "$R = \\frac{U}{I}$, $U = I \\cdot R$, $I = \\frac{U}{R}$",
        "Vezetőképesség: $G = \\frac{1}{R}$ [S]"
      ]
    },
    {
      title: "Soros és párhuzamos kapcsolás",
      items: [
        "**Soros:** $R_e = R_1 + R_2 + R_3 + ...$",
        "**Párhuzamos (2 db):** $R = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$",
        "**Párhuzamos (n db egyforma):** $R_e = \\frac{R}{n}$",
        "**Párhuzamos (általános):** $\\frac{1}{R_e} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ...$",
        "Vegyes: belülről kifelé haladva összevonni"
      ]
    },
    {
      title: "Kirchhoff törvényei",
      items: [
        "**I. (csomóponti):** $\\Sigma I = 0$ — befolyó = elfolyó",
        "**II. (huroktörvény):** $\\Sigma U = 0$ — feszültségek összege = 0"
      ]
    },
    {
      title: "Feszültség- és áramosztás",
      items: [
        "**Feszültségosztó:** $U_{ki} = U_{be} \\cdot \\frac{R_2}{R_1+R_2}$",
        "**Áramosztó:** $I_1 = I \\cdot \\frac{R_2}{R_1+R_2}$, $I_2 = I \\cdot \\frac{R_1}{R_1+R_2}$",
        "Kisebb ellenálláson nagyobb áram folyik!"
      ]
    },
    {
      title: "Vezetők, szigetelők, félvezetők",
      items: [
        "**Vezetők:** kicsi/nincs tiltott sáv (Cu, Al, Ag)",
        "**Szigetelők:** nagy tiltott sáv (>3 eV)",
        "**Félvezetők:** kis tiltott sáv (<3 eV) — Si, Ge"
      ]
    },
    {
      title: "Ellenállás alkatrész",
      items: [
        "E-sorok: E6 (±20%), E12 (±10%), E24 (±5%)",
        "Színkód: 1-2-3. számjegy, szorzó, tűrés",
        "Teljesítmény: $P = U \\cdot I = \\frac{U^2}{R} = I^2 \\cdot R$",
        "NTC: hő↑ → R↓ | PTC: hő↑ → R↑",
        "VDR: feszültségfüggő | LDR: fényfüggő"
      ]
    },
    {
      title: "Csillag-delta átalakítás",
      items: [
        "**Egyforma R-ek:** $R_Y = \\frac{R_\\Delta}{3}$, $R_\\Delta = 3R_Y$",
        "**Y→Δ:** $R_{12} = R_1 + R_2 + \\frac{R_1 \\cdot R_2}{R_3}$",
        "**Δ→Y:** $R_1 = \\frac{R_{12} \\cdot R_{31}}{R_{12}+R_{23}+R_{31}}$"
      ]
    }
  ],
  "power-design": [
    {
      title: "Teljesítmény, munka, hatásfok",
      items: [
        "$P = U \\cdot I = \\frac{U^2}{R} = I^2 \\cdot R$ [W]",
        "$W = P \\cdot t$ [J], gyakorlatban [kWh]",
        "1 kWh = 3 600 000 Ws",
        "$\\eta = \\frac{P_{hasznos}}{P_{összes}} < 1$ (mindig <100%)",
        "Valódi generátor: $I = \\frac{U_0}{R_b+R_t}$"
      ]
    },
    {
      title: "Fajlagos ellenállás, vezetékméretezés",
      items: [
        "$R = \\rho \\cdot \\frac{l}{A}$ — ρ: fajlagos ellenállás [Ωmm²/m]",
        "Réz: ρ = 0,0175 Ωmm²/m | Alumínium: ρ = 0,028 Ωmm²/m",
        "Kör keresztmetszet: $A = \\frac{d^2 \\cdot \\pi}{4}$",
        "Áramsűrűség: $J = \\frac{I}{A}$ [A/mm²], optimális: 2-8 A/mm²",
        "Vezeték méretezés: $A = \\frac{\\rho \\cdot l}{R_{max}}$",
        "Max feszültségesés: 2% (világítás) — oda-vissza hossz!"
      ]
    }
  ],
  safety: [
    {
      title: "Villamos áram élettani hatása",
      items: [
        "Érzékelési küszöb: ~1 mA (50 Hz AC)",
        "Elengedési áramerősség: 10-15 mA",
        "Kamrafibrilláció: >50 mA (hosszabb ideig)",
        "Érintési feszültség limit: **50 V AC** (normál), 25 V (nedves)",
        "Nagyfeszültség: >1000 V (AC), >1500 V (DC)"
      ]
    },
    {
      title: "Elsősegélynyújtás",
      items: [
        "1. Műszaki mentés: áramkörből kiszabadítás",
        "2. Diagnosztika: eszmélet, légzés, keringés",
        "3. Újraélesztés: mellkaskompresszió 100-120/perc, légzés 2×",
        "4. Mentők hívása: 112 vagy 104"
      ]
    },
    {
      title: "Védelmi osztályok",
      items: [
        "**0. osztály:** nincs védelem (régi)",
        "**I. osztály:** PE vezetővel földelt fémházas",
        "**II. osztály:** kettős szigetelés (⧈ jel)",
        "**III. osztály:** törpefeszültség (≤50 V AC, ≤120 V DC)",
        "AVK: áram-védőkapcsoló (30 mA lakásban)"
      ]
    },
    {
      title: "Földelési rendszerek",
      items: [
        "Főföldelő sín (FFS/MEB): csillagpont + PE + vízvezeték + gáz",
        "Elektródák: rúd, keret, lemez, alapozás",
        "Függőleges rúd: $R_a = \\frac{\\rho}{2\\pi L} \\cdot \\ln\\left(\\frac{4L}{d}\\right)$",
        "Párhuzamos elektródák: $R_{összes} = \\frac{R_a}{n \\cdot \\eta}$ (η<1 kölcsönhatás)",
        "Talaj ρ: agyag 10-40, homok 200-2000 Ωm"
      ]
    },
    {
      title: "Földelés és érintésvédelem",
      items: [
        "Közvetlen érintés: aktív részen (szigetelés, burkolat, távolság)",
        "Közvetett érintés: hibás fémházon",
        "**TN:** csillagpont földelve, PE vezető → gyors kioldás",
        "**TT:** saját földelés, AVK kötelező → $I_z = \\frac{U_0}{R_{cs}+R_a}$",
        "**IT:** szigetelt csillagpont, szigetelés ellenőrzés",
        "PE méretezés: ≤16 mm²: azonos, 16-35: 16 mm², >35: fél"
      ]
    },
    {
      title: "Áram-védőkapcsoló (AVK/RCD)",
      items: [
        "Érzékenység: **30 mA** (lakás), 10 mA (fürdő)",
        "Kioldási idő: <30 ms (30 mA-nél)",
        "Típusok: AC (váltakozó), A (pulzáló DC is), B (simított DC is)",
        "S típus: szelektív, min. 130 ms késleltetés",
        "Havonta tesztgombbal ellenőrizni!",
        "RCBO: AVK + kismegszakító kombinált"
      ]
    },
    {
      title: "Védővezető nélküli módok",
      items: [
        "**Kettős szigetelés:** belső + külső (⧈ jel, II. osztály)",
        "**Védőelválasztás:** 1:1 transzformátor, 1 fogyasztó",
        "**Törpefeszültség:** ≤50 V AC / ≤120 V DC (III. osztály)"
      ]
    },
    {
      title: "IP védettség",
      items: [
        "**IP XY:** X = szilárd test, Y = víz elleni védelem",
        "Lakás minimum: **IP2X** (12,5 mm, ujj nem ér be)",
        "Fürdőszoba 0. zóna: IPX7 (kád/zuhany belseje)",
        "Fürdőszoba 1. zóna: IPX4 (fölötte függőleges síkban)",
        "Fürdőszoba 2. zóna: IPX4 (60 cm távolságban)"
      ]
    }
  ],
  "work-safety": [
    {
      title: "Feszültségmentesítés (5 lépés)",
      items: [
        "1. Leválasztás — minden póluson",
        "2. Visszakapcsolás elleni védelem — lakat/plomba",
        "3. Feszültségmentesség ellenőrzése — fázispróbával",
        "4. Földelés, rövidzárás, töltések kisütése",
        "5. Szomszédos feszültség alatt lévő részek elleni védelem"
      ]
    },
    {
      title: "Villanyszerelés 9 lépésben",
      items: [
        "1. Tervezés, engedélyeztetés, anyagbeszerzés",
        "2. Kábelcsatornák, elosztók helyének kijelölése",
        "3. Fűrészelés, vésés (süllyesztett védőcsöves szerelés)",
        "4. Csövek, dobok, kapcsolók, aljzatok beépítése",
        "5. Vezetékhúzás, jelölés",
        "6. Elővakolás, száradás",
        "7. Elosztók, lámpatestek szerelése, bekötések",
        "8. Üzemi próba (szigetelés, érintésvédelem mérés)",
        "9. Átadás, dokumentáció"
      ]
    }
  ],
  "power-systems": [
    {
      title: "Villamosenergia-rendszer",
      items: [
        "Termelés → Továbbítás (nagyfeszültség) → Elosztás (kisfeszültség)",
        "Feszültségszintek: 120-750 kV (továbbítás), 20-35 kV (közép), 0,4 kV (kis)",
        "Frekvencia: **50 Hz** (EU), 60 Hz (USA)",
        "Fázisfeszültség: **230 V**, vonali feszültség: **400 V**",
        "MAVIR: magyar átviteli rendszerirányító"
      ]
    },
    {
      title: "Erőművek",
      items: [
        "**Hőerőművek:** szén, gáz, olaj → gőzturbina",
        "**Atomerőmű:** maghasadás → hő → gőz (Paks: 42,8% 2024)",
        "**Vízerőmű:** potenciális energia → turbina",
        "**Szélerőmű:** szél → lapátok → generátor (min. 5 m/s szél)",
        "**Napelem:** fény → villamos energia (HMKE: max 50 kVA)",
        "1 g urán = 1 MW × 1 nap"
      ]
    },
    {
      title: "Hálózatok topológiája",
      items: [
        "**Sugaras:** 1 tápvezeték → áramszünet 1 hiba esetén",
        "**Gyűrűs:** zárt kör → biztonságosabb",
        "**Íves:** nyitott gyűrű → kapcsolható",
        "**Hurkolt:** több táppont → legnagyobb üzembiztonság",
        "KF hálózat: 4 vezetős (L1, L2, L3, PEN)"
      ]
    },
    {
      title: "Oszlopok és vezetékek",
      items: [
        "Anyagok: fa, vas, beton, könnyűfém",
        "Oszlopköz: ~30 m (KF), ~60-100 m (KÖF)",
        "Alapozási mélység: min. 1,5 m (vagy 1/6 magasság)",
        "B12/4: 12 m magas, 40 kN (4×10) törőerő",
        "Földelés: 200-300 m-enként",
        "Szigetelők: porcelán, üveg, műanyag"
      ]
    }
  ],
  "technical-drawing": [
    {
      title: "Rajzlap méretek (MSZ EN ISO 5457)",
      items: [
        "A0: 841 × 1189 mm (1 m²)",
        "A1: 594 × 841 mm",
        "A2: 420 × 594 mm",
        "A3: 297 × 420 mm",
        "**A4: 210 × 297 mm** (alapméret)",
        "Arány: a : b = 1 : √2 (állandó felezéskor)"
      ]
    },
    {
      title: "Vonaltípusok (MSZ ISO 128)",
      items: [
        "**A (folytonos, vastag):** látható körvonalak, élek",
        "**B (folytonos, vékony):** méretvonalak, segédvonalak, sraffozás",
        "**E (szaggatott, vastag):** nem látható körvonalak",
        "**G (pontvonal, vékony):** középvonalak, szimmetriatengelyek",
        "**H (pontvonal):** metszősíkok nyomvonalai",
        "Vastag : vékony arány min. **2:1**"
      ]
    },
    {
      title: "Méretarányok",
      items: [
        "**Valóságos:** 1:1",
        "**Kicsinyítés:** 1:2, 1:5, 1:10 (és többszöröseik)",
        "**Nagyítás:** 2:1, 5:1, 10:1 (és többszöröseik)",
        "Mindig a jobb alsó feliratmezőben jelölni!"
      ]
    },
    {
      title: "Betűméretek (MSZ EN ISO 3098)",
      items: [
        "Méreteltérések: **2,5 mm**",
        "Méretmegadás: **3,5 mm**",
        "Darabjegyzék: **5 mm**",
        "Feliratok: **7 mm**",
        "Tételszám: **10 mm**",
        "Álló vagy 75° dőlt betűk használhatók"
      ]
    },
    {
      title: "Felületi érdesség (N-fokozatok)",
      items: [
        "N1-N4: finom (polírozás, hóndlás) — Ra < 0,4 μm",
        "N5-N7: közepes (marás, esztergálás) — Ra 0,4-3,2 μm",
        "N8-N9: durva (gyalulás, fúrás) — Ra 3,2-6,3 μm",
        "N10-N12: nagyon durva (öntés, kovácsolás) — Ra > 12,5 μm",
        "Ra: átlagos érdesség mikrométerben (μm)"
      ]
    },
    {
      title: "Lemezhajlítás számítása",
      items: [
        "Rövidülés: $z = \\frac{r}{2} + v$",
        "$r$ = hajlítási sugár, $v$ = lemezvastagság",
        "Kiterített hossz: $L = c + d - z$",
        "Derékszögű hajlításnál mindig figyelembe venni!"
      ]
    },
    {
      title: "Villamos rajzok típusai",
      items: [
        "**Tömbvázlat:** funkcionális egységek (téglalapok)",
        "**Elvi rajz:** egyvonalas, minden elem látható",
        "**Kapcsolási rajz:** egy/többvonalas, részletes",
        "**Huzalozási rajz:** vezetékek nyomvonala",
        "**Bekötési rajz:** csatlakozások, színkódok",
        "**NYÁK rajz:** nyomtatott áramköri lap tervezés"
      ]
    },
    {
      title: "Kapcsolási rajz jelölések",
      items: [
        "**Egyvonlas:** több vezeték = 1 vonal (kompakt)",
        "**Többvonalas:** minden vezeték külön (részletes)",
        "Vezetékszámok: ——/3—— (3 vezeték)",
        "Több vezeték: ——//—— vagy ——/2——"
      ]
    },
    {
      title: "Vezetékszínek (villamos)",
      items: [
        "**L1, L2, L3** (fázis): Barna, Fekete, Szürke",
        "**N** (nulla): Kék",
        "**PE** (védővezető): Sárga-zöld",
        "**DC pozitív (+):** Piros",
        "**DC negatív (-):** Fekete vagy Kék"
      ]
    },
    {
      title: "Rajzelemek",
      items: [
        "Feliratmező: jobb alsó sarok, mindig látható",
        "Központjelek: a rajzlap oldalainak közepén",
        "Keret: rajz határolása (margó)",
        "Darabjegyzék: alkatrészek listája",
        "Méretarány, mértékegység jelölése kötelező"
      ]
    },
    {
      title: "Vetületi ábrázolás",
      items: [
        "**Európai nézetrend:** objektum dobozba helyezve",
        "Nézetek: elöl, felül, alul, jobb, bal, hátul",
        "**Metszet:** belső részek láthatóvá tétele",
        "**Sraffozás:** 45° vonalkázás metszeteken",
        "Metszősík jelölése: pontvonal (H típus)"
      ]
    },
    {
      title: "Speciális jelölések",
      items: [
        "Átmérő: **Ø** (pl. Ø20)",
        "Sugár: **R** (pl. R15)",
        "Négyzet: **□** (pl. □25)",
        "Kulcsméret: **s** (hatlapfejű anya)",
        "Menet: egyszerűsített ábrázolás",
        "Befordított metszet: helyben, vékony vonallal"
      ]
    }
  ]
};
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-3xl font-bold text-amber-500 mb-3">Gyorsútmutató (Cheat Sheet)</h2>
      <p class="text-gray-300 text-lg">
        A legfontosabb képletek, fogalmak és szabályok röviden, kategóriák szerint rendezve.
      </p>
    </div>

    <div class="space-y-3">
      <div
        v-for="category in CATEGORIES"
        :key="category.id"
        class="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/50"
      >
        <button
          @click="toggleCategory(category.id)"
          class="w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ category.icon }}</span>
            <div class="text-left">
              <h3 class="text-xl font-bold text-amber-400">{{ category.title }}</h3>
              <p class="text-sm text-gray-400">{{ category.description }}</p>
            </div>
          </div>
          <span class="text-2xl text-gray-500 transition-transform" :class="{ 'rotate-180': selectedCategory === category.id }">
            ▼
          </span>
        </button>

        <transition name="accordion">
          <div v-if="selectedCategory === category.id" class="p-5 space-y-6">
            <div
              v-for="(section, idx) in cheatSheetData[category.id as keyof typeof cheatSheetData]"
              :key="idx"
              class="space-y-2"
            >
              <h4 class="text-lg font-semibold text-amber-300">{{ section.title }}</h4>
              <ul class="space-y-1.5 list-none pl-0">
                <li
                  v-for="(item, itemIdx) in section.items"
                  :key="itemIdx"
                  class="flex items-start gap-2 text-gray-200"
                >
                  <span class="text-amber-500 shrink-0 mt-1">•</span>
                  <span v-html="renderFormula(item)" class="leading-relaxed"></span>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 2000px;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

<script lang="ts">
import katex from 'katex';

export default {
  methods: {
    renderFormula(text: string): string {
      // Replace inline LaTeX with KaTeX rendering
      return text.replace(/\$(.*?)\$/g, (_match, formula) => {
        try {
          return katex.renderToString(formula, {
            throwOnError: false,
            displayMode: false,
          });
        } catch {
          return formula;
        }
      });
    },
  },
};
</script>
