'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import FadeIn from './FadeIn';

type Props = {
  lang?: 'ja' | 'en'; 
};

export default function FAQs({ lang }: Props) {
  const { i18n } = useTranslation('common');
  const [bgIndex, setBgIndex] = useState(0);

  // 言語切替（ここでだけやる）
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);
  const { t } = useTranslation('common')
  return (
    <section id="FAQs" className="py-20 bg-black text-white text-center border-t-3 border-amber-400">
      <h2 className="text-4xl font-serif text-gold-500 mb-12">FAQs</h2>

      <div className="max-w-4xl mx-auto text-left space-y-8">
        <div>
          <FadeIn delay={30}>
          <h3 className="text-2xl font-semibold text-gold-400 mb-2">{t('Q1')}</h3>
          </FadeIn>
          <FadeIn delay={50}>
          <p className="text-white/80 pl-5 pr-10">
            {t('Q1text')}
          </p>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={30}>
          <h3 className="text-2xl font-semibold text-gold-400 mb-2">{t('Q2')}</h3>
          </FadeIn>
          <FadeIn delay={50}>
          <p className="text-white/80 pl-5 pr-10">
            {t('Q2text')}
          </p>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={30}>
          <h3 className="text-2xl font-semibold text-gold-400 mb-2">{t('Q3')}</h3>
          </FadeIn>
          <FadeIn delay={50}>
          <p className="text-white/80 pl-5 pr-10">
            {t('Q3text')}
          </p>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={30}>
          <h3 className="text-2xl font-semibold text-gold-400 mb-2">{t('Q4')}</h3>
          </FadeIn>
          <FadeIn delay={50}>
          <p className="text-white/80 pl-5 pr-10">
            {t('Q4text')}
          </p>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={30}>
          <h3 className="text-2xl font-semibold text-gold-400 mb-2">{t('Q5')}</h3>
          </FadeIn>
          <FadeIn delay={50}>
          <p className="text-white/80 pl-5 pr-10">
            {t('Q5text')}
          </p>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={30}>
          <h3 className="text-2xl font-semibold text-gold-400 mb-2">{t('Q6')}</h3>
          </FadeIn>
          <FadeIn delay={50}>
          <p className="text-white/80 pl-5 pr-10">
            {t('Q6text')}
          </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
