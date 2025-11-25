'use client';

import Top from "./NFTCollection/Top";
import About from "./NFTCollection/About";
import Roadmap from "./NFTCollection/List";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

type Props = {
  lang?: 'ja' | 'en'; 
};

export default function BrandHero({ lang }: Props) {
  const { i18n } = useTranslation('common');
  const [bgIndex, setBgIndex] = useState(0);

  // 言語切替（ここでだけやる）
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);
  return (
    <>
    <section className="bg-gray-900">
      <Top/>
      <About />
      <Roadmap />
    </section>
    </>
  );
}
