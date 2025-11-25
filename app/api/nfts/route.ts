import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.opensea.io/api/v2/collection/the-valoria-canvases/nfts?limit=50',
      {
        headers: {
          'X-API-KEY': process.env.OPENSEA_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: response.statusText }, { status: response.status });
    }

    const data = await response.json();
    const nfts = (data.nfts ?? data.assets ?? []).map((n: any) => ({
      token_id: n.token_id,
      name: n.name,
      image_url: n.image_url,
    }));

    return NextResponse.json({ nfts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch NFTs' }, { status: 500 });
  }
}
