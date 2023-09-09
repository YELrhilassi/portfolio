import { useLoaderData } from "react-router-dom";
import { useFadeIn } from "hooks";
import { Section } from "loaders/loadersTypes";
import { PageTagBox } from "components/layout/page";
import SidePageTag from "components/common/SidePageTag";
import "pages/Home/styles.css";

export default function Home() {
  const currentSection = useLoaderData() as Section;
  const [fadeInClass] = useFadeIn();

  return (
    <>
      <PageTagBox>
        <SidePageTag {...{ currentSection }} />
      </PageTagBox>
      <div className={fadeInClass}>{currentSection.element()}</div>
    </>
  );
}
