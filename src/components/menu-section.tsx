"use client";

import { useEffect, useMemo, useState } from "react";
import { useSite } from "@/components/cart-context";
import { FoodArt } from "@/components/food-art";
import { IconHeart, IconMinus, IconPlus, IconSearch } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { categories, products, tagLabels, type CategoryId, type Product } from "@/lib/menu";

const tagStyles: Record<string, string> = {
  hit: "bg-brand text-white",
  new: "bg-gold text-ink",
  spicy: "bg-[#ffe0e5] text-brand",
  veg: "bg-[#e6f4d9] text-[#4e8a1e]",
  big: "bg-ink text-white",
};

const artBgs = ["#fff1e4", "#ffe9ee", "#fff7d9", "#e9f4e0", "#e8f1fa"];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { add, lines, setQty } = useSite();
  const [liked, setLiked] = useState(false);
  const [optId, setOptId] = useState(product.options?.items[0]?.id);

  const option = product.options?.items.find((o) => o.id === optId);
  const key = option ? `${product.id}:${option.id}` : product.id;
  const qty = lines.find((l) => l.key === key)?.qty ?? 0;
  const price = product.price + (option?.price ?? 0);

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-white shadow-card">
      <div className="relative h-40 shrink-0" style={{ background: artBgs[index % artBgs.length] }}>
        <FoodArt
          art={product.art}
          className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_14px_18px_rgba(23,17,14,0.14)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110"
        />
        {product.tags && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.tags.map((t) => (
              <span key={t} className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${tagStyles[t]}`}>
                {tagLabels[t]}
              </span>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Убрать из избранного" : "Добавить в избранное"}
          aria-pressed={liked}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-line bg-white/90 backdrop-blur transition-all hover:scale-110 ${
            liked ? "text-brand" : "text-ink-soft hover:text-brand"
          }`}
        >
          <span key={String(liked)} className={liked ? "animate-badge-pop" : ""}>
            <IconHeart className="h-4.5 w-4.5" filled={liked} />
          </span>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="text-[17px] font-extrabold leading-snug text-ink">{product.name}</h4>
        <p className="min-h-10 text-sm leading-snug text-ink-soft line-clamp-2">{product.description}</p>
        <p className="text-xs font-bold text-ink-soft/80">
          {product.weight} · {product.kcal} ккал
        </p>

        {product.options && (
          <div className="mt-1 flex gap-1 rounded-full bg-cream-dark p-1" role="radiogroup" aria-label={product.options.title}>
            {product.options.items.map((o) => (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={o.id === optId}
                onClick={() => setOptId(o.id)}
                className={`flex-1 rounded-full py-1.5 text-xs font-bold transition-all ${
                  o.id === optId ? "bg-white text-ink shadow-sm" : "text-ink-soft hover:text-ink"
                }`}
              >
                {o.label}
                {o.price > 0 && <span className="text-[10px] font-bold text-ink-soft"> +{o.price} ₽</span>}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="leading-none">
            <span className="text-xl font-black text-ink">{price.toLocaleString("ru-RU")} ₽</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm font-bold text-ink-soft/70 line-through">{product.oldPrice} ₽</span>
            )}
          </div>
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => add(product, option)}
              aria-label={`Добавить «${product.name}» в корзину`}
              className="btn-brand grid h-11 w-11 shrink-0 place-items-center rounded-full"
            >
              <IconPlus className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex h-11 shrink-0 items-center rounded-full bg-ink text-white">
              <button
                type="button"
                onClick={() => setQty(key, qty - 1)}
                aria-label="Убавить одну порцию"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/25"
              >
                <IconMinus className="h-4 w-4" />
              </button>
              <span className="w-7 text-center text-base font-black">{qty}</span>
              <button
                type="button"
                onClick={() => add(product, option)}
                aria-label="Прибавить одну порцию"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/25"
              >
                <IconPlus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function CategoryBlock({ id, index }: { id: CategoryId; index: number }) {
  const cat = categories.find((c) => c.id === id)!;
  const items = products.filter((p) => p.category === id);

  return (
    <div id={`cat-${id}`} className="scroll-mt-[150px] pb-4 pt-10" style={{ ["--cat-index" as string]: index }}>
      <Reveal className="mb-5 flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-white shadow-sm">
          <FoodArt art={cat.art} className="h-9 w-9" />
        </span>
        <h3 className="text-2xl font-black tracking-tight text-ink sm:text-[26px]">{cat.name}</h3>
        <span className="rounded-full bg-cream-dark px-3 py-1 text-xs font-black text-ink-soft">{items.length}</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={(i % 4) * 60} className="h-full">
            <ProductCard product={p} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function MenuSection() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<CategoryId>("hits");
  const q = query.trim().toLowerCase();

  const results = useMemo(
    () => (q ? products.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(q)) : []),
    [q],
  );

  useEffect(() => {
    if (q) return;
    const sections = categories
      .map((c) => document.getElementById(`cat-${c.id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id.replace("cat-", "") as CategoryId);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [q]);

  const goTo = (id: CategoryId) => {
    setActive(id);
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="menu" className="scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Меню</h2>
            <p className="mt-2 text-base font-semibold text-ink-soft">
              Всё готовим после заказа — выбирайте любимое
            </p>
          </div>
          <label className="relative block w-full sm:w-80">
            <IconSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Найти блюдо, например «стрипсы»"
              className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-[15px] font-semibold text-ink outline-none transition-all placeholder:font-medium placeholder:text-ink-soft/70 focus:border-brand/50 focus:shadow-[0_0_0_4px_rgba(228,0,43,0.08)]"
            />
          </label>
        </Reveal>
      </div>

      <div className="sticky top-[var(--header-h)] z-40 mt-6 glass border-y border-line/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="no-scrollbar scroll-fade-x flex gap-2 overflow-x-auto py-3">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => goTo(c.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                  active === c.id && !q
                    ? "border-ink bg-ink text-white shadow-[0_8px_18px_-8px_rgba(23,17,14,0.6)]"
                    : "border-line bg-white text-ink hover:border-brand/40 hover:text-brand"
                }`}
              >
                <FoodArt art={c.art} className="h-6 w-6" />
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        {q ? (
          <div className="pt-8">
            <h3 className="mb-5 text-xl font-black text-ink">
              Нашли {results.length} {results.length === 1 ? "блюдо" : results.length < 5 ? "блюда" : "блюд"}
              {query && <span className="text-ink-soft"> по запросу «{query.trim()}»</span>}
            </h3>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 4) * 60} className="h-full">
                    <ProductCard product={p} index={i} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 rounded-4xl border border-dashed border-line bg-white/60 px-6 py-14 text-center">
                <FoodArt art="drumstick" className="h-24 w-24 opacity-80" />
                <p className="text-lg font-extrabold text-ink">Ничего не нашлось</p>
                <p className="max-w-xs text-sm font-semibold text-ink-soft">
                  Попробуйте другое название — или просто листайте меню, там всё вкусное.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="btn-brand mt-2 rounded-full px-6 py-3 text-sm font-extrabold"
                >
                  Сбросить поиск
                </button>
              </div>
            )}
          </div>
        ) : (
          categories.map((c, i) => <CategoryBlock key={c.id} id={c.id} index={i} />)
        )}
      </div>
    </section>
  );
}
