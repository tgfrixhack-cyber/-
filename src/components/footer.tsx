"use client";

import { useSite } from "@/components/cart-context";
import { categories } from "@/lib/menu";

const socials = ["VK", "TG", "YT", "OK"];

const companyLinks = ["О компании", "Карьера", "Пресс-центр", "Франчайзинг", "Контакты"];

const helpLinks = ["Доставка и оплата", "Возврат", "Состав и аллергены", "Вопросы и ответы"];

export function Footer() {
  const { city } = useSite();

  return (
    <footer id="contacts" className="mt-10 rounded-t-5xl bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M5.5 9h13l-1.1 10.4a2.2 2.2 0 0 1-2.2 2H8.8a2.2 2.2 0 0 1-2.2-2L5.5 9Z" />
                <ellipse cx="12" cy="8" rx="7.5" ry="2.2" />
              </svg>
            </span>
            <span className="text-[22px] font-black tracking-tight">KFC</span>
          </div>
          <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed text-cream/60">
            Курица по оригинальному рецепту из 11 трав и специй. Готовим с любовью, доставляем горячим
            в {city}.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-xs font-black text-cream/70 transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                aria-label={s}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Категории меню">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cream/40">Меню</h3>
          <ul className="mt-4 space-y-2.5">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <a href={`#cat-${c.id}`} className="text-sm font-bold text-cream/75 transition-colors hover:text-white">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="О компании">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cream/40">Компания</h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm font-bold text-cream/75 transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cream/40">Помощь</h3>
          <ul className="mt-4 space-y-2.5">
            {helpLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm font-bold text-cream/75 transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:88003023535" className="mt-6 block text-2xl font-black text-white">
            8 800 302-35-35
          </a>
          <p className="mt-1 text-xs font-semibold text-cream/50">Ежедневно с 09:00 до 23:00</p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6">
          <p className="text-xs font-semibold text-cream/40">
            © 2026 KFC. Концепт-дизайн для портфолио. Не является официальным сайтом бренда.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs font-bold text-cream/50 transition-colors hover:text-cream">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs font-bold text-cream/50 transition-colors hover:text-cream">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
