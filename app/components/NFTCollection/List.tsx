'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../FadeIn';

type NFTItem = {
  token_id: string;
  name: string | null;
  image_url: string | null;
  permalink?: string; // OpenSeaのURL
};

export default function List() {
  const { t } = useTranslation('common');
  const [items, setItems] = useState<NFTItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchNFTs() {
      const res = await fetch('/api/nfts');
      const data = await res.json();
      setItems(data.nfts ?? []);
    }
    fetchNFTs();
  }, []);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <section id="nft-list" className="py-20 text-white text-center">
      <FadeIn delay={150}>
      <h2 className="text-4xl mb-10 font-cinzel text-amber-400">
        NFT Art List
      </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5 max-w-6xl mx-auto">
        {items.slice(0, visibleCount).map((item, index) => (
          <FadeIn delay={10}>
          <a
            key={item.token_id ?? index}
            href={item.permalink ?? `https://opensea.io/collection/the-valoria-canvases?token=${item.token_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/40 backdrop-blur-lg p-5 rounded-2xl border border-amber-500/40 hover:border-amber-400 transition block"
          >
            {item.image_url ? (
              <img
                src={item.image_url}
                alt={item.name || `Token #${item.token_id}`}
                className="rounded-xl w-full h-64 object-cover border border-white/20"
              />
            ) : (
              <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            <h3 className="mt-4 text-xl font-cinzel text-amber-300">
              {item.name || `Token #${item.token_id}`}
            </h3>
          </a>
          </FadeIn>
        ))}
      </div>

      {visibleCount < items.length && (
        <button
          onClick={handleLoadMore}
          className="mt-10 px-6 py-3 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition"
        >
          {t('Show more')}
        </button>
      )}
    </section>
  );
}
