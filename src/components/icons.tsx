import type { ReactNode } from "react";

function S({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconBag({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M6 8h12l1.2 12.2a1.8 1.8 0 0 1-1.8 1.8H6.6a1.8 1.8 0 0 1-1.8-1.8L6 8Z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </S>
  );
}

export function IconPin({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </S>
  );
}

export function IconPhone({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </S>
  );
}

export function IconSearch({ className }: { className?: string }) {
  return (
    <S className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </S>
  );
}

export function IconPlus({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M12 5v14M5 12h14" />
    </S>
  );
}

export function IconMinus({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M5 12h14" />
    </S>
  );
}

export function IconClose({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </S>
  );
}

export function IconHeart({ className, filled = false }: { className?: string; filled?: boolean }) {
  return (
    <S className={className}>
      <path
        d="M12 20.5S3.5 15.5 3.5 9.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.6c0 5.9-8.5 10.9-8.5 10.9Z"
        fill={filled ? "currentColor" : "none"}
      />
    </S>
  );
}

export function IconArrowRight({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </S>
  );
}

export function IconMenu({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </S>
  );
}

export function IconClock({ className }: { className?: string }) {
  return (
    <S className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </S>
  );
}

export function IconFlame({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="M12 3s1 2.6-1 5c-1.4 1.7-3 2.8-3 5.5a4 4 0 0 0 8 .2c1.2 1 1.6 2.4 1.2 3.8A6.5 6.5 0 0 1 5.5 14c0-5 5-6.4 6.5-11Z" />
    </S>
  );
}

export function IconCheck({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </S>
  );
}

export function IconChevron({ className }: { className?: string }) {
  return (
    <S className={className}>
      <path d="m6 9 6 6 6-6" />
    </S>
  );
}

export function IconStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2 2.7 6.6 7.1.5-5.4 4.6 1.7 7-6.1-3.8L5.9 20.7l1.7-7L2.2 9.1l7.1-.5L12 2Z" />
    </svg>
  );
}

export function IconBucket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5 8h14l-1.2 11.2a2.4 2.4 0 0 1-2.4 2.1H8.6a2.4 2.4 0 0 1-2.4-2.1L5 8Z" />
      <ellipse cx="12" cy="7" rx="8" ry="2.4" />
    </svg>
  );
}
