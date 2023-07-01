import useStyleElement from "hooks/useStyleElement";
import stylesAndEventsFromProps from "utils/stylesAndEventsFromProps";
import { BoxProps } from "../layoutTypes";
import st from "./flexDiv.module.scss";

export default function FlexDiv(props: BoxProps) {
  const { styles, events } = stylesAndEventsFromProps(props);

  const [cssClass] = useStyleElement("boxDivs", styles);

  return (
    <div className={`${st.flexContainer} ${cssClass}`} {...events}>
      {props.children}
    </div>
  );
}
