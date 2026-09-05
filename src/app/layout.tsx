import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "KFC — доставка курицы по оригинальному рецепту",
  description:
    "Стрипсы, крылья, баскеты и бургеры из курицы, приготовленной по оригинальному рецепту из 11 трав и специй. Доставка за 30 минут.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
