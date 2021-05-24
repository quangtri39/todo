import { Card, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
export default function TodoApp() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "24rem" }} bg="light">
        <Card.Body>
          <h1 className="d-flex justify-content-center">Todos</h1>
          <TodoList className="mt-3" />
          <AddTodo className="mt-3" />
          <Footer className="mt-3" />
        </Card.Body>
      </Card>
    </Container>
  );
}
