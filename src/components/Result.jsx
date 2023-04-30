import React from 'react';
import {
  ResultContainer,
  TipAmountContainer,
  TotalContainer,
  BackGround,
  Label,
  Value,
  ResetButton
} from '../styled/Result.styled.js';

function Result(props) {
  const { tipAmount,
    total,
    setBill,
    setActiveButton,
    setPercentage,
    setPeople,
    setCustomInput } = props;

  const handleClick = () => {
    setBill(0);
    setActiveButton(0);
    setPeople(0);
    setPercentage(0);
    setCustomInput("");
  };

  return (
    <ResultContainer>
      <BackGround>
        <TipAmountContainer>
          <Label>
            Tip Amount
          </Label>
          <Value>
            {tipAmount.toFixed(2)}
          </Value>
        </TipAmountContainer>

        <TotalContainer>
          <Label>
            Total
          </Label>
          <Value>
            {total.toFixed(2)}
          </Value>
        </TotalContainer>

        <ResetButton
          type="button"
          onClick={handleClick}
        >
          RESET
        </ResetButton>
      </BackGround>
    </ResultContainer>
  )
};

export default Result;
