import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Section = {
  url: string;
  name: string;
  element: ReactElement;
};

type CurrentSection = Section | undefined | null;

export default function useCurrentSection(sectionsList: Section[]) {
  const [currentSection, setCurrentSection] = useState<CurrentSection>(null);
  const { section: paramSection } = useParams();

  useEffect(() => {
    if (paramSection) {
      setCurrentSection(() =>
        sectionsList.find((section) => section.url === paramSection)
      );
    }
  }, [paramSection, sectionsList]);

  return currentSection;
}
