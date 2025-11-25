'use client';
import { useTranslation } from 'react-i18next';
import Roadmap from "./Roadmap";
import FadeIn from '../FadeIn';

export default function About() {
const { t } = useTranslation('common');
return ( <section id="about" className="py-20 bg-black text-white text-center relative overflow-hidden border-t-3 border-t-amber-500 border-dashed">

  {/* 背景画像 */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url('/img/icon/valoriasanctum.jpg')`
    }}
  />
  {/* 黒のオーバーレイ（暗さを固定） */}
  <div className="absolute inset-0 bg-black/80 z-0"></div>
  <FadeIn delay={30}>
  <h2 className="text-4xl font-serif text-gold-500 mb-6 relative z-10">
    {t('AboutTitle')}
  </h2>
  </FadeIn>
  <FadeIn delay={30}>
  <p className="max-w-3xl mx-auto text-white/80 relative z-10 mb-8">
    {t('AboutText')}
  </p>
  </FadeIn>
  {/* SNS参加ボタン */}
  <div className="flex justify-center items-center gap-6 mb-8 relative z-10">
    <FadeIn delay={150}>
    <a href="https://x.com/SanctumAtelier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg transition-colors">
      <img src="/img/icon/x.png" alt="X" className="w-6 h-6 rounded-full" />
      {t('follow')}
    </a>
    </FadeIn>
    <FadeIn delay={150}>
    <a href="https://discord.gg/sMc56a88m5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-lg transition-colors">
      <img src="/img/icon/d.jpg" alt="Discord" className="w-6 h-6 rounded-full" />
      {t('join now')}
    </a>
    </FadeIn>
  </div>
  <div className="relative z-10">
    <Roadmap />
  </div>
</section>
);
}
