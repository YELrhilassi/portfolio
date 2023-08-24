import { ParentDiv } from "components/layout/layoutTypes";
import st from "./page.module.scss";

export default function PageTagBox({ children }: ParentDiv) {
  return <div className={st.pageTagBox}>{children}</div>;
}
