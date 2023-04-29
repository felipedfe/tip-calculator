import styled from "styled-components";

export const ResultContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  padding: 1.5rem 1rem;
  background-color: #eedc82;
`

export const TipAmountContainer = styled.section`
  position: relative;
  display: flex;
`

export const TotalContainer = styled.section`
  position: relative;
  display: flex;
`

export const BackGround = styled.div`
  position: relative;
  height: 100%;
  background-color: #00c96b;
  /* padding-top: 2rem; */
`

export const Label = styled.label`
  &::after {
    display: block;
    content: "/ person";
    color: red;
  }
`

export const Value = styled.span`
  position: absolute;
  right: 0;
`

export const ResetButton = styled.button`
  position: absolute;
  width: 100%;
  bottom: 0;
`