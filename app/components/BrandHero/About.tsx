'use client';
import { Trans, useTranslation } from 'react-i18next';
import Roadmap from "./Roadmap";
import FadeIn from '../FadeIn';
import Link from 'next/link';

const CTA_ITEMS = [
  {
    href: '/collection',
    titleKey: 'ctaCanvases',
    subtitle: 'NAC',
    style:
      'border-violet-400/30 from-violet-500/20 hover:shadow-[0_0_30px_rgba(167,139,250,0.35)]',
  },
  {
    href: '/ValoriaCity',
    titleKey: 'ctaCityAbout',
    subtitle: 'OM',
    style:
      'border-white/20 from-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]',
  },
  {
    href: 'https://opensea.io/collection/the-valoria-canvases',
    titleKey: 'ctaOpensea',
    subtitle: 'EM',
    style: 'border-dashed border-white/30 hover:bg-white/5',
    external: true,
  },
];

export default function About() {
  const { t } = useTranslation('common');
  return (<section id="about" className="py-20 bg-black text-white text-center relative overflow-hidden border-t-3 border-t-amber-500 border-dashed">

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
      <Trans
        i18nKey="AboutText"
        parent="p"
        className="whitespace-pre-line max-w-3xl mx-auto text-white/80 relative z-10 mb-8"
        components={{
          l: (<a href="/ValoriaCity" className="underline text-blue-400" />),
        }}
      />
    </FadeIn>
    <FadeIn delay={30}>
      <section className="relative mt-20 mb-20">
        {/* 背景の光 */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {CTA_ITEMS.map((item) => {
            const Card = (
              <div
                className={`group relative flex h-full flex-col justify-between rounded-2xl border bg-linear-to-br to-black/40 p-6 backdrop-blur-md transition duration-500 ${item.style}`}
              >
                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-white">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                    {t(item.subtitle)}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between text-sm text-white/70">
                  <span className="transition group-hover:opacity-100">
                    {t('Enter')}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Hover装飾 */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.12),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
              </div>
            );

            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Card}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                {Card}
              </Link>
            );
          })}
        </div>
      </section>
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
    <FadeIn delay={30}>
      <Trans
        i18nKey="BrandDescription"
        parent="p"
        className="whitespace-pre-line max-w-3xl mx-auto text-white/80 relative z-10 mt-20 rounded-2xl border bg-linear-to-br to-black/40 p-6 backdrop-blur-md transition duration-300 border-amber-400/30 from-amber-500/20 hover:shadow-[0_0_30px_rgba(145,145,10,0.35)]"
        components={{
          l: <a href="/collection" className="underline text-blue-400" />,
          lc: <a href="/ValoriaCity" className="underline text-blue-400" />,
        }}
      />
    </FadeIn>
    <div className="relative z-10">
      <Roadmap />
    </div>
  </section>
  );
}
