import React, { useState } from 'react';
import styled from 'styled-components';
import Inputs from './components/Inputs';
import Result from './components/Result';
import './App.css';

const Main = styled.main`

`

const Title = styled.h1`

`

const AppContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  /* column-gap: 1.5rem; */
  width: 80%;
  margin: auto;
  border: solid 2px pink;
  /* padding: 1.5rem; */
`

function App() {
  return (
    <Main>
      <Title>SPLITER</Title>
      <AppContainer>
        <Inputs />
        <Result />
      </AppContainer>
    </Main>
  );
}

export default App;
