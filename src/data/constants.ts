import { LinkType, Project } from "../interfaces/interfaces";
import { projectHero1 } from "./images";

const fullName = "Chai Shorr";
const links: LinkType[] = [{ label: "Home", link: "./home" }];
const projects: Project[] = [
  {
    id: "project-1",
    title: "Guini",
    text: "Lorem Ipsum is simply dummy text of the printing",
    imageSrc: projectHero1,
  },
];

export { fullName, links, projects };
