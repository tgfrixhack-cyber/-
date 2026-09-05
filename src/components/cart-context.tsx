"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cities, type Option, type Product } from "@/lib/menu";

export type CartLine = {
  key: string;
  product: Product;
  option?: Option;
  qty: number;
};

type SiteState = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (product: Product, option?: Option) => void;
  setQty: (key: string, qty: number) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  city: string;
  setCity: (city: string) => void;
  toast: { id: number; msg: string } | null;
  notify: (msg: string) => void;
};

const SiteContext = createContext<SiteState | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [city, setCity] = useState(cities[0]);
  const [toast, setToast] = useState<SiteState["toast"]>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = (msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ id: Date.now(), msg });
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  const add = (product: Product, option?: Option) => {
    const key = option ? `${product.id}:${option.id}` : product.id;
    setLines((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { key, product, option, qty: 1 }];
    });
    notify(`${product.name} — в корзине`);
  };

  const setQty = (key: string, qty: number) => {
    setLines((prev) => (qty <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, qty } : l))));
  };

  const { count, total } = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const l of lines) {
      count += l.qty;
      total += (l.product.price + (l.option?.price ?? 0)) * l.qty;
    }
    return { count, total };
  }, [lines]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", cartOpen);
    return () => document.body.classList.remove("is-locked");
  }, [cartOpen]);

  return (
    <SiteContext.Provider
      value={{ lines, count, total, add, setQty, cartOpen, setCartOpen, city, setCity, toast, notify }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
