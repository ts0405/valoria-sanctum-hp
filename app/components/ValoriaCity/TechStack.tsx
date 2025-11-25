'use client';
import { useTranslation } from 'react-i18next';
import FadeIn from '../FadeIn';

export default function TechStack() {
const { t } = useTranslation('common');

return ( <section id="metaverse_TechStack" className="py-20 bg-black/90 text-white text-center px-4 md:px-20"> <h2 className="text-4xl font-bold mb-12">{t('Valoria City – Tech & Features')}</h2>

  <div className="max-w-4xl mx-auto text-left space-y-8">  
    {/* エンジン / プラットフォーム */}  
    <div>  
    <FadeIn delay={100}><h3 className="text-2xl font-semibold mb-2">{t('Engine / Cross-Platform')}</h3></FadeIn>
    <FadeIn delay={100}><p className="mb-1">Unity 6 LTS + WebGL / PC / VR / Android / ios</p></FadeIn>
    <FadeIn delay={100}><p className="text-gray-400">{t('→ R')}</p></FadeIn>
    </div>  

    {/* NFT統合 */}  
    <div>  
      <FadeIn delay={100}><h3 className="text-2xl font-semibold mb-2">{t('NFT Integration')}</h3></FadeIn>  
      <FadeIn delay={100}><p className="mb-1">{t('OpenSea / Ethereum / Solana compatible')}</p></FadeIn>
      <FadeIn delay={100}><p className="text-gray-400">{t('→ D')}</p></FadeIn>
    </div>  

    {/* 3Dインタラクション */}  
    <div>  
      <FadeIn delay={100}><h3 className="text-2xl font-semibold mb-2">{t('3D Interaction')}</h3></FadeIn>
      <FadeIn delay={100}><p className="mb-1">{t('Avatar')}</p></FadeIn>
      <FadeIn delay={100}><p className="text-gray-400">→ {t('→ S')}</p></FadeIn>  
    </div>  

    {/* 追加予定機能 */}  
    <div>  
      <FadeIn delay={100}><h3 className="text-2xl font-semibold mb-2">{t('Upcoming Features')}</h3></FadeIn>
      <FadeIn delay={100}><ul className="list-disc list-inside text-gray-400 space-y-1">
        <FadeIn delay={100}><li>{t('Virtual Land Marketplace')}</li></FadeIn>
        <FadeIn delay={100}><li>{t('Online Events & Concerts')}</li></FadeIn>
        <FadeIn delay={100}><li>{t('Community Governance (DAO integration)')}</li></FadeIn>
        <FadeIn delay={100}><li>{t('Full cross-platform support')}</li></FadeIn>
      </ul>
      </FadeIn>
    </div>

    {/* セキュリティ & パフォーマンス */}  
    <div>  
      <FadeIn delay={100}><h3 className="text-2xl font-semibold mb-2">{t('Security & Performance')}</h3></FadeIn>
      <FadeIn delay={100}><p className="mb-1">{t('Prove ownership via blockchain authentication')}</p></FadeIn>
      <FadeIn delay={100}><p className="text-gray-400">{t('→ Sm')}</p></FadeIn>
    </div>  
  </div>  
</section>  
);
}
