import { ReactElement } from "react";

export type Section = {
  url: string;
  name: string;
  element: () => ReactElement;
};
