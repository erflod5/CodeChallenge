import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Navbar, Container, Row, Col } from "react-bootstrap";
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
    <Navbar className="colorNavBar" expand="md" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Container>
          <Form onSubmit={sendText}>
            <Row>
              <Col md={{ span: 6, offset: 2 }}>
                <Form.Control
                  placeholder="Insert Text"
                  value={text}
                  onChange={handleChange}
                />
              </Col>
              <Col md="2">
                <Button className="btnNavBars" onClick={sendText}>
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TextAdd;
