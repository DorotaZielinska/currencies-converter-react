import React, { useState } from 'react';
import Form from "./Form";
import { Clock } from './Form/Clock';

function App() {
  return (
    <div>
      <Clock />
      <Form/>
    </div>
  );
}

export default App;
