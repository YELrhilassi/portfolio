import { useEffect } from "react";
import { useRef, useState } from "react";
import CSS from "csstype";

type CssProperties = {
  [key: string]: CSS.Properties;
};
type CssClassType = {
  className: string;
  styles: string;
};
type AttachedCssObj = {
  [className: string]: string;
};

export default function useStyleElement(
  styleElemID: string,
  styles: CssProperties
) {
  const { current: className } = useRef(`_${styleElemID}_${getUniqueId()}`);

  useEffect(() => {
    generateAtachedCss(styleElemID, generateCssClass(className, styles));
  });
  return [className];
}

function generateCssClass(className: string, styles: any): CssClassType {
  let cssText = "";

  for (let key in styles) {
    const value = styles[key].toString();
    cssText = `${cssText} ${toDashed(key)}: ${value};`;
  }

  return { className, styles: `.${className}{ ${cssText} }` };
}

function generateAtachedCss(styleElemID: string, cssClass: CssClassType) {
  let styleElement = document.getElementById(styleElemID);
  const attachedCss = getAttachedCss(styleElement);

  if (
    attachedCss[cssClass.className] &&
    attachedCss[cssClass.className].includes(cssClass.styles)
  ) {
    return;
  }

  if (
    attachedCss[cssClass.className] &&
    !attachedCss[cssClass.className].includes(cssClass.styles)
  ) {
    attachedCss[cssClass.className] = cssClass.styles;
  }

  if (styleElement && !attachedCss[cssClass.className]) {
    attachedCss[cssClass.className] = cssClass.styles;
  }

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleElemID;
    document.head.appendChild(styleElement);

    attachedCss[cssClass.className] = cssClass.styles;
  }

  let allStyles = "";
  for (const key in attachedCss) {
    allStyles = `${allStyles} ${attachedCss[key]}`;
  }

  styleElement.textContent = allStyles;
}

function getAttachedCss(styleElement: HTMLElement | null) {
  const classesObject: AttachedCssObj = {};
  if (styleElement && styleElement.textContent) {
    const stylesString = styleElement.textContent;
    const classArray = stylesString
      .trim()
      .split(" }")
      .filter((str: string) => str)
      .map((str: string) => str.trim() + " }");

    classArray.forEach((classDef) => {
      const className = classDef.substring(1, classDef.indexOf("{"));
      classesObject[className] = classDef;
    });
  }

  return classesObject;
}
function getUniqueId() {
  return Math.random().toString(36).substring(2, 10);
}

function toDashed(camelCaseKey: string) {
  return camelCaseKey.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
