import styled from "styled-components";

export const ResultContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  /* min-height: 400px; */
  /* background-color: #eedc82; */
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  padding: 1.5rem 1rem;
`

export const Label = styled.label`
  &::after {
    display: block;
    content: "/ person";
    color: gray;
  }
  color: #fff;
  font-weight: 600;
`

export const Value = styled.span`
  &:before {
    content: '$';
  }
  position: absolute;
  right: 0;
`

export const ResetButton = styled.button`
  &:hover {
    background-color: var(--color-display);
  }
  &:active {
    transform: translateY(1px);
  }
  width: 100%;
  margin-top: auto;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: var(--color-secondary);
  transition: background-color 0.3s;
`
