import { NavLink } from "react-router-dom";
import { HomeLogo } from "components/common/buttons";
import st from "components/layout/header/header.module.scss";
import { NavLinkProps } from "./types";

export default function Header() {
  return (
    <div className={`${st.headerBody} `}>
      <div className={st.headerLogo}>
        <HomeLogo />
      </div>
      <Menu />
    </div>
  );
}

export function Menu() {
  return (
    <nav className={st.navMenu}>
      <MenuNavLink to="/home/about">Home</MenuNavLink>
      <MenuNavLink to="/home/contact">Contact</MenuNavLink>
      <MenuNavLink to="home/codesnippet">Snippets</MenuNavLink>
      <MenuNavLink to="/blog">Blog</MenuNavLink>
      <MenuNavLink to="/resume">Resume</MenuNavLink>
    </nav>
  );
}

function MenuNavLink({ to, children }: NavLinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }: any) => (isActive ? st.active : "")}
        {...{ to }}
      >
        <span className={st.pseudoElem} />
        {children}
        <span className={st.pseudoElem} />
      </NavLink>
    </li>
  );
}
