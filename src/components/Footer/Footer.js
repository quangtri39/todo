import { CardChecklist, Check, X } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateModeListTodo } from "../../redux/actions";
export default function Footer({ className }) {
  const modeList = useSelector((state) => state.modeList);
  const dispatch = useDispatch();

  const handleShowAll = (event) => {
    event.preventDefault();
    dispatch(updateModeListTodo("all"));
  };
  const handleShowUnfinished = (event) => {
    event.preventDefault();
    dispatch(updateModeListTodo("unfinished"));
  };
  const handleShowFinished = (event) => {
    event.preventDefault();
    dispatch(updateModeListTodo("finished"));
  };
  return (
    <div className={`d-flex justify-content-center ${className}`}>
      <Button
        variant={`${modeList === "all" ? "primary" : "outline-primary"} mr-3`}
        onClick={handleShowAll}
      >
        <CardChecklist size={30} />
      </Button>
      <Button
        variant={`${
          modeList === "unfinished" ? "danger" : "outline-danger"
        } mr-3`}
        onClick={handleShowUnfinished}
      >
        <X size={30} />
      </Button>
      <Button
        variant={`${modeList === "finished" ? "success" : "outline-success"}`}
        onClick={handleShowFinished}
      >
        <Check size={30} />
      </Button>
    </div>
  );
}
