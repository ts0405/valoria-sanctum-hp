'use client';
import { useTranslation } from 'react-i18next';

export default function TechStack() {
const { t } = useTranslation('common');

return ( <section id="metaverse_TechStack" className="py-20 bg-black/90 text-white text-center px-4 md:px-20"> <h2 className="text-4xl font-bold mb-12">{t('Valoria City – Tech & Features')}</h2>

  <div className="max-w-4xl mx-auto text-left space-y-8">  
    {/* エンジン / プラットフォーム */}  
    <div>  
    <h3 className="text-2xl font-semibold mb-2">{t('Engine / Cross-Platform')}</h3>  
    <p className="mb-1">Unity 6 LTS + WebGL / PC / VR / Android / ios</p>
    <p className="text-gray-400">{t('→ R')}</p>  
    </div>  

    {/* NFT統合 */}  
    <div>  
      <h3 className="text-2xl font-semibold mb-2">{t('NFT Integration')}</h3>  
      <p className="mb-1">{t('OpenSea / Ethereum / Solana compatible')}</p>  
      <p className="text-gray-400">{t('→ D')}</p>  
    </div>  

    {/* 3Dインタラクション */}  
    <div>  
      <h3 className="text-2xl font-semibold mb-2">{t('3D Interaction')}</h3>  
      <p className="mb-1">{t('Avatar')}</p>  
      <p className="text-gray-400">→ {t('→ S')}</p>  
    </div>  

    {/* 追加予定機能 */}  
    <div>  
      <h3 className="text-2xl font-semibold mb-2">{t('Upcoming Features')}</h3>  
      <ul className="list-disc list-inside text-gray-400 space-y-1">  
        <li>{t('Virtual Land Marketplace')}</li>
        <li>{t('Online Events & Concerts')}</li>  
        <li>{t('Community Governance (DAO integration)')}</li>  
        <li>{t('Full cross-platform support')}</li>  
      </ul>
    </div>

    {/* セキュリティ & パフォーマンス */}  
    <div>  
      <h3 className="text-2xl font-semibold mb-2">{t('Security & Performance')}</h3>  
      <p className="mb-1">{t('Prove ownership via blockchain authentication')}</p>  
      <p className="text-gray-400">{t('→ Sm')}</p>  
    </div>  
  </div>  
</section>  
);
}
