import Button from "./Button";

function DeleteBtn({ onClick }) {
  return (
    <Button size="wide" onClick={onClick}>
      DEL
    </Button>
  );
}

export default DeleteBtn;
