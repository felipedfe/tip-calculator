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
`
export default StyledTipButton;
