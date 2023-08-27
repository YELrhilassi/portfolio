import { ReactNode } from "react";
import { To } from "react-router-dom";

export type HeaderProps = any;

export type NavLinkProps = {
  to: To;
  children: ReactNode;
};
