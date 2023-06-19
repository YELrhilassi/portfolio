import AnimatedLogo from "components/common/AnimatedLogo";
import { ArrowButton } from "components/common/buttons";
import st from "pages/welcome/welcome.module.scss";

export default function Welcome() {
  return (
    <div className={st.pageLayout}>
      <AnimatedLogo className={st.logo} width="130px" animationTime={1.5} />

      <ArrowButton className={st.arrowBtn} />
      <div className={st.welcomeTxt}>
        <h2>Welcome !</h2>
        <p>
          to my digital playground, where things are crafted with passion and
          precision.
        </p>
      </div>
    </div>
  );
}
