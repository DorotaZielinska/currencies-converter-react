import React, { useState } from "react";
import { Result } from "./Result";
import { Button, Failure, Field, FormFildset, FormLegend, Info, LabelText, Loading } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [result, setResult] = useState(null);
    const ratesData = useRatesData();

    const calculateResult = (amount, currency) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    const handleReset = () => {
        setAmount("");
        setResult("");
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
            result={result}
            calculateResult={calculateResult}
            setResult={setResult}
        >
            {ratesData.status === "loading"
                ? (
                    <Loading>Sekundka...<br />Ładuje kursy walut z Europejskiego Banku Centralnego...</Loading>
                )
                : (
                    ratesData.status === "error" ? (
                        <Failure>
                            Hmm... Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem.<br />
                            Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj później?
                        </Failure>
                    ) : (
                        <>
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
                                            {!!ratesData.rates
                                                && Object.keys(ratesData.rates).map(((currency) => (
                                                    <option
                                                        key={currency}
                                                        value={currency}
                                                    >
                                                        {currency}
                                                    </option>
                                                )))}
                                        </Field>
                                    </label>
                                </p>
                            </FormFildset>
                            <p>*Pole obowiązkowe</p>
                            <Result result={result} />
                            <p>
                                <Button>
                                    Przelicz
                                </Button>
                            </p>
                            <p>
                                <Button
                                    type="reset"
                                    onClick={() => handleReset()}>
                                    Wyczyść
                                </Button>
                            </p>
                            <Info>Kalkulator przelicza wartość dowolnie wybranych walut. Najnowsza tabela kursów
                                średnich NBP pochodzi z dnia{" "}
                                {ratesData.date}.
                            </Info>
                        </>
                    )
                )
            }

        </form >
    );
}

