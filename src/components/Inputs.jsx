import React, { useEffect } from 'react';
import TipButton from './TipButton';
import {
  InputsContainer,
  BillContainer,
  BillInput,
  TipContainer,
  TipInput,
  PeopleContainer,
  PeopleInput,
} from '../styled/Inputs.styled';

function Inputs(props) {
  const {
    bill,
    setBill,
    percentage,
    setPercentage,
    people,
    setPeople,
    activeButton,
    customInput,
    setCustomInput,
    setActiveButton,
    setTipAmount,
    setTotal,
  } = props;

  const handleCustomInput = ({ target }) => {
    setPercentage(+target.value / 100);
    setActiveButton("");
    setCustomInput(target.value);
  };

  useEffect(() => {
    const inputsValidation = () => {
      if (bill && percentage && people) {
        const currentTipAmount = (bill * percentage) / people;
        const currentTotal = (bill / people) + currentTipAmount;

        setTipAmount(currentTipAmount);
        setTotal(currentTotal);
      } else {
        setTipAmount(0);
        setTotal(0);
      }
    };

    inputsValidation();
  }, [bill, percentage, people, setTipAmount, setTotal]);

  console.log('bill: ', bill);
  console.log('percentage: ', percentage);
  console.log('people: ', people);
  console.log("activeBtn--->", activeButton);
  return (
    <InputsContainer>
      <BillContainer>
        <label>Bill
          <BillInput
            type="number"
            placeholder="0"
            value={bill ? bill : null}
            onChange={({ target }) => setBill(+target.value)}
          />
        </label>
      </BillContainer>
      <TipContainer>
        <TipButton
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setPercentage={setPercentage}
          setCustomInput={setCustomInput}
          value={0.05}
          text="5%"
        />
        <TipButton
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setPercentage={setPercentage}
          setCustomInput={setCustomInput}
          value={0.1}
          text="10%"
        />
        <TipButton
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setPercentage={setPercentage}
          setCustomInput={setCustomInput}
          value={0.15}
          text="15%"
        />
        <TipButton
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setPercentage={setPercentage}
          setCustomInput={setCustomInput}
          value={0.25}
          text="25%"
        />
        <TipButton
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setPercentage={setPercentage}
          setCustomInput={setCustomInput}
          value={0.5}
          text="50%"
        />
        <TipInput
          type="number"
          placeholder="Custom"
          value={customInput}
          onChange={handleCustomInput}
        />
      </TipContainer>
      <PeopleContainer>
        <label>Number of People
          <PeopleInput
            type="number"
            placeholder="0"
            value={people ? people : null}
            onChange={({ target }) => setPeople(+target.value)}
          />
        </label>
      </PeopleContainer>
    </InputsContainer>
  )
};

export default Inputs;
