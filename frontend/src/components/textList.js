import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import TextCard from "./textCard";

function TextList() {
  const texts = useSelector((state) => state.echo.texts);

  return (
    <Row>
      {texts.reverse().map((text, index) => (
        <Col md="4" key={index}>
          <TextCard text={text} />
        </Col>
      ))}
    </Row>
  );
}
export default TextList;
