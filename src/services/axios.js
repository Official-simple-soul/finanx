import axios from 'axios';
import { crypto_list } from './data';

export const fetchMarketData = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto_list.join(
        ','
      )}&vs_currencies=usd&include_24hr_change=true`
    );

    const result =
      response.data;

    const array = Object.keys(result).map((key) => {
      return {
        symbol: key,
        price: result[key].usd,
        change: result[key].usd_24h_change,
      };
    });

    return array;
  } catch (err) {
    console.error('Unexpected error:', err);
    return null;
  }
};
