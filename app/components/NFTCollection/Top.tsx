'use client';
import { useTranslation } from 'react-i18next';

const mockNFTs = Array.from({ length: 6 }, (_, i) => `/nft-placeholder-${i + 1}.jpg`);

export default function Collection() {
  const { t } = useTranslation('common');
  return (
    <section id="collection" className="py-20 text-white text-center border-t-3 border-t-amber-500">
      <h2 className="text-5xl font-cinzel text-amber-400">The Valoria Canvases</h2>
      <h3 className="text-xl font-cinzel text-white">NFT Collections</h3>

      {/* ロイヤリティ表示追加 */}
      <p className="mt-4 text-lg text-amber-300 font-cinzel">
        {t('Royalty')}: 3%
      </p>
    </section>
  );
}
