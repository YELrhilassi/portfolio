import st from "./page.module.scss";
//
//
//
export default function Page({
  children,
  ...rest
}: {
  children: JSX.Element | JSX.Element[] | null;
}) {
  return (
    <div className={st.pageBox} {...rest}>
      {children}
    </div>
  );
}
