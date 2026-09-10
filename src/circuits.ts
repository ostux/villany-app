// Circuit diagram (illustrated) problem generation
// Topology templates: resistance networks with random values, calculated
// node voltages/currents, and geometry needed for SVG rendering.

export interface CircuitNode {
  id: string;
  x: number;
  y: number;
}

export interface CircuitResistor {
  id: string;
  label: string;
  value: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  vertical?: boolean;
}

export interface CircuitSource {
  label: string;
  value: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  vertical?: boolean;
}

export interface CircuitPoint {
  id: string;
  label: string;
  x: number;
  y: number;
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: string;
}

export interface CircuitQuestion {
  key: string;
  prompt: string;
  answer: number;
  unit: string;
  tolerance: number;
  explanation: string;
}

export interface Circuit {
  id: string;
  typeId: string;
  title: string;
  description: string;
  nodes: CircuitNode[];
  wires: string[][];
  resistors: CircuitResistor[];
  source: CircuitSource;
  points: CircuitPoint[];
  viewBox: { w: number; h: number };
  questions: CircuitQuestion[];
}

export interface TopologyType {
  id: string;
  title: string;
  generate: () => Omit<Circuit, 'id' | 'typeId'>;
}

function round(v: number, digits: number = 3): number {
  const f = Math.pow(10, digits);
  return Math.round((v + Number.EPSILON) * f) / f;
}

function randChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// "Nice" resistance values (similar to E12, easy to calculate mentally)
const NICE_R = [5, 6, 8, 10, 12, 15, 16, 20, 22, 24, 25, 30, 33, 40, 47, 50, 60, 68, 75, 80, 100, 120, 150];
const NICE_U = [6, 9, 12, 15, 18, 20, 24, 30, 48, 60];

function randR(): number {
  return randChoice(NICE_R);
}

function randU(): number {
  return randChoice(NICE_U);
}

// ---------------------------------------------------------------------------
// Topology definitions
// Every generator returns an object with circuit data
// ---------------------------------------------------------------------------

function seriesTopology(): Omit<Circuit, 'id' | 'typeId'> {
  const U = randU();
  const r = [randR(), randR(), randR()];
  const Re = r[0] + r[1] + r[2];
  const I = U / Re;
  const Uk = r.map(v => I * v);

  const y = 60;
  const x0 = 40, xStep = 100;
  const nodes: CircuitNode[] = [
    { id: 'A', x: x0, y },
    { id: 'B', x: x0 + xStep, y },
    { id: 'C', x: x0 + 2 * xStep, y },
    { id: 'D', x: x0 + 3 * xStep, y }
  ];
  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r[0]}Ω`, value: r[0], x1: nodes[0].x, y1: y, x2: nodes[1].x, y2: y },
    { id: 'R2', label: `R2=${r[1]}Ω`, value: r[1], x1: nodes[1].x, y1: y, x2: nodes[2].x, y2: y },
    { id: 'R3', label: `R3=${r[2]}Ω`, value: r[2], x1: nodes[2].x, y1: y, x2: nodes[3].x, y2: y }
  ];
  const bottomY = y + 100;
  const wires: string[][] = [
    ['D', 'D2'], ['A2', 'A']  // Source makes the D2->A2 connection
  ];
  const extraNodes: CircuitNode[] = [
    { id: 'D2', x: nodes[3].x, y: bottomY },
    { id: 'A2', x: nodes[0].x, y: bottomY }
  ];
  const source: CircuitSource = { label: `U=${U}V`, value: U, x1: nodes[0].x, y1: bottomY, x2: nodes[3].x, y2: bottomY };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: nodes[0].x, y },
    { id: 'B', label: 'B', x: nodes[1].x, y },
    { id: 'C', label: 'C', x: nodes[2].x, y },
    { id: 'D', label: 'D', x: nodes[3].x, y }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'Re', prompt: 'Mekkora az áramkör eredő ellenállása (A és D pont között)?', answer: round(Re), unit: 'Ω', tolerance: 0.05 * Re + 0.05,
      explanation: `Soros kapcsolás: Re = R1+R2+R3 = ${r[0]}+${r[1]}+${r[2]} = ${round(Re)} Ω.` },
    { key: 'I', prompt: 'Mekkora áram folyik az áramkörben?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `I = U/Re = ${U}/${round(Re)} = ${round(I)} A. Soros körben minden ellenálláson ugyanez az áram folyik.` },
    { key: 'U_BC', prompt: 'Mekkora feszültség esik R2-n (B és C pont között)?', answer: round(Uk[1]), unit: 'V', tolerance: 0.05 * Uk[1] + 0.05,
      explanation: `U2 = I·R2 = ${round(I)}·${r[1]} = ${round(Uk[1])} V.` },
    { key: 'U_AB', prompt: 'Mekkora feszültség esik R1-en (A és B pont között)?', answer: round(Uk[0]), unit: 'V', tolerance: 0.05 * Uk[0] + 0.05,
      explanation: `U1 = I·R1 = ${round(I)}·${r[0]} = ${round(Uk[0])} V.` }
  ];

  return {
    title: 'Soros kapcsolás',
    description: `Három ellenállás (R1, R2, R3) sorba kötve, U=${U}V feszültségű generátorra kapcsolva.`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 400, h: 200 },
    questions
  };
}

function parallelTopology(): Omit<Circuit, 'id' | 'typeId'> {
  const U = randU();
  const r = [randR(), randR()];
  const Re = (r[0] * r[1]) / (r[0] + r[1]);
  const I = U / Re;
  const I1 = U / r[0];
  const I2 = U / r[1];

  // Layout: horizontal resistors with vertical offset, source at bottom
  const y = 90; // middle height
  const leftX = 80, rightX = 280;
  const topY = y - 40, botY = y + 40;
  const bottomY = botY + 60;

  const nodes: CircuitNode[] = [
    { id: 'A', x: leftX, y },
    { id: 'B', x: rightX, y }
  ];

  // Horizontal resistors with vertical offset
  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r[0]}Ω`, value: r[0], x1: leftX + 30, y1: topY, x2: rightX - 30, y2: topY },
    { id: 'R2', label: `R2=${r[1]}Ω`, value: r[1], x1: leftX + 30, y1: botY, x2: rightX - 30, y2: botY }
  ];

  const wires: string[][] = [
    // Left junction A branches to resistor starts
    ['A', 'Atop'], ['Atop', 'R1s'],
    ['A', 'Abot'], ['Abot', 'R2s'],
    // Right junction B collects from resistor ends
    ['R1e', 'Btop'], ['Btop', 'B'],
    ['R2e', 'Bbot'], ['Bbot', 'B'],
    // Close circuit: A down to source left, B down to source right
    ['A', 'Abottom'],
    ['B', 'Bbottom']
  ];

  const extraNodes: CircuitNode[] = [
    { id: 'Atop', x: leftX, y: topY },
    { id: 'Abot', x: leftX, y: botY },
    { id: 'R1s', x: leftX + 30, y: topY },
    { id: 'R1e', x: rightX - 30, y: topY },
    { id: 'Btop', x: rightX, y: topY },
    { id: 'Bbot', x: rightX, y: botY },
    { id: 'R2s', x: leftX + 30, y: botY },
    { id: 'R2e', x: rightX - 30, y: botY },
    { id: 'Abottom', x: leftX, y: bottomY },
    { id: 'Bbottom', x: rightX, y: bottomY }
  ];

  const source: CircuitSource = { label: `U=${U}V`, value: U, x1: leftX, y1: bottomY, x2: rightX, y2: bottomY };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: leftX, y, labelDx: 15, labelDy: 5, labelAnchor: 'middle' },
    { id: 'B', label: 'B', x: rightX, y, labelDx: 15, labelDy: 5, labelAnchor: 'middle' }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'Re', prompt: 'Mekkora az A-B pontok közötti eredő ellenállás?', answer: round(Re), unit: 'Ω', tolerance: 0.05 * Re + 0.05,
      explanation: `Párhuzamos eredő: R = R1·R2/(R1+R2) = ${r[0]}·${r[1]}/${r[0] + r[1]} = ${round(Re)} Ω.` },
    { key: 'I1', prompt: 'Mekkora áram folyik R1 ágán?', answer: round(I1), unit: 'A', tolerance: 0.05 * I1 + 0.01,
      explanation: `Párhuzamos ágakon a feszültség azonos (U=${U}V): I1 = U/R1 = ${U}/${r[0]} = ${round(I1)} A.` },
    { key: 'I2', prompt: 'Mekkora áram folyik R2 ágán?', answer: round(I2), unit: 'A', tolerance: 0.05 * I2 + 0.01,
      explanation: `I2 = U/R2 = ${U}/${r[1]} = ${round(I2)} A.` },
    { key: 'I', prompt: 'Mekkora a főági (teljes, A-ból kilépő) áram?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `Kirchhoff I. törvénye szerint I = I1+I2 = ${round(I1)}+${round(I2)} = ${round(I)} A (ellenőrzés: U/Re = ${U}/${round(Re)} = ${round(I)} A).` }
  ];

  return {
    title: 'Párhuzamos kapcsolás',
    description: `Két ellenállás (R1, R2) párhuzamosan kötve, U=${U}V feszültségű generátorra kapcsolva.`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 360, h: 240 },
    questions
  };
}

function mixedTopology(): Omit<Circuit, 'id' | 'typeId'> {
  // R1 in series, (R2 parallel R3) - classic mixed connection
  const U = randU();
  const r1 = randR();
  const r2 = randR();
  const r3 = randR();
  const Rp = (r2 * r3) / (r2 + r3);
  const Re = r1 + Rp;
  const I = U / Re;
  const U1 = I * r1;
  const Up = I * Rp; // voltage on parallel branch (B-C)
  const I2 = Up / r2;
  const I3 = Up / r3;

  const y = 60;
  const x0 = 40, xA = x0, xB = x0 + 110;
  const nodes: CircuitNode[] = [
    { id: 'A', x: xA, y },
    { id: 'B', x: xB, y },
  ];
  const rightX = xB + 130;
  const topY = y - 35, botY = y + 35;

  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r1}Ω`, value: r1, x1: xA + 15, y1: y, x2: xB - 15, y2: y },
    { id: 'R2', label: `R2=${r2}Ω`, value: r2, x1: xB + 30, y1: topY, x2: rightX - 30, y2: topY },
    { id: 'R3', label: `R3=${r3}Ω`, value: r3, x1: xB + 30, y1: botY, x2: rightX - 30, y2: botY }
  ];
  const wires: string[][] = [
    ['A', 'R1s'], ['R1e', 'B'],  // Connect A to R1 and R1 to B
    ['B', 'Btop'], ['Btop', 'R2s'],
    ['B', 'Bbot'], ['Bbot', 'R3s'],
    ['R2e', 'Ctop'], ['Ctop', 'C'],
    ['R3e', 'Cbot'], ['Cbot', 'C'],
    ['C', 'Cright'], ['Cright', 'Cs'], ['As', 'A']  // Source makes the Cs->As connection
  ];
  const extraNodes: CircuitNode[] = [
    { id: 'R1s', x: xA + 15, y },  // R1 start point
    { id: 'R1e', x: xB - 15, y },  // R1 end point
    { id: 'Btop', x: xB, y: topY }, { id: 'R2s', x: xB + 30, y: topY },
    { id: 'Bbot', x: xB, y: botY }, { id: 'R3s', x: xB + 30, y: botY },
    { id: 'Ctop', x: rightX, y: topY }, { id: 'R2e', x: rightX - 30, y: topY },
    { id: 'Cbot', x: rightX, y: botY }, { id: 'R3e', x: rightX - 30, y: botY },
    { id: 'C', x: rightX, y },
    { id: 'Cright', x: rightX + 40, y },  // New node for right-then-down routing
    { id: 'Cs', x: rightX + 40, y: y + 90 },
    { id: 'As', x: xA, y: y + 90 }
  ];
  const source: CircuitSource = { label: `U=${U}V`, value: U, x1: xA, y1: y + 90, x2: rightX + 40, y2: y + 90 };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: xA, y, labelDy: -14, labelAnchor: 'middle' },
    { id: 'B', label: 'B', x: xB, y, labelDx: 15, labelDy: 5, labelAnchor: 'middle' },
    { id: 'C', label: 'C', x: rightX, y, labelDx: 15, labelDy: -14, labelAnchor: 'middle' }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'Rp', prompt: 'Mekkora R2 és R3 párhuzamos eredője (B-C pontok között)?', answer: round(Rp), unit: 'Ω', tolerance: 0.05 * Rp + 0.05,
      explanation: `R2×R3 = ${r2}·${r3}/(${r2}+${r3}) = ${round(Rp)} Ω.` },
    { key: 'Re', prompt: 'Mekkora a teljes eredő ellenállás (A-C pontok között)?', answer: round(Re), unit: 'Ω', tolerance: 0.05 * Re + 0.05,
      explanation: `Re = R1 + (R2×R3) = ${r1} + ${round(Rp)} = ${round(Re)} Ω.` },
    { key: 'I', prompt: 'Mekkora a főági áram (ami R1-en is folyik)?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `I = U/Re = ${U}/${round(Re)} = ${round(I)} A.` },
    { key: 'U_BC', prompt: 'Mekkora feszültség esik a B-C pontok között (a párhuzamos ágakon)?', answer: round(Up), unit: 'V', tolerance: 0.05 * Up + 0.05,
      explanation: `Ubc = I·Rp = ${round(I)}·${round(Rp)} = ${round(Up)} V.` },
    { key: 'I2', prompt: 'Mekkora áram folyik R2-n?', answer: round(I2), unit: 'A', tolerance: 0.05 * I2 + 0.01,
      explanation: `I2 = Ubc/R2 = ${round(Up)}/${r2} = ${round(I2)} A.` }
  ];

  return {
    title: 'Vegyes kapcsolás',
    description: `R1 sorosan, majd R2 és R3 párhuzamosan az előzővel, U=${U}V feszültségű generátorra kapcsolva.`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 420, h: 220 },
    questions
  };
}

function dividerTopology(): Omit<Circuit, 'id' | 'typeId'> {
  const U = randU();
  const r1 = randR();
  const r2 = randR();
  const Uki = U * r2 / (r1 + r2);
  const I = U / (r1 + r2);

  const x0 = 260, y0 = 30, y1 = 90, y2 = 150;
  const nodes: CircuitNode[] = [
    { id: 'A', x: x0, y: y0 },
    { id: 'B', x: x0, y: y1 },
    { id: 'C', x: x0, y: y2 }
  ];
  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r1}Ω`, value: r1, x1: x0, y1: y0 + 10, x2: x0, y2: y1 - 10, vertical: true },
    { id: 'R2', label: `R2=${r2}Ω`, value: r2, x1: x0, y1: y1 + 10, x2: x0, y2: y2 - 10, vertical: true }
  ];
  const outX = x0 + 140;
  const wires: string[][] = [
    ['A', 'R1s'], ['R1e', 'B'], ['B', 'R2s'], ['R2e', 'C'],  // Connect resistors to nodes
    ['B', 'Bout'],
    ['A', 'Aleft'], ['Cleft', 'C']  // Source makes the Aleft->Cleft vertical connection
  ];
  const extraNodes: CircuitNode[] = [
    { id: 'R1s', x: x0, y: y0 + 10 },  // R1 start point
    { id: 'R1e', x: x0, y: y1 - 10 },  // R1 end point
    { id: 'R2s', x: x0, y: y1 + 10 },  // R2 start point
    { id: 'R2e', x: x0, y: y2 - 10 },  // R2 end point
    { id: 'Bout', x: outX, y: y1 },
    { id: 'Aleft', x: x0 - 200, y: y0 },
    { id: 'AleftBot', x: x0 - 200, y: y2 },
    { id: 'Cleft', x: x0 - 200, y: y2 }
  ];
  const source: CircuitSource = { label: `Ube=${U}V`, value: U, x1: x0 - 200, y1: y0, x2: x0 - 200, y2: y2, vertical: true };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: x0, y: y0, labelDy: -12 },
    { id: 'B', label: 'B', x: x0, y: y1, labelDx: -14, labelDy: 4, labelAnchor: 'end' },
    { id: 'C', label: 'C', x: x0, y: y2, labelDy: 18 },
    { id: 'Ki', label: 'Ki', x: outX, y: y1, labelDy: -10 }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'I', prompt: 'Mekkora áram folyik a körben?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `I = Ube/(R1+R2) = ${U}/(${r1}+${r2}) = ${round(I)} A.` },
    { key: 'Uki', prompt: 'Mekkora a kimeneti feszültség (B pont és C pont között, terheletlen osztó)?', answer: round(Uki), unit: 'V', tolerance: 0.05 * Uki + 0.05,
      explanation: `Uki = Ube·R2/(R1+R2) = ${U}·${r2}/(${r1 + r2}) = ${round(Uki)} V.` },
    { key: 'U_AB', prompt: 'Mekkora feszültség esik R1-en (A-B pontok között)?', answer: round(U - Uki), unit: 'V', tolerance: 0.05 * (U - Uki) + 0.05,
      explanation: `U1 = Ube - Uki = ${U} - ${round(Uki)} = ${round(U - Uki)} V.` }
  ];

  return {
    title: 'Feszültségosztó',
    description: `R1 és R2 sorba kötve osztóként, Ube=${U}V bemeneti feszültséggel. A kimenet a B ponton (R1-R2 közös pontja).`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 460, h: 200 },
    questions
  };
}

function parallel3Topology(): Omit<Circuit, 'id' | 'typeId'> {
  const U = randU();
  const r = [randR(), randR(), randR()];
  // 1/Re = 1/R1 + 1/R2 + 1/R3
  const Re = 1 / (1/r[0] + 1/r[1] + 1/r[2]);
  const I = U / Re;
  const I1 = U / r[0];
  const I2 = U / r[1];
  const I3 = U / r[2];

  const y = 110;
  const leftX = 80, rightX = 280;
  const topY = y - 60, midY = y, botY = y + 60;
  const bottomY = botY + 60;

  const nodes: CircuitNode[] = [
    { id: 'A', x: leftX, y },
    { id: 'B', x: rightX, y }
  ];

  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r[0]}Ω`, value: r[0], x1: leftX + 30, y1: topY, x2: rightX - 30, y2: topY },
    { id: 'R2', label: `R2=${r[1]}Ω`, value: r[1], x1: leftX + 30, y1: midY, x2: rightX - 30, y2: midY },
    { id: 'R3', label: `R3=${r[2]}Ω`, value: r[2], x1: leftX + 30, y1: botY, x2: rightX - 30, y2: botY }
  ];

  const wires: string[][] = [
    ['A', 'Atop'], ['Atop', 'R1s'],
    ['A', 'Amid'], ['Amid', 'R2s'],
    ['A', 'Abot'], ['Abot', 'R3s'],
    ['R1e', 'Btop'], ['Btop', 'B'],
    ['R2e', 'Bmid'], ['Bmid', 'B'],
    ['R3e', 'Bbot'], ['Bbot', 'B'],
    ['A', 'Abottom'],
    ['B', 'Bbottom']
  ];

  const extraNodes: CircuitNode[] = [
    { id: 'Atop', x: leftX, y: topY },
    { id: 'Amid', x: leftX, y: midY },
    { id: 'Abot', x: leftX, y: botY },
    { id: 'R1s', x: leftX + 30, y: topY },
    { id: 'R1e', x: rightX - 30, y: topY },
    { id: 'Btop', x: rightX, y: topY },
    { id: 'Bmid', x: rightX, y: midY },
    { id: 'Bbot', x: rightX, y: botY },
    { id: 'R2s', x: leftX + 30, y: midY },
    { id: 'R2e', x: rightX - 30, y: midY },
    { id: 'R3s', x: leftX + 30, y: botY },
    { id: 'R3e', x: rightX - 30, y: botY },
    { id: 'Abottom', x: leftX, y: bottomY },
    { id: 'Bbottom', x: rightX, y: bottomY }
  ];

  const source: CircuitSource = { label: `U=${U}V`, value: U, x1: leftX, y1: bottomY, x2: rightX, y2: bottomY };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: leftX, y, labelDx: -20, labelDy: 5, labelAnchor: 'middle' },
    { id: 'B', label: 'B', x: rightX, y, labelDx: 15, labelDy: 5, labelAnchor: 'middle' }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'Re', prompt: 'Mekkora az A-B pontok közötti eredő ellenállás?', answer: round(Re), unit: 'Ω', tolerance: 0.05 * Re + 0.05,
      explanation: `Három párhuzamos ellenállás: 1/Re = 1/R1 + 1/R2 + 1/R3 = 1/${r[0]} + 1/${r[1]} + 1/${r[2]} = ${round(1/Re, 4)}, így Re = ${round(Re)} Ω.` },
    { key: 'I', prompt: 'Mekkora a főági (teljes) áram?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `I = U/Re = ${U}/${round(Re)} = ${round(I)} A.` },
    { key: 'I1', prompt: 'Mekkora áram folyik R1 ágán?', answer: round(I1), unit: 'A', tolerance: 0.05 * I1 + 0.01,
      explanation: `I1 = U/R1 = ${U}/${r[0]} = ${round(I1)} A.` },
    { key: 'I2', prompt: 'Mekkora áram folyik R2 ágán?', answer: round(I2), unit: 'A', tolerance: 0.05 * I2 + 0.01,
      explanation: `I2 = U/R2 = ${U}/${r[1]} = ${round(I2)} A.` },
    { key: 'I_sum', prompt: 'Ellenőrzésként: mennyi I1+I2+I3?', answer: round(I1 + I2 + I3), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `Kirchhoff I. törvénye: I = I1+I2+I3 = ${round(I1)}+${round(I2)}+${round(I3)} = ${round(I1+I2+I3)} A (ami megegyezik a főági árammal).` }
  ];

  return {
    title: 'Háromágú párhuzamos kapcsolás',
    description: `Három ellenállás (R1, R2, R3) párhuzamosan kötve, U=${U}V feszültségű generátorra kapcsolva.`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 360, h: 290 },
    questions
  };
}

function doubleMixedTopology(): Omit<Circuit, 'id' | 'typeId'> {
  // (R1||R2) in series with (R3||R4)
  const U = randU();
  const r1 = randR();
  const r2 = randR();
  const r3 = randR();
  const r4 = randR();
  const Rp1 = (r1 * r2) / (r1 + r2);
  const Rp2 = (r3 * r4) / (r3 + r4);
  const Re = Rp1 + Rp2;
  const I = U / Re;
  const U1 = I * Rp1;  // voltage on first parallel group
  const U2 = I * Rp2;  // voltage on second parallel group
  const I1 = U1 / r1;
  const I2 = U1 / r2;
  const I3 = U2 / r3;
  const I4 = U2 / r4;

  const y = 70;
  const xA = 40, xB = 180, xC = 360;
  const topY = y - 35, botY = y + 35;

  const nodes: CircuitNode[] = [
    { id: 'A', x: xA, y },
    { id: 'B', x: xB, y },
    { id: 'C', x: xC, y }
  ];

  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r1}Ω`, value: r1, x1: xA + 30, y1: topY, x2: xB - 30, y2: topY },
    { id: 'R2', label: `R2=${r2}Ω`, value: r2, x1: xA + 30, y1: botY, x2: xB - 30, y2: botY },
    { id: 'R3', label: `R3=${r3}Ω`, value: r3, x1: xB + 30, y1: topY, x2: xC - 30, y2: topY },
    { id: 'R4', label: `R4=${r4}Ω`, value: r4, x1: xB + 30, y1: botY, x2: xC - 30, y2: botY }
  ];

  const wires: string[][] = [
    ['A', 'Atop'], ['Atop', 'R1s'],
    ['A', 'Abot'], ['Abot', 'R2s'],
    ['R1e', 'Btop'], ['Btop', 'B'],
    ['R2e', 'Bbot'], ['Bbot', 'B'],
    ['B', 'Btop2'], ['Btop2', 'R3s'],
    ['B', 'Bbot2'], ['Bbot2', 'R4s'],
    ['R3e', 'Ctop'], ['Ctop', 'C'],
    ['R4e', 'Cbot'], ['Cbot', 'C'],
    ['C', 'Cright'], ['Cright', 'Cs'], ['As', 'A']
  ];

  const extraNodes: CircuitNode[] = [
    { id: 'Atop', x: xA, y: topY }, { id: 'R1s', x: xA + 30, y: topY },
    { id: 'Abot', x: xA, y: botY }, { id: 'R2s', x: xA + 30, y: botY },
    { id: 'Btop', x: xB, y: topY }, { id: 'R1e', x: xB - 30, y: topY },
    { id: 'Bbot', x: xB, y: botY }, { id: 'R2e', x: xB - 30, y: botY },
    { id: 'Btop2', x: xB, y: topY }, { id: 'R3s', x: xB + 30, y: topY },
    { id: 'Bbot2', x: xB, y: botY }, { id: 'R4s', x: xB + 30, y: botY },
    { id: 'Ctop', x: xC, y: topY }, { id: 'R3e', x: xC - 30, y: topY },
    { id: 'Cbot', x: xC, y: botY }, { id: 'R4e', x: xC - 30, y: botY },
    { id: 'Cright', x: xC + 40, y },
    { id: 'Cs', x: xC + 40, y: y + 90 },
    { id: 'As', x: xA, y: y + 90 }
  ];

  const source: CircuitSource = { label: `U=${U}V`, value: U, x1: xA, y1: y + 90, x2: xC + 40, y2: y + 90 };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: xA, y, labelDx: -15, labelDy: 5, labelAnchor: 'middle' },
    { id: 'B', label: 'B', x: xB, y, labelDx: 15, labelDy: 5, labelAnchor: 'middle' },
    { id: 'C', label: 'C', x: xC, y, labelDx: 15, labelDy: -14, labelAnchor: 'middle' }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'Rp1', prompt: 'Mekkora R1 és R2 párhuzamos eredője (A-B pontok között)?', answer: round(Rp1), unit: 'Ω', tolerance: 0.05 * Rp1 + 0.05,
      explanation: `R1||R2 = ${r1}·${r2}/(${r1}+${r2}) = ${round(Rp1)} Ω.` },
    { key: 'Rp2', prompt: 'Mekkora R3 és R4 párhuzamos eredője (B-C pontok között)?', answer: round(Rp2), unit: 'Ω', tolerance: 0.05 * Rp2 + 0.05,
      explanation: `R3||R4 = ${r3}·${r4}/(${r3}+${r4}) = ${round(Rp2)} Ω.` },
    { key: 'Re', prompt: 'Mekkora a teljes eredő ellenállás?', answer: round(Re), unit: 'Ω', tolerance: 0.05 * Re + 0.05,
      explanation: `A két párhuzamos csoport sorosan van kapcsolva: Re = Rp1 + Rp2 = ${round(Rp1)} + ${round(Rp2)} = ${round(Re)} Ω.` },
    { key: 'I', prompt: 'Mekkora a főági áram?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `I = U/Re = ${U}/${round(Re)} = ${round(I)} A.` },
    { key: 'U_AB', prompt: 'Mekkora feszültség esik az A-B pontok között?', answer: round(U1), unit: 'V', tolerance: 0.05 * U1 + 0.05,
      explanation: `Uab = I·Rp1 = ${round(I)}·${round(Rp1)} = ${round(U1)} V.` }
  ];

  return {
    title: 'Kettős vegyes kapcsolás',
    description: `Két párhuzamos csoport (R1||R2 és R3||R4) sorosan kapcsolva, U=${U}V feszültségű generátorra.`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 440, h: 230 },
    questions
  };
}

function shortCircuitTrapTopology(): Omit<Circuit, 'id' | 'typeId'> {
  // R1 in series, then R2 is in parallel with a short circuit (wire), so R2 is bypassed
  // Then R3 in series. The trap: R2 appears in the diagram but doesn't affect the total resistance!
  const U = randU();
  const r1 = randR();
  const r2 = randR();  // This will be short-circuited
  const r3 = randR();
  const Re = r1 + r3;  // R2 is bypassed by short circuit
  const I = U / Re;
  const U1 = I * r1;
  const U3 = I * r3;
  const U2 = 0;  // No voltage across R2 due to short circuit
  const I2 = 0;  // No current through R2

  const y = 60;
  const xA = 40, xB = 150, xC = 280, xD = 390;
  const yC = y - 10;  // C moved up 10 units
  const topY = y - 35, botY = y + 35;
  const bottomY = y + 90;

  const nodes: CircuitNode[] = [
    { id: 'A', x: xA, y },
    { id: 'B', x: xB, y },
    { id: 'C', x: xC, y: yC },
    { id: 'D', x: xD, y }
  ];

  const resistors: CircuitResistor[] = [
    { id: 'R1', label: `R1=${r1}Ω`, value: r1, x1: xA + 15, y1: y, x2: xB - 15, y2: y },
    { id: 'R2', label: `R2=${r2}Ω`, value: r2, x1: xB + 30, y1: topY, x2: xC - 30, y2: topY },
    { id: 'R3', label: `R3=${r3}Ω`, value: r3, x1: xC + 15, y1: y, x2: xD - 15, y2: y }
  ];

  // Critical: Direct wire from B to C at the bottom (short circuit)
  const wires: string[][] = [
    ['A', 'R1s'], ['R1e', 'B'],
    ['B', 'Btop'], ['Btop', 'R2s'],
    ['B', 'Bbot'],  // Short circuit path starts
    ['Bbot', 'Cbot'],  // Direct wire - short circuit!
    ['Cbot', 'C'],  // Short circuit path ends
    ['R2e', 'Ctop'], ['Ctop', 'C'],
    ['C', 'Cdown'], ['Cdown', 'Cbottom'], ['Cbottom', 'R3s'], ['R3e', 'D'],  // C goes down to main line
    ['D', 'Dbot'], ['As', 'A']
  ];

  const extraNodes: CircuitNode[] = [
    { id: 'R1s', x: xA + 15, y },
    { id: 'R1e', x: xB - 15, y },
    { id: 'Btop', x: xB, y: topY }, { id: 'R2s', x: xB + 30, y: topY },
    { id: 'Bbot', x: xB, y: botY },
    { id: 'Ctop', x: xC, y: topY }, { id: 'R2e', x: xC - 30, y: topY },
    { id: 'Cbot', x: xC, y: botY },
    { id: 'Cdown', x: xC, y },  // Vertical line from C to main line
    { id: 'Cbottom', x: xC, y },  // Point on main line
    { id: 'R3s', x: xC + 15, y },
    { id: 'R3e', x: xD - 15, y },
    { id: 'Dbot', x: xD, y: bottomY },
    { id: 'As', x: xA, y: bottomY }
  ];

  const source: CircuitSource = { label: `U=${U}V`, value: U, x1: xA, y1: bottomY, x2: xD, y2: bottomY };

  const points: CircuitPoint[] = [
    { id: 'A', label: 'A', x: xA, y, labelDy: -14, labelAnchor: 'middle' },
    { id: 'B', label: 'B', x: xB, y, labelDx: 15, labelDy: 5, labelAnchor: 'middle' },
    { id: 'C', label: 'C', x: xC, y: yC, labelDx: 15, labelDy: 5, labelAnchor: 'middle' },
    { id: 'D', label: 'D', x: xD, y, labelDy: -14, labelAnchor: 'middle' }
  ];

  const questions: CircuitQuestion[] = [
    { key: 'Re', prompt: 'Mekkora az eredő ellenállás az áramkörben?', answer: round(Re), unit: 'Ω', tolerance: 0.05 * Re + 0.05,
      explanation: `FIGYELEM: R2 rövidzárolt! A B-C pontok között egy vezeték párhuzamosan van R2-vel, így az áram teljes egészében a vezetéken folyik át (0Ω ellenállás). Ezért Re = R1 + R3 = ${r1} + ${r3} = ${round(Re)} Ω.` },
    { key: 'I', prompt: 'Mekkora a főági áram?', answer: round(I), unit: 'A', tolerance: 0.05 * I + 0.01,
      explanation: `I = U/Re = ${U}/${round(Re)} = ${round(I)} A.` },
    { key: 'U_BC', prompt: 'Mekkora feszültség van a B-C pontok között?', answer: round(U2), unit: 'V', tolerance: 0.05,
      explanation: `A B-C pontokat vezeték köti össze (rövidzár), így a feszültség 0V! Ubc = ${round(U2)} V.` },
    { key: 'I_R2', prompt: 'Mekkora áram folyik R2-n?', answer: round(I2), unit: 'A', tolerance: 0.01,
      explanation: `Mivel R2 rövidzárolt (párhuzamosan van vele egy vezeték), rajta nem folyik áram: I2 = ${round(I2)} A.` },
    { key: 'U_AB', prompt: 'Mekkora feszültség esik R1-en (A-B pontok között)?', answer: round(U1), unit: 'V', tolerance: 0.05 * U1 + 0.05,
      explanation: `U1 = I·R1 = ${round(I)}·${r1} = ${round(U1)} V.` }
  ];

  return {
    title: 'Soros-párhuzamos kapcsolás',
    description: `R1 sorosan, R2 párhuzamos ágon, R3 sorosan. U=${U}V.`,
    nodes: [...nodes, ...extraNodes],
    wires,
    resistors,
    source,
    points,
    viewBox: { w: 430, h: 220 },
    questions
  };
}

export const TOPOLOGY_TYPES: TopologyType[] = [
  { id: 'series', title: 'Soros kapcsolás', generate: seriesTopology },
  { id: 'parallel', title: 'Párhuzamos kapcsolás', generate: parallelTopology },
  { id: 'parallel3', title: 'Háromágú párhuzamos', generate: parallel3Topology },
  { id: 'mixed', title: 'Vegyes kapcsolás', generate: mixedTopology },
  { id: 'double-mixed', title: 'Kettős vegyes', generate: doubleMixedTopology },
  { id: 'short-circuit', title: 'Soros-párhuzamos', generate: shortCircuitTrapTopology },
  { id: 'divider', title: 'Feszültségosztó', generate: dividerTopology }
];

export function generateCircuit(typeId?: string): Circuit {
  const type = typeId && typeId !== 'all'
    ? TOPOLOGY_TYPES.find(t => t.id === typeId)
    : randChoice(TOPOLOGY_TYPES);

  if (!type) {
    throw new Error(`Unknown circuit type: ${typeId}`);
  }

  const circuit = type.generate();
  const fullCircuit: Circuit = {
    ...circuit,
    typeId: type.id,
    id: `${type.id}-${Date.now()}-${Math.floor(Math.random() * 100000)}`
  };

  return fullCircuit;
}
