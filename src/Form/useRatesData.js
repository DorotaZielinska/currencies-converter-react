import { useEffect, useState } from "react";
import axios from "axios";

const requestUrl = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(requestUrl);
                const { rates, date } = response.data;

                setRatesData({
                    status: "success",
                    rates,
                    date,
                });
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