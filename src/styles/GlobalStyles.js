import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --color-primary: #00494d;
    --color-secondary: #c5e4e7;
    --color-display: #26c0ab;
    --color-light: #f4fafa;
  }

  body {
    font-family: 'Space Mono', monospace;
    background-color: var(--color-secondary);
  }

  button:hover {
    cursor: pointer;
  }

  span,
  label {
    font-size: 0.8rem;
  }

  input {
    font-family: 'Space Mono', monospace;
    color: var(--color-primary);
    text-align: right;
    padding: 0.4rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 3px;
    background-color: var(--color-light);
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  input[type=number]{
    -moz-appearance: textfield;
}
`;
