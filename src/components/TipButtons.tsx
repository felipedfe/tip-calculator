import React from 'react';
import TipButton from './TipButton';
import { ITipButtons } from '../interfaces';

function TipButtons(props: ITipButtons) {
  const {
    activeButton,
    setActiveButton,
    setPercentage,
    setCustomInput,
  } = props;
  return (
    <>
      <TipButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setPercentage={setPercentage}
        setCustomInput={setCustomInput}
        value={0.05}
        text="5%"
      />
      <TipButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setPercentage={setPercentage}
        setCustomInput={setCustomInput}
        value={0.1}
        text="10%"
      />
      <TipButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setPercentage={setPercentage}
        setCustomInput={setCustomInput}
        value={0.15}
        text="15%"
      />
      <TipButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setPercentage={setPercentage}
        setCustomInput={setCustomInput}
        value={0.25}
        text="25%"
      />
      <TipButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setPercentage={setPercentage}
        setCustomInput={setCustomInput}
        value={0.5}
        text="50%"
      />
    </>
  )
};

export default TipButtons;
