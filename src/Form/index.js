import React, { useState } from "react";
import { currencies } from "./currencies";
import { Result } from "./Result";
import { Button, Field, FormFildset, FormLegend, Info, LabelText } from "./styled";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState("");

    const calculateResult = () => {
        const rate = currencies.find(({ short }) => short === currency).rate;
        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        })
    }

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
            className="form"
            onSubmit={onFormSubmit}
            result={result}
            calculateResult={calculateResult}
            setResult={setResult}
        >
            <FormFildset className="form__fieldset">
                <FormLegend>Kalkulator walut</FormLegend>
                <p>
                    <label>
                        <LabelText>Kwota w PLN*:</LabelText>
                        <Field
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
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
                        <LabelText>Przelicz na:</LabelText>
                        <Field
                            as="select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            name="foreignCurrency">
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </Field>
                    </label>
                </p>
            </FormFildset>
            <p>*Pole obowiązkowe</p>
            < Result result={result} />
            <p>
                <Button
                    className="form__button">
                    Przelicz
                </Button>
            </p>
            <p>
                <Button
                    className="form__button"
                    type="reset"
                    onClick={() => handleReset()}>
                    Wyczyść
                </Button>
            </p>
            <Info>Kalkulator przelicza wartość dowolnie wybranych walut. Najnowsza tabela kursów
                średnich NBP pochodzi z
                dnia
                2023-01-09.
            </Info>
        </form>
    );
}

export default Form;