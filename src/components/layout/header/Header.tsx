import { HomeLogo } from "components/common/buttons";
import st from "components/layout/header/header.module.scss";

export default function Header() {
  return (
    <div className={st.headerBody}>
      <div className={st.headerLogo}>
        <HomeLogo />
      </div>
    </div>
  );
}

// const Nav = styled("div");

// function Menu() {
//   return (
//     <Nav
//       display="flex"
//       gap="15%"
//       justifyContent="center"
//       border="solid 1px"
//       width="80%"
//     >
//       <NavLink to="about">Home</NavLink>
//       <NavLink to="contact">Contact</NavLink>
//       <NavLink to="/blog">Blog</NavLink>
//       <NavLink to="/resume">Resume</NavLink>
//     </Nav>
//   );
// }
