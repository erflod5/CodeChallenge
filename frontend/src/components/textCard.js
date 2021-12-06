import { Card } from "react-bootstrap";

function TextCard({ text }) {
  return (
    <Card className="m-1">
      <Card.Body>
        <strong>Text: </strong> {text.text}
        <br />
        <strong>Is palindrome?: </strong> {text.palindrome ? "Yes" : "No"}
      </Card.Body>
    </Card>
  );
}

export default TextCard;
