import { useRef, useEffect } from "react";
import st from "./flexDiv.module.scss";
import a from "./cs.css?inline";
import CSS from "csstype";

interface FlexProps
  extends CSS.Properties,
    React.DOMAttributes<HTMLDivElement> {
  children?: any;
  className?: string;
}

export default function FlexDiv(props: FlexProps) {
  const { children, className, ...rest } = props;
  const box = useRef<HTMLDivElement>(null);
  const { current: uniqueId } = useRef(`box_${getUniqueId()}`);
  const cssText = useRef(``);

  const styles: any = Object.fromEntries(
    Object.entries(rest).filter(([k]) => !k.match(/^on/g))
  );
  const events = Object.fromEntries(
    Object.entries(rest).filter(([k]) => k.match(/^on/g))
  );

  useEffect(() => {
    if (box.current) {
      const flex = box.current;

      for (let key in styles) {
        const value = styles[key].toString();

        cssText.current = `${cssText.current}\n ${toDashed(key)}: ${value};`;
      }
      cssText.current = `{ ${cssText.current} }`;
      generateAtachedCss(uniqueId, cssText.current);
    }

    return () => {
      cssText.current = ``;
    };
  });

  return (
    <div ref={box} className={`${st.flexContainer} ${uniqueId}`} {...events}>
      {props.children}
    </div>
  );
}

function generateAtachedCss(id: string, css: any) {
  let styleElement = document.getElementById(id);
  console.log(css);

  if (styleElement?.textContent?.includes(css)) {
    console.log("same");

    return;
  }

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = id;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `.${id}${css}`;
}

function getUniqueId() {
  return Math.random().toString(36).substring(2, 10);
}

function toDashed(camelCaseKey: string) {
  return camelCaseKey.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
