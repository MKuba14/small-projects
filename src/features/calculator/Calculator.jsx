import { useReducer } from "react";

import FunctionBtn from "./Buttons/FunctionBtn";
import NumberBtn from "./Buttons/NumberBtn";
import DeleteBtn from "./Buttons/DeleteBtn";
import EvalBtn from "./Buttons/EvalBtn";
import ClearBtn from "./Buttons/ClearBtn";
import styled from "styled-components";

const StyledCalculator = styled.div`
  width: 270px;
  height: 370px;
  background-color: var(--color-dark);
  border: 1.5px solid var(--color-dark);
  box-shadow: red 1px 1px 100px;
  animation: transitionIn 0.4s ease-in;
`;
const Screen = styled.div`
  height: 20%;
  padding: 10px;
  text-align: right;
`;
const PreviousOperation = styled.div`
  font-size: 0.8rem;
  margin-bottom: 2px;
`;
const CurrentOperation = styled.div`
  font-size: 1.8rem;
  overflow-x: auto;
  text-overflow: clip;
`;
const Buttons = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const initalState = {
  currentNumber: "0",
  previousNumber: null,
  operation: null,
  overwrite: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "currentNumber/add":
      if (state.overwrite) {
        state.currentNumber = "0";
      }
      if (state.currentNumber === "0" && action.payload !== ".")
        state.currentNumber = "";
      if (state.currentNumber === "" && action.payload === ".") return state;
      if (action.payload === "." && state.currentNumber.includes("."))
        return state;
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload,
        overwrite: false,
      };
    case "currentNumber/delete":
      if (state.currentNumber === "0") return state;
      return {
        ...state,
        currentNumber: state.currentNumber.slice(0, -1),
      };
    case "currentNumber/operation":
      if (state.operation !== null && state.previousNumber !== null)
        return { ...state, operation: action.payload };

      if (state.currentNumber === "0" && state.previousNumber === null)
        return state;
      if (state.previousNumber === null) {
        return {
          currentNumber: "",
          previousNumber: state.currentNumber,
          operation: action.payload,
        };
      }
      return {
        ...state,
        currentNumber: "",
        previousNumber: handleOperation(
          state.currentNumber,
          state.previousNumber,
          state.operation
        ),
        operation: action.payload,
      };
    case "evaluation":
      if (
        state.currentNumber === "0" ||
        state.previousNumber === null ||
        state.operation === null
      )
        return state;
      return {
        currentNumber: handleOperation(state),
        previousNumber: null,
        operation: null,
        overwrite: true,
      };
    case "clear":
      return {
        ...state,
        currentNumber: "0",
        previousNumber: null,
        operation: null,
      };
    default:
      break;
  }
}
function handleOperation({ currentNumber, previousNumber, operation }) {
  const curr = parseFloat(currentNumber);
  const prev = parseFloat(previousNumber);

  if (isNaN(curr) || isNaN(prev)) return "";
  let result = "";

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      throw new Error("Unknown operation");
  }
  return result.toString();
}

export default function Calculator() {
  const [{ currentNumber, previousNumber, operation }, dispatch] = useReducer(
    reducer,
    initalState
  );

  function handleRemoveNumber() {
    dispatch({ type: "currentNumber/delete" });
  }

  return (
    <StyledCalculator>
      <Screen>
        <PreviousOperation>
          {previousNumber} {operation}
        </PreviousOperation>
        <CurrentOperation>{currentNumber}</CurrentOperation>
      </Screen>
      <Buttons>
        <DeleteBtn onClick={handleRemoveNumber} />
        <ClearBtn dispatch={dispatch} />
        <FunctionBtn
          sign={"/"}
          onOperation={handleOperation}
          dispatch={dispatch}
        />

        <NumberBtn number={7} dispatch={dispatch} />
        <NumberBtn number={8} dispatch={dispatch} />
        <NumberBtn number={9} dispatch={dispatch} />
        <FunctionBtn
          sign={"*"}
          onOperation={handleOperation}
          dispatch={dispatch}
        />

        <NumberBtn number={4} dispatch={dispatch} />
        <NumberBtn number={5} dispatch={dispatch} />
        <NumberBtn number={6} dispatch={dispatch} />
        <FunctionBtn
          sign={"-"}
          onOperation={handleOperation}
          dispatch={dispatch}
        />

        <NumberBtn number={1} dispatch={dispatch} />
        <NumberBtn number={2} dispatch={dispatch} />
        <NumberBtn number={3} dispatch={dispatch} />
        <FunctionBtn
          sign={"+"}
          onOperation={handleOperation}
          dispatch={dispatch}
        />

        <NumberBtn number={"."} dispatch={dispatch} />
        <NumberBtn number={0} dispatch={dispatch} />
        <EvalBtn sign={"="} dispatch={dispatch} />
      </Buttons>
    </StyledCalculator>
  );
}
