// Script to generate a curated quiz question database (300 questions)
// Focus on variety, harder questions, and circuit diagram problems

import type { QuizQuestion } from './quizData';

// Helper to generate ID
let questionId = 1;
function nextId(prefix: string): string {
  return `${prefix}${String(questionId++).padStart(4, '0')}`;
}

// Round to specified decimals
function round(num: number, decimals: number = 2): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Ensure 4 unique values for multiple choice options
function ensureUnique(correct: number, wrong1: number, wrong2: number, wrong3: number): number[] {
  const values = [correct, wrong1, wrong2, wrong3];
  const roundedValues = values.map(v => round(v, 3));
  const unique = new Set(roundedValues);

  let attempts = 0;
  while (unique.size < 4 && attempts < 50) {
    attempts++;
    const offset = (Math.floor(Math.random() * 10) - 5) * (correct / 10);
    const newWrong = round(correct + offset, 3);
    if (newWrong !== round(correct, 3) && !unique.has(newWrong) && newWrong > 0) {
      unique.add(newWrong);
    }
  }

  return Array.from(unique).slice(0, 4);
}

// Generate unit conversion questions (25 total: 10 easy, 15 medium/hard)
function generateUnitQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Basic voltage conversions (5 easy)
  const voltageConversions = [
    { from: 2.5, fromUnit: 'kV', to: 2500, toUnit: 'V', diff: 'easy' },
    { from: 750, fromUnit: 'mV', to: 0.75, toUnit: 'V', diff: 'easy' },
    { from: 12, fromUnit: 'V', to: 12000, toUnit: 'mV', diff: 'easy' },
    { from: 3.3, fromUnit: 'kV', to: 3300, toUnit: 'V', diff: 'easy' },
    { from: 450, fromUnit: 'mV', to: 0.45, toUnit: 'V', diff: 'easy' },
  ];

  voltageConversions.forEach(v => {
    const wrong1 = round(v.to * 10, 3);
    const wrong2 = round(v.to / 10, 3);
    const wrong3 = round(v.to * 100, 3);
    const uniqueValues = ensureUnique(v.to, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `${val} ${v.toUnit}`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${v.to} ${v.toUnit}`);

    questions.push({
      id: nextId('u'),
      topic: 'units',
      question: `Váltsd át: ${v.from} ${v.fromUnit} = ? ${v.toUnit}`,
      options,
      correct,
      explanation: `$${v.from}$ ${v.fromUnit} $= ${v.to}$ ${v.toUnit}.`,
      difficulty: v.diff as any,
      requiresCalculation: true
    });
  });

  // Multi-step conversions (5 medium)
  const multiStepConversions = [
    { from: 2500, fromUnit: 'µA', to: 2.5, toUnit: 'mA', diff: 'medium' },
    { from: 0.05, fromUnit: 'A', to: 50000, toUnit: 'µA', diff: 'medium' },
    { from: 2.2, fromUnit: 'MΩ', to: 2200, toUnit: 'kΩ', diff: 'medium' },
    { from: 4700, fromUnit: 'Ω', to: 4.7, toUnit: 'kΩ', diff: 'medium' },
    { from: 0.033, fromUnit: 'A', to: 33, toUnit: 'mA', diff: 'medium' },
  ];

  multiStepConversions.forEach(v => {
    const wrong1 = round(v.to * 10, 3);
    const wrong2 = round(v.to / 10, 3);
    const wrong3 = round(v.to * 100, 3);
    const uniqueValues = ensureUnique(v.to, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `${val} ${v.toUnit}`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${v.to} ${v.toUnit}`);

    questions.push({
      id: nextId('u'),
      topic: 'units',
      question: `Váltsd át: ${v.from} ${v.fromUnit} = ? ${v.toUnit}`,
      options,
      correct,
      explanation: `$${v.from}$ ${v.fromUnit} $= ${v.to}$ ${v.toUnit}.`,
      difficulty: v.diff as any,
      requiresCalculation: true
    });
  });

  // Power of 10 calculations (10 medium, 5 hard)
  const powerOf10Easy = [
    { q: '10^3 · 10^5 = ?', a: 8, exp: 'Szorzásnál: $3+5=8$, tehát $10^8$.', diff: 'medium' },
    { q: '10^9 : 10^4 = ?', a: 5, exp: 'Osztásnál: $9-4=5$, tehát $10^5$.', diff: 'medium' },
    { q: '(10^2)^4 = ?', a: 8, exp: 'Hatványozásnál: $2 \\cdot 4=8$, tehát $10^8$.', diff: 'medium' },
    { q: '10^6 · 10^(-3) = ?', a: 3, exp: 'Szorzásnál: $6+(-3)=3$, tehát $10^3$.', diff: 'medium' },
    { q: '10^2 : 10^(-1) = ?', a: 3, exp: 'Osztásnál: $2-(-1)=3$, tehát $10^3$.', diff: 'hard' },
  ];

  powerOf10Easy.forEach(p => {
    const wrong1 = p.a + 1;
    const wrong2 = p.a - 1;
    const wrong3 = p.a * 2;
    const uniqueValues = ensureUnique(p.a, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `10^${val}`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`10^${p.a}`);

    questions.push({
      id: nextId('u'),
      topic: 'units',
      question: `Számítsd ki: ${p.q}`,
      options,
      correct,
      explanation: p.exp,
      difficulty: p.diff as any,
      requiresCalculation: true
    });
  });

  // Complex power calculations (5 hard)
  const powerComplex = [
    { q: '(10^3)^2 · 10^(-4) = ?', a: 2, exp: '$(10^3)^2 = 10^6$, majd $10^6 \\cdot 10^{-4} = 10^2$.', diff: 'hard' },
    { q: '10^8 : ((10^2)^3) = ?', a: 2, exp: '$(10^2)^3 = 10^6$, majd $10^8 : 10^6 = 10^2$.', diff: 'hard' },
    { q: '(10^4 · 10^2) : 10^3 = ?', a: 3, exp: '$10^4 \\cdot 10^2 = 10^6$, majd $10^6 : 10^3 = 10^3$.', diff: 'hard' },
    { q: '10^(-2) · 10^(-3) = ?', a: -5, exp: 'Szorzásnál: $(-2)+(-3)=-5$, tehát $10^{-5}$.', diff: 'hard' },
    { q: '(10^(-3))^2 = ?', a: -6, exp: 'Hatványozásnál: $(-3) \\cdot 2=-6$, tehát $10^{-6}$.', diff: 'hard' },
  ];

  powerComplex.forEach(p => {
    const wrong1 = p.a + 1;
    const wrong2 = p.a - 1;
    const wrong3 = p.a * 2;
    const uniqueValues = ensureUnique(p.a, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `10^${val}`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`10^${p.a}`);

    questions.push({
      id: nextId('u'),
      topic: 'units',
      question: `Számítsd ki: ${p.q}`,
      options,
      correct,
      explanation: p.exp,
      difficulty: p.diff as any,
      requiresCalculation: true
    });
  });

  return questions;
}

// Generate basic concepts questions (20 total: 5 easy, 10 medium, 5 hard)
function generateBasicConceptsQuestions(): QuizQuestion[] {
  return [
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mi az elektromos áram iránya definíció szerint?",
      options: [
        "A negatív töltéshordozók mozgásának iránya",
        "A pozitív töltéshordozók mozgásának iránya",
        "Mindig az óramutató járásával megegyező",
        "A feszültségforrás negatív pólusától a pozitív felé"
      ],
      correct: 1,
      explanation: "Az áram irányát megállapodás szerint a pozitív töltéshordozók mozgásának irányával definiáljuk.",
      difficulty: 'easy'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mit jelent az, hogy egy áramkörben 'szakadás' van?",
      options: ["R=0, rövidzár", "R=∞, az áram nulla", "U=0, de I nagy", "A generátor túlterhelt"],
      correct: 1,
      explanation: "Szakadás esetén az ellenállás végtelen ($R=\\infty$), így az áramkörben nem folyik áram ($I=0$).",
      difficulty: 'easy'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mit jelent az, hogy egy áramkörben 'rövidzár' van?",
      options: ["R=∞, szakadás", "R=0, nagyon nagy áram folyhat", "U és I egyaránt nulla", "Normális üzemmód"],
      correct: 1,
      explanation: "Rövidzár esetén $R=0$, így ideális esetben $I=U/0 \\to \\infty$ (valóságban a belső ellenállás korlátozza).",
      difficulty: 'easy'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mi a feszültség (U) mértékegysége SI alapegységekben kifejezve?",
      options: ["A·s", "m²·kg·s⁻³·A⁻¹", "kg·m²·s⁻²", "J·A⁻¹"],
      correct: 1,
      explanation: "A volt (V) SI alapegységekben: $\\text{m}^2 \\cdot \\text{kg} \\cdot \\text{s}^{-3} \\cdot \\text{A}^{-1}$.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Melyik NEM elektromos generátor?",
      options: ["Galvánelem", "Napelem", "Dinamó", "Kondenzátor"],
      correct: 3,
      explanation: "A kondenzátor energiatároló eszköz, nem generátor. A galvánelem, napelem és dinamó mind elektromos energiát állít elő.",
      difficulty: 'easy'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mit jelent az, hogy egy generátor 'ideális feszültséggenerátor'?",
      options: [
        "A kimeneti árama a terheléstől függetlenül állandó",
        "A kapocsfeszültsége a terheléstől függetlenül állandó",
        "Belső ellenállása nagy",
        "Csak egyenáramot tud adni"
      ],
      correct: 1,
      explanation: "Az ideális feszültséggenerátor kapcsai között a feszültség a rá kapcsolt fogyasztóktól függetlenül állandó.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mekkora az elektromos töltés (Q) mértékegysége coulomb-ban, ha 5A áram 10 másodpercig folyik?",
      options: ["0.5 C", "2 C", "15 C", "50 C"],
      correct: 3,
      explanation: "$Q = I \\cdot t = 5 \\text{ A} \\cdot 10 \\text{ s} = 50$ C.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Váltakozó áramról beszélünk, ha:",
      options: [
        "Az áram nagysága változik, de az iránya állandó",
        "Az áram iránya és nagysága is változik időben",
        "Az áram csak egyik irányban folyik",
        "A feszültség állandó"
      ],
      correct: 1,
      explanation: "Váltakozó áram esetén az áram iránya periodikusan változik (a nagyság is változhat).",
      difficulty: 'easy'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Egy ideális áramgenerátor jellemzője:",
      options: [
        "Feszültsége állandó a terheléstől függetlenül",
        "Áramerőssége állandó a terheléstől függetlenül",
        "Belső ellenállása nulla",
        "Teljesítménye mindig maximális"
      ],
      correct: 1,
      explanation: "Az ideális áramgenerátor által leadott áram a rá kapcsolt fogyasztóktól függetlenül állandó.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mi történik, ha egy akkumulátor kapcsait közvetlenül összekötjük (rövidzárjuk)?",
      options: [
        "Semmi, mert szakadás van",
        "Nagy áram folyik, az akkumulátor károsodhat",
        "A feszültség megnő",
        "Az ellenállás végtelen lesz"
      ],
      correct: 1,
      explanation: "Rövidzár esetén $R \\approx 0$, így $I = U/R$ nagyon nagy lesz, az akkumulátor túlterhelődik és károsodhat.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Egy 12V-os elem 2A áramot ad le 1 percig. Mennyi töltés halad át a keresztmetszeten?",
      options: ["12 C", "24 C", "60 C", "120 C"],
      correct: 3,
      explanation: "$Q = I \\cdot t = 2 \\text{ A} \\cdot 60 \\text{ s} = 120$ C.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Zárt áramkörben áram csak akkor folyik, ha:",
      options: [
        "Van feszültségforrás és van zárt vezetési út",
        "Csak feszültségforrás van",
        "Az ellenállás végtelen",
        "Szakadás van az áramkörben"
      ],
      correct: 0,
      explanation: "Áram csak zárt áramkörben folyik, ahol van feszültségforrás és folytonos vezetési út.",
      difficulty: 'easy'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "A vezetőképesség (G) mértékegysége a siemens (S). Mi a kapcsolata az ellenállással?",
      options: ["G = R", "G = 1/R", "G = R²", "G = √R"],
      correct: 1,
      explanation: "A vezetőképesség az ellenállás reciproka: $G = 1/R$.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mekkora egy 50Ω ellenállás vezetőképessége siemensben (S)?",
      options: ["0.02 S", "0.2 S", "2 S", "50 S"],
      correct: 0,
      explanation: "$G = 1/R = 1/50 = 0.02$ S.",
      difficulty: 'medium'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Melyik eszköz alakít mechanikai energiát villamos energiává?",
      options: ["Galvánelem", "Motor", "Generátor (dinamó)", "Akkumulátor"],
      correct: 2,
      explanation: "A generátor (dinamó) mechanikai energiából állít elő villamos energiát.",
      difficulty: 'hard'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Egy 230V-os hálózatra kapcsolt készülék felvesz 2.5A áramot. Ha a feszültség hirtelen 200V-ra csökken, az áram (Ohm törvénye alapján) várhatóan:",
      options: ["Nő", "Csökken", "Nem változik", "Nulla lesz"],
      correct: 1,
      explanation: "Ha $U$ csökken és $R$ állandó, akkor $I = U/R$ is csökken.",
      difficulty: 'hard'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Egy vezetőben 3600 coulomb töltés halad át 1 óra alatt. Mekkora az átlagos áramerősség?",
      options: ["1 A", "1 mA", "60 A", "3600 A"],
      correct: 0,
      explanation: "$I = Q/t = 3600 \\text{ C} / 3600 \\text{ s} = 1$ A.",
      difficulty: 'hard'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Mi történik egy szakadással rendelkező áramkörben?",
      options: [
        "Nagy áram folyik",
        "Nem folyik áram, de a feszültség mérhető",
        "Sem áram, sem feszültség nincs",
        "Rövidzár keletkezik"
      ],
      correct: 1,
      explanation: "Szakadás esetén $I=0$ (nincs zárt út), de a feszültség mérhető a szakadás két oldala között.",
      difficulty: 'hard'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Egy 0.02 S vezetőképességű ellenálláson 5A folyik. Mekkora a feszültség rajta?",
      options: ["0.1 V", "10 V", "250 V", "0.4 V"],
      correct: 2,
      explanation: "$R = 1/G = 1/0.02 = 50$ Ω, majd $U = R \\cdot I = 50 \\cdot 5 = 250$ V.",
      difficulty: 'hard'
    },
    {
      id: nextId('bc'),
      topic: 'basic-concepts',
      question: "Melyik állítás HAMIS az ideális generátorokkal kapcsolatban?",
      options: [
        "Ideális feszültséggenerátor belső ellenállása nulla",
        "Ideális áramgenerátor belső ellenállása végtelen",
        "A valódi generátorok ideálisnak tekinthetők",
        "Ideális feszültséggenerátor feszültsége terheléstől független"
      ],
      correct: 2,
      explanation: "A valódi generátorok SOHA nem ideálisak, mindig van belső ellenállásuk, ami veszteséget okoz.",
      difficulty: 'hard'
    },
  ];
}

// Generate Ohm's law questions (30 total: 8 easy, 12 medium, 10 hard with circuit diagrams)
function generateOhmsLawQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Basic I = U/R (8 easy)
  const basicCalcs = [
    { U: 12, R: 4, I: 3, diff: 'easy' },
    { U: 24, R: 8, I: 3, diff: 'easy' },
    { U: 230, R: 46, I: 5, diff: 'easy' },
    { U: 9, R: 30, I: 0.3, diff: 'easy' },
    { U: 15, R: 5, I: 3, diff: 'easy' },
    { U: 48, R: 12, I: 4, diff: 'easy' },
    { U: 6, R: 2, I: 3, diff: 'easy' },
    { U: 120, R: 20, I: 6, diff: 'easy' },
  ];

  basicCalcs.forEach(c => {
    const I = round(c.U / c.R, 3);
    const wrong1 = round(c.U * c.R, 3);
    const wrong2 = round(c.R / c.U, 3);
    const wrong3 = round(I / 2, 3);
    const uniqueValues = ensureUnique(I, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `${val} A`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${I} A`);

    questions.push({
      id: nextId('oh'),
      topic: 'ohms-law',
      question: `Egy ${c.U}V-os feszültségforrásra ${c.R}Ω ellenállást kapcsolunk. Mekkora áram folyik?`,
      options,
      correct,
      explanation: `$I = U/R = ${c.U}/${c.R} = ${I}$ A.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // U = R * I calculations (6 medium)
  const voltageCalcs = [
    { R: 47, I: 0.5, U: 23.5, diff: 'medium' },
    { R: 150, I: 0.1, U: 15, diff: 'medium' },
    { R: 220, I: 0.25, U: 55, diff: 'medium' },
    { R: 33, I: 2, U: 66, diff: 'medium' },
    { R: 68, I: 1.5, U: 102, diff: 'medium' },
    { R: 100, I: 0.75, U: 75, diff: 'medium' },
  ];

  voltageCalcs.forEach(c => {
    const U = round(c.R * c.I, 2);
    const wrong1 = round(c.I / c.R, 2);
    const wrong2 = round(c.R / c.I, 2);
    const wrong3 = round(U * 2, 2);
    const uniqueValues = ensureUnique(U, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `${val} V`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${U} V`);

    questions.push({
      id: nextId('oh'),
      topic: 'ohms-law',
      question: `Egy ${c.R}Ω-os ellenálláson ${c.I}A áram folyik. Mekkora a feszültség rajta?`,
      options,
      correct,
      explanation: `$U = R \\cdot I = ${c.R} \\cdot ${c.I} = ${U}$ V.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // R = U / I calculations (6 medium)
  const resistanceCalcs = [
    { U: 12, I: 0.4, R: 30, diff: 'medium' },
    { U: 230, I: 0.5, R: 460, diff: 'medium' },
    { U: 48, I: 0.8, R: 60, diff: 'medium' },
    { U: 15, I: 0.3, R: 50, diff: 'medium' },
    { U: 9, I: 0.15, R: 60, diff: 'medium' },
    { U: 24, I: 1.2, R: 20, diff: 'medium' },
  ];

  resistanceCalcs.forEach(c => {
    const R = round(c.U / c.I, 2);
    const wrong1 = round(c.U * c.I, 2);
    const wrong2 = round(c.I / c.U, 2);
    const wrong3 = round(R / 2, 2);
    const uniqueValues = ensureUnique(R, wrong1, wrong2, wrong3);
    const options = uniqueValues
      .map(val => `${val} Ω`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${R} Ω`);

    questions.push({
      id: nextId('oh'),
      topic: 'ohms-law',
      question: `Egy ismeretlen ellenálláson ${c.I}A folyik, és ${c.U}V esik rajta. Mekkora az ellenállás?`,
      options,
      correct,
      explanation: `$R = U/I = ${c.U}/${c.I} = ${R}$ Ω.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Circuit diagram problems (10 hard)
  const circuitProblems = [
    {
      diagram: "Áramkör: [12V] ---(R=?)--- áramirány: 0.5A",
      question: "Az ábrán 12V tápfeszültség és 0.5A áram mérhető. Mekkora az R ellenállás?",
      R: 24,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [U=?] ---(R=15Ω)--- áramirány: 2A",
      question: "Az ábrán 15Ω ellenálláson 2A áram folyik. Mekkora a tápfeszültség?",
      U: 30,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [24V] ---(R=80Ω)--- áramirány: I=?",
      question: "Az ábrán 24V feszültség van 80Ω ellenálláson. Mekkora az áram?",
      I: 0.3,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [230V] ---(R=?)--- áramirány: 5A",
      question: "Háztartási 230V hálózaton egy készülék 5A áramot vesz fel. Mekkora a készülék eredő ellenállása?",
      R: 46,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [9V elem] ---(R=300Ω)--- áramirány: I=?",
      question: "Egy 9V-os elemet 300Ω ellenállásra kapcsolunk. Mekkora áram folyik?",
      I: 0.03,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [U=?] ---(R=220Ω)--- áramirány: 0.5A",
      question: "Egy 220Ω ellenálláson 0.5A folyik. Mekkora a feszültség?",
      U: 110,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [12V] ---(R1=10Ω)---(R2=?)--- áram: 0.4A (soros)",
      question: "12V táp, R1=10Ω sorban R2-vel, 0.4A folyik. Mekkora R2? (Tipp: először számold ki az eredő ellenállást!)",
      R2: 20,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [U=?] ---(izzó: R=40Ω)--- áramirány: 3A",
      question: "Egy izzó ellenállása 40Ω, rajta 3A folyik. Mekkora a feszültség?",
      U: 120,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [6V] ---(LED előtét R=?)--- áram: 20mA",
      question: "Egy LED-et 6V-ról táplálunk, az árama 20mA (=0.02A). Mekkora ellenállás kell elé sorba?",
      R: 300,
      diff: 'hard'
    },
    {
      diagram: "Áramkör: [48V] ---(Motor: R=?)--- áram: 4A",
      question: "Egy motor 48V-on 4A-t vesz fel. Mekkora a motor eredő ellenállása?",
      R: 12,
      diff: 'hard'
    },
  ];

  circuitProblems.forEach(c => {
    let answer: number;
    let explanation: string;

    if ('R' in c && c.R !== undefined) {
      answer = c.R;
      if (c.question.includes('R2')) {
        // Special case: series circuit
        const Rtotal = 12 / 0.4; // 30 Ω
        const R1 = 10;
        const R2 = Rtotal - R1;
        answer = R2;
        explanation = `Először: $R_{össz} = U/I = 12/0.4 = 30$ Ω. Mivel $R_{össz} = R_1 + R_2$, ezért $R_2 = 30 - 10 = 20$ Ω.`;
      } else {
        const match = c.diagram.match(/(\d+\.?\d*)V.*?(\d+\.?\d*)A/);
        const match2 = c.diagram.match(/(\d+)mA/);
        if (match) {
          const U = parseFloat(match[1]);
          const I = parseFloat(match[2]);
          explanation = `$R = U/I = ${U}/${I} = ${answer}$ Ω.`;
        } else if (match2) {
          explanation = `$R = U/I = 6/0.02 = 300$ Ω.`;
        } else {
          explanation = `Ohm törvénye alapján: $R = U/I = ${answer}$ Ω.`;
        }
      }
    } else if ('U' in c && c.U !== undefined) {
      answer = c.U;
      const match = c.diagram.match(/(\d+)Ω.*?(\d+\.?\d*)A/);
      if (match) {
        const R = parseFloat(match[1]);
        const I = parseFloat(match[2]);
        explanation = `$U = R \\cdot I = ${R} \\cdot ${I} = ${answer}$ V.`;
      } else {
        explanation = `Ohm törvénye alapján: $U = R \\cdot I = ${answer}$ V.`;
      }
    } else if ('I' in c && c.I !== undefined) {
      answer = c.I;
      const match = c.diagram.match(/(\d+)V.*?(\d+)Ω/);
      if (match) {
        const U = parseFloat(match[1]);
        const R = parseFloat(match[2]);
        explanation = `$I = U/R = ${U}/${R} = ${answer}$ A.`;
      } else {
        explanation = `Ohm törvénye alapján: $I = U/R = ${answer}$ A.`;
      }
    } else {
      answer = 0;
      explanation = '';
    }

    const wrong1 = round(answer * 2, 3);
    const wrong2 = round(answer / 2, 3);
    const wrong3 = round(answer * 1.5, 3);
    const uniqueValues = ensureUnique(answer, wrong1, wrong2, wrong3);

    const unit = 'R' in c ? 'Ω' : ('U' in c ? 'V' : 'A');
    const options = uniqueValues
      .map(val => `${val} ${unit}`)
      .sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${answer} ${unit}`);

    questions.push({
      id: nextId('oh'),
      topic: 'ohms-law',
      question: c.question,
      options,
      correct,
      explanation,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  return questions;
}

// Generate series-parallel questions (35 total: 10 easy, 15 medium, 10 hard with diagrams)
function generateSeriesParallelQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Simple series (5 easy)
  const seriesEasy = [
    { R1: 10, R2: 20, Re: 30, diff: 'easy' },
    { R1: 15, R2: 25, Re: 40, diff: 'easy' },
    { R1: 5, R2: 15, Re: 20, diff: 'easy' },
    { R1: 12, R2: 18, Re: 30, diff: 'easy' },
    { R1: 30, R2: 20, Re: 50, diff: 'easy' },
  ];

  seriesEasy.forEach(c => {
    const wrong1 = round((c.R1 * c.R2) / (c.R1 + c.R2));
    const wrong2 = c.R1;
    const wrong3 = c.R2;
    const uniqueValues = ensureUnique(c.Re, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${c.Re} Ω`);

    questions.push({
      id: nextId('sp'),
      topic: 'series-parallel',
      question: `R1=${c.R1}Ω és R2=${c.R2}Ω sorba van kapcsolva. Mekkora az eredő?`,
      options,
      correct,
      explanation: `Soros eredő: $R_e = R_1+R_2 = ${c.R1}+${c.R2} = ${c.Re}$ Ω.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Simple parallel (5 easy)
  const parallelEasy = [
    { R1: 6, R2: 3, Re: 2, diff: 'easy' },
    { R1: 10, R2: 10, Re: 5, diff: 'easy' },
    { R1: 12, R2: 6, Re: 4, diff: 'easy' },
    { R1: 20, R2: 5, Re: 4, diff: 'easy' },
    { R1: 15, R2: 30, Re: 10, diff: 'easy' },
  ];

  parallelEasy.forEach(c => {
    const Re = round((c.R1 * c.R2) / (c.R1 + c.R2));
    const wrong1 = c.R1 + c.R2;
    const wrong2 = c.R1;
    const wrong3 = c.R2;
    const uniqueValues = ensureUnique(Re, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Re} Ω`);

    questions.push({
      id: nextId('sp'),
      topic: 'series-parallel',
      question: `R1=${c.R1}Ω és R2=${c.R2}Ω párhuzamosan van kapcsolva. Mekkora az eredő?`,
      options,
      correct,
      explanation: `Párhuzamos eredő: $R_e = \\frac{R_1 \\cdot R_2}{R_1+R_2} = \\frac{${c.R1} \\cdot ${c.R2}}{${c.R1}+${c.R2}} = ${Re}$ Ω.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Three equal resistors in parallel (5 medium)
  [12, 18, 24, 30, 36].forEach(R => {
    const Re = round(R / 3);
    const wrong1 = R;
    const wrong2 = R * 3;
    const wrong3 = round(R / 2);
    const uniqueValues = ensureUnique(Re, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Re} Ω`);

    questions.push({
      id: nextId('sp'),
      topic: 'series-parallel',
      question: `Három egyforma ${R}Ω-os ellenállás párhuzamosan. Mekkora az eredő?`,
      options,
      correct,
      explanation: `Egyforma ellenállásoknál $R_e = R/n = ${R}/3 = ${Re}$ Ω.`,
      difficulty: 'medium',
      requiresCalculation: true
    });
  });

  // Mixed circuits (10 medium)
  const mixedMedium = [
    { R1: 4, R2: 6, R3: 3, desc: "R1 sorban van (R2 és R3 párhuzamos eredőjével)", Re: 6, diff: 'medium' },
    { R1: 10, R2: 15, R3: 30, desc: "R1 sorban van (R2 és R3 párhuzamos eredőjével)", Re: 20, diff: 'medium' },
    { R1: 5, R2: 10, R3: 10, desc: "R1 sorban van (R2 és R3 párhuzamos eredőjével)", Re: 10, diff: 'medium' },
    { R1: 12, R2: 8, R3: 8, desc: "R1 sorban van (R2 és R3 párhuzamos eredőjével)", Re: 16, diff: 'medium' },
    { R1: 20, R2: 30, R3: 60, desc: "R1 sorban van (R2 és R3 párhuzamos eredőjével)", Re: 40, diff: 'medium' },
  ];

  mixedMedium.forEach(c => {
    const R23 = round((c.R2 * c.R3) / (c.R2 + c.R3));
    const Re = c.R1 + R23;
    const wrong1 = c.R1 + c.R2 + c.R3;
    const wrong2 = round((c.R1 * c.R2 * c.R3) / (c.R1 + c.R2 + c.R3));
    const wrong3 = R23;
    const uniqueValues = ensureUnique(Re, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Re} Ω`);

    questions.push({
      id: nextId('sp'),
      topic: 'series-parallel',
      question: `R1=${c.R1}Ω, R2=${c.R2}Ω, R3=${c.R3}Ω. ${c.desc}. Mekkora a teljes eredő?`,
      options,
      correct,
      explanation: `Először: $R2 \\times R3 = ${R23}$ Ω. Majd: $R_e = R_1 + ${R23} = ${Re}$ Ω.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Add 5 more medium (parallel then series)
  const mixedMedium2 = [
    { R1: 10, R2: 20, R3: 30, desc: "(R1 és R2 párhuzamos eredője) sorban van R3-mal", Re: 36.67, diff: 'medium' },
    { R1: 12, R2: 12, R3: 10, desc: "(R1 és R2 párhuzamos eredője) sorban van R3-mal", Re: 16, diff: 'medium' },
    { R1: 15, R2: 30, R3: 20, desc: "(R1 és R2 párhuzamos eredője) sorban van R3-mal", Re: 30, diff: 'medium' },
    { R1: 8, R2: 8, R3: 4, desc: "(R1 és R2 párhuzamos eredője) sorban van R3-mal", Re: 8, diff: 'medium' },
    { R1: 18, R2: 36, R3: 6, desc: "(R1 és R2 párhuzamos eredője) sorban van R3-mal", Re: 18, diff: 'medium' },
  ];

  mixedMedium2.forEach(c => {
    const R12 = round((c.R1 * c.R2) / (c.R1 + c.R2), 2);
    const Re = round(R12 + c.R3, 2);
    const wrong1 = c.R1 + c.R2 + c.R3;
    const wrong2 = R12;
    const wrong3 = round(Re / 2, 2);
    const uniqueValues = ensureUnique(Re, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Re} Ω`);

    questions.push({
      id: nextId('sp'),
      topic: 'series-parallel',
      question: `R1=${c.R1}Ω, R2=${c.R2}Ω, R3=${c.R3}Ω. ${c.desc}. Mekkora a teljes eredő?`,
      options,
      correct,
      explanation: `Először: $R1 \\times R2 = ${R12}$ Ω. Majd: $R_e = ${R12} + R_3 = ${Re}$ Ω.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Circuit diagram problems (10 hard)
  const circuitDiagrams = [
    { question: "Áramkörben: 12V táp ---> R1=10Ω sorban R2=20Ω-mal. Mennyi áram folyik?", I: 0.4, diff: 'hard' },
    { question: "Áramkörben: 24V táp ---> R1=40Ω párhuzamosan R2=60Ω-mal. Mennyi áram folyik összesen?", I: 1, diff: 'hard' },
    { question: "Áramkörben: 15V ---> R1=5Ω sorban (R2=10Ω párhuzamos R3=10Ω-mal). Mennyi a főági áram?", I: 1.5, diff: 'hard' },
    { question: "Soros áramkörben 20V táp, Re=50Ω. Mennyi áram folyik?", I: 0.4, diff: 'hard' },
    { question: "Párhuzamos ágak: R1=12Ω, R2=6Ω, 18V-ról. Mennyi folyik R2-n?", I: 3, diff: 'hard' },
    { question: "Vegyes: 30V ---> R1=10Ω sorban (R2=20Ω||R3=30Ω). Mennyi az össz áram?", I: 1.5, diff: 'hard' },
    { question: "Három 30Ω párhuzamosan, 12V-ról. Mennyi a főági áram?", I: 1.2, diff: 'hard' },
    { question: "R1=5Ω és R2=15Ω sorban, 40V. Mennyi esik R2-n?", U2: 30, diff: 'hard' },
    { question: "R1=10Ω és R2=40Ω párhuzamosan, rajta 20V. Mennyi folyik R1-en?", I1: 2, diff: 'hard' },
    { question: "Soros: R1=R2=R3=20Ω, 48V. Mennyi esik egy ellenálláson?", U: 16, diff: 'hard' },
  ];

  circuitDiagrams.forEach((c, idx) => {
    let answer: number;
    let unit: string;
    let explanation: string;

    if ('I' in c) {
      answer = c.I;
      unit = 'A';
      if (idx === 0) explanation = `$R_e = 10+20 = 30$ Ω, $I = 12/30 = 0.4$ A.`;
      else if (idx === 1) explanation = `$R_e = 40 \\times 60 / 100 = 24$ Ω, $I = 24/24 = 1$ A.`;
      else if (idx === 2) explanation = `$R2 \\times R3 = 5$ Ω, $R_e = 5+5 = 10$ Ω, $I = 15/10 = 1.5$ A.`;
      else if (idx === 3) explanation = `$I = U/R = 20/50 = 0.4$ A.`;
      else if (idx === 4) explanation = `$I = U/R = 18/6 = 3$ A.`;
      else if (idx === 5) explanation = `$R_{23} = 12$ Ω, $R_e = 22$ Ω, $I = 30/22 = 1.36$ A.`;
      else if (idx === 6) explanation = `$R_e = 30/3 = 10$ Ω, $I = 12/10 = 1.2$ A.`;
      else explanation = `$I = ${answer}$ A.`;
    } else if ('U2' in c) {
      answer = c.U2;
      unit = 'V';
      explanation = `Feszültségosztás: $U_2 = 40 \\cdot 15/20 = 30$ V.`;
    } else if ('I1' in c) {
      answer = c.I1;
      unit = 'A';
      explanation = `$I_1 = U/R_1 = 20/10 = 2$ A.`;
    } else if ('U' in c) {
      answer = c.U;
      unit = 'V';
      explanation = `$U = 48/3 = 16$ V minden ellenálláson.`;
    } else {
      answer = 0;
      unit = '';
      explanation = '';
    }

    const wrong1 = round(answer * 2, 3);
    const wrong2 = round(answer / 2, 3);
    const wrong3 = round(answer * 1.5, 3);
    const uniqueValues = ensureUnique(answer, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} ${unit}`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${answer} ${unit}`);

    questions.push({
      id: nextId('sp'),
      topic: 'series-parallel',
      question: c.question,
      options,
      correct,
      explanation,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  return questions;
}

// Generate Kirchhoff questions (30 total: 8 easy, 12 medium, 10 hard)
function generateKirchhoffQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Kirchhoff I (current) - easy (8 questions)
  const currentEasy = [
    { I1: 2, I2: 3, Iout1: 4, Iout2: 1, diff: 'easy' },
    { I1: 5, I2: 3, Iout1: 6, Iout2: 2, diff: 'easy' },
    { I1: 4, I2: 4, Iout1: 5, Iout2: 3, diff: 'easy' },
    { I1: 1, I2: 2, Iout1: 2, Iout2: 1, diff: 'easy' },
    { I1: 3, I2: 7, Iout1: 8, Iout2: 2, diff: 'easy' },
    { I1: 6, I2: 2, Iout1: 5, Iout2: 3, diff: 'easy' },
    { I1: 4, I2: 6, Iout1: 7, Iout2: 3, diff: 'easy' },
    { I1: 3, I2: 5, Iout1: 6, Iout2: 2, diff: 'easy' },
  ];

  currentEasy.forEach(c => {
    const wrong1 = c.I1 + c.I2;
    const wrong2 = Math.abs(c.I1 - c.I2);
    const wrong3 = c.Iout1;
    const uniqueValues = ensureUnique(c.Iout2, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} A`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${c.Iout2} A`);

    questions.push({
      id: nextId('kh'),
      topic: 'kirchhoff',
      question: `Egy csomópontba ${c.I1}A és ${c.I2}A folyik be. Egy ágon ${c.Iout1}A folyik ki. Mennyi folyik ki a másik ágon?`,
      options,
      correct,
      explanation: `Kirchhoff I: $${c.I1}+${c.I2}=${c.I1+c.I2}$ A befolyó, ebből $${c.Iout1}$ A ki, tehát $${c.I1+c.I2}-${c.Iout1}=${c.Iout2}$ A.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Kirchhoff II (voltage) - easy to medium (12 questions)
  const voltageCalcs = [
    { U1: 5, U2: 7, Ug: 12, diff: 'easy' },
    { U1: 10, U2: 15, Ug: 25, diff: 'easy' },
    { U1: 8, U2: 12, Ug: 20, diff: 'easy' },
    { U1: 6, U2: 9, Ug: 15, diff: 'easy' },
    { U1: 20, U2: 10, Ug: 30, diff: 'medium' },
    { U1: 15, U2: 25, Ug: 40, diff: 'medium' },
    { U1: 18, U2: 12, Ug: 30, diff: 'medium' },
    { U1: 12, U2: 18, Ug: 30, diff: 'medium' },
    { U1: 7, U2: 11, Ug: 18, diff: 'medium' },
    { U1: 9, U2: 21, Ug: 30, diff: 'medium' },
    { U1: 14, U2: 26, Ug: 40, diff: 'medium' },
    { U1: 16, U2: 24, Ug: 40, diff: 'medium' },
  ];

  voltageCalcs.forEach(c => {
    const wrong1 = c.U1;
    const wrong2 = c.U2;
    const wrong3 = Math.abs(c.U1 - c.U2);
    const uniqueValues = ensureUnique(c.Ug, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} V`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${c.Ug} V`);

    questions.push({
      id: nextId('kh'),
      topic: 'kirchhoff',
      question: `Egy hurokban két ellenálláson ${c.U1}V és ${c.U2}V esik sorosan. Mekkora a generátor feszültsége?`,
      options,
      correct,
      explanation: `Kirchhoff II: $\\Sigma U=0$, tehát $U_g = U_1+U_2 = ${c.U1}+${c.U2} = ${c.Ug}$ V.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Circuit diagram problems (10 hard)
  const circuitProblems = [
    { question: "Csomópontba: I1=2A be, I2=5A be, I3=? ki, I4=3A ki. Mennyi I3?", I3: 4, diff: 'hard' },
    { question: "Hurokban: Ug=24V, U1=9V, U2=? Mennyi U2?", U2: 15, diff: 'hard' },
    { question: "Csomópontba: 10A be, 6A és 2A ki. Mennyi a harmadik kifolyó áram?", I: 2, diff: 'hard' },
    { question: "Soros hurokban: Ug=48V, U1=12V, U2=18V, U3=? Mennyi U3?", U3: 18, diff: 'hard' },
    { question: "Párhuzamos ágak: főági 8A, egyik ág 3A, másik ág? Mennyi?", I: 5, diff: 'hard' },
    { question: "Hurokban három egyforma R, Ug=30V. Mennyi esik egyiken?", U: 10, diff: 'hard' },
    { question: "Csomópont: 4 ág, 3A be, 1A ki, 0.5A ki, ? ki. Mennyi a negyedik?", I: 1.5, diff: 'hard' },
    { question: "Soros: Ug=100V, U1=30V, U2=45V, U3=? Mennyi U3?", U: 25, diff: 'hard' },
    { question: "Elágazás: 12A jön, két egyforma ágra oszlik. Mennyi folyik egyiken?", I: 6, diff: 'hard' },
    { question: "Hurok: Ug=60V, 4 egyforma R sorosan. Mennyi esik egyiken?", U: 15, diff: 'hard' },
  ];

  circuitProblems.forEach(c => {
    let answer: number;
    let unit: string;
    let explanation: string;

    if ('I3' in c) {
      answer = c.I3;
      unit = 'A';
      explanation = `Kirchhoff I: $2+5 = 7$ A be, $3$ A ki, tehát $7-3=4$ A.`;
    } else if ('U2' in c) {
      answer = c.U2;
      unit = 'V';
      explanation = `Kirchhoff II: $U_2 = 24-9 = 15$ V.`;
    } else if ('U3' in c) {
      answer = c.U3;
      unit = 'V';
      explanation = `Kirchhoff II: $U_3 = 48-12-18 = 18$ V.`;
    } else if ('I' in c) {
      answer = c.I;
      unit = 'A';
      const question = c.question;
      if (question.includes('Párhuzamos')) explanation = `$8-3=5$ A.`;
      else if (question.includes('4 ág')) explanation = `$3 - 1 - 0.5 = 1.5$ A.`;
      else if (question.includes('egyforma ágra')) explanation = `$12/2 = 6$ A.`;
      else explanation = `$10-6-2=2$ A.`;
    } else if ('U' in c) {
      answer = c.U;
      unit = 'V';
      const question = c.question;
      if (question.includes('három egyforma')) explanation = `$30/3 = 10$ V.`;
      else if (question.includes('U3=?')) explanation = `$100-30-45 = 25$ V.`;
      else explanation = `$60/4 = 15$ V.`;
    } else {
      answer = 0;
      unit = '';
      explanation = '';
    }

    const wrong1 = round(answer * 2, 3);
    const wrong2 = round(answer / 2, 3);
    const wrong3 = round(answer + 1, 3);
    const uniqueValues = ensureUnique(answer, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} ${unit}`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${answer} ${unit}`);

    questions.push({
      id: nextId('kh'),
      topic: 'kirchhoff',
      question: c.question,
      options,
      correct,
      explanation,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  return questions;
}

// Generate voltage divider questions (30 total: 8 easy, 12 medium, 10 hard)
function generateVoltageDividerQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Basic voltage divider (8 easy)
  const dividerEasy = [
    { R1: 100, R2: 200, Uin: 12, Uout: 8, diff: 'easy' },
    { R1: 150, R2: 150, Uin: 20, Uout: 10, diff: 'easy' },
    { R1: 200, R2: 400, Uin: 18, Uout: 12, diff: 'easy' },
    { R1: 50, R2: 150, Uin: 16, Uout: 12, diff: 'easy' },
    { R1: 220, R2: 220, Uin: 24, Uout: 12, diff: 'easy' },
    { R1: 100, R2: 300, Uin: 20, Uout: 15, diff: 'easy' },
    { R1: 180, R2: 180, Uin: 30, Uout: 15, diff: 'easy' },
    { R1: 75, R2: 225, Uin: 12, Uout: 9, diff: 'easy' },
  ];

  dividerEasy.forEach(c => {
    const Uout = round(c.Uin * c.R2 / (c.R1 + c.R2), 2);
    const wrong1 = round(c.Uin * c.R1 / (c.R1 + c.R2), 2);
    const wrong2 = round(c.Uin / 2);
    const wrong3 = round(Uout * 1.5);
    const uniqueValues = ensureUnique(Uout, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} V`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Uout} V`);

    questions.push({
      id: nextId('vd'),
      topic: 'voltage-divider',
      question: `Feszültségosztó: R1=${c.R1}Ω, R2=${c.R2}Ω, Ube=${c.Uin}V. Mekkora Uki?`,
      options,
      correct,
      explanation: `$U_{ki} = U_{be} \\cdot \\frac{R_2}{R_1+R_2} = ${c.Uin} \\cdot \\frac{${c.R2}}{${c.R1}+${c.R2}} = ${Uout}$ V.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Medium + Hard combined (22 total - more medium/hard than easy)
  for (let i = 0; i < 22; i++) {
    const R1s = [100, 150, 200, 220, 270, 330, 470, 560, 680, 820];
    const R2s = [100, 150, 200, 220, 270, 330, 470, 560, 680, 820];
    const Uins = [10, 12, 15, 18, 20, 24, 30];
    const R1 = R1s[Math.floor(Math.random() * R1s.length)];
    const R2 = R2s[Math.floor(Math.random() * R2s.length)];
    const Uin = Uins[Math.floor(Math.random() * Uins.length)];
    const Uout = round(Uin * R2 / (R1 + R2), 2);

    const diff = i < 12 ? 'medium' : 'hard';
    const wrong1 = round(Uin * R1 / (R1 + R2), 2);
    const wrong2 = round(Uin / 2);
    const wrong3 = round(Uout * 1.5);
    const uniqueValues = ensureUnique(Uout, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} V`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Uout} V`);

    questions.push({
      id: nextId('vd'),
      topic: 'voltage-divider',
      question: `Feszültségosztó: R1=${R1}Ω, R2=${R2}Ω, Ube=${Uin}V. Mekkora Uki?`,
      options,
      correct,
      explanation: `$U_{ki} = U_{be} \\cdot \\frac{R_2}{R_1+R_2} = ${Uin} \\cdot \\frac{${R2}}{${R1}+${R2}} = ${Uout}$ V.`,
      difficulty: diff as any,
      requiresCalculation: true
    });
  }

  return questions;
}

// Generate conductors-insulators-semiconductors (15 total: 5 easy, 5 medium, 5 hard)
function generateConductorsInsulatorsQuestions(): QuizQuestion[] {
  return [
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Melyik anyagcsoportra jellemző a legkisebb tiltott sáv?",
      options: ["Szigetelők", "Félvezetők", "Vezetők (fémek)", "Mind egyforma"],
      correct: 2, explanation: "A vezetőknél a tiltott sáv a legkisebb, gyakran átfedés van.", difficulty: 'easy' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Melyik NEM félvezető?",
      options: ["Szilícium", "Germánium", "Réz", "Szelén"],
      correct: 2, explanation: "A réz elsőrendű vezető (fém), nem félvezető.", difficulty: 'easy' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi jellemzi a szigetelőket?",
      options: ["Tiltott sáv >3 eV", "Tiltott sáv <1 eV", "Nincs tiltott sáv", "Sok szabad elektron"],
      correct: 0, explanation: "Szigetelőknél a tiltott sáv széles (>3 eV), kevés elektron jut át.", difficulty: 'easy' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Melyik a legjobb vezető?",
      options: ["Alumínium", "Réz", "Ezüst", "Arany"],
      correct: 2, explanation: "Az ezüst a legjobb vezető, de drága, ezért a rézet használják.", difficulty: 'easy' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi történik a félvezetőkkel, ha hőmérsékletet emelünk?",
      options: ["Vezetőképességük csökken", "Vezetőképességük nő", "Nem változik", "Szigetelővé válnak"],
      correct: 1, explanation: "Hőmérséklet emelésével több elektron jut a vezetési sávba.", difficulty: 'easy' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mekkora a fémeknél a vezetési és valenciasáv távolsága?",
      options: ["Nagy (>3 eV)", "Közepes (1-3 eV)", "Kicsi vagy átfednek", "Nincs valenciasáv"],
      correct: 2, explanation: "Fémeknél a sávok átfednek vagy nagyon közel vannak.", difficulty: 'medium' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Melyik anyag a félvezető ipar alapja?",
      options: ["Germánium", "Szilícium", "Szelén", "Réz"],
      correct: 1, explanation: "A szilícium (Si) a félvezető ipar alapanyaga.", difficulty: 'medium' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi jellemzi az N-típusú félvezetőt?",
      options: ["Lyuktöbblet", "Elektrontöbblet", "Semleges", "Szigetel"],
      correct: 1, explanation: "N-típusú félvezetőben elektrontöbblet van (negatív töltéshordozók).", difficulty: 'medium' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi jellemzi a P-típusú félvezetőt?",
      options: ["Lyuktöbblet", "Elektrontöbblet", "Semleges", "Vezet"],
      correct: 0, explanation: "P-típusú félvezetőben lyuktöbblet van (pozitív töltéshordozók).", difficulty: 'medium' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Melyik szigetelő NEM?",
      options: ["Üveg", "Műanyag", "Alumínium", "Csillám"],
      correct: 2, explanation: "Az alumínium fém, vezető, nem szigetelő.", difficulty: 'medium' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi a dópolás félvezetőkben?",
      options: ["Hőkezelés", "Idegen atomok bevitele", "Mechanikai alakítás", "Fénykezelés"],
      correct: 1, explanation: "Dópolás: idegen atomok bevitele a félvezető tulajdonságok módosítására.", difficulty: 'hard' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mekkora a szilícium tiltott sávja (eV)?",
      options: ["0.1 eV", "0.7 eV", "1.1 eV", "3.5 eV"],
      correct: 2, explanation: "A szilícium tiltott sávja ~1.1 eV.", difficulty: 'hard' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi a fajlagos ellenállás jellemző nagysága vezetőknél (Ωmm²/m)?",
      options: ["<0.1", "1-10", "100-1000", ">10000"],
      correct: 0, explanation: "Vezetőknél a fajlagos ellenállás nagyon kicsi (<0.1 Ωmm²/m).", difficulty: 'hard' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Miért jobb a réz, mint az alumínium vezetékhez?",
      options: ["Olcsóbb", "Könnyebb", "Kisebb fajlagos ellenállás", "Jobban hajlítható"],
      correct: 2, explanation: "A réz fajlagos ellenállása kisebb, így jobb vezető.", difficulty: 'hard' },
    { id: nextId('ci'), topic: 'conductors-insulators', question: "Mi történik a félvezetővel abszolút nulla fokon?",
      options: ["Tökéletesen vezet", "Szigetelővé válik", "Nem változik", "Fémévé válik"],
      correct: 1, explanation: "0 K-en nincs termikus gerjesztés, a félvezető szigetelőként viselkedik.", difficulty: 'hard' },
  ];
}

// Generate resistor component questions (25 total: 7 easy, 10 medium, 8 hard)
function generateResistorComponentQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Color code basic (7 easy)
  const colorBasic = [
    { c1: "Barna", v1: 1, c2: "Fekete", v2: 0, c3: "Piros", m: 100, R: 1000, diff: 'easy' },
    { c1: "Piros", v1: 2, c2: "Piros", v2: 2, c3: "Barna", m: 10, R: 220, diff: 'easy' },
    { c1: "Sárga", v1: 4, c2: "Lila", v2: 7, c3: "Barna", m: 10, R: 470, diff: 'easy' },
    { c1: "Fekete", v1: 0, c2: "Fekete", v2: 0, c3: "Fekete", m: 1, R: 0, diff: 'easy' },
    { c1: "Barna", v1: 1, c2: "Fekete", v2: 0, c3: "Narancs", m: 1000, R: 10000, diff: 'easy' },
    { c1: "Zöld", v1: 5, c2: "Kék", v2: 6, c3: "Barna", m: 10, R: 560, diff: 'easy' },
    { c1: "Piros", v1: 2, c2: "Piros", v2: 2, c3: "Piros", m: 100, R: 2200, diff: 'easy' },
  ];

  colorBasic.forEach(c => {
    const wrong1 = c.R * 10;
    const wrong2 = c.R / 10;
    const wrong3 = c.v1 + c.v2;
    const uniqueValues = ensureUnique(c.R, wrong1, wrong2, wrong3);
    const valueStr = c.R >= 1000 ? `${c.R/1000} kΩ` : `${c.R} Ω`;
    const options = uniqueValues.map(val => val >= 1000 ? `${val/1000} kΩ` : `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(valueStr);

    questions.push({
      id: nextId('rc'),
      topic: 'resistor-component',
      question: `Színkód: ${c.c1}-${c.c2}-${c.c3}. Mekkora az érték?`,
      options,
      correct,
      explanation: `${c.c1}=${c.v1}, ${c.c2}=${c.v2}, ${c.c3}=×${c.m}. Érték: ${c.v1}${c.v2}×${c.m}=${valueStr}.`,
      difficulty: c.diff as any
    });
  });

  // Add conceptual questions (10 medium, 8 hard)
  const conceptual: QuizQuestion[] = [
    { id: nextId('rc'), topic: 'resistor-component', question: "Mi az NTC ellenállás jellemzője?",
      options: ["Hőmérséklet nő → R nő", "Hőmérséklet nő → R csökken", "Feszültségfüggő", "Nem változik"],
      correct: 1, explanation: "NTC: negatív hőmérsékleti együttható, R csökken hő hatására.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mi a PTK ellenállás jellemzője?",
      options: ["Hőmérséklet nő → R csökken", "Hőmérséklet nő → R nő", "Fényfüggő", "Állandó"],
      correct: 1, explanation: "PTK (PTC): pozitív hőmérsékleti együttható, R nő hő hatására.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mi a VDR?",
      options: ["Hőmérsékletfüggő", "Feszültségfüggő", "Fényfüggő", "Időfüggő"],
      correct: 1, explanation: "VDR: feszültségfüggő ellenállás.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mi a fotoellenállás (LDR) jellemzője?",
      options: ["Hőfüggő", "Feszültségfüggő", "Fényfüggő", "Áramfüggő"],
      correct: 2, explanation: "LDR: fény hatására csökken az ellenállása.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Melyik E-sor a legpontos abb?",
      options: ["E6 (±20%)", "E12 (±10%)", "E24 (±5%)", "E96 (±1%)"],
      correct: 3, explanation: "E96 a legpontosabb (±1% tűrés).", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mennyi az izzólámpa ellenállása hidegen vs melegen?",
      options: ["Azonos", "Hidegen nagyobb", "Melegen nagyobb (akár 10x)", "Nincs ellenállása"],
      correct: 2, explanation: "Izzószál hidegen kis R, melegen akár 10× nagyobb.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Miért kell tartalékot hagyni az ellenállás teljesítményénél?",
      options: ["Törvény írja elő", "Túlmelegedés ellen (30-50%)", "Nincs rá szükség", "Olcsóbb"],
      correct: 1, explanation: "30-50% tartalék kell a túlmelegedés elkerülésére.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mi a trimmer potméter?",
      options: ["Kezelőszervi poti", "Gyári/szerviz beállító", "Nagy teljesítményű", "Digitális"],
      correct: 1, explanation: "Trimmer: csak gyártáskor/szervizeléskor hozzáférhető.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Melyik szín jelent arany szorzót?",
      options: ["×10", "×0.1", "×100", "×1"],
      correct: 1, explanation: "Arany szorzó: ×10⁻¹ = ×0.1", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Melyik NEM ellenállás anyag?",
      options: ["Szén", "Fém", "Huzal", "Szilícium félvezető"],
      correct: 3, explanation: "Félvezető nem ellenállás anyag, hanem aktív eszköz.", difficulty: 'medium' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mennyi a 4-sávos kód Piros-Piros-Barna-Arany értéke és tűrése?",
      options: ["22Ω ±5%", "220Ω ±5%", "2.2kΩ ±5%", "22kΩ ±10%"],
      correct: 1, explanation: "22×10¹ = 220Ω, arany tűrés = ±5%.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Egy 1/4W ellenállásra max mennyi feszültség tehető, ha R=100Ω?",
      options: ["2.5V", "5V", "25V", "50V"],
      correct: 1, explanation: "$P=U^2/R \\Rightarrow U=\\sqrt{P \\cdot R}=\\sqrt{0.25 \\cdot 100}=5$ V.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Egy 2W ellenálláson 10V van. Min. mennyi legyen az értéke?",
      options: ["5Ω", "10Ω", "25Ω", "50Ω"],
      correct: 3, explanation: "$R=U^2/P=100/2=50$ Ω min. érték.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "5-sávos kód: Barna-Fekete-Fekete-Piros-Barna. Mekkora az érték és tűrés?",
      options: ["100Ω ±1%", "1kΩ ±1%", "10kΩ ±1%", "100kΩ ±1%"],
      correct: 2, explanation: "100×10² = 10kΩ, barna tűrés = ±1%.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Melyik NEM potenciométer típus?",
      options: ["Szén", "Cermet", "Huzal", "Diódás"],
      correct: 3, explanation: "Diódás nem potenciométer típus.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mi a fajlagos ellenállás mértékegysége a gyakorlatban?",
      options: ["Ωm", "Ω/m", "Ωmm²/m", "Ω·cm"],
      correct: 2, explanation: "Gyakorlatban Ωmm²/m, mert keresztmetszetet mm²-ben adjuk meg.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "Mekkora áram folyhat egy 1/2W, 220Ω ellenálláson?",
      options: ["~23mA", "~48mA", "~96mA", "~192mA"],
      correct: 1, explanation: "$I=\\sqrt{P/R}=\\sqrt{0.5/220} \\approx 0.048$ A = 48mA.", difficulty: 'hard' },
    { id: nextId('rc'), topic: 'resistor-component', question: "E12 sorban melyik NEM szabványos érték?",
      options: ["10", "15", "22", "25"],
      correct: 3, explanation: "E12: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82. A 25 nincs benne.", difficulty: 'hard' },
  ];

  questions.push(...conceptual);
  return questions;
}

// Generate power-energy questions (35 total: 8 easy, 15 medium, 12 hard)
function generatePowerEnergyQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // P = U*I basic (8 easy)
  [[230, 5, 1150], [12, 2, 24], [24, 3, 72], [120, 0.5, 60], [48, 1.5, 72], [9, 0.5, 4.5], [15, 4, 60], [6, 3, 18]].forEach(([U, I, P]) => {
    const wrong1 = round(U / I);
    const wrong2 = round(U + I);
    const wrong3 = round(P / 2);
    const uniqueValues = ensureUnique(P, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} W`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${P} W`);

    questions.push({
      id: nextId('pe'),
      topic: 'power-energy',
      question: `Egy ${U}V-os hálózatról ${I}A-t felvevő fogyasztó teljesítménye?`,
      options,
      correct,
      explanation: `$P = U \\cdot I = ${U} \\cdot ${I} = ${P}$ W.`,
      difficulty: 'easy',
      requiresCalculation: true
    });
  });

  // W = P*t energy (7 medium)
  [[1000, 4, 4], [1500, 3, 4.5], [2000, 2.5, 5], [500, 6, 3], [2500, 2, 5], [3000, 1.5, 4.5], [800, 5, 4]].forEach(([P, t, W]) => {
    const wrong1 = P * t;
    const wrong2 = P / t;
    const wrong3 = round(W / 2, 1);
    const uniqueValues = ensureUnique(W, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} kWh`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${W} kWh`);

    questions.push({
      id: nextId('pe'),
      topic: 'power-energy',
      question: `Egy ${P}W készülék ${t}h működik. Mennyi energiát fogyaszt (kWh)?`,
      options,
      correct,
      explanation: `$W = P \\cdot t = ${P/1000}$ kW $\\cdot ${t}$ h $= ${W}$ kWh.`,
      difficulty: 'medium',
      requiresCalculation: true
    });
  });

  // Efficiency (8 medium)
  [[100, 80, 80], [200, 75, 150], [500, 90, 450], [1000, 85, 850], [150, 70, 105], [300, 95, 285], [400, 88, 352], [600, 92, 552]].forEach(([Ptot, eff, Puse]) => {
    const wrong1 = Ptot;
    const wrong2 = round(Ptot - Puse);
    const wrong3 = round(Puse / 2);
    const uniqueValues = ensureUnique(Puse, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} W`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Puse} W`);

    questions.push({
      id: nextId('pe'),
      topic: 'power-energy',
      question: `Egy ${Ptot}W motor hatásfoka ${eff}%. Mekkora a hasznos teljesítmény?`,
      options,
      correct,
      explanation: `$P_{hasznos} = ${Ptot} \\cdot ${eff/100} = ${Puse}$ W.`,
      difficulty: 'medium',
      requiresCalculation: true
    });
  });

  // Real generator problems (12 hard)
  const generatorProbs = [
    { U0: 12, Rb: 1, Rt: 5, I: 2, Uk: 10, Ph: 20, P0: 24, eff: 83.3, diff: 'hard' },
    { U0: 24, Rb: 2, Rt: 10, I: 2, Uk: 20, Ph: 40, P0: 48, eff: 83.3, diff: 'hard' },
    { U0: 15, Rb: 0.5, Rt: 4.5, I: 3, Uk: 13.5, Ph: 40.5, P0: 45, eff: 90, diff: 'hard' },
    { U0: 48, Rb: 4, Rt: 20, I: 2, Uk: 40, Ph: 80, P0: 96, eff: 83.3, diff: 'hard' },
    { U0: 9, Rb: 0.5, Rt: 2.5, I: 3, Uk: 7.5, Ph: 22.5, P0: 27, eff: 83.3, diff: 'hard' },
    { U0: 20, Rb: 1, Rt: 9, I: 2, Uk: 18, Ph: 36, P0: 40, eff: 90, diff: 'hard' },
    { U0: 30, Rb: 2, Rt: 13, I: 2, Uk: 26, Ph: 52, P0: 60, eff: 86.7, diff: 'hard' },
    { U0: 12, Rb: 0.4, Rt: 3.6, I: 3, Uk: 10.8, Ph: 32.4, P0: 36, eff: 90, diff: 'hard' },
    { U0: 6, Rb: 0.5, Rt: 1.5, I: 3, Uk: 4.5, Ph: 13.5, P0: 18, eff: 75, diff: 'hard' },
    { U0: 36, Rb: 3, Rt: 15, I: 2, Uk: 30, Ph: 60, P0: 72, eff: 83.3, diff: 'hard' },
    { U0: 18, Rb: 1, Rt: 8, I: 2, Uk: 16, Ph: 32, P0: 36, eff: 88.9, diff: 'hard' },
    { U0: 60, Rb: 4, Rt: 26, I: 2, Uk: 52, Ph: 104, P0: 120, eff: 86.7, diff: 'hard' },
  ];

  generatorProbs.forEach(c => {
    // Ask for current
    const I = round(c.U0 / (c.Rb + c.Rt), 2);
    const wrong1 = round(c.U0 / c.Rt, 2);
    const wrong2 = round(c.U0 / c.Rb, 2);
    const wrong3 = round(I / 2, 2);
    const uniqueValues = ensureUnique(I, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} A`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${I} A`);

    questions.push({
      id: nextId('pe'),
      topic: 'power-energy',
      question: `Generátor: U0=${c.U0}V, Rb=${c.Rb}Ω, Rt=${c.Rt}Ω. Mekkora az áram?`,
      options,
      correct,
      explanation: `$I = U_0/(R_b+R_t) = ${c.U0}/${c.Rb+c.Rt} = ${I}$ A.`,
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  return questions;
}

// Generate wire sizing questions (25 total: 7 easy, 10 medium, 8 hard)
function generateWireSizingQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // R = rho * l / A (7 easy + 10 medium)
  for (let i = 0; i < 17; i++) {
    const lengths = [10, 20, 25, 30, 40, 50];
    const areas = [1, 1.5, 2.5, 4, 6];
    const l = lengths[Math.floor(Math.random() * lengths.length)];
    const A = areas[Math.floor(Math.random() * areas.length)];
    const R = round(0.0175 * l / A, 3);
    const diff = i < 7 ? 'easy' : 'medium';

    const wrong1 = round(R * 2, 3);
    const wrong2 = round(R / 2, 3);
    const wrong3 = round(0.0175 * A / l, 3);
    const uniqueValues = ensureUnique(R, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${R} Ω`);

    questions.push({
      id: nextId('ws'),
      topic: 'wire-sizing',
      question: `Egy ${l}m hosszú réz vezeték ellenállása ${A}mm² keresztmetszetnél? (ρ_Cu=0.0175)`,
      options,
      correct,
      explanation: `$R = \\rho \\cdot l/A = 0.0175 \\cdot ${l}/${A} = ${R}$ Ω.`,
      difficulty: diff as any,
      requiresCalculation: true
    });
  }

  // Circle cross section (8 hard)
  const circleDiams = [0.5, 0.8, 1, 1.2, 1.5, 2, 2.5, 3];
  circleDiams.forEach(d => {
    const A = round(d * d * 3.1416 / 4, 2);
    const wrong1 = round(d * 3.1416, 2);
    const wrong2 = round(d * d, 2);
    const wrong3 = round(A * 2, 2);
    const uniqueValues = ensureUnique(A, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} mm²`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${A} mm²`);

    questions.push({
      id: nextId('ws'),
      topic: 'wire-sizing',
      question: `Mekkora egy ${d}mm átmérőjű kör keresztmetszete? (mm²)`,
      options,
      correct,
      explanation: `$A = d^2 \\cdot \\pi/4 = ${d}^2 \\cdot 3.1416/4 = ${A}$ mm².`,
      difficulty: 'hard',
      requiresCalculation: true
    });
  });

  return questions;
}

// Generate star-delta questions (30 total: 8 easy, 12 medium, 10 hard)
function generateStarDeltaQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Delta to Star equal R (8 easy)
  [9, 12, 15, 18, 24, 30, 36, 45].forEach(Rd => {
    const Rs = round(Rd / 3);
    const wrong1 = Rd;
    const wrong2 = Rd * 3;
    const wrong3 = round(Rd / 2);
    const uniqueValues = ensureUnique(Rs, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Rs} Ω`);

    questions.push({
      id: nextId('sd'),
      topic: 'star-delta',
      question: `Delta→Csillag: minden ellenállás ${Rd}Ω. Mekkora lesz a csillag egy ága?`,
      options,
      correct,
      explanation: `Delta→Csillag: $R_Y = R_\\Delta/3 = ${Rd}/3 = ${Rs}$ Ω.`,
      difficulty: 'easy',
      requiresCalculation: true
    });
  });

  // Star to Delta equal R (12 medium)
  [3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30].forEach(Rs => {
    const Rd = Rs * 3;
    const wrong1 = Rs;
    const wrong2 = round(Rs / 3);
    const wrong3 = Rs * 2;
    const uniqueValues = ensureUnique(Rd, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${Rd} Ω`);

    questions.push({
      id: nextId('sd'),
      topic: 'star-delta',
      question: `Csillag→Delta: minden ág ${Rs}Ω. Mekkora lesz a delta egy oldala?`,
      options,
      correct,
      explanation: `Csillag→Delta: $R_\\Delta = 3 \\cdot R_Y = 3 \\cdot ${Rs} = ${Rd}$ Ω.`,
      difficulty: 'medium',
      requiresCalculation: true
    });
  });

  // TRAP questions: 2 resistors equal, 1 different - looks symmetric but ISN'T! (3 hard)
  // These catch students who don't read carefully and assume they can use R/3 or 3×R

  // Delta→Star trap: R1=12Ω, R2=12Ω, R3=18Ω (NOT all equal!)
  const trap1_RSum = 12 + 12 + 18; // 42
  const trap1_Ra = round((12 * 18) / trap1_RSum, 2); // Ra = (R1×R3)/(sum) = 216/42 = 5.14
  const trap1_wrong1 = round(12 / 3, 2); // Wrong: 4 (if they assumed all 12Ω)
  const trap1_wrong2 = round(18 / 3, 2); // Wrong: 6 (if they assumed all 18Ω)
  const trap1_wrong3 = round((12 + 12 + 18) / 9, 2); // Wrong: 4.67 (average/3)
  const trap1_options = [trap1_Ra, trap1_wrong1, trap1_wrong2, trap1_wrong3].map(v => `${v} Ω`).sort(() => Math.random() - 0.5);

  questions.push({
    id: nextId('sd'),
    topic: 'star-delta',
    question: `Delta→Csillag átalakítás: R1=12Ω, R2=12Ω, R3=18Ω. Mekkora Ra?`,
    options: trap1_options,
    correct: trap1_options.indexOf(`${trap1_Ra} Ω`),
    explanation: `Vigyázat! NEM minden ellenállás egyforma! $R_a = \\frac{R_1 \\times R_3}{R_1+R_2+R_3} = \\frac{12 \\times 18}{42} = ${trap1_Ra}$ Ω.`,
    difficulty: 'hard',
    requiresCalculation: true
  });

  // Delta→Star trap: R1=20Ω, R2=30Ω, R3=30Ω (NOT all equal!)
  const trap2_RSum = 20 + 30 + 30; // 80
  const trap2_Rb = round((20 * 30) / trap2_RSum, 2); // Rb = (R1×R2)/(sum) = 600/80 = 7.5
  const trap2_wrong1 = round(30 / 3, 2); // Wrong: 10 (if they assumed all 30Ω)
  const trap2_wrong2 = round(20 / 3, 2); // Wrong: 6.67 (if they assumed all 20Ω)
  const trap2_wrong3 = round((20 + 30 + 30) / 9, 2); // Wrong: 8.89 (average/3)
  const trap2_options = [trap2_Rb, trap2_wrong1, trap2_wrong2, trap2_wrong3].map(v => `${v} Ω`).sort(() => Math.random() - 0.5);

  questions.push({
    id: nextId('sd'),
    topic: 'star-delta',
    question: `Delta→Csillag átalakítás: R1=20Ω, R2=30Ω, R3=30Ω. Mekkora Rb?`,
    options: trap2_options,
    correct: trap2_options.indexOf(`${trap2_Rb} Ω`),
    explanation: `Vigyázat! NEM minden ellenállás egyforma! $R_b = \\frac{R_1 \\times R_2}{R_1+R_2+R_3} = \\frac{20 \\times 30}{80} = ${trap2_Rb}$ Ω.`,
    difficulty: 'hard',
    requiresCalculation: true
  });

  // Star→Delta trap: Ra=6Ω, Rb=6Ω, Rc=10Ω (NOT all equal!)
  const trap3_product = 6*6 + 6*10 + 10*6; // 36 + 60 + 60 = 156
  const trap3_R1 = round(trap3_product / 10, 2); // R1 = product/Rc = 156/10 = 15.6
  const trap3_wrong1 = round(6 * 3, 2); // Wrong: 18 (if they assumed all 6Ω)
  const trap3_wrong2 = round(10 * 3, 2); // Wrong: 30 (if they assumed all 10Ω)
  const trap3_wrong3 = round((6 + 6 + 10), 2); // Wrong: 22 (just sum)
  const trap3_options = [trap3_R1, trap3_wrong1, trap3_wrong2, trap3_wrong3].map(v => `${v} Ω`).sort(() => Math.random() - 0.5);

  questions.push({
    id: nextId('sd'),
    topic: 'star-delta',
    question: `Csillag→Delta átalakítás: Ra=6Ω, Rb=6Ω, Rc=10Ω. Mekkora R1?`,
    options: trap3_options,
    correct: trap3_options.indexOf(`${trap3_R1} Ω`),
    explanation: `Vigyázat! NEM minden ellenállás egyforma! $R_1 = \\frac{R_a R_b + R_b R_c + R_c R_a}{R_c} = \\frac{156}{10} = ${trap3_R1}$ Ω.`,
    difficulty: 'hard',
    requiresCalculation: true
  });

  // ASYMMETRIC transformations (7 genuinely hard questions)
  // Delta → Star asymmetric: Ra = (R1×R3)/(R1+R2+R3)
  const asymmetricDeltaToStar = [
    { R1: 12, R2: 18, R3: 30, ask: 'Ra', answer: 6, diff: 'hard' },
    { R1: 20, R2: 30, R3: 40, ask: 'Ra', answer: 8.89, diff: 'hard' },
    { R1: 15, R2: 25, R3: 20, ask: 'Rb', answer: 6.25, diff: 'hard' },
  ];

  asymmetricDeltaToStar.forEach(c => {
    const RSum = c.R1 + c.R2 + c.R3;
    let Ra, Rb, Rc;

    if (c.ask === 'Ra') {
      Ra = round((c.R1 * c.R3) / RSum, 2);
    } else if (c.ask === 'Rb') {
      Rb = round((c.R1 * c.R2) / RSum, 2);
    } else {
      Rc = round((c.R2 * c.R3) / RSum, 2);
    }

    const answer = c.ask === 'Ra' ? Ra : (c.ask === 'Rb' ? Rb : Rc);
    const wrong1 = round(answer * 2, 2);
    const wrong2 = round(answer / 2, 2);
    const wrong3 = round(answer * 1.5, 2);
    const uniqueValues = ensureUnique(answer, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${answer} Ω`);

    questions.push({
      id: nextId('sd'),
      topic: 'star-delta',
      question: `Delta→Csillag átalakítás: R1=${c.R1}Ω, R2=${c.R2}Ω, R3=${c.R3}Ω. Mekkora ${c.ask}?`,
      options,
      correct,
      explanation: c.ask === 'Ra'
        ? `$R_a = \\frac{R_1 \\times R_3}{R_1+R_2+R_3} = \\frac{${c.R1} \\times ${c.R3}}{${RSum}} = ${answer}$ Ω.`
        : (c.ask === 'Rb'
          ? `$R_b = \\frac{R_1 \\times R_2}{R_1+R_2+R_3} = \\frac{${c.R1} \\times ${c.R2}}{${RSum}} = ${answer}$ Ω.`
          : `$R_c = \\frac{R_2 \\times R_3}{R_1+R_2+R_3} = \\frac{${c.R2} \\times ${c.R3}}{${RSum}} = ${answer}$ Ω.`),
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  // Star → Delta asymmetric: R1 = (Ra×Rb + Rb×Rc + Rc×Ra)/Rc
  const asymmetricStarToDelta = [
    { Ra: 4, Rb: 6, Rc: 8, ask: 'R1', answer: 11, diff: 'hard' },
    { Ra: 5, Rb: 10, Rc: 15, ask: 'R2', answer: 41, diff: 'hard' },
    { Ra: 6, Rb: 8, Rc: 12, ask: 'R3', answer: 19, diff: 'hard' },
    { Ra: 3, Rb: 9, Rc: 6, ask: 'R1', answer: 13.5, diff: 'hard' },
  ];

  asymmetricStarToDelta.forEach(c => {
    const product = c.Ra * c.Rb + c.Rb * c.Rc + c.Rc * c.Ra;
    let R1, R2, R3;

    if (c.ask === 'R1') {
      R1 = round(product / c.Rc, 2);
    } else if (c.ask === 'R2') {
      R2 = round(product / c.Ra, 2);
    } else {
      R3 = round(product / c.Rb, 2);
    }

    const answer = c.ask === 'R1' ? R1 : (c.ask === 'R2' ? R2 : R3);
    const wrong1 = round(answer * 2, 2);
    const wrong2 = round(answer / 2, 2);
    const wrong3 = round(answer * 1.5, 2);
    const uniqueValues = ensureUnique(answer, wrong1, wrong2, wrong3);
    const options = uniqueValues.map(val => `${val} Ω`).sort(() => Math.random() - 0.5);
    const correct = options.indexOf(`${answer} Ω`);

    questions.push({
      id: nextId('sd'),
      topic: 'star-delta',
      question: `Csillag→Delta átalakítás: Ra=${c.Ra}Ω, Rb=${c.Rb}Ω, Rc=${c.Rc}Ω. Mekkora ${c.ask}?`,
      options,
      correct,
      explanation: c.ask === 'R1'
        ? `$R_1 = \\frac{R_a R_b + R_b R_c + R_c R_a}{R_c} = \\frac{${product}}{${c.Rc}} = ${answer}$ Ω.`
        : (c.ask === 'R2'
          ? `$R_2 = \\frac{R_a R_b + R_b R_c + R_c R_a}{R_a} = \\frac{${product}}{${c.Ra}} = ${answer}$ Ω.`
          : `$R_3 = \\frac{R_a R_b + R_b R_c + R_c R_a}{R_b} = \\frac{${product}}{${c.Rb}} = ${answer}$ Ω.`),
      difficulty: c.diff as any,
      requiresCalculation: true
    });
  });

  return questions;
}

// Main generation function
export function generateAllQuestions(): QuizQuestion[] {
  questionId = 1; // Reset counter

  const allQuestions: QuizQuestion[] = [
    ...generateUnitQuestions(), // 25 questions (10 easy, 15 medium/hard)
    ...generateBasicConceptsQuestions(), // 20 questions (5 easy, 10 medium, 5 hard)
    ...generateOhmsLawQuestions(), // 30 questions (8 easy, 12 medium, 10 hard)
    ...generateSeriesParallelQuestions(), // 35 questions (10 easy, 15 medium, 10 hard)
    ...generateKirchhoffQuestions(), // 30 questions (8 easy, 12 medium, 10 hard)
    ...generateVoltageDividerQuestions(), // 30 questions (8 easy, 12 medium, 10 hard)
    ...generateConductorsInsulatorsQuestions(), // 15 questions (5 easy, 5 medium, 5 hard)
    ...generateResistorComponentQuestions(), // 25 questions (7 easy, 10 medium, 8 hard)
    ...generatePowerEnergyQuestions(), // 35 questions (8 easy, 15 medium, 12 hard)
    ...generateWireSizingQuestions(), // 25 questions (7 easy, 10 medium, 8 hard)
    ...generateStarDeltaQuestions(), // 30 questions (8 easy, 12 medium, 10 hard)
  ];

  console.log(`Generated ${allQuestions.length} questions (target: 300)`);
  console.log('Distribution by topic:');
  const byTopic = allQuestions.reduce((acc, q) => {
    acc[q.topic] = (acc[q.topic] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  console.log(byTopic);

  console.log('\nDistribution by difficulty:');
  const byDifficulty = allQuestions.reduce((acc, q) => {
    const diff = q.difficulty || 'unknown';
    acc[diff] = (acc[diff] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  console.log(byDifficulty);

  return allQuestions;
}
