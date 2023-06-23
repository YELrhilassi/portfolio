import { useRef, useEffect } from "react";
import st from "./box.module.scss";
import CSS from "csstype";

interface BoxProps extends CSS.Properties, React.DOMAttributes<HTMLDivElement> {
  children?: any;
  className?: string;
}

export default function Box(props: BoxProps) {
  const { children, className, ...rest } = props;
  const box = useRef<HTMLDivElement>(null);
  const { events } = stylesAndEventsFromProps(rest);

  return (
    <div ref={box} className={`${st.boxCss} ${className}`} {...events}>
      {props.children}
    </div>
  );
}

function stylesAndEventsFromProps(props: any) {
  const styles = Object.fromEntries(
    Object.entries(props).filter(([k]) => !k.match(/^on/g))
  );

  const events = Object.fromEntries(
    Object.entries(props).filter(([k]) => k.match(/^on/g))
  );
  return { styles, events };
}
