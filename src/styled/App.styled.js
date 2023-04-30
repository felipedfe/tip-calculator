import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* position: absolute;
  top: 0;
  left: 0; */
  /* width: 100%; */
  /* transition: translateY(50%); */
  padding-top: 5%;
  height: 100vh;
`

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 1.5rem;
`

export const AppContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 65%;
  max-width: 900px;
  /* margin: auto; */
  border-radius: 10px;
  background-color: #fff;

`
