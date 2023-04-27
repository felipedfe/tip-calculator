import React from 'react';
import styled from 'styled-components';

const InputsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const BillContainer = styled.section`
`

const BillInput = styled.input`
  width: 100%;
`

const TipContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

const TipButton = styled.button`
  /* border: none; */
  background-color: #5cdb5c;
`

const TipInput = styled.input`
  
`

const PeopleContainer = styled.section`
  

`

const PeopleInput = styled.input`
  width: 100%;
`

function Inputs() {
  return (
    <InputsContainer>
      <BillContainer>
        <label>Bill
          <BillInput />
        </label>
      </BillContainer>

      <TipContainer>
        <TipButton>5%</TipButton>
        <TipButton>10%</TipButton>
        <TipButton>15%</TipButton>
        <TipButton>25%</TipButton>
        <TipButton>50%</TipButton>
        <TipInput
          placeholder="Custom"
        />
      </TipContainer>

      <PeopleContainer>
        <label>Number of People
          <PeopleInput />
        </label>
      </PeopleContainer>
    </InputsContainer>
  )
};

export default Inputs;
