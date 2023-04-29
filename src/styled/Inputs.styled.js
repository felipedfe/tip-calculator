import styled from 'styled-components';

export const InputsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.5rem 1rem;
`

export const BillContainer = styled.section`
`

export const BillInput = styled.input`
  width: 100%;
`

export const TipContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
`

export const TipButton = styled.button`
  /* border: none; */
  background-color: lightgray;
`

export const TipInput = styled.input`
  width: 100%;
`

export const PeopleContainer = styled.section`
  

`

export const PeopleInput = styled.input`
  width: 100%;
`