import st from "./page.module.scss";
//
//
//
export default function Page({
  children,
}: {
  children: JSX.Element | JSX.Element[];
  isReady?: boolean;
}) {
  return <div className={`${st.pageBox} `}>{children}</div>;
}
