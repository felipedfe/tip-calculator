import React from 'react';
import StyledTipButton from '../styles/TipButton.styled';

function TipButton(props) {
  const {
    setPercentage,
    activeButton,
    setActiveButton,
    text,
    value,
    setCustomInput
  } = props;

  const handleClick = ({ target }) => {
    setPercentage(+target.value);
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
