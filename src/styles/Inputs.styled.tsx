import styled from 'styled-components';

export const InputsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1rem 1.5rem 2rem;
`

export const BillContainer = styled.section`
  width: 100%;
`

export const BillInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
`

export const TipContainer = styled.div`
  width: 100%;
`

export const TipGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const TipButton = styled.button`
  background-color: lightgray;
`

export const TipInput = styled.input`
  width: 100%;
  height: 100%;
`

export const PeopleContainer = styled.section`
  width: 100%;
`

export const PeopleInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
`