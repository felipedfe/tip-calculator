import React, { useEffect } from 'react';
import TipButtons from './TipButtons';
import {
  InputsContainer,
  BillContainer,
  BillInput,
  TipContainer,
  TipGrid,
  TipInput,
  PeopleContainer,
  PeopleInput,
} from '../styles/Inputs.styled';
import { IInputs } from '../interfaces';

function Inputs(props: IInputs) {
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

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const parsedValue = (+target.value) / 100;
    setPercentage(String(parsedValue));
    setActiveButton("");
    setCustomInput(target.value);
  };

  useEffect(() => {
    const inputsValidation = (): void => {
      if (bill && percentage && people) {
        const currentTipAmount = (+bill * +percentage) / +people;
        const currentTotal = (+bill / +people) + currentTipAmount;

        setTipAmount(currentTipAmount);
        setTotal(currentTotal);
      } else {
        setTipAmount(0);
        setTotal(0);
      }
    };

    inputsValidation();
  }, [bill, percentage, people, setTipAmount, setTotal]);

  return (
    <InputsContainer>
      <BillContainer>
        <label>Bill
          <BillInput
            type="number"
            placeholder="0"
            value={bill ? bill : ""}
            onChange={(e) => setBill(e.target.value)}
          />
        </label>
      </BillContainer>
      <TipContainer>
        <span>Select Tip %</span>
        <TipGrid>
          <TipButtons
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            setPercentage={setPercentage}
            setCustomInput={setCustomInput}
          />
          <TipInput
            type="number"
            placeholder="Custom"
            value={customInput}
            onChange={handleCustomInput}
          />
        </TipGrid>
      </TipContainer>
      <PeopleContainer>
        <label>Number of People
          <PeopleInput
            type="number"
            placeholder="0"
            value={people ? people : ""}
            onChange={(e) => setPeople(e.target.value)}
          />
        </label>
      </PeopleContainer>
    </InputsContainer >
  )
};

export default Inputs;
