import CSS from "csstype";

export interface BoxProps
  extends CSS.Properties,
    React.DOMAttributes<HTMLElement> {
  children?: any;
  className?: string;
  mobile?: CSS.Properties;
  tablet?: CSS.Properties;
  desktop?: CSS.Properties;
}
