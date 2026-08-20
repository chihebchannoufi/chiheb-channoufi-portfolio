/**
 * Signature element of the site: a literal rendering of the multi-tier
 * pipeline architecture that runs through the actual projects on the CV
 * (SpamRadar's React → Laravel → Flask flow, NetGuard's data → model →
 * dashboard flow). Not decorative — it's a diagram of how the work is built.
 */
const nodes = [
  { id: "ui", x: 40, y: 60, label: "React / Vue" },
  { id: "api", x: 220, y: 30, label: "Laravel / Node" },
  { id: "ml", x: 220, y: 140, label: "Flask / TensorFlow" },
  { id: "data", x: 400, y: 60, label: "MySQL / ChromaDB" },
  { id: "out", x: 400, y: 150, label: "Dashboard" },
];

const edges: [string, string][] = [
  ["ui", "api"],
  ["ui", "ml"],
  ["api", "data"],
  ["ml", "data"],
  ["ml", "out"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function NetworkGraph() {
  return (
    <svg
      viewBox="0 0 460 200"
      className="w-full h-auto"
      role="img"
      aria-label="Diagramme du pipeline technique : interface, API, modèle de machine learning et stockage des données, connectés entre eux."
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = findNode(a);
        const to = findNode(b);
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="url(#edgeGradient)"
            strokeWidth={1.5}
            className="flow-line"
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={4}
            fill="var(--accent)"
            className="node-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <circle cx={n.x} cy={n.y} r={9} fill="none" stroke="var(--accent)" strokeOpacity={0.25} />
          <text
            x={n.x}
            y={n.y - 16}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="8.5"
            fill="var(--text-muted)"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
