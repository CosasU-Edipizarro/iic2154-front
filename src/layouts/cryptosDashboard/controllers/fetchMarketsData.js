// Function to fetch market data from coinGecko API
import React from 'react';

const coinGecko = 'https://api.coingecko.com/api/v3';

const useFetch = (page = 1, perPage = 5) => {
  const route = '/coins/markets';
  const baseParams = '?vs_currency=usd&order=market_cap_desc';
  const params = `${baseParams}&per_page=${perPage}&page=${page}&sparkline=false`;

  const [response, setResponse] = React.useState({});
  const [error, setError] = React.useState({});
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(coinGecko + route + params, {});
        const json = await res.json();

        setResponse(json);
      } catch (error1) {
        setError({ error1 });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { response, error };
};

export default useFetch;
