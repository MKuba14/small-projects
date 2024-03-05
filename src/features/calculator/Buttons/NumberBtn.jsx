import Button from "./Button";

function NumberBtn({ number, dispatch }) {
  return (
    <Button
      onClick={() => dispatch({ type: "currentNumber/add", payload: number })}
    >
      {number}
    </Button>
  );
}

export default NumberBtn;
