'use client';

import { useTranslation } from 'react-i18next';
import FadeIn from '../FadeIn';

export default function About() {
  const { t } = useTranslation('common');
  
  return (
    <section id="why-join" className="pb-16 text-white">
      
      {/* タイトル */}
      <div className='text-center pb-10'>
        <FadeIn delay={0}>
          <h2 className="text-4xl font-serif text-gold-500 mb-6">
            {t('TVCAboutTitle')}
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="max-w-3xl mx-auto text-white/80">
            {t('TVCAboutText')}
          </p>
        </FadeIn>
      </div>

      {/* 本文 */}
      <div className="container mx-auto px-6 max-w-4xl">

        <FadeIn delay={0}>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-400 mb-6">
            {t('TVCAboutTitle2')}
          </h2>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            {t('TVCAboutText2')}
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mb-6 p-6 rounded-lg bg-gray-800 border border-gray-700">
            <h3 className="text-xl font-semibold text-gold-300 mb-3">
              {t('TVCAboutTitle3')}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {t('As')}<strong>Valoria Sanctum</strong> {t('TVCAboutText3')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            {t('TVCAboutText4')}
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-lg leading-relaxed text-gray-200 mb-8">
            {t('TVCAboutText5')}
          </p>
        </FadeIn>

        {/* ボタン */}
        <FadeIn delay={550}>
          <div className="flex gap-4">
            <a 
              href="https://opensea.io/collection/the-valoria-canvases"
              className="inline-block px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold shadow hover:opacity-90 transition"
              target="_blank"
            >
              {t('Join Now')}
            </a>
            
            <a 
              href="#about"
              className="inline-block px-6 py-3 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800 transition"
            >
              {t('Learn More')}
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
