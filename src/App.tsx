import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Result from './components/Result';
import { Main, Title, AppContainer } from './styles/App.styled';
import { GlobalStyles } from './styles/GlobalStyles';

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
        <Title>SPLITTER</Title>
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
