import { useRef } from "react";
import useStyleElement from "hooks/useStyleElement";
import CSS from "csstype";
import st from "./flexDiv.module.scss";
import stylesAndEventsFromProps from "utils/stylesAndEventsFromProps";
import { BoxProps } from "../layoutTypes";

export default function FlexDiv(props: BoxProps) {
  const { children, className, ...rest } = props;

  const box = useRef<HTMLDivElement>(null);

  const { styles, events } = stylesAndEventsFromProps(rest);

  const [cssClass] = useStyleElement("boxDivs", styles);

  return (
    <div ref={box} className={`${st.flexContainer} ${cssClass}`} {...events}>
      {props.children}
    </div>
  );
}
type CssProperties = {
  [key: string]: CSS.Properties;
};
