'use client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

type Props = {
  lang?: 'ja' | 'en'; 
};

export default function Header({ lang }: Props) {
  const { t, i18n } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);

  // 言語切替
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  // スクロール監視
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50pxスクロールしたら変化
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 flex justify-center transition-all duration-300
        ${scrolled
          ? 'bg-transparent'
          : 'bg-black'}
      `}>
      <div className={`
        w-full sm:w-auto bg-black backdrop-blur-md flex flex-col sm:flex-row justify-between items-center
        gap-2 sm:gap-0 transition-all duration-300 rounded-4xl
        ${scrolled
          ? 'mx-4 my-2 pb-3 pt-2 sm:mx-4 sm:my-5 px-6 sm:py-3'
          : 'px-4 py-4'}
      `}>
        <h1 className={`text-lg sm:text-2xl font-cinzel text-[#ffd700] transition-all duration-300 lg:mr-50 fade-in
          ${scrolled ? 'hidden sm:block' : 'block'}
        `}>
          {t('brandName')}
        </h1>

        <nav className="flex flex-wrap justify-center sm:justify-end gap-4 mt-2 sm:mt-0">
          <a href="#about" className="text-white font-cinzel hover:text-[#ffd700] text-xs sm:text-base fade-in">{t('About')}</a>
          <a href="#collection" className="text-white font-cinzel hover:text-[#ffd700] text-xs sm:text-base fade-in">{t('Collection')}</a>
          <a href="#metaverse" className="text-white font-cinzel hover:text-[#ffd700] text-xs sm:text-base fade-in">{t('Metaverse')}</a>
          <a href="https://forms.gle/6WMaFECpLpaQfTgm7" target="_blank" className="text-white font-cinzel hover:text-[#ffd700] text-xs sm:text-base fade-in">{t('Contact')}</a>
        </nav>
      </div>
    </header>
  );
}
