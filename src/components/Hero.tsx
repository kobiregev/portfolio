import { Grid, Image, Title, Container } from "@mantine/core";
import { avatar } from "../data/images";

// type Props = {}

export default function Hero() {
  return (
    <Container>
      <Grid justify="center" gutter={16}>
        <Grid.Col span="auto">
          <Image height={200} src={avatar} withPlaceholder />
        </Grid.Col>
        <Grid.Col span="auto">
          <Title>
            UX/UI
            <br />
            DESIGNER
            <br />
            &
            <br />
            RESEARCHER
          </Title>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
