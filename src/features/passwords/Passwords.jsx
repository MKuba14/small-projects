import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 20px 5px;
  border: 3px solid black;
  box-shadow: red 1px 1px 100px;
  background-color: var(--color-dark);
  max-width: 360px;
  animation: transitionIn 0.4s ease-in;
  /* color: #320303; */

  ${(props) =>
    props.strength === "weak" &&
    css`
      box-shadow: red 1px 1px 100px;
    `}

  ${(props) =>
    props.strength === "ok" &&
    css`
      box-shadow: rgba(255, 251, 0, 0.781) 1px 1px 100px;
    `}

  ${(props) =>
    props.strength === "strong" &&
    css`
      box-shadow: rgb(5, 175, 2) 1px 1px 100px;
    `}
`;
const ContainerH5 = styled.h5`
  text-align: center;
  font-weight: bold;
  color: var(--color-light);
`;
const Display = styled.div`
  display: flex;
`;
const DisplayInput = styled.input`
  width: 298px;
  height: 50px;
  font-size: 0.9em;
  margin: 12px 0px;
  border-radius: 0px;
  border: none;
  background-color: var(--color-dark-grey);
  color: var(--color-light);
  padding: 0px 15px;
  text-shadow: black 1px 1px 5px;
`;
const DisplayIcon = styled.span`
  color: var(--color-light);
  background-color: var(--color-dark-grey);
  height: 50px;
  margin: 12px 0px;
  padding-top: 16px;
  padding-right: 10px;
  cursor: pointer;
`;
const GeneratorOptions = styled.div`
  position: relative;
  background-color: var(--color-dark-grey);
  padding: 20px;
`;
const GeneratorOptionsInput = styled.input`
  width: 100%;
  accent-color: var(--color-red);
`;
const GeneratorOptionsButton = styled.button`
  border-radius: 0px;
  border: none;
  width: 100%;
  height: 40px;
  font-size: 1.2em;
  background-color: var(--color-red);
  font-weight: bold;
`;
const GeneratorOptionsH5 = styled.h5`
  font-size: 0.9em;
  margin-bottom: 10px;
  padding: 10px 0px;
  color: var(--color-light);
  text-shadow: black 1px 1px 5px;
`;
const GeneratorOptionsH4 = styled.h4`
  position: absolute;
  right: 35px;
  top: 18px;
  font-size: 1.7em;
  color: var(--color-red);
  text-shadow: black 1px 1px 10px;
  font-weight: bold;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 35px 0px;
`;
const ButtonsButton = styled.button`
  border-radius: 0px;
  border: none;
  width: 50px;
  height: 50px;
  font-size: 1.2em;
  background-color: var(--color-light);
  font-weight: bold;

  ${(props) =>
    props.type === "selected" &&
    css`
      background-color: var(--color-red);
      color: var(--color-light);
    `}
`;

const smallLetters = "zxcvbnmlkjhgfdsaqwertyuiop";
const capitalLetters = smallLetters.toUpperCase();
const numbers = "1234567890";
const specialSigns = "?/.,<>;:[{]}=+_-*(*)*&^%$#@!~`";

export default function Passwords() {
  const [length, setLength] = useState(15);
  const [chosenCharacters, setChosenCharacters] = useState([]);
  const [password, setPassword] = useState([]);
  const [generateBtnText, setGenerateBtnText] = useState("Generuj");
  const [strengthTest, setStrengthTest] = useState("");

  function handleChoise(choise) {
    chosenCharacters.includes(choise)
      ? setChosenCharacters((characters) =>
          characters.filter((character) => character !== choise)
        )
      : setChosenCharacters((characters) => [...characters, choise]);
  }

  function handleGenerate() {
    setPassword([]);

    let characters = chosenCharacters.join("").split("");

    for (let i = 0; i < length; i++) {
      setPassword((sign) => [
        ...sign,
        characters[Math.floor(Math.random() * characters.length)],
      ]);
    }

    handlePasswordCheck();
  }

  function handlePasswordCheck() {
    if (chosenCharacters.length === 0) {
      return;
    }
    if (length <= 7) {
      setGenerateBtnText("Słabe hasło");
      setStrengthTest("weak");
      return;
    }
    if (chosenCharacters.length <= 3 && length < 10) {
      setGenerateBtnText("Słabe hasło");
      setStrengthTest("weak");
    } else if (chosenCharacters.length >= 3 && length > 16) {
      setGenerateBtnText("Silne hasło");

      setStrengthTest("strong");
    } else {
      setGenerateBtnText("Dobre hasło");
      setStrengthTest("ok");
    }
  }

  return (
    <Container strength={strengthTest}>
      <ContainerH5>Generator haseł</ContainerH5>
      <Display>
        <DisplayInput
          type="text"
          disabled
          value={
            chosenCharacters.length > 0
              ? password.join("")
              : "Wybierz przynajmniej jeden zbiór znaków"
          }
        />
        <DisplayIcon
          onClick={() => {
            navigator.clipboard.writeText(password.join(""));
            password.length > 0 && alert(`skopiowano ( ${password.join("")} )`);
          }}
        >
          <FaCopy />
        </DisplayIcon>
      </Display>

      <GeneratorOptions>
        <GeneratorOptionsH5>Długość Hasła</GeneratorOptionsH5>
        <GeneratorOptionsH4>{length}</GeneratorOptionsH4>
        <GeneratorOptionsInput
          type="range"
          name="length"
          min={1}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <Buttons>
          <ButtonsButton
            type={chosenCharacters.includes(smallLetters) ? "selected" : ""}
            onClick={() => handleChoise(smallLetters)}
          >
            abc
          </ButtonsButton>
          <ButtonsButton
            type={chosenCharacters.includes(capitalLetters) ? "selected" : ""}
            onClick={() => handleChoise(capitalLetters)}
          >
            ABC
          </ButtonsButton>
          <ButtonsButton
            type={chosenCharacters.includes(numbers) ? "selected" : ""}
            onClick={() => handleChoise(numbers)}
          >
            123
          </ButtonsButton>
          <ButtonsButton
            type={chosenCharacters.includes(specialSigns) ? "selected" : ""}
            onClick={() => handleChoise(specialSigns)}
          >
            !&$
          </ButtonsButton>
        </Buttons>

        <GeneratorOptionsButton
          onClick={handleGenerate}
          onMouseEnter={() => setGenerateBtnText("Generuj")}
        >
          {generateBtnText}
        </GeneratorOptionsButton>
      </GeneratorOptions>
    </Container>
  );
}
