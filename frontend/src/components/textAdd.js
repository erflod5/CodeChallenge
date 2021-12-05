import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { echoActions } from "../actions";

function TextAdd() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function sendText(event) {
    event.preventDefault();
    dispatch(echoActions.getText(text));
    setText("");
  }

  return (
    <Form onSubmit={sendText}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Add text"
            onChange={handleChange}
            value={text}
          />
        </Col>

        <Col xs="auto">
          <Button className="mb-2" onClick={sendText}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TextAdd;
