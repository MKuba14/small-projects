import styled, { css } from "styled-components";

const size = {
  wide: css`
    grid-column: span 2;
  `,
};

const Button = styled.button`
  background-color: var(--color-red);
  border: 1px solid black;
  font-size: 1.1rem;
  text-shadow: #0e0d0d 1px 1px 1px;

  ${(props) => size[props.size]}

  &:hover {
    background-color: rgb(181, 1, 1);
    transition: ease-in-out 0.2s;
  }
`;

export default Button;
