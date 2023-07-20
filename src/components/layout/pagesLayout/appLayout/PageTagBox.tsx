import { ParentDiv } from "components/layout/layoutTypes";
import st from "./appLayout.module.scss";

export default function PageTagBox({ children }: ParentDiv) {
  return <div className={st.pageTagBox}>{children}</div>;
}
