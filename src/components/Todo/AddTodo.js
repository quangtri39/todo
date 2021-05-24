import { Form, Button, Col } from "react-bootstrap";
import { addTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function AddTodo({ className }) {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName === "") {
      return;
    }
    dispatch(addTodo({ name: todoName, status: false }));
    setTodoName("");
  };
  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Form.Row className="justify-content-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="todo"
            value={todoName}
            onChange={handleChange}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Add todo
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
