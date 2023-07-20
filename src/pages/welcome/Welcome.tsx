import AnimatedLogo from "components/common/AnimatedLogo";
import { ArrowBtnTo } from "components/common/buttons";
import { WelcomeLayout } from "components/layout/pagesLayout";
import st from "pages/welcome/welcome.module.scss";

export default function Welcome() {
  return (
    <WelcomeLayout>
      <AnimatedLogo className={st.logo} width="130px" animationTime={1.5} />

      <ArrowBtnTo className={st.arrowBtn} to="home" />

      <div className={st.welcomeTxt}>
        <h2>Welcome !</h2>
        <p>
          to my digital playground, where things are crafted with passion and
          precision.
        </p>
      </div>
    </WelcomeLayout>
  );
}
