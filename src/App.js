import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Result from './components/Result';
import { Main, Title, AppContainer } from './styled/App.styled.js';
import './App.css';

function App() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState("");
  const [people, setPeople] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
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
        />
      </AppContainer>
    </Main>
  );
}

export default App;
