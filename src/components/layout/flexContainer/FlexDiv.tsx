import { useRef } from "react";
import useStyleElement from "hooks/useStyleElement";
import CSS from "csstype";
import st from "./flexDiv.module.scss";

interface FlexProps extends DivStylesEvents {
  children?: any;
  className?: string;
}

interface DivStylesEvents
  extends CSS.Properties,
    React.DOMAttributes<HTMLElement> {}

export default function FlexDiv(props: FlexProps) {
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

function stylesAndEventsFromProps(props: DivStylesEvents) {
  const styles: CssProperties = Object.fromEntries(
    Object.entries(props).filter(([k]) => !k.match(/^on/g))
  );

  const events = Object.fromEntries(
    Object.entries(props).filter(([k]) => k.match(/^on/g))
  );
  return { styles, events };
}
