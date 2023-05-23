import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  height: 100vh;

  @media all and (min-width: 1800px) {
    padding-top: 10%;
  }
`

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 2rem;
  width: 100px;
  word-break: break-all;
  letter-spacing: 3px;
  line-height: 1.3;
  color: var(--color-primary);
`

export const AppContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 65%;
  max-width: 900px;
  border-radius: 10px;
  background-color: #fff;
  
  @media all and (max-width: 767px) {
    grid-template-columns: 100%;
    width: 100%;
  }

  @media all and (min-width: 768px) {
    width: 85%;
  }
  
  @media all and (min-width: 1024px) {
    width: 65%;
  }

`
