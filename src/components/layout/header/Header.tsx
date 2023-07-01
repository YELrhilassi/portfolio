import st from "components/layout/header/header.module.scss";
import Box from "../box";

export default function Header() {
  return (
    <>
      <div className={st.headerBody}>
        <Box className={st.headerLogo}>logo</Box>
        <Menu />
      </div>
    </>
  );
}

function Menu(params: any) {
  return (
    <Box display="flex" gap="1rem" justifyContent="center">
      <div>Home</div>
      <div>Contact</div>
      <div>Blog</div>
      <div>Resume</div>
    </Box>
  );
}
