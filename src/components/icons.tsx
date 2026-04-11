// SVG icon components — no emoji

export const CheckCircle = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#fbbd23" />
    <path d="M7 11l3 3 5-5" stroke="hsl(230 40% 4%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const XCircle = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="hsl(0 84% 60% / 0.2)" />
    <path d="M8 8l6 6M14 8l-6 6" stroke="hsl(0 84% 60%)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WarningTriangle = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L1 18h18L10 2z" fill="hsl(0 84% 60% / 0.15)" stroke="hsl(0 84% 60% / 0.5)" strokeWidth="1" />
    <path d="M10 8v4M10 14v1" stroke="hsl(0 84% 60%)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CyanCheck = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="hsl(217 71% 68% / 0.15)" />
    <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CyanArrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M7 4l5 5-5 5" stroke="hsl(217 71% 68%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldCheck = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" fill="hsl(217 71% 68% / 0.15)" stroke="hsl(217 71% 68%)" strokeWidth="2" />
    <path d="M17 24l5 5 9-9" stroke="hsl(217 71% 68%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Industry icons
export const FoodIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14h22M5 14c0-5 4-9 9-9s9 4 9 9M7 14v4a3 3 0 003 3h8a3 3 0 003-3v-4" />
  </svg>
);

export const EcommerceIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h2l3 12h12l3-8H9M12 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);

export const ServiceIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="20" height="20" rx="3" />
    <path d="M4 10h20M10 10v14" />
  </svg>
);

export const AgencyIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="10" r="4" />
    <path d="M6 24c0-4 4-7 8-7s8 3 8 7" />
    <path d="M20 6l4 4-4 4" />
  </svg>
);

export const ConstructionIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 24h20M8 24V12l6-6 6 6v12M12 24v-6h4v6" />
  </svg>
);

export const RetailIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="8" width="20" height="16" rx="2" />
    <path d="M4 12h20M10 8V4h8v4" />
  </svg>
);

export const FinanceIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(217 71% 68%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="22" height="18" rx="3" />
    <path d="M3 11h22M8 16h4M8 19h8" />
  </svg>
);
