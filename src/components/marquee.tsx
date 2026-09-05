"use client";

import { IconStar } from "@/components/icons";

const phrases = [
  "11 трав и специй",
  "Доставка 30 минут",
  "Стрипсы из куриного филе",
  "Острые крылья",
  "Баскеты для компании",
  "Готовим после заказа",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {phrases.map((p) => (
        <span key={p} className="flex items-center gap-8 whitespace-nowrap">
          <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-white sm:text-base">{p}</span>
          <IconStar className="h-3.5 w-3.5 text-white/70" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="relative overflow-hidden py-2" aria-hidden="true">
      <div className="stripes-red -mx-2 -rotate-1 py-3.5 shadow-[0_14px_30px_-16px_rgba(228,0,43,0.55)]">
        <div className="marquee-track flex w-max">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
