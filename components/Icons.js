// Inline SVG icons — no icon library dependency, all currentColor so they
// inherit brand colors. Stroke-based, 24x24 viewBox.

function base(props) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    ...props,
  };
}

export function FinanceIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9.5v5M18 9.5v5" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function WrenchIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 6a3.5 3.5 0 00-4.9 4.2l-5.4 5.4a1.5 1.5 0 002.1 2.1l5.4-5.4A3.5 3.5 0 0017 8.5l-2 2-1.5-1.5 2-2z" />
    </svg>
  );
}

export function BadgeIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5" />
      <path d="M10 9l1.5 1.5L14 8" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 3.5h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 013 5.5a2 2 0 012-2z" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 12l5 5L19 7" />
    </svg>
  );
}

export function PlayIcon(props) {
  return (
    <svg {...base({ fill: "currentColor", stroke: "none", ...props })}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const ICONS = {
  finance: FinanceIcon,
  shield: ShieldIcon,
  wrench: WrenchIcon,
  badge: BadgeIcon,
  phone: PhoneIcon,
};

export function EdgeIcon({ name, ...props }) {
  const Cmp = ICONS[name] || BadgeIcon;
  return <Cmp {...props} />;
}
