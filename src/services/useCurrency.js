import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrency = (base = 'USD') => {
  const [rates, setRates] = useState(null);
  const [currencyWithFlag, setCurrencyWithFlag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const ratesResponse = await axios.request({
          method: 'GET',
          url: `https://currencyapi-net.p.rapidapi.com/rates?output=JSON&base=${base}`,
          headers: {
            'X-RapidAPI-Key':
              'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
            'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com',
          },
        });
        setRates(ratesResponse.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchCountryFlag = async (currencyCode) => {
      try {
        const countriesResponse = await axios.get(
          `https://restcountries.com/v3.1/currency/${currencyCode.toLowerCase()}`
        );
        return countriesResponse.data[0]?.flag || ''; // Using SVG flag if available
      } catch (error) {
        console.error('Error fetching country flag:', error);
        return ''; // Return a fallback or empty string in case of an error.
      }
    };

    const fetchCurrencies = async () => {
      try {
        const currenciesResponse = await axios.request({
          method: 'GET',
          url: 'https://currencyapi-net.p.rapidapi.com/currencies',
          params: { output: 'JSON' },
          headers: {
            'X-RapidAPI-Key':
              'aa9fe9fa58msh53c01e7eb8c954ap12c810jsn1571c226b0f4',
            'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com',
          },
        });
        const currenciesData = currenciesResponse.data.currencies;

        const flagPromises = Object.keys(currenciesData).map(async (curr) => {
          const flag = await fetchCountryFlag(curr);
          return { currCode: curr, currFlag: flag };
        });

        const results = await Promise.all(flagPromises);
        setCurrencyWithFlag(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchCurrencyRates();
    fetchCurrencies();
  }, [base]);

  return { loading, error, rates, currencyWithFlag };
};

export default useCurrency;
