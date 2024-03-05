import styled, { css } from "styled-components";

const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.5rem;
`;
const FormInput = styled.input`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  background: none;
  border: none;

  ${(props) =>
    props.color === "day" &&
    css`
      color: var(--color-dark-gray);
      border-bottom: 1px solid var(--color-dark-gray);

      &:focus,
      &:active,
      &::placeholder {
        color: var(--color-dark-gray);
      }
    `}

  ${(props) =>
    props.color === "night" &&
    css`
      border-bottom: 1px solid var(--color-light);
      color: var(--color-light);

      &:focus,
      &:active,
      &::placeholder {
        color: var(--color-light);
      }
    `}

  &:focus {
    outline: none;
    background: none;
  }
`;

function Search({ onSubmit, onType, typedCity, isDayTime }) {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="city"
          value={typedCity}
          placeholder="Search city"
          onChange={(e) => onType(e.target.value)}
          color={isDayTime ? "day" : "night"}
        />
      </Form>
    </div>
  );
}
export default Search;
