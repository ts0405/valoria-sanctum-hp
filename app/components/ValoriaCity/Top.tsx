"use client";
import { useTranslation } from 'react-i18next';
import FadeIn from '../FadeIn';

export default function Top() {
    const { t } = useTranslation('common');
    return (
        <FadeIn delay={30}>
        <section id="metaverse" className="pb-5 pt-10 text-white text-center border-t-4 border-amber-400 border-double">
            <h2 className="text-7xl font-cinzel text-amber-400 mb-6">Valoria City</h2>
            <p className="max-w-3xl mx-auto text-white/80 mb-10">
                {t('vcsubtitle')}
            </p>
        </section>
        </FadeIn>
    );
}