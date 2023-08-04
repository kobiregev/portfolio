import { Center, Container, Stack, Text, Title } from "@mantine/core";
import { ABOUT } from "../data/constants";

export default function About() {
  return (
    <Container mb={55} >
        <Stack>
        <Center>
            <Title order={3}>ABOUT</Title>
        </Center>
        <Text>
            {ABOUT}
        </Text>
        </Stack>
    </Container>
  );
}
