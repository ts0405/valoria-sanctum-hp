"use client";
import { useTranslation } from 'react-i18next';
import FadeIn from '../FadeIn';

export default function About() {
    const { t } = useTranslation('common');
    return (
        <FadeIn delay={150}>
        <section id="metaverse_about" className="pb-10 text-white text-center">
        <h2 className="text-4xl font-serif text-gold-500 mb-6 relative z-10">
            {t('vctitle')}
        </h2>
        <p className="max-w-3xl mx-auto text-white/80 relative z-10">
            {t('vctext')}
        </p>
        </section>
        </FadeIn>
    );
}