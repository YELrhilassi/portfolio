import CSS from "csstype";

export interface BoxProps
  extends CSS.Properties,
    React.DOMAttributes<HTMLElement> {
  children?: any;
  className?: string;
  name?: string;
  mobile?: CSS.Properties;
  tablet?: CSS.Properties;
  desktop?: CSS.Properties;
}

export interface InitStyles extends CSS.Properties {
  mobile?: CSS.Properties;
  tablet?: CSS.Properties;
  desktop?: CSS.Properties;
}

export type ParentDiv = {
  children: JSX.Element | JSX.Element[];
};
