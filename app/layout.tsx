'use client';
import './globals.css';
import '../i18n'; // i18n 初期化
import Header from './components/Header';
import { Cinzel } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400','600','900'],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<'ja' | 'en'>('ja');

  useEffect(() => {
    // クライアントの言語を判定
    const browserLang = navigator.language.startsWith('ja') ? 'ja' : 'en';
    setLang(browserLang);

    // i18n が正しく初期化されていれば切り替え
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(browserLang);
    }
  }, [i18n]);

  return (
    <html lang={lang}>
      <body className={`bg-black text-white ${cinzel.className}`}>
        <Header lang={lang} />
        <main className="pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
