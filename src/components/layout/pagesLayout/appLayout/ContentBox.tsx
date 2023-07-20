import { ParentDiv } from "components/layout/layoutTypes";
import st from "./appLayout.module.scss";

export default function ContentBox({ children }: ParentDiv) {
  return <div className={st.contentBox}>{children}</div>;
}
