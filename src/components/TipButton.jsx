import React from 'react';
import styled from 'styled-components';

const StyledTipButton = styled.button`
  color: ${(props) => props.active === props.text ?
    'var(--color-primary)' :
    '#fff'
  };
  background-color: ${(props) => props.active === props.text ?
    'var(--color-display)' :
    'var(--color-primary)'
  };
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 0;
/* background-color: var(--color-primary); */
`

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
