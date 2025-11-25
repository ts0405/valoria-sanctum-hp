"use client";
import { useTranslation } from "react-i18next";
import FadeIn from '../FadeIn';

export default function CurrentStage() {
    const { t } = useTranslation("common");

    return (
        <FadeIn delay={300}>
        <section
            id="metaverse_CurrentStage"
            className="
                relative pb-20 pt-24 
                bg-black text-white text-center 
                overflow-hidden
            "
        >
            {/* 背景のグリッチ風グリッド */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(100,0,255,0.3),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(0,255,255,0.1)_50%,rgba(0,255,255,0.1)_75%,transparent_75%,transparent)] bg-size-[40px_40px] opacity-10"></div>

            {/* タイトル */}
            <h2 className="text-4xl font-extrabold mb-10 tracking-wide drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">
                {t('Current Stage')}: <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400">{t('Current Stage sub')}</span>
            </h2>

            {/* 枠付きカード */}
            <div
                className="
                    relative max-w-3xl mx-auto px-8 py-10 
                    rounded-2xl 
                    bg-black/50 backdrop-blur-md 
                    border border-purple-500/40 
                    shadow-[0_0_20px_rgba(150,0,255,0.4)]
                    hover:shadow-[0_0_35px_rgba(200,0,255,0.7)] 
                    transition-shadow duration-500
                "
            >
                {/* カードの外周にネオンエッジ */}
                <div className="absolute inset-0 rounded-2xl border border-purple-400/30 blur-sm"></div>

                <p className="text-lg text-gray-300 leading-relaxed">
                    {t('Current Stage sub2')}
                </p>

                <p className="mt-6 text-gray-200 text-lg leading-relaxed">
                    {t('Current Stage sub3')}
                    <span className="text-purple-300 font-semibold drop-shadow-[0_0_8px_rgba(200,0,255,0.9)]">
                        {" "}
                        Genesis Founders
                    </span>
                    {t('Current Stage sub4')}
                </p>
            </div>
        </section>
        </FadeIn>
    );
}
