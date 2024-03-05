import Button from "./Button";

function FunctionBtn({ sign, onOperation, dispatch }) {
  return (
    <Button
      onClick={() => {
        dispatch({ type: "currentNumber/operation", payload: sign });
        onOperation(sign);
      }}
    >
      {sign}
    </Button>
  );
}

export default FunctionBtn;
