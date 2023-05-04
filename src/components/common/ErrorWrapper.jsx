import React from "react";
import { Alert, Button } from "react-bootstrap";

const ErrorWrapper = ({ error, resetErrorBoundary }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Render Error!</Alert.Heading>
      <p>Error message: {error.message}</p>
      <Button className="mt-3 w-100" onClick={resetErrorBoundary} variant="outline-danger">
        Try again
      </Button>
    </Alert>
  );
};

export default ErrorWrapper;
