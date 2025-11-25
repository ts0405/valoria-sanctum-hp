"use client";
import { useTranslation } from 'react-i18next';

export default function StepPlan() {
    const { t } = useTranslation('common');

    const stages = [
        {
            title: t('Phase1'),
            desc: t('Phase1text'),
        },
        {
            title: t('Phase2'),
            desc: t('Phase2text'),
        },
        {
            title: t('Phase3'),
            desc: t('Phase3text'),
        },
        {
            title: t('Phase4'),
            desc: t('Phase4text'),
        }
    ];
    return (
        <section
            id="metaverse_CurrentStage"
            className="py-20 bg-black/95 text-white text-center relative overflow-hidden"
        >

            {/* --- 背景の光のエフェクト --- */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black opacity-70 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-widest">
                {t('StepPlan')}
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
                {stages.map((s, i) => (
                    <div
                        key={i}
                        className="group p-0.5 rounded-2xl bg-linear-to-r from-purple-600/40 to-indigo-500/40 hover:from-purple-400 hover:to-indigo-400 transition"
                    >
                        <div className="bg-black p-8 rounded-2xl h-full shadow-lg group-hover:shadow-purple-600/40 transition">
                            
                            <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition tracking-wide">
                                {s.title}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                {s.desc}
                            </p>

                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-14 text-gray-400 text-sm tracking-wide uppercase">
                {t('teo')}
            </p>
        </section>
    );
}
