import React from 'react';
import {
  ResultContainer,
  TipAmountContainer,
  TotalContainer,
  BackGround,
  Label,
  Value,
  ResetButton
} from '../styles/Result.styled';
import { IResult } from '../interfaces/index.js';

function Result(props: IResult) {
  const { tipAmount,
    total,
    setBill,
    setActiveButton,
    setPercentage,
    setPeople,
    setCustomInput } = props;

  const handleClick = () => {
    setBill("");
    setActiveButton("");
    setPeople("");
    setPercentage("");
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
