import { HeaderBoxProps } from "components/layout/layoutTypes";
import st from "./page.module.scss";

export default function HeaderBox({ children, isRoot }: HeaderBoxProps) {
  return isRoot ? null : <div className={st.headerBox}>{children}</div>;
}
