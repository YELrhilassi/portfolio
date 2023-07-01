import st from "./welcomeLayout.module.scss";
type PopTypes = {
  children?: React.ReactNode | null;
};
export default function WelcomeLayout({ children }: PopTypes) {
  return <div className={st.pageLayout}>{children}</div>;
}
