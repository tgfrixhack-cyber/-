"use client";

import { FoodArt } from "@/components/food-art";
import { IconArrowRight, IconStar } from "@/components/icons";
import { Reveal } from "@/components/reveal";

function Chip({ children, className }: { children: string; className: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-black uppercase tracking-widest ${className}`}>
      <IconStar className="h-3 w-3" />
      {children}
    </span>
  );
}

export function Promos() {
  return (
    <section id="promos" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-14 sm:px-6 lg:py-20">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Акции недели</h2>
          <p className="mt-2 text-base font-semibold text-ink-soft">Горячие предложения — успейте до воскресенья</p>
        </div>
        <a href="#menu" className="group inline-flex items-center gap-2 text-base font-extrabold text-brand">
          Все акции
          <IconArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="card-lift relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-5xl bg-gradient-to-br from-brand via-[#d60026] to-brand-dark p-7 text-white shadow-card sm:p-9">
            <div
              className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border-[26px] border-white/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full border-[20px] border-white/8"
              aria-hidden="true"
            />
            <FoodArt
              art="bucketWings"
              className="pointer-events-none absolute -bottom-4 right-4 h-44 w-44 rotate-6 sm:h-52 sm:w-52"
            />
            <div className="relative max-w-[62%]">
              <Chip className="bg-white/15 text-white">только воскресенье</Chip>
              <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">2 баскета по цене 1</h3>
              <p className="mt-3 text-base font-semibold leading-relaxed text-white/85">
                Закажите баскет S или L — второй привезём бесплатно. Промокод можно не вводить.
              </p>
            </div>
            <a
              href="#cat-baskets"
              className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-extrabold text-brand transition-transform hover:-translate-y-0.5"
            >
              Заказать баскет
              <IconArrowRight className="h-5 w-5" />
            </a>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="card-lift relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-5xl border border-line bg-[#fff1d6] p-7 shadow-card sm:p-8">
            <FoodArt art="combo" className="pointer-events-none absolute -bottom-2 -right-4 h-40 w-40" />
            <Chip className="w-fit bg-ink text-white">выгодно</Chip>
            <h3 className="relative mt-4 text-2xl font-black leading-tight text-ink sm:text-[28px]">
              Обед Бокс
              <br />
              от 549 ₽
            </h3>
            <p className="relative mt-3 max-w-[75%] text-[15px] font-semibold leading-relaxed text-ink-soft">
              Бургер, картофель, соус и напиток — полный обед дешевле, чем по отдельности.
            </p>
            <a
              href="#cat-combo"
              className="relative mt-auto inline-flex w-fit items-center gap-2 pt-5 text-base font-extrabold text-brand"
            >
              Собрать обед
              <IconArrowRight className="h-5 w-5" />
            </a>
          </article>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-1">
          <article className="card-lift relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-5xl border border-line bg-white p-7 shadow-card sm:p-8">
            <FoodArt art="bucket" className="pointer-events-none absolute -bottom-3 right-2 h-36 w-36" />
            <Chip className="w-fit bg-brand text-white">новинка</Chip>
            <h3 className="relative mt-4 text-2xl font-black leading-tight text-ink">Баскет Микс</h3>
            <p className="relative mt-3 max-w-[70%] text-[15px] font-semibold leading-relaxed text-ink-soft">
              Крылья, стрипсы и наггетсы в одном ведре — каждому своё.
            </p>
            <a
              href="#cat-baskets"
              className="relative mt-auto inline-flex w-fit items-center gap-2 pt-5 text-base font-extrabold text-brand"
            >
              Попробовать
              <IconArrowRight className="h-5 w-5" />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
