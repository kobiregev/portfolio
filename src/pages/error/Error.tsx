import { Container, Text, Title } from "@mantine/core";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function Error() {
  const error = useRouteError() as RouteError;
  console.error(error);
  return (
    <Container id="error-page">
      <Title order={1}>Oops!</Title>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>{error?.statusText || error?.message}</i>
      </Text>
    </Container>
  );
}
