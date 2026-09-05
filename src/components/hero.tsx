"use client";

import { FoodArt } from "@/components/food-art";
import { IconArrowRight, IconClock, IconFlame, IconStar } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "30 мин", label: "среднее время доставки" },
  { value: "11", label: "трав и специй в рецепте" },
  { value: "1000+", label: "ресторанов по стране" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dots-cream pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="animate-blob pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-blob pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/25 blur-3xl [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-16">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm">
              <IconFlame className="h-4 w-4 text-brand" />
              Доставка за 30 минут или подарок
            </span>
            <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[64px]">
              Жарко. Сочно.
              <br />
              <span className="text-flame">По-фирменному.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Курица в панировке из 11 трав и специй — от легендарных стрипсов до баскетов на всю
              компанию. Готовим после заказа и привозим горячим.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="btn-brand inline-flex h-14 items-center gap-2.5 rounded-full px-8 text-lg font-extrabold"
              >
                Смотреть меню
                <IconArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#cat-baskets"
                className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-7 text-lg font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
              >
                Баскет L — 1 249 ₽
              </a>
            </div>
            <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.value}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-black text-ink">{s.value}</dd>
                  <dd className="mt-1 max-w-[140px] text-[13px] font-semibold leading-snug text-ink-soft">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[480px]" aria-hidden="true">
            <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-brand/25" />
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold/50 via-brand/10 to-transparent" />

            <FoodArt
              art="bucketWings"
              className="animate-float-y absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 sm:h-72 sm:w-72"
            />
            <span
              className="animate-steam absolute left-[46%] top-[24%] h-8 w-1.5 rounded-full bg-white/70 blur-[2px]"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="animate-steam absolute left-[54%] top-[20%] h-10 w-1.5 rounded-full bg-white/70 blur-[2px]"
              style={{ animationDelay: "1.1s" }}
            />

            <FoodArt
              art="burgerBig"
              className="animate-float-x absolute right-0 top-6 h-28 w-28 [animation-delay:-3s]"
            />
            <FoodArt
              art="fries"
              className="animate-float-y absolute bottom-10 left-0 h-32 w-32 [--tilt:-6deg] [animation-delay:-2s]"
            />
            <FoodArt
              art="drumstick"
              className="animate-float-x absolute bottom-0 right-8 h-24 w-24 [animation-delay:-7s]"
            />

            <div className="animate-float-y absolute left-2 top-10 flex items-center gap-2.5 rounded-3xl border border-line bg-white/90 px-4 py-3 shadow-float backdrop-blur [animation-delay:-4.5s]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/25 text-gold">
                <IconStar className="h-4.5 w-4.5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-extrabold text-ink">Баскет L</span>
                <span className="block text-xs font-bold text-ink-soft">хит недели</span>
              </span>
            </div>
            <div className="animate-float-y absolute bottom-24 right-0 flex items-center gap-2 rounded-3xl border border-line bg-white/90 px-3.5 py-2.5 shadow-float backdrop-blur [animation-delay:-5.5s]">
              <IconClock className="h-4 w-4 text-brand" />
              <span className="text-sm font-extrabold text-ink">30 минут</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
