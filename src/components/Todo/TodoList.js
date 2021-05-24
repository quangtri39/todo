import Todo from "./Todo";
import "./Todo.css";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function TodoList({ className }) {
  const listTodo = useSelector((state) => state.listTodo);
  const modeList = useSelector((state) => state.modeList);
  return (
    <Card className={className}>
      <Card.Body
        style={{ height: "12rem" }}
        className="d-flex flex-column-reverse overflow-auto todo-list"
      >
        {todoWidthMode(listTodo, modeList)}
      </Card.Body>
    </Card>
  );
}
function todoWidthMode(listTodo, mode) {
  switch (mode) {
    case "all":
      return listTodo.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.name}
          status={todo.status}
        />
      ));
    case "unfinished":
      return listTodo.map((todo) =>
        todo.status === false ? (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.name}
            status={todo.status}
          />
        ) : null
      );
    case "finished":
      return listTodo.map((todo) =>
        todo.status === true ? (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.name}
            status={todo.status}
          />
        ) : null
      );
    default:
      return "Lỗi không thể sảy ra";
  }
}
