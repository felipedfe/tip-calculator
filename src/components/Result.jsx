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
  const { tipAmount, total } = props;

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

        <ResetButton>
          RESET
        </ResetButton>
      </BackGround>
    </ResultContainer>
  )
};

export default Result;
