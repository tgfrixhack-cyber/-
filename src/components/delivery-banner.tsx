"use client";

import { FoodArt } from "@/components/food-art";
import { IconPhone, IconStar } from "@/components/icons";
import { Reveal } from "@/components/reveal";

function StoreBadge({ top, bottom }: { top: string; bottom: string }) {
  return (
    <a
      href="#"
      className="flex h-14 items-center gap-3 rounded-2xl bg-ink px-5 text-white transition-transform hover:-translate-y-0.5"
    >
      <IconStar className="h-6 w-6 text-gold" />
      <span className="leading-tight">
        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60">{top}</span>
        <span className="block text-base font-extrabold">{bottom}</span>
      </span>
    </a>
  );
}

export function DeliveryBanner() {
  return (
    <section id="delivery" className="mx-auto max-w-7xl scroll-mt-32 px-4 py-14 sm:px-6 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-[#ff2d4f] via-brand to-brand-dark px-6 py-10 text-white shadow-card sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute inset-y-0 right-1/4 w-40 opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0 14px, transparent 14px 34px)",
            }}
            aria-hidden="true"
          />
          <div
            className="animate-blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest">
                Приложение KFC
              </span>
              <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight sm:text-4xl">
                Скачайте приложение — баскет S в подарок к первому заказу
              </h2>
              <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-white/85">
                Копите баллы, отслеживайте курьера на карте и узнавайте об акциях раньше всех.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <StoreBadge top="Скачать в" bottom="App Store" />
                <StoreBadge top="Доступно в" bottom="Google Play" />
              </div>
              <a
                href="tel:88003023535"
                className="mt-8 inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                  <IconPhone className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-white/60">
                    Звонок бесплатный
                  </span>
                  <span className="block text-xl font-black">8 800 302-35-35</span>
                </span>
              </a>
            </div>

            <div className="relative mx-auto h-64 w-full max-w-sm sm:h-72" aria-hidden="true">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
              <div className="animate-spin-slow absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-white/30" />
              <FoodArt
                art="bucketWings"
                className="animate-float-y absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 sm:h-60 sm:w-60"
              />
              <FoodArt art="fries" className="animate-float-x absolute left-0 top-4 h-24 w-24 [animation-delay:-4s]" />
              <FoodArt
                art="cola"
                className="animate-float-y absolute bottom-2 right-2 h-24 w-24 [--tilt:5deg] [animation-delay:-3s]"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
