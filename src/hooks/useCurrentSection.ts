import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Section = {
  url: string;
  name: string;
  element: () => ReactElement;
};

type CurrentSection = Section | undefined | null;

export default function useCurrentSection(sectionsList: Section[]) {
  const { section: paramSection } = useParams();
  const [currentSection, setCurrentSection] = useState<CurrentSection>(() =>
    findSection(sectionsList, paramSection)
  );

  useEffect(() => {
    if (paramSection) {
      setCurrentSection(() => findSection(sectionsList, paramSection));
    }
  }, [paramSection, sectionsList]);

  return currentSection;
}

function findSection(
  sectionsList: Section[],
  paramSection: string | undefined
) {
  if (!sectionsList) return null;
  return sectionsList.find(
    (section) => section.url.toLowerCase() === paramSection
  );
}
