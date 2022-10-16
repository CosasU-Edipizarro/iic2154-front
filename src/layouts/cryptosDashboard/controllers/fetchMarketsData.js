// Function to fetch market data from coinGecko API
import fetch from 'node-fetch';

const coinGecko = 'https://api.coingecko.com/api/v3';

async function fetchMarketsData(page = 1, perPage = 5) {
  const route = '/coins/markets';
  const baseParams = '?vs_currency=usd&order=market_cap_desc';
  const params = `${baseParams}&per_page=${perPage}&page=${page}&sparkline=false`;

  const data = await fetch(coinGecko + route + params)
    .then((response) => response.json())
    .then((json) => json.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      market_cap_rank: coin.market_cap_rank,
      market_cap: coin.market_cap,
      image: coin.image,
    })));

  return data;
}

export default fetchMarketsData;
