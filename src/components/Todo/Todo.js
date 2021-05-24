import { X } from "react-bootstrap-icons";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../../redux/actions";
export default function Todo({ id, text, status = false }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateTodo({ id: id }));
  };
  const handleDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li
      className={`${
        status ? "todo-completed" : ""
      } todo d-flex justify-content-between align-items-center`}
      onClick={handleClick}
    >
      <span className="todo__content">{text}</span>
      {status ? (
        <X size={35} className="delete-todo" onClick={handleDelete} />
      ) : null}
    </li>
  );
}
