import { ParentDiv } from "../layoutTypes";
import st from "./page.module.scss";

export default function ContentBox({ children }: ParentDiv) {
  return <div className={`${st.contentBox} `}>{children}</div>;
}