import st from "components/layout/header/header.module.scss";
import Box from "../box";
import { HomeLogo } from "components/common/buttons";

export default function Header() {
  return (
    <>
      <div className={st.headerBody}>
        <Box className={st.headerLogo}>
          <HomeLogo />
        </Box>
      </div>
    </>
  );
}

// const Nav = styled("nav");

// function Menu() {
//   return (
//     <Nav
//       display="flex"
//       gap="15%"
//       justifyContent="center"
//       border="solid 1px"
//       width="80%"
//     >
//       <NavLink to="home/about">Home</NavLink>
//       <NavLink to="contact">Contact</NavLink>
//       <NavLink to="blog">Blog</NavLink>
//       <NavLink to="resume">Resume</NavLink>
//     </Nav>
//   );
// }
