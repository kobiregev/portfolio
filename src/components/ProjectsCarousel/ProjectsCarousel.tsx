import { Carousel } from "@mantine/carousel";
import { Container } from "@mantine/core";
import ProjectSlide from "./ProjectSlide";
import { projects } from "../../data/constants";


export default function ProjectsCarousel() {
  return (
    <Container mb={55}>
      <Carousel slideSize="70%" slideGap="md" loop withIndicators>
        {projects.map((project) => (
          <ProjectSlide {...project} key={project.id} />
        ))}
      </Carousel>
    </Container>
  );
}
