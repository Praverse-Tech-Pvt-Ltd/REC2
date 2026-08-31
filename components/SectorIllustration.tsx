/**
 * SectorIllustration — hand-drawn sketch SVGs per sector.
 * Aesthetic: editorial line-art, architectural sketch quality.
 * Each SVG uses the sector's muted color for strokes,
 * pale cream fills, and round-capped lines for organic warmth.
 */

import type { SectorKey } from "@/lib/data";

type Props = {
  sector: SectorKey;
  color: string;
  className?: string;
};

const ILLUS: Record<SectorKey, (color: string) => React.ReactNode> = {

  energy: (c) => (
    <svg viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun */}
      <circle cx="120" cy="42" r="22" stroke={c} strokeWidth="1.6" fill={c + "0e"} />
      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const r = Math.PI * deg / 180;
        const x1 = 120 + Math.cos(r) * 28, y1 = 42 + Math.sin(r) * 28;
        const x2 = 120 + Math.cos(r) * 36, y2 = 42 + Math.sin(r) * 36;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.4" strokeLinecap="round" />;
      })}
      {/* Solar panel left */}
      <rect x="28" y="88" width="80" height="48" rx="2" stroke={c} strokeWidth="1.5" fill={c + "08"} />
      <line x1="28" y1="104" x2="108" y2="104" stroke={c} strokeWidth="0.9" />
      <line x1="28" y1="120" x2="108" y2="120" stroke={c} strokeWidth="0.9" />
      <line x1="54" y1="88" x2="54" y2="136" stroke={c} strokeWidth="0.9" />
      <line x1="82" y1="88" x2="82" y2="136" stroke={c} strokeWidth="0.9" />
      {/* Solar panel right */}
      <rect x="132" y="88" width="80" height="48" rx="2" stroke={c} strokeWidth="1.5" fill={c + "08"} />
      <line x1="132" y1="104" x2="212" y2="104" stroke={c} strokeWidth="0.9" />
      <line x1="132" y1="120" x2="212" y2="120" stroke={c} strokeWidth="0.9" />
      <line x1="158" y1="88" x2="158" y2="136" stroke={c} strokeWidth="0.9" />
      <line x1="186" y1="88" x2="186" y2="136" stroke={c} strokeWidth="0.9" />
      {/* Connection to ground */}
      <line x1="68" y1="136" x2="68" y2="146" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="172" y1="136" x2="172" y2="146" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="68" y1="146" x2="172" y2="146" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      {/* Lightning bolt */}
      <polyline points="118,68 112,82 122,82 116,96" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),

  recycle: (c) => (
    <svg viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer recycling circle guide */}
      <circle cx="120" cy="74" r="52" stroke={c} strokeWidth="0.7" strokeDasharray="3 4" opacity="0.35" />
      {/* Arrow arc 1 — top right */}
      <path d="M 120 22 A 52 52 0 0 1 165 100" stroke={c} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <polyline points="162,86 168,102 154,105" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow arc 2 — bottom */}
      <path d="M 165 100 A 52 52 0 0 1 75 100" stroke={c} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <polyline points="89,112 74,100 88,90" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow arc 3 — left */}
      <path d="M 75 100 A 52 52 0 0 1 120 22" stroke={c} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <polyline points="107,28 120,20 122,36" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Battery in center */}
      <rect x="106" y="62" width="28" height="20" rx="2" stroke={c} strokeWidth="1.5" fill={c + "10"} />
      <rect x="134" y="68" width="5" height="8" rx="1" stroke={c} strokeWidth="1.2" fill={c + "20"} />
      <line x1="111" y1="72" x2="116" y2="72" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="113" y1="70" x2="113" y2="74" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="120" y1="72" x2="126" y2="72" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      {/* Small leaves */}
      <path d="M 52 52 Q 48 44 56 42 Q 54 50 52 52Z" stroke={c} strokeWidth="1.2" fill={c + "18"} />
      <path d="M 186 50 Q 190 42 182 42 Q 184 50 186 50Z" stroke={c} strokeWidth="1.2" fill={c + "18"} />
    </svg>
  ),

  materials: (c) => (
    <svg viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagonal crystal lattice */}
      {/* Center hexagon */}
      <polygon points="120,50 138,60 138,80 120,90 102,80 102,60" stroke={c} strokeWidth="1.8" fill={c + "0c"} />
      {/* Top-left hex */}
      <polygon points="84,20 102,30 102,50 84,60 66,50 66,30" stroke={c} strokeWidth="1.3" fill={c + "07"} />
      {/* Top-right hex */}
      <polygon points="156,20 174,30 174,50 156,60 138,50 138,30" stroke={c} strokeWidth="1.3" fill={c + "07"} />
      {/* Bottom hex */}
      <polygon points="120,90 138,100 138,120 120,130 102,120 102,100" stroke={c} strokeWidth="1.3" fill={c + "07"} />
      {/* Bottom-left hex */}
      <polygon points="84,90 102,100 102,120 84,130 66,120 66,100" stroke={c} strokeWidth="1" fill={c + "05"} strokeOpacity="0.5" />
      {/* Bottom-right hex */}
      <polygon points="156,90 174,100 174,120 156,130 138,120 138,100" stroke={c} strokeWidth="1" fill={c + "05"} strokeOpacity="0.5" />
      {/* Atom nodes at center hex vertices */}
      {[[120,50],[138,60],[138,80],[120,90],[102,80],[102,60]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill={c + "25"} stroke={c} strokeWidth="1.4" />
      ))}
      {/* Center node — larger, highlighted */}
      <circle cx="120" cy="70" r="7" fill={c + "30"} stroke={c} strokeWidth="1.8" />
      <circle cx="120" cy="70" r="2.5" fill={c} />
      {/* Construction dotted guide lines */}
      <line x1="30" y1="70" x2="60" y2="70" stroke={c} strokeWidth="0.7" strokeDasharray="2 3" opacity="0.3" />
      <line x1="180" y1="70" x2="210" y2="70" stroke={c} strokeWidth="0.7" strokeDasharray="2 3" opacity="0.3" />
    </svg>
  ),

  chips: (c) => (
    <svg viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* PCB background grid dots */}
      {[0,1,2,3,4,5,6,7].map(col =>
        [0,1,2,3,4].map(row => (
          <circle key={`${col}${row}`} cx={20 + col * 28} cy={20 + row * 26} r="1" fill={c} opacity="0.15" />
        ))
      )}
      {/* Main chip */}
      <rect x="82" y="40" width="76" height="68" rx="3" stroke={c} strokeWidth="2" fill={c + "0e"} />
      {/* Chip inner die */}
      <rect x="96" y="54" width="48" height="40" rx="2" stroke={c} strokeWidth="1.2" fill={c + "15"} />
      {/* Circuit paths on die */}
      <line x1="96" y1="64" x2="144" y2="64" stroke={c} strokeWidth="0.9" opacity="0.6" />
      <line x1="96" y1="72" x2="144" y2="72" stroke={c} strokeWidth="0.9" opacity="0.6" />
      <line x1="96" y1="80" x2="144" y2="80" stroke={c} strokeWidth="0.9" opacity="0.6" />
      <line x1="108" y1="54" x2="108" y2="94" stroke={c} strokeWidth="0.9" opacity="0.6" />
      <line x1="120" y1="54" x2="120" y2="94" stroke={c} strokeWidth="0.9" opacity="0.6" />
      <line x1="132" y1="54" x2="132" y2="94" stroke={c} strokeWidth="0.9" opacity="0.6" />
      {/* Pin legs — left */}
      {[50,62,74,86,98].map((y, i) => (
        <g key={i}>
          <line x1="60" y1={y} x2="82" y2={y} stroke={c} strokeWidth="1.8" strokeLinecap="round" />
          <rect x="52" y={y-4} width="8" height="8" rx="1" stroke={c} strokeWidth="1.2" fill={c+"15"} />
        </g>
      ))}
      {/* Pin legs — right */}
      {[50,62,74,86,98].map((y, i) => (
        <g key={i}>
          <line x1="158" y1={y} x2="180" y2={y} stroke={c} strokeWidth="1.8" strokeLinecap="round" />
          <rect x="180" y={y-4} width="8" height="8" rx="1" stroke={c} strokeWidth="1.2" fill={c+"15"} />
        </g>
      ))}
      {/* PCB traces going off-edge */}
      <path d="M 36 50 L 52 50" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
      <path d="M 188 74 L 210 74 L 210 120" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
      <path d="M 120 40 L 120 14" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  ),

  robotics: (c) => (
    <svg viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flow reactor vessel left */}
      <rect x="22" y="36" width="56" height="76" rx="28" stroke={c} strokeWidth="1.8" fill={c + "0c"} />
      {/* Level lines in vessel */}
      <path d="M 26 70 Q 50 66 74 70" stroke={c} strokeWidth="1" opacity="0.5" strokeDasharray="2 2" />
      <path d="M 24 84 Q 50 80 76 84" stroke={c} strokeWidth="1" opacity="0.5" strokeDasharray="2 2" />
      {/* Vessel top connector */}
      <line x1="50" y1="36" x2="50" y2="22" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="50" cy="18" r="5" stroke={c} strokeWidth="1.5" fill={c + "15"} />
      {/* Flow pipe connecting vessels */}
      <path d="M 78 58 Q 120 42 162 58" stroke={c} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 78 90 Q 120 106 162 90" stroke={c} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Flow arrows */}
      <polyline points="115,46 122,44 120,50" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="115,100 122,102 120,96" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Valve on pipe */}
      <circle cx="120" cy="74" r="8" stroke={c} strokeWidth="1.4" fill={c + "12"} />
      <line x1="120" y1="66" x2="120" y2="82" stroke={c} strokeWidth="1.4" />
      <line x1="112" y1="74" x2="128" y2="74" stroke={c} strokeWidth="1.4" />
      {/* Flow reactor vessel right */}
      <rect x="162" y="36" width="56" height="76" rx="28" stroke={c} strokeWidth="1.8" fill={c + "0c"} />
      <path d="M 166 70 Q 190 66 214 70" stroke={c} strokeWidth="1" opacity="0.5" strokeDasharray="2 2" />
      <path d="M 164 84 Q 190 80 216 84" stroke={c} strokeWidth="1" opacity="0.5" strokeDasharray="2 2" />
      {/* Output tap */}
      <line x1="190" y1="112" x2="190" y2="130" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="182" y1="130" x2="198" y2="130" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      {/* AI control box */}
      <rect x="104" y="118" width="32" height="20" rx="2" stroke={c} strokeWidth="1.3" fill={c + "10"} />
      <line x1="108" y1="124" x2="132" y2="124" stroke={c} strokeWidth="0.8" opacity="0.5" />
      <line x1="108" y1="130" x2="124" y2="130" stroke={c} strokeWidth="0.8" opacity="0.5" />
    </svg>
  ),

  sports: (c) => (
    <svg viewBox="0 0 240 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Water/waves at bottom */}
      <path d="M 10 128 Q 40 118 70 128 Q 100 138 130 128 Q 160 118 190 128 Q 210 134 230 128" stroke={c} strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M 10 138 Q 45 130 80 138 Q 115 146 150 138 Q 185 130 220 138" stroke={c} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />
      {/* Hull */}
      <path d="M 60 122 Q 80 130 120 130 Q 160 130 180 122 L 170 114 Q 120 108 70 114 Z" stroke={c} strokeWidth="1.8" fill={c + "12"} strokeLinejoin="round" />
      {/* Mast */}
      <line x1="120" y1="114" x2="120" y2="20" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      {/* Main sail */}
      <path d="M 120 22 L 190 90 L 120 114 Z" stroke={c} strokeWidth="1.5" fill={c + "14"} strokeLinejoin="round" />
      {/* Jib sail */}
      <path d="M 120 30 L 60 102 L 120 108 Z" stroke={c} strokeWidth="1.2" fill={c + "0a"} strokeLinejoin="round" />
      {/* Boom */}
      <line x1="120" y1="114" x2="184" y2="96" stroke={c} strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
      {/* Wind curves */}
      <path d="M 18 40 Q 28 34 38 40 Q 48 46 58 40" stroke={c} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M 14 56 Q 26 49 38 56 Q 50 63 62 56" stroke={c} strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M 20 72 Q 30 66 42 72" stroke={c} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
      {/* Flag */}
      <path d="M 120 20 L 136 28 L 120 36" stroke={c} strokeWidth="1.2" fill={c + "20"} strokeLinejoin="round" />
    </svg>
  ),

};

export default function SectorIllustration({ sector, color, className }: Props) {
  const render = ILLUS[sector];
  if (!render) return null;
  return (
    <div className={className} aria-hidden="true">
      {render(color)}
    </div>
  );
}
