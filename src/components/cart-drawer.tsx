"use client";

import { useSite } from "@/components/cart-context";
import { FoodArt } from "@/components/food-art";
import { IconClose, IconMinus, IconPlus } from "@/components/icons";
import { formatPrice } from "@/lib/menu";

export function CartDrawer() {
  const { cartOpen, setCartOpen, lines, setQty, total, notify } = useSite();

  if (!cartOpen) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Закрыть корзину"
        onClick={() => setCartOpen(false)}
        className="animate-fade-in fixed inset-0 z-[60] cursor-default bg-ink/50 backdrop-blur-[2px]"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Корзина"
        className="animate-slide-in-right fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-cream shadow-float"
      >
        <div className="flex items-center justify-between border-b border-line bg-white px-5 py-4">
          <h3 className="text-xl font-black text-ink">
            Корзина
            {lines.length > 0 && (
              <span className="ml-2 rounded-full bg-brand/10 px-2.5 py-1 align-middle text-xs font-black text-brand">
                {lines.reduce((n, l) => n + l.qty, 0)}
              </span>
            )}
          </h3>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Закрыть"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand/40 hover:text-brand"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <FoodArt art="bucket" className="h-36 w-36 opacity-90" />
            <p className="text-lg font-extrabold text-ink">В корзине пока пусто</p>
            <p className="text-sm font-semibold text-ink-soft">
              Загляните в меню — стрипсы и крылья уже ждут.
            </p>
            <a
              href="#menu"
              onClick={() => setCartOpen(false)}
              className="btn-brand mt-2 rounded-full px-7 py-3.5 text-base font-extrabold"
            >
              Перейти в меню
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              {lines.map((l) => {
                const unit = l.product.price + (l.option?.price ?? 0);
                return (
                  <li
                    key={l.key}
                    className="flex items-center gap-3 rounded-3xl border border-line bg-white p-3"
                  >
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cream">
                      <FoodArt art={l.product.art} className="h-14 w-14" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-extrabold text-ink">{l.product.name}</p>
                      {l.option && <p className="text-xs font-bold text-ink-soft">{l.option.label}</p>}
                      <div className="mt-1.5 flex items-center justify-between gap-2">
                        <div className="flex items-center rounded-full bg-cream-dark text-ink">
                          <button
                            type="button"
                            onClick={() => setQty(l.key, l.qty - 1)}
                            aria-label="Убавить"
                            className="grid h-7 w-7 place-items-center rounded-full bg-white shadow-sm transition hover:text-brand"
                          >
                            <IconMinus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-black">{l.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(l.key, l.qty + 1)}
                            aria-label="Прибавить"
                            className="grid h-7 w-7 place-items-center rounded-full bg-white shadow-sm transition hover:text-brand"
                          >
                            <IconPlus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-black text-ink">{formatPrice(unit * l.qty)}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-line bg-white px-5 py-5">
              <div className="space-y-1.5 text-sm font-bold text-ink-soft">
                <div className="flex justify-between">
                  <span>Товары</span>
                  <span className="text-ink">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span className="font-extrabold text-[#4e8a1e]">бесплатно</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-dashed border-line pt-3">
                <span className="text-base font-extrabold text-ink">Итого</span>
                <span className="text-2xl font-black text-ink">{formatPrice(total)}</span>
              </div>
              <button
                type="button"
                onClick={() => notify("Это демо-дизайн — оформление недоступно")}
                className="btn-brand mt-4 h-14 w-full rounded-full text-lg font-extrabold"
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
