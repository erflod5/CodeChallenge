import { Card } from "react-bootstrap";

function TextCard({ text }) {
  return (
    <Card className="m-1">
      <Card.Body>
        <p>
          <strong>Text: </strong> {text.text}
        </p>
        <p>
          <strong>Is palindrome?: </strong> {text.palindrome ? "Yes" : "No"}
        </p>
      </Card.Body>
    </Card>
  );
}

export default TextCard;
