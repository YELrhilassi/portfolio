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

  const styles = Object.fromEntries(
    Object.entries(rest).filter(([k]) => !k.match(/^on/g))
  );
  const events = Object.fromEntries(
    Object.entries(rest).filter(([k]) => k.match(/^on/g))
  );

  useEffect(() => {
    if (box.current) {
      const flex = box.current;
      for (let key in styles) {
        console.log(styles[key].toString());
        flex.style[key as any] = styles[key].toString();
      }
    }
  }, [props]);
  return (
    <div ref={box} className={`${st.boxCss} ${className}`} {...events}>
      {props.children}
    </div>
  );
}
