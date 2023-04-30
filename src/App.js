import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Inputs from './components/Inputs';
import Result from './components/Result';
import { Main, Title, AppContainer } from './styled/App.styled.js';
import './App.css';

const GlobalStyles = createGlobalStyle`
  html {
    --color-primary: #00494d;
    --color-secondary: #c5e4e7;
    --color-display: #26c0ab;
    --color-light: #f4fafa;
  }

  body {
    font-family: 'Space Mono', monospace;
    background-color: var(--color-secondary);
  }

  button:hover {
    cursor: pointer;
  }

  span,
  label {
    font-size: 0.8rem;
  }

  input {
    font-family: 'Space Mono', monospace;
    color: var(--color-primary);
    text-align: right;
    padding: 0.4rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 3px;
    background-color: var(--color-light);
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  input[type=number]{
    -moz-appearance: textfield;
}
`;

function App() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState("");
  const [people, setPeople] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Title>SPLITER</Title>
        <AppContainer>
          <Inputs
            bill={bill}
            setBill={setBill}
            percentage={percentage}
            setPercentage={setPercentage}
            people={people}
            setPeople={setPeople}
            activeButton={activeButton}
            customInput={customInput}
            setCustomInput={setCustomInput}
            setActiveButton={setActiveButton}
            setTipAmount={setTipAmount}
            setTotal={setTotal}
          />
          <Result
            tipAmount={tipAmount}
            total={total}
            setBill={setBill}
            setActiveButton={setActiveButton}
            setPercentage={setPercentage}
            setPeople={setPeople}
            setCustomInput={setCustomInput}
          />
        </AppContainer>
      </Main >
    </>
  );
}

export default App;
