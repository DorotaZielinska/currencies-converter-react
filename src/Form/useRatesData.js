import { useEffect, useState } from "react";
import axios from "axios";

const REQUEST_URL = "https://api.apilayer.com/currency_data/live?source=PLN";
const apiKey = "6WcSEHow73hXw69zzAjtDYTIBxAK3ZPz";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(REQUEST_URL, {
          headers: { apiKey },
        });

        const { quotes, timestamp, success } = response.data;

        if (success) {
          const modifiedQuotes = Object.fromEntries(
            Object.keys(quotes).map((key) => [key.substring(3), quotes[key]])
          );

          setRatesData({
            state: "success",
            rates: modifiedQuotes,
            date: new Date(timestamp * 1000).toLocaleDateString(),
          });
        }
      } catch {
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchRates, 3000);
  }, []);

  return ratesData;
};
