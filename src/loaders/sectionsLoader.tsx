import { AboutMe } from "pages";
import { Section } from "./loadersTypes";
import { json } from "react-router-dom";

const homeSections: Section[] = [
  {
    url: "about",
    name: "About Me",
    element: () => <AboutMe />,
  },
];

export async function loadSection({ params: { section } }: any) {
  const currentSection = homeSections.find(
    (_section) => _section.url.toLowerCase() === section
  );

  if (!currentSection) {
    throw json(
      {
        message: "section not found...",
      },
      { status: 404 }
    );
  }
  return currentSection;
}
