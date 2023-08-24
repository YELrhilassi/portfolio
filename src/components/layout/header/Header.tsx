import { HomeLogo } from "components/common/buttons";
import st from "components/layout/header/header.module.scss";
// import { styled } from "../box";
// import { NavLink } from "react-router-dom";

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
//     <Nav display="flex" gap="15%" justifyContent="center" width="80%">
//       <NavLink to="/home/about">Home</NavLink>
//       <NavLink to="/home/contact">Contact</NavLink>
//       <NavLink to="/blog">Blog</NavLink>
//       <NavLink to="/resume">Resume</NavLink>
//     </Nav>
//   );
// }
