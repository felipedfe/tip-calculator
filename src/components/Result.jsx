import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  padding: 1.5rem 1rem;
  background-color: #eedc82;
`

const TipAmountContainer = styled.section`
  position: relative;
  display: flex;
`

const TotalContainer = styled.section`
  position: relative;
  display: flex;
`

const BackGround = styled.div`
  position: relative;
  height: 100%;
  background-color: #00c96b;
  /* padding-top: 2rem; */
`

const Label = styled.label`
  &::after {
    display: block;
    content: "/ person";
    color: red;
  }
`

const Value = styled.span`
  position: absolute;
  right: 0;
`

const ResetButton = styled.button`
  position: absolute;
  width: 100%;
  bottom: 0;
`

function Result() {
  return (
    <ResultContainer>
      <BackGround>
        <TipAmountContainer>
          <Label>
            Tip Amount
          </Label>
          <Value>0.00</Value>
        </TipAmountContainer>

        <TotalContainer>
          <Label>
            Total
          </Label>
          <Value>0.00</Value>
        </TotalContainer>

        <ResetButton>
          RESET
        </ResetButton>
      </BackGround>
    </ResultContainer>
  )
};

export default Result;
