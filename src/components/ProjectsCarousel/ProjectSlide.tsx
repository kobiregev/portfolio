import { Card, Image, Text, Button, Group } from "@mantine/core";
import { Project } from "../../interfaces/interfaces";

export default function ProjectSlide({ text, title, imageSrc }: Project) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image src={imageSrc} height={160} alt={title} withPlaceholder />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {text}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Learn more
      </Button>
    </Card>
  );
}
