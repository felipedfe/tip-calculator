import styled from "styled-components";

export const ResultContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  background-color: var(--color-primary);
  border-radius: 10px;
`

export const TipAmountContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`

export const TotalContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  &::after {
    display: block;
    content: "/ person";
    color: var(--color-secondary);
  }
  color: #fff;
  font-weight: 700;
`

export const Value = styled.span`
  &:before {
    content: '$';
  }
  position: absolute;
  right: 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-display);
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
