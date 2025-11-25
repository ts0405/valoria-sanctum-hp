'use client';
import { useTranslation } from 'react-i18next';

type Props = { bgIndex: number };

export default function Top({ bgIndex }: Props) {
  const { t } = useTranslation('common');

  // 背景画像リスト
  const bgImages = [
    '/img/background/1.png',
    '/img/background/3.jpg',
    '/img/background/4.jpg',
    '/img/background/5.jpg',
    '/img/background/6.jpg',
    '/img/background/2.jpg',
    '/img/background/7.png',
    '/img/background/8.jpg'
  ];

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      {bgImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2500`}
          style={{
            backgroundImage: `url(${img})`,
            opacity: idx === bgIndex ? 1 : 0,
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-serif text-[#ffd700] mb-6 TextDropShadow font-cinzel DropShadow fade-slide-up hover:scale-130 duration-250">Valoria Sanctum</h1>
        <p className="text-white/80 text-xl max-w-2xl mb-8 DropShadow TextDropShadowTitle duration-150 fade-slide-up-delay hover:text-amber-300 hover:scale-110">{t('title')}</p>
        <p className="px-6 py-3 bg-gold-500 text-gray-100 font-bold rounded hover:bg-gold-400 transition DropShadow fade-slide-up-delay2 hover:text-amber-300 hover:scale-110">{t('subtitle')}</p>
      </div>
    </div>
  );
}
