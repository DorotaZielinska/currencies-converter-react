import React, { useState } from 'react';
import Form from "./Form";
import { Clock } from './Form/Clock';
import { currencies } from './Form/currencies';

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    })
  }
  return (
    <div>
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
