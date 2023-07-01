import { useRef } from "react";
import stylesAndEventsFromProps from "utils/stylesAndEventsFromProps";
import useStyleElement from "hooks/useStyleElement";

import st from "./box.module.scss";
import { BoxProps } from "../layoutTypes";

export default function Box(props: BoxProps) {
  const box = useRef<HTMLDivElement>(null);

  const { styles, events } = stylesAndEventsFromProps(props);
  const elemTag = props.name || "boxDivs";
  const [cssClass] = useStyleElement(elemTag, styles);
  return (
    <div
      ref={box}
      className={`${st.BoxCss} ${cssClass} ${
        props.className && props.className
      }`}
      {...events}
    >
      {props.children}
    </div>
  );
}
