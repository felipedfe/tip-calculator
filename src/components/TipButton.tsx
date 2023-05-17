import React from 'react';
import StyledTipButton from '../styles/TipButton.styled';
import { ITipButton } from '../interfaces';

function TipButton(props: ITipButton) {
  const {
    setPercentage,
    activeButton,
    setActiveButton,
    text,
    value,
    setCustomInput
  } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setPercentage(target.value);
    setActiveButton(text);
    setCustomInput("");
  };

  return (
    <StyledTipButton
      active={activeButton}
      text={text}
      type="button"
      value={value}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </StyledTipButton>
  )
};

export default TipButton;
