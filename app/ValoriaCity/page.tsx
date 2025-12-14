'use client';

import Top from "../components/ValoriaCity/Top";
import About from "../components/ValoriaCity/About";
import CurrentStage from "../components/ValoriaCity/CurrentStage"
import StepPlan from "../components/ValoriaCity/StepPlan"
import ImgList from "../components/ValoriaCity/ImgList"
import TechStack from "../components/ValoriaCity/TechStack"
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
      <section className="bg-black">
        <Top />
        <About />
        <StepPlan />
        <CurrentStage />
        <ImgList />
        <TechStack />
      </section>
    </>
  );
}
