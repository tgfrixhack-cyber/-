"use client";

import { CartDrawer } from "@/components/cart-drawer";
import { SiteProvider, useSite } from "@/components/cart-context";
import { DeliveryBanner } from "@/components/delivery-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { IconCheck } from "@/components/icons";
import { Marquee } from "@/components/marquee";
import { MenuSection } from "@/components/menu-section";
import { Promos } from "@/components/promos";

function Toast() {
  const { toast } = useSite();
  if (!toast) return null;
  return (
    <div
      key={toast.id}
      role="status"
      className="animate-toast-in fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-ink py-3 pl-4 pr-6 text-sm font-bold text-white shadow-float"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#4e8a1e]">
        <IconCheck className="h-3.5 w-3.5" />
      </span>
      {toast.msg}
    </div>
  );
}

export function SiteShell() {
  return (
    <SiteProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Promos />
        <MenuSection />
        <DeliveryBanner />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </SiteProvider>
  );
}
