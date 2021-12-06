import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import TextCard from "./textCard";

function TextList() {
  const texts = useSelector((state) => state.echo.texts);

  return (
    <Container className="mt-4 containerResult mb-4">
      <Row>
        <Col xs="12" className="mt-4">
          <h3>Results:</h3>
        </Col>
        {texts.reverse().map((text, index) => (
          <Col md={{ span: 6, offset: 3 }} key={index}>
            <TextCard text={text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default TextList;
