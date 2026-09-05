export type FoodArtKey =
  | "bucket"
  | "bucketWings"
  | "burger"
  | "burgerBig"
  | "chickenBurger"
  | "longer"
  | "hotdog"
  | "wings"
  | "strips"
  | "nuggets"
  | "drumstick"
  | "bites"
  | "roll"
  | "salad"
  | "combo"
  | "fries"
  | "rustic"
  | "onionRings"
  | "cheeseBalls"
  | "corn"
  | "sauce"
  | "cola"
  | "tea"
  | "coffee"
  | "juice"
  | "iceCream"
  | "shake"
  | "donut"
  | "pie"
  | "cheesecake";

export type Option = {
  id: string;
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  weight: string;
  kcal: number;
  category: CategoryId;
  art: FoodArtKey;
  tags?: Array<"hit" | "new" | "spicy" | "veg" | "big">;
  options?: { title: string; items: Option[] };
};

export type CategoryId =
  | "hits"
  | "baskets"
  | "burgers"
  | "chicken"
  | "rolls"
  | "combo"
  | "snacks"
  | "sauces"
  | "drinks"
  | "desserts";

export type Category = {
  id: CategoryId;
  name: string;
  art: FoodArtKey;
};

export const categories: Category[] = [
  { id: "hits", name: "Хиты", art: "bucket" },
  { id: "baskets", name: "Баскеты", art: "bucketWings" },
  { id: "burgers", name: "Бургеры", art: "burger" },
  { id: "chicken", name: "Курица", art: "strips" },
  { id: "rolls", name: "Роллы и салаты", art: "roll" },
  { id: "combo", name: "Комбо", art: "combo" },
  { id: "snacks", name: "Закуски", art: "fries" },
  { id: "sauces", name: "Соусы", art: "sauce" },
  { id: "drinks", name: "Напитки", art: "cola" },
  { id: "desserts", name: "Десерты", art: "iceCream" },
];

const drinkSizes = {
  title: "Объём",
  items: [
    { id: "s", label: "0,4 л", price: 0 },
    { id: "m", label: "0,5 л", price: 30 },
    { id: "l", label: "0,7 л", price: 60 },
  ],
};

const portionSizes = {
  title: "Порция",
  items: [
    { id: "s", label: "Стандарт", price: 0 },
    { id: "l", label: "Большая", price: 70 },
  ],
};

export const products: Product[] = [
  // ─────────── ХИТЫ ───────────
  {
    id: "shefburger-de-luxe",
    name: "Шефбургер Де Люкс",
    description:
      "Крупное куриное филе в хрустящей панировке, два ломтика сыра чеддер, свежий салат айсберг, помидор и фирменный соус в булочке с кунжутом.",
    price: 429,
    oldPrice: 489,
    weight: "265 г",
    kcal: 641,
    category: "hits",
    art: "burgerBig",
    tags: ["hit", "big"],
  },
  {
    id: "basket-l",
    name: "Баскет L",
    description:
      "Восемь острых крылышек и восемь кусочков курицы в оригинальной панировке. Идеально, когда за столом собралась вся компания.",
    price: 1249,
    weight: "1 020 г",
    kcal: 2380,
    category: "hits",
    art: "bucketWings",
    tags: ["hit", "big"],
  },
  {
    id: "strips-3",
    name: "Стрипсы, 3 шт.",
    description:
      "Сочные полоски куриной грудки в двойной панировке. Тот самый вкус, за который сюда возвращаются.",
    price: 269,
    weight: "135 г",
    kcal: 322,
    category: "hits",
    art: "strips",
    tags: ["hit"],
    options: portionSizes,
  },
  {
    id: "rostics-roll",
    name: "Ростикс Ролл",
    description:
      "Стрипс из куриной грудки, салат айсберг, помидор и соус ранч в тонкой пшеничной лепёшке.",
    price: 239,
    weight: "170 г",
    kcal: 358,
    category: "hits",
    art: "roll",
    tags: ["hit"],
  },
  {
    id: "wings-spicy-5",
    name: "Острые крылья, 5 шт.",
    description:
      "Крылышки в остром маринаде и хрустящей панировке. Жгучие ровно настолько, насколько нужно.",
    price: 349,
    weight: "230 г",
    kcal: 520,
    category: "hits",
    art: "wings",
    tags: ["hit", "spicy"],
  },
  {
    id: "fries-classic",
    name: "Картофель фри",
    description: "Золотистые ломтики с идеальным балансом хруста и мягкости внутри.",
    price: 149,
    weight: "100 г",
    kcal: 275,
    category: "hits",
    art: "fries",
    tags: ["hit", "veg"],
    options: portionSizes,
  },

  // ─────────── БАСКЕТЫ ───────────
  {
    id: "basket-s",
    name: "Баскет S",
    description: "Четыре острых крылышка и четыре кусочка курицы в оригинальной панировке.",
    price: 699,
    weight: "510 г",
    kcal: 1190,
    category: "baskets",
    art: "bucket",
  },
  {
    id: "basket-l-2",
    name: "Баскет L",
    description: "Восемь острых крылышек и восемь кусочков курицы в оригинальной панировке.",
    price: 1249,
    weight: "1 020 г",
    kcal: 2380,
    category: "baskets",
    art: "bucketWings",
    tags: ["big"],
  },
  {
    id: "basket-wings-12",
    name: "Баскет Острые крылья, 12 шт.",
    description: "Дюжина крылышек в остром маринаде. Для тех, кто выбирает только крылья.",
    price: 849,
    weight: "552 г",
    kcal: 1248,
    category: "baskets",
    art: "wings",
    tags: ["spicy"],
  },
  {
    id: "basket-mix",
    name: "Баскет Микс",
    description:
      "Крылья, стрипсы и наггетсы в одном ведре — чтобы никто в компании не остался без любимого.",
    price: 1099,
    weight: "790 г",
    kcal: 1860,
    category: "baskets",
    art: "bucket",
    tags: ["new"],
  },
  {
    id: "basket-original-9",
    name: "Баскет Оригинальный, 9 шт.",
    description: "Девять кусочков курицы в панировке по оригинальному рецепту с 11 травами.",
    price: 989,
    weight: "765 г",
    kcal: 1719,
    category: "baskets",
    art: "drumstick",
  },
  {
    id: "basket-strips-9",
    name: "Баскет Стрипсы, 9 шт.",
    description: "Девять сочных стрипсов из куриной грудки в двойной панировке.",
    price: 929,
    weight: "405 г",
    kcal: 966,
    category: "baskets",
    art: "strips",
  },

  // ─────────── БУРГЕРЫ ───────────
  {
    id: "shefburger",
    name: "Шефбургер Оригинальный",
    description:
      "Куриное филе в панировке, сыр чеддер, салат айсберг и соус на основе майонеза в булочке с кунжутом.",
    price: 329,
    weight: "195 г",
    kcal: 476,
    category: "burgers",
    art: "burger",
    tags: ["hit"],
  },
  {
    id: "shefburger-junior",
    name: "Шефбургер Джуниор",
    description: "Компактная версия классики: куриное филе, салат и фирменный соус.",
    price: 199,
    weight: "135 г",
    kcal: 321,
    category: "burgers",
    art: "burger",
  },
  {
    id: "shefburger-de-luxe-2",
    name: "Шефбургер Де Люкс",
    description:
      "Крупное филе, двойной чеддер, помидор, айсберг и фирменный соус. Самый основательный бургер в меню.",
    price: 429,
    weight: "265 г",
    kcal: 641,
    category: "burgers",
    art: "burgerBig",
    tags: ["big"],
  },
  {
    id: "chicken-burger",
    name: "Чикен Бургер",
    description: "Куриная котлета в панировке, ломтик сыра и соус барбекю в пшеничной булочке.",
    price: 249,
    weight: "160 г",
    kcal: 398,
    category: "burgers",
    art: "chickenBurger",
  },
  {
    id: "burger-spicy",
    name: "Шефбургер Огонь",
    description:
      "Филе в острой панировке, перец халапеньо, сыр и соус чили. Для любителей поострее.",
    price: 359,
    weight: "205 г",
    kcal: 512,
    category: "burgers",
    art: "burgerBig",
    tags: ["spicy", "new"],
  },
  {
    id: "longer",
    name: "Лонгер",
    description: "Длинная булочка, куриное филе в панировке, айсберг и соус ранч.",
    price: 279,
    weight: "185 г",
    kcal: 441,
    category: "burgers",
    art: "longer",
  },
  {
    id: "longer-double",
    name: "Двойной Лонгер",
    description: "Два куриных филе в панировке на всю длину булочки. Двойная порция вкуса.",
    price: 399,
    weight: "265 г",
    kcal: 668,
    category: "burgers",
    art: "longer",
    tags: ["big"],
  },
  {
    id: "hotdog",
    name: "Хот-дог Ростикс",
    description: "Куриная колбаска, маринованный огурец, горчица и кетчуп в мягкой булочке.",
    price: 179,
    weight: "150 г",
    kcal: 352,
    category: "burgers",
    art: "hotdog",
  },

  // ─────────── КУРИЦА ───────────
  {
    id: "wings-spicy-9",
    name: "Острые крылья, 9 шт.",
    description: "Девять крылышек в остром маринаде и хрустящей панировке.",
    price: 649,
    weight: "414 г",
    kcal: 936,
    category: "chicken",
    art: "wings",
    tags: ["spicy"],
  },
  {
    id: "strips-5",
    name: "Стрипсы, 5 шт.",
    description: "Пять сочных полосок куриной грудки в двойной панировке.",
    price: 429,
    weight: "225 г",
    kcal: 537,
    category: "chicken",
    art: "strips",
    tags: ["hit"],
  },
  {
    id: "nuggets-6",
    name: "Наггетсы, 6 шт.",
    description: "Нежное куриное филе в лёгкой хрустящей панировке. Любимая закуска детей и взрослых.",
    price: 219,
    weight: "108 г",
    kcal: 259,
    category: "chicken",
    art: "nuggets",
  },
  {
    id: "nuggets-12",
    name: "Наггетсы, 12 шт.",
    description: "Двенадцать наггетсов — чтобы делиться или не делиться, решать вам.",
    price: 389,
    weight: "216 г",
    kcal: 518,
    category: "chicken",
    art: "nuggets",
  },
  {
    id: "original-3",
    name: "Курица Оригинальная, 3 шт.",
    description: "Три кусочка курицы на косточке в панировке по оригинальному рецепту.",
    price: 379,
    weight: "255 г",
    kcal: 573,
    category: "chicken",
    art: "drumstick",
    tags: ["hit"],
  },
  {
    id: "bites",
    name: "Байтс",
    description: "Небольшие кусочки куриного филе в пряной панировке. Удобно есть на ходу.",
    price: 209,
    weight: "105 г",
    kcal: 268,
    category: "chicken",
    art: "bites",
    tags: ["new"],
  },
  {
    id: "hot-legs",
    name: "Ножки Хот, 2 шт.",
    description: "Куриные ножки в остро-пряной панировке с насыщенным маринадом.",
    price: 299,
    weight: "190 г",
    kcal: 428,
    category: "chicken",
    art: "drumstick",
    tags: ["spicy"],
  },

  // ─────────── РОЛЛЫ И САЛАТЫ ───────────
  {
    id: "roll-deluxe",
    name: "Ролл Де Люкс",
    description: "Два стрипса, сыр чеддер, айсберг, помидор и фирменный соус в лепёшке.",
    price: 329,
    weight: "235 г",
    kcal: 498,
    category: "rolls",
    art: "roll",
    tags: ["hit"],
  },
  {
    id: "roll-caesar",
    name: "Цезарь Ролл",
    description: "Стрипс, салат романо, пармезан и соус цезарь в тонкой лепёшке.",
    price: 289,
    weight: "205 г",
    kcal: 431,
    category: "rolls",
    art: "roll",
  },
  {
    id: "roll-spicy",
    name: "Ролл Огонь",
    description: "Стрипс в острой панировке, халапеньо, айсберг и соус чили.",
    price: 299,
    weight: "210 г",
    kcal: 452,
    category: "rolls",
    art: "roll",
    tags: ["spicy"],
  },
  {
    id: "salad-caesar",
    name: "Салат Цезарь с курицей",
    description: "Салат романо, стрипсы, пармезан, сухарики и соус цезарь.",
    price: 349,
    weight: "220 г",
    kcal: 312,
    category: "rolls",
    art: "salad",
  },
  {
    id: "salad-chef",
    name: "Салат Шеф",
    description: "Микс салатов, кусочки курицы, помидоры черри и лёгкая заправка.",
    price: 319,
    weight: "210 г",
    kcal: 246,
    category: "rolls",
    art: "salad",
    tags: ["new"],
  },

  // ─────────── КОМБО ───────────
  {
    id: "combo-lunch",
    name: "Обед Бокс",
    description:
      "Шефбургер Оригинальный, картофель фри, соус на выбор и напиток 0,4 л. Полноценный обед в одной коробке.",
    price: 549,
    oldPrice: 627,
    weight: "620 г",
    kcal: 1024,
    category: "combo",
    art: "combo",
    tags: ["hit"],
  },
  {
    id: "combo-chef",
    name: "Шефбокс",
    description:
      "Шефбургер Де Люкс, стрипсы 3 шт., картофель по-деревенски, два соуса и напиток 0,5 л.",
    price: 799,
    oldPrice: 921,
    weight: "890 г",
    kcal: 1568,
    category: "combo",
    art: "combo",
    tags: ["big"],
  },
  {
    id: "combo-junior",
    name: "Комбо Джуниор",
    description: "Шефбургер Джуниор, наггетсы 4 шт., картофель фри и сок 0,2 л.",
    price: 429,
    weight: "455 г",
    kcal: 782,
    category: "combo",
    art: "combo",
  },
  {
    id: "combo-wings",
    name: "Комбо Крылья",
    description: "Острые крылья 5 шт., картофель фри, соус барбекю и напиток 0,4 л.",
    price: 599,
    oldPrice: 667,
    weight: "580 г",
    kcal: 1015,
    category: "combo",
    art: "combo",
    tags: ["spicy"],
  },
  {
    id: "combo-share",
    name: "Бокс для двоих",
    description:
      "Два Шефбургера Оригинальных, стрипсы 5 шт., большой картофель фри, два соуса и два напитка 0,5 л.",
    price: 1349,
    oldPrice: 1544,
    weight: "1 340 г",
    kcal: 2456,
    category: "combo",
    art: "combo",
    tags: ["big", "new"],
  },

  // ─────────── ЗАКУСКИ ───────────
  {
    id: "fries-classic-2",
    name: "Картофель фри",
    description: "Золотистые ломтики с идеальным балансом хруста и мягкости внутри.",
    price: 149,
    weight: "100 г",
    kcal: 275,
    category: "snacks",
    art: "fries",
    tags: ["veg"],
    options: portionSizes,
  },
  {
    id: "fries-rustic",
    name: "Картофель по-деревенски",
    description: "Дольки картофеля в кожуре с пряной посыпкой паприки и чеснока.",
    price: 169,
    weight: "115 г",
    kcal: 248,
    category: "snacks",
    art: "rustic",
    tags: ["veg", "hit"],
    options: portionSizes,
  },
  {
    id: "onion-rings",
    name: "Луковые кольца, 8 шт.",
    description: "Хрустящие кольца лука в кукурузной панировке.",
    price: 189,
    weight: "95 г",
    kcal: 302,
    category: "snacks",
    art: "onionRings",
    tags: ["veg"],
  },
  {
    id: "cheese-balls",
    name: "Сырные шарики, 5 шт.",
    description: "Расплавленный сыр моцарелла в золотистой панировке. Тянутся при каждом укусе.",
    price: 229,
    weight: "100 г",
    kcal: 318,
    category: "snacks",
    art: "cheeseBalls",
    tags: ["hit", "veg"],
  },
  {
    id: "corn",
    name: "Кукуруза",
    description: "Сладкие зёрна кукурузы с кусочком сливочного масла.",
    price: 109,
    weight: "90 г",
    kcal: 112,
    category: "snacks",
    art: "corn",
    tags: ["veg"],
  },

  // ─────────── СОУСЫ ───────────
  {
    id: "sauce-bbq",
    name: "Соус Барбекю",
    description: "Насыщенный дымный соус со сладковатым финалом.",
    price: 49,
    weight: "25 г",
    kcal: 38,
    category: "sauces",
    art: "sauce",
    tags: ["hit"],
  },
  {
    id: "sauce-cheese",
    name: "Соус Сырный",
    description: "Плотный сливочно-сырный соус для картофеля и наггетсов.",
    price: 59,
    weight: "25 г",
    kcal: 63,
    category: "sauces",
    art: "sauce",
  },
  {
    id: "sauce-garlic",
    name: "Соус Чесночный",
    description: "Сливочный соус с чесноком и зеленью.",
    price: 49,
    weight: "25 г",
    kcal: 71,
    category: "sauces",
    art: "sauce",
  },
  {
    id: "sauce-chili",
    name: "Соус Острый Чили",
    description: "Жгучий соус на основе красного перца чили.",
    price: 49,
    weight: "25 г",
    kcal: 29,
    category: "sauces",
    art: "sauce",
    tags: ["spicy"],
  },
  {
    id: "sauce-ketchup",
    name: "Кетчуп",
    description: "Классический томатный кетчуп.",
    price: 39,
    weight: "25 г",
    kcal: 24,
    category: "sauces",
    art: "sauce",
  },
  {
    id: "sauce-teriyaki",
    name: "Соус Терияки",
    description: "Сладко-солёный соус с нотами сои и имбиря.",
    price: 59,
    weight: "25 г",
    kcal: 41,
    category: "sauces",
    art: "sauce",
    tags: ["new"],
  },

  // ─────────── НАПИТКИ ───────────
  {
    id: "cola",
    name: "Кола",
    description: "Охлаждённый газированный напиток со льдом.",
    price: 149,
    weight: "0,4 л",
    kcal: 168,
    category: "drinks",
    art: "cola",
    tags: ["hit"],
    options: drinkSizes,
  },
  {
    id: "lemon-lime",
    name: "Лимон-Лайм",
    description: "Освежающая газировка с цитрусовым вкусом.",
    price: 149,
    weight: "0,4 л",
    kcal: 152,
    category: "drinks",
    art: "cola",
    options: drinkSizes,
  },
  {
    id: "orange-soda",
    name: "Апельсиновая газировка",
    description: "Яркий апельсиновый вкус и много пузырьков.",
    price: 149,
    weight: "0,4 л",
    kcal: 176,
    category: "drinks",
    art: "cola",
    options: drinkSizes,
  },
  {
    id: "ice-tea",
    name: "Холодный чай",
    description: "Чёрный чай с лимоном, подаётся со льдом.",
    price: 159,
    weight: "0,4 л",
    kcal: 120,
    category: "drinks",
    art: "tea",
    options: drinkSizes,
  },
  {
    id: "berry-mors",
    name: "Морс клюквенный",
    description: "Домашний морс из клюквы — кисло-сладкий и бодрящий.",
    price: 139,
    weight: "0,3 л",
    kcal: 96,
    category: "drinks",
    art: "juice",
    tags: ["new"],
  },
  {
    id: "orange-juice",
    name: "Апельсиновый сок",
    description: "Сок прямого отжима без добавления сахара.",
    price: 129,
    weight: "0,2 л",
    kcal: 88,
    category: "drinks",
    art: "juice",
  },
  {
    id: "americano",
    name: "Американо",
    description: "Свежесваренный кофе из зёрен средней обжарки.",
    price: 129,
    weight: "0,3 л",
    kcal: 6,
    category: "drinks",
    art: "coffee",
  },
  {
    id: "cappuccino",
    name: "Капучино",
    description: "Эспрессо с плотной молочной пенкой.",
    price: 179,
    weight: "0,3 л",
    kcal: 118,
    category: "drinks",
    art: "coffee",
    tags: ["hit"],
  },

  // ─────────── ДЕСЕРТЫ ───────────
  {
    id: "ice-cream",
    name: "Мороженое с топпингом",
    description: "Мягкое сливочное мороженое с топпингом на выбор.",
    price: 129,
    weight: "120 г",
    kcal: 218,
    category: "desserts",
    art: "iceCream",
    tags: ["hit"],
  },
  {
    id: "milkshake",
    name: "Молочный коктейль",
    description: "Густой коктейль на молоке и мороженом. Клубника, шоколад или ваниль.",
    price: 219,
    weight: "0,3 л",
    kcal: 342,
    category: "desserts",
    art: "shake",
  },
  {
    id: "donut",
    name: "Донат в глазури",
    description: "Воздушный пончик в шоколадной глазури с цветной посыпкой.",
    price: 119,
    weight: "70 г",
    kcal: 289,
    category: "desserts",
    art: "donut",
    tags: ["new"],
  },
  {
    id: "apple-pie",
    name: "Пирожок яблочный",
    description: "Хрустящее тесто и тёплая яблочная начинка с корицей.",
    price: 99,
    weight: "80 г",
    kcal: 231,
    category: "desserts",
    art: "pie",
  },
  {
    id: "cheesecake",
    name: "Чизкейк Нью-Йорк",
    description: "Классический сливочный чизкейк на песочной основе.",
    price: 199,
    weight: "110 г",
    kcal: 358,
    category: "desserts",
    art: "cheesecake",
  },
];

export const tagLabels: Record<NonNullable<Product["tags"]>[number], string> = {
  hit: "Хит",
  new: "Новинка",
  spicy: "Остро",
  veg: "Веган",
  big: "Большая порция",
};

export const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
  "Челябинск",
  "Самара",
  "Уфа",
  "Ростов-на-Дону",
  "Краснодар",
  "Красноярск",
  "Воронеж",
  "Пермь",
  "Волгоград",
  "Тюмень",
  "Сочи",
  "Калининград",
];

export function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
