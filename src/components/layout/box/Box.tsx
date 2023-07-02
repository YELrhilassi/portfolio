import { useRef } from "react";
import { useStyleElement } from "hooks/useStyleElement";
import stylesAndEventsFromProps from "utils/stylesAndEventsFromProps";

import st from "./box.module.scss";
import { BoxProps, InitStyles } from "../layoutTypes";

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

export function styled(Tag: string, initStyles?: InitStyles) {
  return (props: BoxProps) => {
    const box = useRef<HTMLDivElement>(null);

    const { styles, events } = stylesAndEventsFromProps(props);
    let allStyles = styles;
    if (initStyles) {
      allStyles = { ...styles, ...initStyles };
    }
    const elemTag = props.name || "boxDivs";
    const [cssClass] = useStyleElement(elemTag, allStyles);
    return (
      <Tag
        ref={box}
        className={`${st.BoxCss} ${cssClass} ${
          props.className && props.className
        }`}
        {...events}
      >
        {props.children}
      </Tag>
    );
  };
}
