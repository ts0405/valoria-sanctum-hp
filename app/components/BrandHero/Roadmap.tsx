'use client';
import { useTranslation } from 'react-i18next';
import FadeIn from '../FadeIn';

export default function Roadmap() {
  const { t } = useTranslation('common');
  const roadmap = t('Roadmaps', { returnObjects: true }) as { phase: string;state:string, text: string, text2: string}[];

  return (
    <section id="roadmap" className="py-20 text-white">
    <FadeIn delay={10}>
    <h2 className="text-4xl font-serif text-gold-500 mb-10 text-center">Roadmap</h2>
    </FadeIn>
    <ul className="max-w-3xl mx-auto space-y-6">
      {roadmap.map((item, index) => (  
      <FadeIn key={index} delay={300}>
      <li key={index} className="rounded-2xl border bg-linear-to-br to-black/40 p-6 backdrop-blur-md transition duration-150 border-gray-300/30 from-gray-400/20 hover:shadow-[0_0_30px_rgba(200,200,200,0.35)]">
        <div className="mb-2">
          <span className="font-bold text-gold-400 mr-2 ">{item.phase}</span>
          <span className='font-serif'>{item.text}</span>
        </div>
        <div className="font-serif font-extrabold text-center text-white/80 mt-2">
          {item.text2}
        </div>
      </li>
      <span
        className={[
          'border-b border-r border-l rounded-b-xl p-10 pt-1.5 pb-3 border-amber-50/30',
          index === 0
            ? 'bg-green-400/30'
            : index === 1
            ? 'bg-blue-400/30'
            : 'bg-gray-400/30',
        ].join(' ')}
      >
        {item.state}
      </span>
      </FadeIn>
      ))}
    </ul>
    </section>
  );
}
