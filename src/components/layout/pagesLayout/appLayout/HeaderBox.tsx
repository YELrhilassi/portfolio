import { ParentDiv } from "components/layout/layoutTypes";
import st from "./appLayout.module.scss";

export default function HeaderBox({ children }: ParentDiv) {
  return <div className={st.headerBox}>{children}</div>;
}
