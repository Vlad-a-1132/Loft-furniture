import './globals.css';
import type { Metadata } from 'next';
import { Roboto, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: 'ROOMS - Мебель в стиле лофт',
  description: 'Уникальная, экологичная мебель ручной работы в стиле лофт',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${roboto.variable} ${playfair.variable} antialiased bg-[#f4f2ee]`}
      >
        <Header />
        <main className="min-h-screen pt-[61px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
