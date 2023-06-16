import { useEffect, useState } from "react";
import axios from "axios";

const REQUEST_URL = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const { data: { rates, date }} = await axios.get(REQUEST_URL);
    
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