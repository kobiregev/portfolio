import { LinkType, Project } from "../interfaces/interfaces";
import { projectHero1 } from "./images";

const ROUTES = {
  HOME: "home",
};
const fullName = "Chai Shorr";

const LINKS: LinkType[] = [{ label: "Home", link: ROUTES.HOME }];

const ABOUT =
  "Hi, I’m Chai Shorr. I have 2 years of experience. In the UX/UI, Product Design & Research field. Currently located in Israel. I have a serious passion for UX research, prototyping and photography. Looking for the right opportunity to design assets that make a positive impact on people’s lives. I’m well organized, independent, with high attention to details. For the past year i’m working with entrepreneurs to create new platform to help businesses recovering from COVID impact.";
const projects: Project[] = [
  {
    id: "project-1",
    title: "Guini",
    text: "Lorem Ipsum is simply dummy text of the printing",
    imageSrc: projectHero1,
  },
];

export { ROUTES,ABOUT, fullName, LINKS, projects };
