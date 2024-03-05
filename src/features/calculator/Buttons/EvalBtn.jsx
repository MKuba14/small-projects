import Button from "./Button";

function FunctionBtn({ dispatch }) {
  return (
    <Button
      size="wide"
      onClick={() => {
        dispatch({ type: "evaluation" });
      }}
    >
      =
    </Button>
  );
}

export default FunctionBtn;
