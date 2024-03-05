import Button from "./Button";

function ClearBtn({ dispatch }) {
  return (
    <Button
      onClick={() => {
        dispatch({ type: "clear" });
      }}
    >
      C
    </Button>
  );
}

export default ClearBtn;
