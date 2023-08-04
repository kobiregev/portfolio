import { LinkType, Project } from "../interfaces/interfaces";
import { projectHero1 } from "./images";

const ROUTES = {
  HOME: "home",
};
const fullName = "Chai Shorr";

const LINKS: LinkType[] = [{ label: "Home", link: ROUTES.HOME }];

const projects: Project[] = [
  {
    id: "project-1",
    title: "Guini",
    text: "Lorem Ipsum is simply dummy text of the printing",
    imageSrc: projectHero1,
  },
];

export { ROUTES, fullName, LINKS, projects };
