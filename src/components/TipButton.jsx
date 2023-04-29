import React from 'react';
import styled from 'styled-components';

const StyledTipButton = styled.button`
background-color: ${(props) => props.active === props.text ? 'green' : 'gray'}
`

function TipButton({ setPercentage, activeButton, setActiveButton, text, value, setCustomInput }) {

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
