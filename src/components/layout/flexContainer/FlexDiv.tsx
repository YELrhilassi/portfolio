import { useRef } from "react";
import useStyleElement from "hooks/useStyleElement";
import stylesAndEventsFromProps from "utils/stylesAndEventsFromProps";
import { BoxProps } from "../layoutTypes";
import st from "./flexDiv.module.scss";

export default function FlexDiv(props: BoxProps) {
  const box = useRef<HTMLDivElement>(null);

  const { styles, events } = stylesAndEventsFromProps(props);

  const [cssClass] = useStyleElement("boxDivs", styles);

  return (
    <div ref={box} className={`${st.flexContainer} ${cssClass}`} {...events}>
      {props.children}
    </div>
  );
}
