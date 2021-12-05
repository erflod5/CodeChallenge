import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast } from "react-bootstrap";

function TextAlert() {
  const hasError = useSelector((state) => state.echo.hasError);
  const error = useSelector((state) => state.echo.error);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(hasError);
  }, [hasError]);

  return (
    <Toast
      className="d-inline-block m-1"
      bg="danger"
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
    >
      <Toast.Body className="text-white">Error: {error}</Toast.Body>
    </Toast>
  );
}

export { TextAlert };
