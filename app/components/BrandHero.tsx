'use client';

import Top from "./BrandHero/Top";
import About from "./BrandHero/About";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

type Props = { lang: 'ja' | 'en' };

export default function BrandHero({ lang }: Props) {
  const { i18n } = useTranslation('common');
  const [bgIndex, setBgIndex] = useState(0);

  // 言語切替（ここでだけやる）
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // 背景スライドショー
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="bg-white">
      <Top bgIndex={bgIndex} /> {/* ← lang は渡さない */}
      <About />
    </section>
    </>
  );
}
