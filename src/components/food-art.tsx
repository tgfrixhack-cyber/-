import { useId, type ReactNode } from "react";
import type { FoodArtKey } from "@/lib/menu";

const C = {
  red: "#e4002b",
  redDark: "#b8001f",
  gold: "#f6a723",
  goldDark: "#d9821f",
  fry: "#ffc93c",
  bun: "#f0b45c",
  bunLight: "#f8d193",
  bunDark: "#e09a3e",
  crust: "#e0912f",
  crustDark: "#c97a1d",
  meat: "#f3b25e",
  green: "#79b83e",
  greenDark: "#5a9a2b",
  tomato: "#ef4d3d",
  cheese: "#ffc531",
  cream: "#fff4e2",
  creamDark: "#f6e8d5",
  white: "#ffffff",
  choc: "#6b4226",
  coffee: "#8a5a3b",
  cola: "#43210f",
  amber: "#e08a2e",
  berry: "#e85d8a",
  pink: "#f6a7c1",
  butter: "#ffe08a",
  shadow: "rgba(23,17,14,0.10)",
};

function Ground({ rx = 34 }: { rx?: number }) {
  return <ellipse cx="60" cy="106" rx={rx} ry="6" fill={C.shadow} />;
}

function Bumps({ cx, cy, r = 7, fill = C.crustDark }: { cx: number; cy: number; r?: number; fill?: string }) {
  return (
    <g fill={fill} opacity="0.55">
      <circle cx={cx - r} cy={cy + 2} r={r * 0.42} />
      <circle cx={cx + r} cy={cy - 1} r={r * 0.4} />
      <circle cx={cx} cy={cy + r * 0.8} r={r * 0.38} />
    </g>
  );
}

function DrumstickPiece({ x, y, s = 1, rot = 0 }: { x: number; y: number; s?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <rect x="-30" y="-6" width="32" height="12" rx="6" fill={C.cream} />
      <circle cx="-30" cy="-4" r="6" fill={C.creamDark} />
      <circle cx="-30" cy="5" r="6" fill={C.creamDark} />
      <circle cx="10" cy="0" r="24" fill={C.crust} />
      <circle cx="-6" cy="-12" r="12" fill={C.crust} />
      <circle cx="24" cy="-14" r="10" fill={C.crust} />
      <circle cx="26" cy="12" r="11" fill={C.crust} />
      <Bumps cx={8} cy={2} r={12} />
    </g>
  );
}

function WingPiece({ x, y, s = 1, rot = 0 }: { x: number; y: number; s?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <rect x="-4" y="10" width="9" height="12" rx="4" fill={C.creamDark} />
      <circle cx="0.5" cy="22" r="4.5" fill={C.creamDark} />
      <ellipse cx="0" cy="0" rx="14" ry="12" fill={C.crust} />
      <Bumps cx={0} cy={-2} r={9} />
    </g>
  );
}

function Strip({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x="-11" y="-32" width="22" height="64" rx="11" fill={C.crust} />
      <path
        d="M-6 -24 L6 -16 M-6 -8 L6 0 M-6 8 L6 16"
        stroke={C.meat}
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function BucketBody({ uid }: { uid: string }) {
  return (
    <g>
      <clipPath id={`${uid}-bucket`}>
        <path d="M30 52 L90 52 L83 102 Q60 110 37 102 Z" />
      </clipPath>
      <path d="M30 52 L90 52 L83 102 Q60 110 37 102 Z" fill={C.white} />
      <g clipPath={`url(#${uid}-bucket)`}>
        <rect x="33" y="46" width="11" height="66" fill={C.red} />
        <rect x="55" y="46" width="11" height="66" fill={C.red} />
        <rect x="77" y="46" width="11" height="66" fill={C.red} />
        <path d="M28 84 Q60 92 92 84 L92 96 Q60 104 28 96 Z" fill={C.cream} opacity="0.35" />
      </g>
      <ellipse cx="60" cy="52" rx="31" ry="9" fill={C.creamDark} />
      <ellipse cx="60" cy="51" rx="25" ry="6.4" fill="#f0dcb8" />
    </g>
  );
}

function Burger({ big = false }: { big?: boolean }) {
  return (
    <g>
      <Ground />
      <rect x="28" y={big ? 86 : 82} width="64" height="15" rx="7.5" fill={C.bun} />
      <rect x="26" y={big ? 72 : 68} width="68" height="14" rx="7" fill={C.crustDark} />
      <Bumps cx={60} cy={big ? 78 : 74} r={20} fill={C.crust} />
      <path
        d={`M30 ${big ? 64 : 60} l0 8 q3 5 6 0 l0 -8 Z M52 ${big ? 64 : 60} l0 9 q3 5 6 0 l0 -9 Z M78 ${
          big ? 64 : 60
        } l0 8 q3 5 6 0 l0 -8 Z`}
        fill={C.cheese}
      />
      <rect x="30" y={big ? 58 : 54} width="60" height="7" rx="2" fill={C.cheese} />
      <path
        d={`M24 ${big ? 56 : 52} q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 l0 6 l-72 0 Z`}
        fill={C.green}
      />
      <path
        d={`M26 ${big ? 54 : 50} Q26 ${big ? 14 : 20} 60 ${big ? 14 : 20} Q94 ${big ? 14 : 20} 94 ${
          big ? 54 : 50
        } Z`}
        fill={C.bun}
      />
      {[
        [44, big ? 32 : 36],
        [60, big ? 26 : 30],
        [76, big ? 32 : 36],
        [52, big ? 42 : 44],
        [70, big ? 42 : 44],
        ...(big ? ([[60, 40]] as Array<[number, number]>) : []),
      ].map(([sx, sy], i) => (
        <ellipse key={i} cx={sx} cy={sy} rx="3.4" ry="2.1" fill={C.creamDark} transform={`rotate(-18 ${sx} ${sy})`} />
      ))}
    </g>
  );
}

const arts: Record<FoodArtKey, (uid: string) => ReactNode> = {
  bucket: (uid) => (
    <g>
      <Ground />
      <BucketBody uid={uid} />
    </g>
  ),

  bucketWings: (uid) => (
    <g>
      <Ground />
      <g>
        <WingPiece x={38} y={38} rot={-24} s={0.9} />
        <WingPiece x={60} y={32} rot={4} s={0.95} />
        <WingPiece x={82} y={38} rot={26} s={0.9} />
      </g>
      <BucketBody uid={uid} />
    </g>
  ),

  burger: () => <Burger />,

  burgerBig: () => <Burger big />,

  chickenBurger: () => (
    <g>
      <Ground />
      <rect x="28" y="82" width="64" height="15" rx="7.5" fill={C.bun} />
      <rect x="26" y="68" width="68" height="14" rx="7" fill={C.crustDark} />
      <Bumps cx={60} cy={74} r={20} fill={C.crust} />
      <path d="M32 62 l0 9 q3.5 6 7 0 l0 -9 Z M56 62 l0 11 q3.5 6 7 0 l0 -11 Z M80 62 l0 9 q3.5 6 7 0 l0 -9 Z" fill={C.cheese} />
      <rect x="30" y="57" width="60" height="7" rx="2" fill={C.cheese} />
      <ellipse cx="44" cy="53" rx="12" ry="5" fill={C.tomato} />
      <ellipse cx="72" cy="53" rx="12" ry="5" fill={C.tomato} />
      <path d="M26 51 Q26 24 60 24 Q94 24 94 51 Z" fill={C.bun} />
      <ellipse cx="46" cy="35" rx="3.4" ry="2.1" fill={C.creamDark} transform="rotate(-18 46 35)" />
      <ellipse cx="62" cy="30" rx="3.4" ry="2.1" fill={C.creamDark} transform="rotate(-18 62 30)" />
      <ellipse cx="78" cy="35" rx="3.4" ry="2.1" fill={C.creamDark} transform="rotate(-18 78 35)" />
    </g>
  ),

  longer: () => (
    <g transform="rotate(-14 60 66)">
      <Ground rx={38} />
      <rect x="14" y="54" width="92" height="26" rx="13" fill={C.bunDark} />
      <path d="M14 62 Q60 46 106 62 L106 58 Q60 42 14 58 Z" fill={C.bunLight} opacity="0.9" />
      <path d="M22 64 q6 -9 12 0 q6 -9 12 0 q6 -9 12 0 q6 -9 12 0 q6 -9 12 0 q6 -9 12 0 l0 8 q-36 8 -72 0 Z" fill={C.green} />
      <path
        d="M28 66 l7 -5 7 5 7 -5 7 5 7 -5 7 5 7 -5 7 5"
        stroke={C.cream}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="38" cy="58" rx="3" ry="1.9" fill={C.bunLight} transform="rotate(-14 38 58)" />
      <ellipse cx="60" cy="56" rx="3" ry="1.9" fill={C.bunLight} transform="rotate(-14 60 56)" />
      <ellipse cx="82" cy="58" rx="3" ry="1.9" fill={C.bunLight} transform="rotate(-14 82 58)" />
    </g>
  ),

  hotdog: () => (
    <g transform="rotate(-10 60 66)">
      <Ground rx={38} />
      <rect x="16" y="54" width="88" height="24" rx="12" fill={C.bun} />
      <rect x="22" y="57" width="76" height="15" rx="7.5" fill="#c9552e" />
      <path
        d="M28 64 l7 -5 7 5 7 -5 7 5 7 -5 7 5 7 -5 7 5 7 -5"
        stroke={C.cheese}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M20 60 Q60 52 100 60" stroke={C.red} strokeWidth="2.6" strokeLinecap="round" fill="none" opacity="0.8" />
      <ellipse cx="40" cy="55" rx="3" ry="1.9" fill={C.bunLight} transform="rotate(-10 40 55)" />
      <ellipse cx="62" cy="53" rx="3" ry="1.9" fill={C.bunLight} transform="rotate(-10 62 53)" />
      <ellipse cx="84" cy="55" rx="3" ry="1.9" fill={C.bunLight} transform="rotate(-10 84 55)" />
    </g>
  ),

  wings: () => (
    <g>
      <Ground />
      <WingPiece x={36} y={64} rot={-14} s={1.05} />
      <WingPiece x={84} y={68} rot={14} s={1.05} />
      <WingPiece x={60} y={44} s={1.15} />
    </g>
  ),

  strips: () => (
    <g>
      <Ground />
      <Strip x={38} y={62} rot={-10} />
      <Strip x={82} y={62} rot={10} />
      <Strip x={60} y={58} rot={0} />
    </g>
  ),

  nuggets: () => (
    <g>
      <Ground />
      <rect x="26" y="40" width="32" height="30" rx="13" fill={C.crust} transform="rotate(-10 42 55)" />
      <rect x="62" y="34" width="32" height="30" rx="13" fill={C.crust} transform="rotate(12 78 49)" />
      <rect x="38" y="64" width="34" height="30" rx="13" fill={C.crust} transform="rotate(6 55 79)" />
      <rect x="70" y="62" width="30" height="28" rx="12" fill={C.crust} transform="rotate(-14 85 76)" />
      <Bumps cx={42} cy={52} r={10} />
      <Bumps cx={78} cy={46} r={10} />
      <Bumps cx={56} cy={78} r={11} />
      <Bumps cx={86} cy={76} r={9} />
    </g>
  ),

  drumstick: () => (
    <g>
      <Ground />
      <DrumstickPiece x={66} y={54} rot={38} s={1.15} />
    </g>
  ),

  bites: () => (
    <g>
      <Ground />
      <circle cx="42" cy="52" r="10" fill={C.crust} />
      <circle cx="62" cy="44" r="10" fill={C.crust} />
      <circle cx="80" cy="54" r="9.4" fill={C.crust} />
      <circle cx="52" cy="60" r="9.6" fill={C.crust} />
      <circle cx="70" cy="62" r="9" fill={C.crust} />
      <Bumps cx={42} cy={52} r={7} />
      <Bumps cx={62} cy={44} r={7} />
      <Bumps cx={80} cy={54} r={6.5} />
      <path d="M30 66 L90 66 L84 102 Q60 108 36 102 Z" fill={C.white} />
      <path d="M30 66 L90 66 L88.6 74 Q60 80 31.4 74 Z" fill={C.red} />
      <path d="M36 84 Q60 90 84 84" stroke={C.creamDark} strokeWidth="2.4" fill="none" />
    </g>
  ),

  roll: () => (
    <g transform="rotate(18 60 62)">
      <Ground rx={40} />
      <rect x="20" y="46" width="76" height="30" rx="15" fill="#f3ddb5" />
      <path d="M30 52 h44 M28 62 h48 M30 72 h44" stroke="#e0c290" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="93" cy="61" r="14" fill="#efdbb0" />
      <path d="M93 61 m0 -9 a9 9 0 1 1 -8 13 a6 6 0 1 0 4 -9" stroke="#d9b87e" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="55" r="5" fill={C.green} />
      <circle cx="21" cy="63" r="4.4" fill={C.greenDark} />
      <circle cx="26" cy="68" r="4" fill={C.tomato} />
      <circle cx="19" cy="58" r="3.4" fill={C.cream} />
    </g>
  ),

  salad: () => (
    <g>
      <Ground />
      <circle cx="42" cy="56" r="14" fill={C.green} />
      <circle cx="62" cy="48" r="15" fill={C.green} />
      <circle cx="80" cy="58" r="13" fill={C.greenDark} />
      <circle cx="52" cy="58" r="5" fill={C.tomato} />
      <circle cx="72" cy="54" r="5" fill={C.tomato} />
      <circle cx="62" cy="64" r="4.4" fill={C.cream} />
      <path d="M26 62 L94 62 L88 84 Q60 92 32 84 Z" fill={C.white} />
      <path d="M26 62 L94 62 L92.6 69 Q60 76 27.4 69 Z" fill={C.red} opacity="0.9" />
      <path d="M34 90 Q60 97 86 90" stroke={C.creamDark} strokeWidth="2.4" fill="none" />
    </g>
  ),

  combo: () => (
    <g>
      <Ground />
      <path d="M30 34 Q30 20 46 20 Q58 20 58 34 L58 40 L30 40 Z" fill={C.bun} />
      <ellipse cx="44" cy="28" rx="3" ry="2" fill={C.creamDark} transform="rotate(-18 44 28)" />
      <rect x="62" y="26" width="9" height="36" rx="4.5" fill={C.fry} transform="rotate(-8 66 44)" />
      <rect x="74" y="22" width="9" height="40" rx="4.5" fill={C.fry} />
      <rect x="86" y="27" width="9" height="35" rx="4.5" fill={C.fry} transform="rotate(9 90 44)" />
      <ellipse cx="94" cy="30" rx="10" ry="5" fill="#d9dee3" />
      <rect x="88" y="30" width="12" height="30" rx="4" fill={C.white} />
      <rect x="88" y="38" width="12" height="10" fill={C.red} opacity="0.85" />
      <path d="M22 44 L98 44 L90 100 Q60 108 30 100 Z" fill={C.red} />
      <path d="M22 44 L98 44 L96.6 53 Q60 60 23.4 53 Z" fill={C.redDark} />
      <path d="M28 74 Q60 82 92 74" stroke={C.white} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
    </g>
  ),

  fries: () => (
    <g>
      <Ground />
      <rect x="34" y="30" width="9" height="38" rx="4.5" fill={C.fry} transform="rotate(-26 38 49)" />
      <rect x="48" y="24" width="9" height="44" rx="4.5" fill={C.fry} transform="rotate(-10 52 46)" />
      <rect x="63" y="24" width="9" height="44" rx="4.5" fill={C.fry} transform="rotate(6 67 46)" />
      <rect x="76" y="30" width="9" height="38" rx="4.5" fill={C.fry} transform="rotate(24 80 49)" />
      <rect x="56" y="30" width="9" height="40" rx="4.5" fill={C.butter} transform="rotate(-2 60 50)" />
      <path d="M36 62 L84 62 L78 102 Q60 108 42 102 Z" fill={C.red} />
      <path d="M36 62 L84 62 L82.8 70 Q60 76 37.2 70 Z" fill={C.redDark} />
      <path d="M40 80 Q60 88 80 80" stroke={C.white} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
    </g>
  ),

  rustic: () => (
    <g>
      <Ground />
      <g transform="rotate(-28 44 76)">
        <rect x="36" y="34" width="16" height="52" rx="8" fill="#f2b25c" />
        <rect x="36" y="34" width="6" height="52" rx="3" fill="#b4622d" />
      </g>
      <g transform="rotate(-10 58 76)">
        <rect x="50" y="28" width="16" height="58" rx="8" fill="#f2b25c" />
        <rect x="50" y="28" width="6" height="58" rx="3" fill="#b4622d" />
      </g>
      <g transform="rotate(8 72 76)">
        <rect x="64" y="30" width="16" height="56" rx="8" fill="#f2b25c" />
        <rect x="64" y="30" width="6" height="56" rx="3" fill="#b4622d" />
      </g>
      <g transform="rotate(26 84 76)">
        <rect x="76" y="36" width="16" height="50" rx="8" fill="#f2b25c" />
        <rect x="76" y="36" width="6" height="50" rx="3" fill="#b4622d" />
      </g>
      <circle cx="42" cy="52" r="2" fill={C.greenDark} />
      <circle cx="66" cy="44" r="2" fill={C.greenDark} />
      <circle cx="82" cy="52" r="2" fill={C.greenDark} />
    </g>
  ),

  onionRings: () => (
    <g>
      <Ground />
      <circle cx="74" cy="50" r="17" fill="none" stroke={C.goldDark} strokeWidth="9" />
      <circle cx="42" cy="54" r="17" fill="none" stroke={C.gold} strokeWidth="9" />
      <circle cx="58" cy="80" r="16" fill="none" stroke={C.gold} strokeWidth="9" />
      <circle cx="58" cy="80" r="16" fill="none" stroke={C.goldDark} strokeWidth="9" strokeDasharray="4 14" opacity="0.6" />
      <circle cx="42" cy="54" r="17" fill="none" stroke={C.creamDark} strokeWidth="9" strokeDasharray="3 16" opacity="0.7" />
      <circle cx="74" cy="50" r="17" fill="none" stroke={C.creamDark} strokeWidth="9" strokeDasharray="3 18" opacity="0.7" />
    </g>
  ),

  cheeseBalls: () => (
    <g>
      <Ground />
      <circle cx="44" cy="56" r="14" fill="#f2c14e" />
      <circle cx="70" cy="48" r="14.5" fill="#f2c14e" />
      <circle cx="58" cy="80" r="13" fill="#eda93a" />
      <Bumps cx={44} cy={56} r={10} fill="#d99a2e" />
      <Bumps cx={70} cy={48} r={10} fill="#d99a2e" />
      <Bumps cx={58} cy={80} r={9} fill="#c9881f" />
      <path d="M78 40 Q92 30 96 22" stroke={C.cheese} strokeWidth="3.4" strokeLinecap="round" fill="none" />
      <path d="M80 46 Q94 40 100 32" stroke={C.cheese} strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  ),

  corn: (uid) => (
    <g>
      <Ground />
      <clipPath id={`${uid}-corn`}>
        <path d="M40 48 L80 48 L74 102 Q60 108 46 102 Z" />
      </clipPath>
      <path d="M40 48 L80 48 L74 102 Q60 108 46 102 Z" fill={C.white} />
      <g clipPath={`url(#${uid}-corn)`}>
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle
              key={`${row}-${col}`}
              cx={46 + col * 9.5 + (row % 2 ? 4.5 : 0)}
              cy={56 + row * 9}
              r="4.6"
              fill={C.fry}
            />
          )),
        )}
      </g>
      <ellipse cx="60" cy="48" rx="20" ry="5.5" fill={C.creamDark} />
      <rect x="52" y="42" width="16" height="7" rx="3.5" fill={C.butter} />
    </g>
  ),

  sauce: () => (
    <g>
      <Ground rx={26} />
      <path d="M40 56 L80 56 L75 96 Q60 101 45 96 Z" fill={C.white} />
      <ellipse cx="60" cy="56" rx="20" ry="6.5" fill={C.creamDark} />
      <ellipse cx="60" cy="56" rx="14" ry="4.4" fill={C.red} />
      <path d="M52 56 q8 -3 16 0" stroke={C.redDark} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M46 74 Q60 79 74 74" stroke={C.creamDark} strokeWidth="2.2" fill="none" />
    </g>
  ),

  cola: (uid) => (
    <g>
      <Ground rx={28} />
      <clipPath id={`${uid}-cola`}>
        <path d="M36 44 L84 44 L77 102 Q60 108 43 102 Z" />
      </clipPath>
      <path d="M36 44 L84 44 L77 102 Q60 108 43 102 Z" fill={C.white} />
      <g clipPath={`url(#${uid}-cola)`}>
        <path d="M34 62 L86 62 L86 86 L34 86 Z" fill={C.red} />
        <circle cx="46" cy="70" r="2.6" fill={C.white} opacity="0.9" />
        <circle cx="58" cy="78" r="2.2" fill={C.white} opacity="0.8" />
        <circle cx="70" cy="69" r="2.4" fill={C.white} opacity="0.9" />
      </g>
      <ellipse cx="60" cy="44" rx="25" ry="7" fill="#e3e7ea" />
      <path d="M40 42 Q60 30 80 42 Z" fill="#eef1f3" />
      <rect x="70" y="10" width="7" height="32" rx="3.5" fill={C.red} transform="rotate(14 73 26)" />
      <ellipse cx="60" cy="43" rx="17" ry="4.4" fill="#f6f8f9" />
    </g>
  ),

  tea: (uid) => (
    <g>
      <Ground rx={28} />
      <rect x="38" y="38" width="44" height="64" rx="10" fill="#dcebf2" />
      <clipPath id={`${uid}-tea`}>
        <rect x="41" y="41" width="38" height="58" rx="8" />
      </clipPath>
      <g clipPath={`url(#${uid}-tea)`}>
        <rect x="41" y="52" width="38" height="47" fill={C.amber} />
        <rect x="46" y="58" width="13" height="13" rx="3" fill={C.white} opacity="0.75" transform="rotate(-12 52 64)" />
        <rect x="60" y="74" width="12" height="12" rx="3" fill={C.white} opacity="0.75" transform="rotate(14 66 80)" />
      </g>
      <rect x="38" y="38" width="44" height="64" rx="10" fill="none" stroke="#c3d9e4" strokeWidth="2.4" />
      <circle cx="79" cy="42" r="10" fill="#ffd54f" />
      <path d="M79 32 L79 52 M69 42 L89 42 M72 35 L86 49 M72 49 L86 35" stroke="#ffb300" strokeWidth="1.6" />
      <circle cx="79" cy="42" r="10" fill="none" stroke="#f0a832" strokeWidth="2.4" />
    </g>
  ),

  coffee: (uid) => (
    <g>
      <Ground rx={28} />
      <path d="M40 12 q6 6 0 12 M52 10 q6 6 0 12" stroke={C.creamDark} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
      <clipPath id={`${uid}-coffee`}>
        <path d="M38 46 L82 46 L76 102 Q60 107 44 102 Z" />
      </clipPath>
      <path d="M38 46 L82 46 L76 102 Q60 107 44 102 Z" fill={C.white} />
      <g clipPath={`url(#${uid}-coffee)`}>
        <rect x="36" y="58" width="48" height="26" fill={C.coffee} />
        <circle cx="52" cy="66" r="2.4" fill={C.white} opacity="0.5" />
        <circle cx="66" cy="74" r="2" fill={C.white} opacity="0.5" />
      </g>
      <path d="M36 40 L84 40 L84 47 L36 47 Z" fill="#e3e7ea" />
      <ellipse cx="60" cy="40" rx="24" ry="6" fill="#eef1f3" />
      <ellipse cx="60" cy="39" rx="17" ry="3.6" fill="#c9a27b" />
    </g>
  ),

  juice: (uid) => (
    <g>
      <Ground rx={26} />
      <rect x="40" y="42" width="40" height="60" rx="9" fill="#fdeeda" />
      <clipPath id={`${uid}-juice`}>
        <rect x="43" y="45" width="34" height="54" rx="7" />
      </clipPath>
      <g clipPath={`url(#${uid}-juice)`}>
        <rect x="43" y="56" width="34" height="43" fill="#ffa726" />
        <ellipse cx="60" cy="56" rx="17" ry="4" fill="#ffbd59" />
      </g>
      <rect x="40" y="42" width="40" height="60" rx="9" fill="none" stroke="#f0d9b8" strokeWidth="2.4" />
      <circle cx="80" cy="46" r="10" fill="#ffb74d" />
      <path d="M80 36 L80 56 M70 46 L90 46 M73 39 L87 53 M73 53 L87 39" stroke="#ff8f00" strokeWidth="1.6" />
      <circle cx="80" cy="46" r="10" fill="none" stroke="#fb8c00" strokeWidth="2.4" />
    </g>
  ),

  iceCream: () => (
    <g>
      <Ground rx={22} />
      <path d="M44 62 L76 62 L62 106 Q60 108 58 106 Z" fill="#e8a33d" />
      <path d="M46 68 L72 68 M50 76 L68 76 M54 86 L64 86 M48 72 L66 88 M56 68 L70 80" stroke="#c9881f" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="60" cy="52" rx="19" ry="13" fill="#fdf3e3" />
      <ellipse cx="60" cy="38" rx="14" ry="10" fill="#fdf3e3" />
      <path d="M47 52 q6 8 13 0 q7 8 13 0 q5 6 9 1" stroke="#f0e0c8" strokeWidth="2.4" fill="none" />
      <path d="M50 30 q10 -10 20 0 q-4 6 -10 4 q-6 2 -10 -4 Z" fill={C.red} />
      <circle cx="60" cy="24" r="4.4" fill={C.red} />
    </g>
  ),

  shake: (uid) => (
    <g>
      <Ground rx={24} />
      <rect x="42" y="50" width="36" height="54" rx="9" fill="#fce4ec" />
      <clipPath id={`${uid}-shake`}>
        <rect x="45" y="53" width="30" height="48" rx="7" />
      </clipPath>
      <g clipPath={`url(#${uid}-shake)`}>
        <rect x="45" y="62" width="30" height="39" fill={C.pink} />
        <circle cx="55" cy="70" r="4" fill="#fce4ec" opacity="0.8" />
        <circle cx="66" cy="82" r="3.4" fill="#fce4ec" opacity="0.8" />
      </g>
      <rect x="42" y="50" width="36" height="54" rx="9" fill="none" stroke="#f3c4d4" strokeWidth="2.2" />
      <circle cx="54" cy="42" r="9" fill={C.white} />
      <circle cx="66" cy="40" r="10" fill={C.white} />
      <circle cx="60" cy="34" r="8.4" fill={C.white} />
      <path d="M50 48 Q60 54 70 48" stroke="#f3c4d4" strokeWidth="2" fill="none" />
      <circle cx="60" cy="26" r="4.6" fill={C.red} />
      <rect x="68" y="8" width="5.4" height="34" rx="2.7" fill="#5ec6d8" transform="rotate(-12 70 25)" />
    </g>
  ),

  donut: () => (
    <g>
      <Ground rx={30} />
      <circle cx="60" cy="60" r="31" fill="#e8a33d" />
      <path
        d="M32 54 Q33 34 60 33 Q87 34 88 54 Q88 60 82 58 Q80 66 74 62 Q72 70 65 64 Q62 72 55 65 Q50 72 45 63 Q39 68 38 58 Q32 60 32 54 Z"
        fill={C.pink}
      />
      <circle cx="60" cy="60" r="11" fill="#ffffff" />
      <circle cx="60" cy="60" r="11" fill="none" stroke="#f0a832" strokeWidth="2" opacity="0.6" />
      {([
        [44, 44, -20, "#5ec6d8"],
        [56, 38, 15, "#ffd54f"],
        [70, 41, -30, "#79b83e"],
        [78, 50, 20, C.red],
        [40, 56, 40, C.red],
        [62, 50, -15, "#5ec6d8"],
      ] as Array<[number, number, number, string]>).map(([x, y, r, f], i) => (
        <rect key={i} x={x} y={y} width="7" height="2.8" rx="1.4" fill={f} transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </g>
  ),

  pie: () => (
    <g>
      <Ground rx={30} />
      <path d="M28 84 Q28 46 60 40 Q92 46 92 84 Z" fill="#e8a33d" />
      <path
        d="M30 84 q7 6 15 0 q7 6 15 0 q7 6 15 0 q7 6 15 0"
        stroke="#c9881f"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M42 74 Q44 56 58 50 M60 74 Q62 54 74 50" stroke="#c9881f" strokeWidth="2.6" fill="none" strokeLinecap="round" opacity="0.8" />
      <circle cx="46" cy="62" r="2" fill={C.white} />
      <circle cx="66" cy="58" r="2" fill={C.white} />
      <circle cx="78" cy="68" r="2" fill={C.white} />
    </g>
  ),

  cheesecake: (uid) => (
    <g>
      <Ground rx={30} />
      <clipPath id={`${uid}-cake`}>
        <path d="M60 32 L94 88 L26 88 Z" />
      </clipPath>
      <path d="M60 32 L94 88 L26 88 Z" fill="#fdf3e3" />
      <g clipPath={`url(#${uid}-cake)`}>
        <rect x="24" y="78" width="72" height="12" fill="#e8c98f" />
        <path d="M52 32 Q60 44 68 32 Q70 40 78 38 L88 54 L30 54 Q44 46 52 32 Z" fill={C.berry} />
        <circle cx="60" cy="26" r="6" fill={C.berry} />
        <circle cx="60" cy="26" r="2.6" fill={C.redDark} />
      </g>
      <path d="M60 32 L94 88 L26 88 Z" fill="none" stroke="#f0e0c8" strokeWidth="2" />
    </g>
  ),
};

export function FoodArt({ art, className }: { art: FoodArtKey; className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      {arts[art](uid)}
    </svg>
  );
}
