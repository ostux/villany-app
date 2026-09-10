<script setup>
defineProps({
  circuit: { type: Object, required: true }
})

// EU/IEC téglalap alakú ellenállás szimbólum útvonalának legenerálása két pont között
function resistorPath(x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  const ux = dx / len, uy = dy / len   // egységvektor a vonal mentén
  const nx = -uy, ny = ux              // normál (merőleges) egységvektor

  const bodyLen = len * 0.5  // a téglalap hossza
  const bodyWidth = 12        // a téglalap szélessége
  const leadLen = (len - bodyLen) / 2

  // Téglalap kezdőpontja és végpontja a vonal mentén
  const bx1 = x1 + ux * leadLen
  const by1 = y1 + uy * leadLen
  const bx2 = bx1 + ux * bodyLen
  const by2 = by1 + uy * bodyLen

  // A téglalap négy sarka (merőleges irányban eltolva)
  const w = bodyWidth / 2
  const corner1x = bx1 + nx * w, corner1y = by1 + ny * w
  const corner2x = bx2 + nx * w, corner2y = by2 + ny * w
  const corner3x = bx2 - nx * w, corner3y = by2 - ny * w
  const corner4x = bx1 - nx * w, corner4y = by1 - ny * w

  // Vezető szakasz + téglalap + vezető szakasz
  // Path: left lead → center left → corner → rectangle loop (closed) → MOVE to center right → right lead
  return `M ${x1},${y1} L ${bx1},${by1} L ${corner1x},${corner1y} L ${corner2x},${corner2y} L ${corner3x},${corner3y} L ${corner4x},${corner4y} L ${corner1x},${corner1y} M ${bx2},${by2} L ${x2},${y2}`
}

function labelPos(r) {
  const mx = (r.x1 + r.x2) / 2
  const my = (r.y1 + r.y2) / 2
  if (r.vertical) {
    return { x: mx + 26, y: my, anchor: 'start' }
  }
  return { x: mx, y: my - 16, anchor: 'middle' }
}
</script>

<template>
  <svg
    class="w-full max-w-[520px] h-auto [&_.wires]:stroke-gray-100 [&_.wires]:stroke-2 [&_.wires]:fill-none [&_.source_line]:stroke-gray-100 [&_.source_line]:stroke-2 [&_.source_line]:fill-none [&_.source-circle]:stroke-gray-100 [&_.source-circle]:stroke-2 [&_.source-circle]:fill-none [&_.resistor-path]:stroke-gray-100 [&_.resistor-path]:stroke-2 [&_.resistor-path]:fill-none [&_.resistor-path]:stroke-linejoin-round [&_.resistor-path]:stroke-linecap-round [&_text]:font-sans [&_.resistor-label]:text-xs [&_.resistor-label]:font-bold [&_.resistor-label]:fill-amber-600 [&_.source-plus]:stroke-gray-100 [&_.source-plus]:stroke-2 [&_.source-minus]:stroke-gray-100 [&_.source-minus]:stroke-2 [&_.source-label]:text-xs [&_.source-label]:font-bold [&_.source-label]:fill-blue-400 [&_.point-dot]:fill-red-500 [&_.point-dot]:stroke-gray-900 [&_.point-dot]:stroke-[1.5] [&_.point-label]:text-sm [&_.point-label]:font-bold [&_.point-label]:fill-gray-100"
    :viewBox="`0 0 ${circuit.viewBox.w} ${circuit.viewBox.h}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Sima vezetékek -->
    <g class="wires">
      <line
        v-for="(w, i) in circuit.wires"
        :key="'w' + i"
        :x1="circuit.nodes.find(n => n.id === w[0])?.x"
        :y1="circuit.nodes.find(n => n.id === w[0])?.y"
        :x2="circuit.nodes.find(n => n.id === w[1])?.x"
        :y2="circuit.nodes.find(n => n.id === w[1])?.y"
      />
    </g>

    <!-- Generátor (forrás) - DC szimbólum (kör + és - jellel, vezeték a kör széléig) -->
    <g v-if="circuit.source" class="source">
      <template v-if="circuit.source.vertical">
        <!-- Függőleges feszültségforrás -->
        <!-- Vezeték felülről a kör széléig -->
        <line :x1="circuit.source.x1" :y1="circuit.source.y1" :x2="circuit.source.x1" :y2="(circuit.source.y1 + circuit.source.y2) / 2 - 20" class="source_line" />
        <!-- Kör -->
        <circle :cx="circuit.source.x1" :cy="(circuit.source.y1 + circuit.source.y2) / 2" r="20" class="source-circle" />
        <!-- Vezeték a kör szélétől lefelé -->
        <line :x1="circuit.source.x1" :y1="(circuit.source.y1 + circuit.source.y2) / 2 + 20" :x2="circuit.source.x1" :y2="circuit.source.y2" class="source_line" />
        <!-- Plusz jel (felső fele, a körön belül) -->
        <line :x1="circuit.source.x1 - 5" :y1="(circuit.source.y1 + circuit.source.y2) / 2 - 8" :x2="circuit.source.x1 + 5" :y2="(circuit.source.y1 + circuit.source.y2) / 2 - 8" class="source-plus" />
        <line :x1="circuit.source.x1" :y1="(circuit.source.y1 + circuit.source.y2) / 2 - 13" :x2="circuit.source.x1" :y2="(circuit.source.y1 + circuit.source.y2) / 2 - 3" class="source-plus" />
        <!-- Mínusz jel (alsó fele, a körön belül) -->
        <line :x1="circuit.source.x1 - 5" :y1="(circuit.source.y1 + circuit.source.y2) / 2 + 8" :x2="circuit.source.x1 + 5" :y2="(circuit.source.y1 + circuit.source.y2) / 2 + 8" class="source-minus" />
        <text :x="circuit.source.x1 + 28" :y="(circuit.source.y1 + circuit.source.y2) / 2 + 4" text-anchor="start" class="source-label">{{ circuit.source.label }}</text>
      </template>
      <template v-else>
        <!-- Vízszintes feszültségforrás -->
        <!-- Vezeték balról a kör széléig -->
        <line :x1="circuit.source.x1" :y1="circuit.source.y1" :x2="(circuit.source.x1 + circuit.source.x2) / 2 - 20" :y2="circuit.source.y1" class="source_line" />
        <!-- Kör -->
        <circle :cx="(circuit.source.x1 + circuit.source.x2) / 2" :cy="circuit.source.y1" r="20" class="source-circle" />
        <!-- Vezeték a kör szélétől jobbra -->
        <line :x1="(circuit.source.x1 + circuit.source.x2) / 2 + 20" :y1="circuit.source.y1" :x2="circuit.source.x2" :y2="circuit.source.y1" class="source_line" />
        <!-- Plusz jel (bal oldal, a körön belül) -->
        <line :x1="(circuit.source.x1 + circuit.source.x2) / 2 - 8" :y1="circuit.source.y1 - 5" :x2="(circuit.source.x1 + circuit.source.x2) / 2 - 8" :y2="circuit.source.y1 + 5" class="source-plus" />
        <line :x1="(circuit.source.x1 + circuit.source.x2) / 2 - 13" :y1="circuit.source.y1" :x2="(circuit.source.x1 + circuit.source.x2) / 2 - 3" :y2="circuit.source.y1" class="source-plus" />
        <!-- Mínusz jel (jobb oldal, a körön belül) -->
        <line :x1="(circuit.source.x1 + circuit.source.x2) / 2 + 3" :y1="circuit.source.y1" :x2="(circuit.source.x1 + circuit.source.x2) / 2 + 13" :y2="circuit.source.y1" class="source-minus" />
        <text :x="(circuit.source.x1 + circuit.source.x2) / 2" :y="circuit.source.y1 - 28" text-anchor="middle" class="source-label">{{ circuit.source.label }}</text>
      </template>
    </g>

    <!-- Ellenállások -->
    <g class="resistors">
      <g v-for="r in circuit.resistors" :key="r.id">
        <path :d="resistorPath(r.x1, r.y1, r.x2, r.y2)" class="resistor-path" />
        <text
          :x="labelPos(r).x"
          :y="labelPos(r).y"
          :text-anchor="labelPos(r).anchor"
          class="resistor-label"
        >{{ r.label }}</text>
      </g>
    </g>

    <!-- Megjelölt pontok (A, B, C...) -->
    <g class="points">
      <g v-for="p in circuit.points" :key="p.id">
        <circle :cx="p.x" :cy="p.y" r="4" class="point-dot" />
        <text
          :x="p.x + (p.labelDx ?? 0)"
          :y="p.y + (p.labelDy ?? -10)"
          :text-anchor="p.labelAnchor ?? 'middle'"
          class="point-label"
        >{{ p.label }}</text>
      </g>
    </g>
  </svg>
</template>
