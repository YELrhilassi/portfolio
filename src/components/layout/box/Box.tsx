import { useRef } from "react";
import { useStyleElement } from "hooks/useStyleElement";
import stylesAndEventsFromProps from "utils/stylesAndEventsFromProps";

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

export function styled(Tag: any) {
  return (props: BoxProps) => {
    const box = useRef<HTMLDivElement>(null);

    const { styles, events } = stylesAndEventsFromProps(props);
    const elemTag = props.name || "boxDivs";
    const [cssClass] = useStyleElement(elemTag, styles);
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
