"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/components/cart-context";
import { IconBag, IconChevron, IconClose, IconMenu, IconPhone, IconPin } from "@/components/icons";
import { cities } from "@/lib/menu";

const navLinks = [
  { href: "#menu", label: "Меню" },
  { href: "#promos", label: "Акции" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contacts", label: "Рестораны" },
];

function Logo() {
  return (
    <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="KFC — на главную">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_20px_-8px_rgba(228,0,43,0.7)]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
          <path d="M5.5 9h13l-1.1 10.4a2.2 2.2 0 0 1-2.2 2H8.8a2.2 2.2 0 0 1-2.2-2L5.5 9Z" />
          <ellipse cx="12" cy="8" rx="7.5" ry="2.2" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-[22px] font-black tracking-tight text-ink">KFC</span>
        <span className="mt-0.5 block text-[10px] font-extrabold uppercase tracking-[0.22em] text-ink-soft">
          доставка
        </span>
      </span>
    </a>
  );
}

function CityPicker() {
  const { city, setCity } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 items-center gap-1.5 rounded-full border border-line bg-white px-3.5 text-sm font-bold text-ink transition-colors hover:border-brand/40"
      >
        <IconPin className="h-4 w-4 text-brand" />
        <span className="hidden sm:inline">{city}</span>
        <IconChevron className={`h-3.5 w-3.5 text-ink-soft transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <button
            type="button"
            aria-label="Закрыть выбор города"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="animate-pop-in absolute left-0 top-[calc(100%+10px)] z-50 w-56 rounded-3xl border border-line bg-white p-2 shadow-float">
            <p className="px-3 pb-1.5 pt-2 text-[11px] font-extrabold uppercase tracking-widest text-ink-soft">
              Ваш город
            </p>
            <div className="max-h-64 overflow-y-auto">
              {cities.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCity(c);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm font-bold transition-colors hover:bg-cream ${
                    c === city ? "text-brand" : "text-ink"
                  }`}
                >
                  {c}
                  {c === city && <span className="h-2 w-2 rounded-full bg-brand" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function Header() {
  const { count, setCartOpen } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 glass border-b transition-shadow duration-300 ${
        scrolled ? "border-line shadow-[0_10px_30px_-18px_rgba(23,17,14,0.4)]" : "border-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6">
        <Logo />
        <div className="ml-1 hidden h-8 w-px bg-line md:block" />
        <div className="hidden md:block">
          <CityPicker />
        </div>

        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[15px] font-bold text-ink/80 transition-colors hover:bg-brand/8 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="tel:88003023535"
            className="hidden h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-extrabold text-ink transition-colors hover:border-brand/40 xl:flex"
          >
            <IconPhone className="h-4 w-4 text-brand" />
            8 800 302-35-35
          </a>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="btn-brand flex h-11 items-center gap-2 rounded-full px-4 text-[15px] font-extrabold sm:px-5"
          >
            <IconBag className="h-5 w-5" />
            <span className="hidden sm:inline">Корзина</span>
            {count > 0 && (
              <span className="animate-badge-pop grid h-6 min-w-6 place-items-center rounded-full bg-white px-1 text-xs font-black text-brand">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="animate-pop-in glass absolute inset-x-0 top-full border-b border-line px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-ink transition-colors hover:bg-brand/8 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 md:hidden">
              <CityPicker />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
