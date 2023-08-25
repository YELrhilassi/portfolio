import { HomeLogo } from "components/common/buttons";
import st from "components/layout/header/header.module.scss";
import { styled } from "../box";
import { NavLink } from "react-router-dom";
import { useFadeIn } from "hooks";

export default function Header() {
  const fadein = useFadeIn();
  return (
    <div className={`${st.headerBody} ${fadein}`}>
      <div className={st.headerLogo}>
        <HomeLogo />
      </div>
      <Menu />
    </div>
  );
}

const Nav = styled("div");

function Menu() {
  return (
    <Nav display="flex" gap="15%" justifyContent="center" width="80%">
      <NavLink to="/home/about">Home</NavLink>
      <NavLink to="/home/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </Nav>
  );
}
