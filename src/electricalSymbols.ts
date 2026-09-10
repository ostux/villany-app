// EU/IEC Standard Electrical Symbols Library
// For electrician training in Hungary

export interface ElectricalSymbol {
  id: string
  name: string // English name
  label: string // Hungarian label
  category: string
  explanation: string // Hungarian explanation
  svg: {
    viewBox: string
    paths: string[] // SVG path data
    width?: number
    height?: number
  }
}

export const SYMBOL_CATEGORIES = [
  { id: 'basic', label: 'Alapvető elemek' },
  { id: 'sources', label: 'Feszültség- és áramforrások' },
  { id: 'passive', label: 'Passzív alkatrészek' },
  { id: 'switches', label: 'Kapcsolók' },
  { id: 'protection', label: 'Védőelemek' },
  { id: 'measurement', label: 'Mérőműszerek' },
  { id: 'motors', label: 'Motorok és generátorok' },
  { id: 'transformers', label: 'Transzformátorok' },
  { id: 'semiconductors', label: 'Félvezető eszközök' },
  { id: 'connections', label: 'Csatlakozások' }
] as const

export const ELECTRICAL_SYMBOLS: ElectricalSymbol[] = [
  // ALAPVETŐ ELEMEK
  {
    id: 'resistor-eu',
    name: 'Resistor (EU/IEC)',
    label: 'Ellenállás',
    category: 'passive',
    explanation: 'Ellenállás EU/IEC szabvány szerint (téglalap alakú szimbólum). Az áramot korlátozza, feszültséget oszt.',
    svg: {
      viewBox: '0 0 100 40',
      paths: [
        'M 0,20 L 25,20', // lead wire left
        'M 25,10 L 75,10 L 75,30 L 25,30 Z', // rectangle body
        'M 75,20 L 100,20' // lead wire right
      ]
    }
  },
  {
    id: 'variable-resistor-eu',
    name: 'Variable Resistor (EU/IEC)',
    label: 'Változtatható ellenállás (potenciométer)',
    category: 'passive',
    explanation: 'Változtatható értékű ellenállás. Feszültség- vagy áramszabályozásra használják.',
    svg: {
      viewBox: '0 0 100 50',
      paths: [
        'M 0,25 L 25,25',
        'M 25,15 L 75,15 L 75,35 L 25,35 Z',
        'M 75,25 L 100,25',
        'M 50,35 L 50,45 L 60,50', // arrow for variable
        'M 60,50 L 55,47 M 60,50 L 57,52'
      ]
    }
  },
  {
    id: 'capacitor',
    name: 'Capacitor',
    label: 'Kondenzátor',
    category: 'passive',
    explanation: 'Kondenzátor (nincs polaritás). Elektromos töltést tárol, váltakozó áramot átereszt, egyenáramot blokkolja.',
    svg: {
      viewBox: '0 0 80 50',
      paths: [
        'M 0,25 L 35,25',
        'M 35,10 L 35,40', // left plate
        'M 45,10 L 45,40', // right plate
        'M 45,25 L 80,25'
      ]
    }
  },
  {
    id: 'capacitor-polarized',
    name: 'Polarized Capacitor',
    label: 'Polarizált kondenzátor (elektrolit)',
    category: 'passive',
    explanation: 'Elektrolit kondenzátor (van polaritása). Nagyobb kapacitású, csak egyenáramú áramkörökben, helyes pólussal.',
    svg: {
      viewBox: '0 0 80 50',
      paths: [
        'M 0,25 L 35,25',
        'M 35,10 L 35,40',
        'M 45,15 A 15,15 0 0,1 45,35 Z', // curved plate
        'M 45,25 L 80,25',
        'M 10,15 L 20,15 M 15,10 L 15,20' // plus sign
      ]
    }
  },
  {
    id: 'inductor',
    name: 'Inductor',
    label: 'Tekercs (induktivitás)',
    category: 'passive',
    explanation: 'Tekercs vagy induktivitás. Mágneses energiát tárol, áramváltozást gátolja.',
    svg: {
      viewBox: '0 0 120 40',
      paths: [
        'M 0,20 L 15,20',
        'M 15,20 A 10,10 0 0,1 35,20',
        'M 35,20 A 10,10 0 0,1 55,20',
        'M 55,20 A 10,10 0 0,1 75,20',
        'M 75,20 A 10,10 0 0,1 95,20',
        'M 95,20 L 120,20'
      ]
    }
  },

  // FESZÜLTSÉG- ÉS ÁRAMFORRÁSOK
  {
    id: 'dc-voltage-source',
    name: 'DC Voltage Source',
    label: 'Egyenfeszültség-forrás',
    category: 'sources',
    explanation: 'Egyenfeszültség-forrás (pl. elem, akkumulátor, tápegység). Állandó feszültséget biztosít.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,25',
        'M 30,30 L 50,30', // short line (negative)
        'M 25,40 L 55,40', // long line (positive)
        'M 40,40 L 40,80',
        'M 30,15 L 40,15 M 35,10 L 35,20' // plus sign at top
      ]
    }
  },
  {
    id: 'ac-voltage-source',
    name: 'AC Voltage Source',
    label: 'Váltakozó feszültségforrás',
    category: 'sources',
    explanation: 'Váltakozó feszültségforrás (generátor, hálózati feszültség). Szinuszos feszültséget biztosít.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,20',
        'M 40,20 A 20,20 0 0,1 40,60 A 20,20 0 0,1 40,20 Z', // circle centered at (40,40)
        'M 25,40 Q 32,30 40,40 T 55,40', // sine wave inside
        'M 40,60 L 40,80'
      ]
    }
  },
  {
    id: 'battery',
    name: 'Battery',
    label: 'Telep/Akkumulátor',
    category: 'sources',
    explanation: 'Telep vagy akkumulátor (több cella). Kémiai energiából állít elő egyenfeszültséget.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,20',
        'M 30,25 L 50,25',
        'M 35,30 L 45,30',
        'M 30,35 L 50,35',
        'M 35,40 L 45,40',
        'M 40,40 L 40,80'
      ]
    }
  },
  {
    id: 'ground',
    name: 'Ground/Earth',
    label: 'Földelés',
    category: 'connections',
    explanation: 'Földelés szimbólum. A referenciapont (nulla potenciál) vagy védőföld jelölése.',
    svg: {
      viewBox: '0 0 60 60',
      paths: [
        'M 30,0 L 30,30',
        'M 10,30 L 50,30',
        'M 15,40 L 45,40',
        'M 20,50 L 40,50'
      ]
    }
  },

  // KAPCSOLÓK
  {
    id: 'switch-spst',
    name: 'SPST Switch',
    label: 'Egyszerű kapcsoló (SPST)',
    category: 'switches',
    explanation: 'Egypólusú, egyállású kapcsoló (SPST). Egy áramkört nyit vagy zár.',
    svg: {
      viewBox: '0 0 100 40',
      paths: [
        'M 0,20 L 20,20',
        'M 20,20 L 75,5', // switch lever (open position)
        'M 75,18 A 2,2 0 0,1 75,22 A 2,2 0 0,1 75,18 Z', // contact point centered at (75,20)
        'M 80,20 L 100,20'
      ]
    }
  },
  {
    id: 'switch-spdt',
    name: 'SPDT Switch',
    label: 'Váltókapcsoló (SPDT)',
    category: 'switches',
    explanation: 'Egypólusú, kétállású váltókapcsoló. Egy bemenetet két kimenet között vált.',
    svg: {
      viewBox: '0 0 100 60',
      paths: [
        'M 0,30 L 20,30',
        'M 20,30 L 70,10',
        'M 75,13 A 2,2 0 0,1 75,17 A 2,2 0 0,1 75,13 Z', // contact point centered at (75,15)
        'M 80,15 L 100,15',
        'M 75,43 A 2,2 0 0,1 75,47 A 2,2 0 0,1 75,43 Z', // contact point centered at (75,45)
        'M 80,45 L 100,45'
      ]
    }
  },
  {
    id: 'pushbutton-no',
    name: 'Pushbutton (NO)',
    label: 'Nyomógomb (nyitott)',
    category: 'switches',
    explanation: 'Nyomógomb, alapállapotban nyitott (NO - Normally Open). Nyomásra zár.',
    svg: {
      viewBox: '0 0 100 50',
      paths: [
        'M 0,30 L 20,30',
        'M 20,30 L 75,15',
        'M 75,28 A 2,2 0 0,1 75,32 A 2,2 0 0,1 75,28 Z', // contact point centered at (75,30)
        'M 80,30 L 100,30',
        'M 50,0 L 50,10', // pushbutton line
        'M 40,0 L 60,0' // pushbutton top
      ]
    }
  },
  {
    id: 'pushbutton-nc',
    name: 'Pushbutton (NC)',
    label: 'Nyomógomb (zárt)',
    category: 'switches',
    explanation: 'Nyomógomb, alapállapotban zárt (NC - Normally Closed). Nyomásra nyit.',
    svg: {
      viewBox: '0 0 100 50',
      paths: [
        'M 0,30 L 20,30',
        'M 20,30 L 80,30', // closed
        'M 80,30 L 100,30',
        'M 50,0 L 50,10',
        'M 40,0 L 60,0',
        'M 75,25 L 85,35' // diagonal line indicating NC
      ]
    }
  },

  // VÉDŐELEMEK
  {
    id: 'fuse',
    name: 'Fuse',
    label: 'Biztosíték',
    category: 'protection',
    explanation: 'Biztosíték. Túláram esetén megszakad, védi az áramkört.',
    svg: {
      viewBox: '0 0 100 40',
      paths: [
        'M 0,20 L 25,20',
        'M 25,10 L 75,10 L 75,30 L 25,30 Z',
        'M 75,20 L 100,20',
        'M 50,10 L 50,30' // center line
      ]
    }
  },
  {
    id: 'circuit-breaker',
    name: 'Circuit Breaker',
    label: 'Kismegszakító',
    category: 'protection',
    explanation: 'Kismegszakító (MCB). Túláram vagy rövidzárlat esetén kiold, újrahasználható.',
    svg: {
      viewBox: '0 0 100 60',
      paths: [
        'M 0,30 L 20,30',
        'M 20,10 L 80,10 L 80,50 L 20,50 Z',
        'M 80,30 L 100,30',
        'M 35,20 L 35,40', // internal lines
        'M 50,20 L 50,40',
        'M 65,20 L 65,40'
      ]
    }
  },
  {
    id: 'rcd',
    name: 'RCD/GFCI',
    label: 'Áram-védőkapcsoló (RCD)',
    category: 'protection',
    explanation: 'Áram-védőkapcsoló (RCD/FI-relé). Földzárlat esetén kiold, áramütés ellen véd.',
    svg: {
      viewBox: '0 0 100 70',
      paths: [
        'M 0,35 L 20,35',
        'M 20,10 L 80,10 L 80,60 L 20,60 Z',
        'M 80,35 L 100,35',
        'M 30,25 L 70,25', // test button representation
        'M 30,45 L 70,45',
        'M 50,25 L 50,45',
        'M 42,32 L 58,32' // FI symbol
      ]
    }
  },

  // MÉRŐMŰSZEREK
  {
    id: 'voltmeter',
    name: 'Voltmeter',
    label: 'Voltmérő',
    category: 'measurement',
    explanation: 'Voltmérő (feszültségmérő). A feszültséget méri, párhuzamosan kötik.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,15',
        'M 40,15 A 25,25 0 0,1 40,65 A 25,25 0 0,1 40,15 Z', // circle centered at (40,40)
        'M 40,65 L 40,80',
        // V letter inside
        'M 30,30 L 40,50 L 50,30'
      ]
    }
  },
  {
    id: 'ammeter',
    name: 'Ammeter',
    label: 'Ampermérő',
    category: 'measurement',
    explanation: 'Ampermérő (áramerősség-mérő). Az áramerősséget méri, sorosan kötik.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,15',
        'M 40,15 A 25,25 0 0,1 40,65 A 25,25 0 0,1 40,15 Z', // circle centered at (40,40)
        'M 40,65 L 40,80',
        // A letter inside
        'M 30,50 L 40,30 L 50,50 M 33,45 L 47,45'
      ]
    }
  },
  {
    id: 'wattmeter',
    name: 'Wattmeter',
    label: 'Wattmérő',
    category: 'measurement',
    explanation: 'Wattmérő (teljesítménymérő). Az elektromos teljesítményt méri.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,15',
        'M 40,15 A 25,25 0 0,1 40,65 A 25,25 0 0,1 40,15 Z', // circle centered at (40,40)
        'M 40,65 L 40,80',
        // W letter inside
        'M 25,30 L 30,50 L 40,35 L 50,50 L 55,30'
      ]
    }
  },

  // MOTOROK ÉS GENERÁTOROK
  {
    id: 'motor-3phase',
    name: '3-Phase Motor',
    label: 'Háromfázisú motor',
    category: 'motors',
    explanation: 'Háromfázisú aszinkron motor. Ipari környezetben a leggyakrabban használt motor.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,10 A 30,30 0 0,1 40,70 A 30,30 0 0,1 40,10 Z', // circle centered at (40,40)
        'M 40,10 L 40,0',
        'M 40,70 L 40,80',
        'M 10,40 L 0,40',
        // M and 3~ inside
        'M 25,35 L 25,50 M 25,35 L 35,45 L 35,35 L 35,50',
        'M 45,38 Q 50,35 55,38 Q 50,41 55,44 Q 50,47 55,50'
      ]
    }
  },
  {
    id: 'motor-dc',
    name: 'DC Motor',
    label: 'Egyenáramú motor',
    category: 'motors',
    explanation: 'Egyenáramú motor. Egyenfeszültségről működik, jó fordulatszám-szabályozás.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,10 A 30,30 0 0,1 40,70 A 30,30 0 0,1 40,10 Z', // circle centered at (40,40)
        'M 40,10 L 40,0',
        'M 40,70 L 40,80',
        // M inside
        'M 25,35 L 25,50 M 25,35 L 35,45 L 45,35 L 45,50',
        'M 50,42 L 50,43' // = sign for DC
      ]
    }
  },
  {
    id: 'generator',
    name: 'Generator',
    label: 'Generátor',
    category: 'motors',
    explanation: 'Generátor. Mechanikai energiából elektromos energiát állít elő.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,10 A 30,30 0 0,1 40,70 A 30,30 0 0,1 40,10 Z', // circle centered at (40,40)
        'M 40,10 L 40,0',
        'M 40,70 L 40,80',
        // G inside
        'M 50,35 A 10,10 0 1,0 50,50 L 50,42 L 55,42'
      ]
    }
  },

  // TRANSZFORMÁTOROK
  {
    id: 'transformer-2winding',
    name: 'Transformer (2-winding)',
    label: 'Transzformátor',
    category: 'transformers',
    explanation: 'Kéttekercsű transzformátor. Feszültségszintet változtat, galvanikusan szétválaszt.',
    svg: {
      viewBox: '0 0 120 100',
      paths: [
        // Primary winding (left side) - connection and coils (moved right by 10)
        'M 20,10 L 30,10 L 30,15 Q 38,15 38,22 Q 38,29 30,29 Q 38,29 38,36 Q 38,43 30,43 Q 38,43 38,50 Q 38,57 30,57 Q 38,57 38,64 Q 38,71 30,71 Q 38,71 38,78 Q 38,85 30,85 L 30,90 L 20,90',
        // Core (double width vertical lines)
        'M 54,15 L 54,85',
        'M 58,15 L 58,85',
        // Secondary winding (right side) - connection and coils (moved left by 20)
        'M 90,10 L 80,10 L 80,15 Q 72,15 72,22 Q 72,29 80,29 Q 72,29 72,36 Q 72,43 80,43 Q 72,43 72,50 Q 72,57 80,57 Q 72,57 72,64 Q 72,71 80,71 Q 72,71 72,78 Q 72,85 80,85 L 80,90 L 90,90'
      ]
    }
  },
  {
    id: 'autotransformer',
    name: 'Autotransformer',
    label: 'Egytekercses transzformátor',
    category: 'transformers',
    explanation: 'Egytekercses transzformátor (autotranszformátor). Egy tekercs csapolásával változtat feszültséget.',
    svg: {
      viewBox: '0 0 90 100',
      paths: [
        // Top connection and coil with bumps
        'M 30,0 L 30,10 Q 38,10 38,17 Q 38,24 30,24 Q 38,24 38,31 Q 38,38 30,38 Q 38,38 38,45 Q 38,52 30,52 Q 38,52 38,59 Q 38,66 30,66 Q 38,66 38,73 Q 38,80 30,80 L 30,100',
        // Center tap (from middle bump)
        'M 38,45 L 90,45'
      ]
    }
  },

  // FÉLVEZETŐ ESZKÖZÖK
  {
    id: 'diode',
    name: 'Diode',
    label: 'Dióda',
    category: 'semiconductors',
    explanation: 'Dióda. Egyirányú áramvezetés - csak az egyik irányba engedi át az áramot.',
    svg: {
      viewBox: '0 0 100 60',
      paths: [
        'M 0,30 L 40,30',
        'M 40,10 L 40,50 L 70,30 Z', // triangle (anode)
        'M 70,10 L 70,50', // cathode line
        'M 70,30 L 100,30'
      ]
    }
  },
  {
    id: 'led',
    name: 'LED',
    label: 'LED (fénykibocsátó dióda)',
    category: 'semiconductors',
    explanation: 'LED (Light Emitting Diode). Fényt kibocsátó dióda, áramátfolyáskor világít.',
    svg: {
      viewBox: '0 0 100 70',
      paths: [
        'M 0,35 L 40,35',
        'M 40,15 L 40,55 L 70,35 Z',
        'M 70,15 L 70,55',
        'M 70,35 L 100,35',
        // light arrows
        'M 60,5 L 70,0 M 70,0 L 68,5 M 70,0 L 65,2',
        'M 70,5 L 80,0 M 80,0 L 78,5 M 80,0 L 75,2'
      ]
    }
  },
  {
    id: 'zener-diode',
    name: 'Zener Diode',
    label: 'Zener dióda',
    category: 'semiconductors',
    explanation: 'Zener dióda. Feszültségstabilizálásra használják, visszafelé is vezet meghatározott feszültségen.',
    svg: {
      viewBox: '0 0 100 60',
      paths: [
        'M 0,30 L 40,30',
        'M 40,10 L 40,50 L 70,30 Z',
        'M 70,10 L 65,10 L 70,50 L 75,50', // bent cathode line
        'M 70,30 L 100,30'
      ]
    }
  },
  {
    id: 'npn-transistor',
    name: 'NPN Transistor',
    label: 'NPN tranzisztor',
    category: 'semiconductors',
    explanation: 'NPN tranzisztor. Kapcsolásra és erősítésre használják. Bázis, kollektor, emitter lábakkal.',
    svg: {
      viewBox: '0 0 100 100',
      paths: [
        'M 30,20 L 30,80', // base line
        'M 0,50 L 30,50', // base connection
        'M 30,35 L 70,10 L 70,0', // collector
        'M 30,65 L 70,90 L 70,100', // emitter
        'M 60,85 L 70,90 L 65,80' // emitter arrow
      ]
    }
  },
  {
    id: 'pnp-transistor',
    name: 'PNP Transistor',
    label: 'PNP tranzisztor',
    category: 'semiconductors',
    explanation: 'PNP tranzisztor. NPN párja, ellentétes polaritással működik.',
    svg: {
      viewBox: '0 0 100 100',
      paths: [
        'M 30,20 L 30,80',
        'M 0,50 L 30,50',
        'M 30,35 L 70,10 L 70,0',
        'M 30,65 L 70,90 L 70,100',
        'M 40,40 L 30,35 L 35,45' // collector arrow (reversed)
      ]
    }
  },
  {
    id: 'mosfet-n',
    name: 'N-Channel MOSFET',
    label: 'N-csatornás MOSFET',
    category: 'semiconductors',
    explanation: 'N-csatornás MOSFET. Feszültséggel vezérelt kapcsolóelem, nagy teljesítményű alkalmazásokhoz.',
    svg: {
      viewBox: '0 0 100 100',
      paths: [
        'M 35,20 L 35,80', // gate line
        'M 0,50 L 35,50', // gate connection
        'M 45,30 L 45,45', // drain segment
        'M 45,55 L 45,70', // source segment
        'M 45,37 L 80,20 L 80,0', // drain
        'M 45,62 L 80,80 L 80,100', // source
        'M 70,75 L 80,80 L 75,70', // source arrow
        'M 45,50 L 80,50' // body connection
      ]
    }
  },

  // CSATLAKOZÁSOK
  {
    id: 'wire-crossing',
    name: 'Wire Crossing (no connection)',
    label: 'Vezetékek keresztezése (nincs kapcsolat)',
    category: 'connections',
    explanation: 'Keresztező vezetékek, amelyek NEM kapcsolódnak egymáshoz.',
    svg: {
      viewBox: '0 0 60 60',
      paths: [
        'M 0,30 L 25,30 M 35,30 L 60,30', // horizontal with gap
        'M 30,0 L 30,60' // vertical
      ]
    }
  },
  {
    id: 'wire-junction',
    name: 'Wire Junction',
    label: 'Vezetékek csatlakozása',
    category: 'connections',
    explanation: 'Vezetékek csatlakozási pontja. A vezetékek elektromosan kapcsolódnak.',
    svg: {
      viewBox: '0 0 60 60',
      paths: [
        'M 0,30 L 60,30', // horizontal
        'M 30,0 L 30,60', // vertical
        'M 30,26 A 4,4 0 0,1 30,34 A 4,4 0 0,1 30,26 Z' // junction dot centered at (30,30)
      ]
    }
  },
  {
    id: 'terminal',
    name: 'Terminal',
    label: 'Kapocs/Csatlakozó',
    category: 'connections',
    explanation: 'Csatlakozó kapocs vagy terminál. Vezetékek csatlakoztatására.',
    svg: {
      viewBox: '0 0 50 50',
      paths: [
        'M 0,25 L 15,25',
        'M 25,15 A 10,10 0 0,1 25,35 A 10,10 0 0,1 25,15 Z' // circle centered at (25,25)
      ]
    }
  },

  // LAMP
  {
    id: 'lamp',
    name: 'Lamp',
    label: 'Izzólámpa',
    category: 'basic',
    explanation: 'Izzólámpa vagy világítótest. Elektromos energiából fényt állít elő.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,20',
        'M 40,20 A 20,20 0 0,1 40,60 A 20,20 0 0,1 40,20 Z', // circle centered at (40,40)
        'M 40,60 L 40,80',
        'M 30,35 L 50,45', // filament
        'M 30,45 L 50,35'
      ]
    }
  },
  {
    id: 'bell',
    name: 'Bell',
    label: 'Csengő',
    category: 'basic',
    explanation: 'Csengő vagy sziréna. Hangjelzés adására szolgál.',
    svg: {
      viewBox: '0 0 80 80',
      paths: [
        'M 40,0 L 40,20',
        'M 20,20 Q 20,50 40,60 Q 60,50 60,20 Z', // bell shape
        'M 40,60 L 40,65',
        'M 35,65 L 45,65 L 45,70 L 35,70 Z' // clapper
      ]
    }
  },
  {
    id: 'socket',
    name: 'Socket/Outlet',
    label: 'Csatlakozóaljzat (konnektor)',
    category: 'connections',
    explanation: 'Csatlakozóaljzat (konnektor). Elektromos készülékek csatlakoztatására.',
    svg: {
      viewBox: '0 0 60 60',
      paths: [
        'M 10,10 L 50,10 L 50,50 L 10,50 Z',
        'M 22,22 A 3,3 0 0,1 22,28 A 3,3 0 0,1 22,22 Z', // left hole centered at (22,25)
        'M 38,22 A 3,3 0 0,1 38,28 A 3,3 0 0,1 38,22 Z', // right hole centered at (38,25)
        'M 30,32 A 3,3 0 0,1 30,38 A 3,3 0 0,1 30,32 Z'  // ground hole centered at (30,35)
      ]
    }
  },
  {
    id: 'heating-element',
    name: 'Heating Element',
    label: 'Fűtőtest',
    category: 'basic',
    explanation: 'Fűtőelem vagy fűtőtest. Elektromos energiából hőt termel.',
    svg: {
      viewBox: '0 0 100 60',
      paths: [
        'M 0,30 L 20,30',
        'M 20,30 L 30,15 L 40,45 L 50,15 L 60,45 L 70,15 L 80,30',
        'M 80,30 L 100,30'
      ]
    }
  }
]

// Helper function to get symbols by category
export function getSymbolsByCategory(categoryId: string): ElectricalSymbol[] {
  return ELECTRICAL_SYMBOLS.filter(s => s.category === categoryId)
}

// Helper function to get symbol by ID
export function getSymbolById(id: string): ElectricalSymbol | undefined {
  return ELECTRICAL_SYMBOLS.find(s => s.id === id)
}

// Generate SVG string from symbol data
export function renderSymbol(symbol: ElectricalSymbol, scale: number = 1): string {
  const paths = symbol.svg.paths.map(p => `<path d="${p}" />`).join('\n    ')
  return `<svg viewBox="${symbol.svg.viewBox}" xmlns="http://www.w3.org/2000/svg" width="${(symbol.svg.width || 100) * scale}" height="${(symbol.svg.height || 100) * scale}">
    ${paths}
  </svg>`
}
