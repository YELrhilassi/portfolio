import { AboutMe, CodeSnippet } from "pages";
import { useCurrentSection, useFadeIn } from "hooks";
import { ReactElement } from "react";
import "pages/Home/styles.css";
import PageTagBox from "components/layout/pagesLayout/appLayout/PageTagBox";
import SidePageTag from "components/common/SidePageTag";

type Section = {
  url: string;
  name: string;
  element: () => ReactElement;
};

const homeSections: Section[] = [
  {
    url: "about",
    name: "About Me",
    element: () => <AboutMe />,
  },
  {
    url: "codesnippet",
    name: "Contact",
    element: () => <CodeSnippet />,
  },
];

export default function Home() {
  const currentSection = useCurrentSection(homeSections);
  const [fadeInClass] = useFadeIn();

  if (!currentSection) return <div>Not Found</div>;

  return (
    <>
      <PageTagBox>
        <SidePageTag {...{ currentSection }} />
      </PageTagBox>
      <div className={fadeInClass}>{currentSection.element()}</div>;
    </>
  );
}
