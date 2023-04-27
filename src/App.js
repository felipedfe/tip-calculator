import React, { useState } from 'react';
import styled from 'styled-components';
import Inputs from './components/Inputs';
import './App.css';

const Main = styled.main`

`

const Title = styled.h1`

`

const AppContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
  margin: auto;
  border: solid 2px pink;
`

function App() {
  return (
    <Main>
      <Title>SPLITER</Title>
      <AppContainer>
        <Inputs />
        {/* <div className="app--result">
          <button
            className="app--reset-btn"
            type="button"
          >
            RESET
          </button>
        </div> */}
      </AppContainer>
    </Main>
  );
}

export default App;
