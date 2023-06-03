import React, { useState } from "react";
import { currencies } from "./currencies";
import { Result } from "./Result";
import "./style.css";

const Form = ({ calculateResult, result, setResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    const handleReset = () => {
        setAmount("");
        setResult("");
    }
       
    return (
        <form
            className="form "
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota w PLN*:</span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
                            name="amountInPln"
                            type="number"
                            min="1"
                            step="any"
                            required
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Przelicz na:</span>
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            className="form__field"
                            name="foreignCurrency">
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>*Pole obowiązkowe</p>
            < Result result={result} />
            <div>
                <button
                    className="form__button">
                    Przelicz
                </button>
            </div>
            <div>
                <button
                    className="form__button"
                    type="reset"
                    onClick={() => handleReset()}>
                    Wyczyść
                </button>
            </div>
            <p className="form__paragraph">Kalkulator przelicza wartość dowolnie wybranych walut. Najnowsza tabela kursów
                średnich NBP pochodzi z
                dnia
                2023-01-09.
            </p>
        </form>
    );
}

export default Form;