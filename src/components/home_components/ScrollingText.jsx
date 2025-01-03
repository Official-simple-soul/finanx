import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
// import { cryptoData } from '../../data/crypto';
import axios from 'axios';

async function fetchCryptocurrencyData() {
  const options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list',
    params: {
      edition_currency_id: '12',
      time_utc_offset: '28800',
      lang_ID: '1',
      sort: 'PERC1D_DN',
      page: '1',
    },
    headers: {
      //   'X-RapidAPI-Key': 'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
      'X-RapidAPI-Key': '5687e2b969mshc6e7ff50692d7abp1b3ee6jsn6c0dc748e2cd',
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log('response', response);
    return response.data; // Return the response data to the caller
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch cryptocurrency data');
  }
}

const ScrollingTextAnimation = () => {
  const [cryptoElement, setCryptoElement] = useState([]);

  async function fetchData() {
    try {
      const cryptocurrencyData = await fetchCryptocurrencyData();

      setCryptoElement(cryptocurrencyData.data[0].screen_data.crypto_data);
      // Process the fetched data or do anything you need with it
    } catch (error) {
      console.error(error.message);
      // Handle the error gracefully or show an error message to the user
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="scrolling-text-container space-x-3 bg-[#15243B] py-2">
      <Marquee>
        {cryptoElement?.map((data, index) => (
          <div className="text-[10px] mx-3 flex items-center" key={index}>
            <img src={data.logo_url} alt={data.name} className="w-3 h-3" />
            <h1 className="mx-1 text-blue-800">{data.name}</h1>
            <h1 className="text-gray-600">[{data.currency_symbol}]</h1>
            <h1 className="mx-1">${data.inst_price_usd}</h1>
            <h1 style={{ color: data.change_percent_7d_color }}>
              {data.change_percent_1d}
            </h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingTextAnimation;
