"use client";
import { useTranslation } from "react-i18next";
import FadeIn from '../FadeIn';

export default function ImgList() {
  const { t } = useTranslation("common");

  return (
    <section
      id="metaverse_ImgList"
      className="py-20 bg-black/90 text-white text-center"
    >
    <FadeIn delay={50}>
    <h2 className="text-2xl sm:text-4xl md:text-7xl font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-lg mb-12">
        Valoria City – {t('Metaverse Preview')}
    </h2>
    </FadeIn>

      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* ------------- イメージ画像 ------------- */}
        <FadeIn delay={150}>
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <img
            src="/img/metaverse/sample1.jpg"
            alt="Valoria City Preview"
            className="w-full h-[380px] object-cover opacity-90 hover:opacity-100 transition"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 hover:opacity-100 transition">
            <p className="text-lg text-white/70 tracking-wide">
              Coming Soon — Valoria City Prototype
            </p>
          </div>
        </div>
        </FadeIn>

        {/*開発段階スナップショット*/}
        {/*
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <img
            src="/img/metaverse/sample2.jpg"
            alt="Valoria City Preview"
            className="w-full h-[380px] object-cover opacity-90 hover:opacity-100 transition"
          />

          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 hover:opacity-100 transition">
            <p className="text-lg text-white/70 tracking-wide">
              Development Snapshot
            </p>
          </div>
        </div>
        */}
      </div>
      <FadeIn delay={90}>
      <p className="text-gray-400 text-sm mt-8 italic">
        {t('Metaverse Preview2')}
      </p>
      </FadeIn>
    </section>
  );
}
