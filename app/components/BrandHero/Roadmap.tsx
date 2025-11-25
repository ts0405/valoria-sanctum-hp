'use client';
import { useTranslation } from 'react-i18next';

export default function Roadmap() {
  const { t } = useTranslation('common');
  const roadmap = t('Roadmaps', { returnObjects: true }) as { phase: string; text: string, text2: string}[];

  return (
    <section id="roadmap" className="py-20 text-white">
    <h2 className="text-4xl font-serif text-gold-500 mb-10 text-center">Roadmap</h2>
    <ul className="max-w-3xl mx-auto space-y-6">
      {roadmap.map((item, index) => (
      <li key={index} className="bg-gray-800 p-4 rounded-lg">
        <div className="mb-2">
          <span className="font-bold text-gold-400 mr-2 ">{item.phase}</span>
          <span className='font-serif'>{item.text}</span>
        </div>
        <div className="font-serif font-extrabold text-center text-white/80 mt-2">
          {item.text2}
        </div>
      </li>
      ))}
    </ul>
    </section>
  );
}
