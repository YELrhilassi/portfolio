import { useEffect } from "react";
import { useRef, useState } from "react";
import CSS from "csstype";

export type CssProperties = {
  [key: string]: CSS.Properties<string>;
};
type CssClassType = {
  className: string;
  styles: string;
};
type AttachedCssObj = {
  [key: string]: string;
};

const SCREEN: AttachedCssObj = {
  mobile: `max-width: 767px`,
  tablet: `min-width: 768px`,
  desktop: `min-width: 992px`,
  // xl: `min-width: 1200px`,
  // xxl: `min-width: 1400px`,
  // lg: `min-width: 992px`,
  // md: `min-width: 768px`,
  // sm: `min-width: 576px`,
  // xs: `max-width: 576px`,
};

export default function useStyleElement(
  styleElemID: string,
  styles: CssProperties
) {
  const { current: className } = useRef(`_${styleElemID}_${getUniqueId()}`);
  const { mobile, tablet, desktop, ...rest } = styles;

  useEffect(() => {
    generateAtachedCss(styleElemID, generateCssClass(className, rest));

    for (const key in SCREEN) {
      if (styles[key]) {
        generateAtachedCss(
          `${key}Media`,
          generateCssClass(className, styles[key]),
          SCREEN[key]
        );
      }
    }
  }, [rest, mobile, tablet, desktop]);
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

function generateAtachedCss(
  styleElemID: string,
  cssClass: CssClassType,
  screenMedia?: string
) {
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

  if (screenMedia && allStyles.includes("@")) {
    styleElement.textContent = `@media only screen and ( ${screenMedia} ){ ${allStyles
      .match(/\._[\w\d]+[^{]+{[^}]+}/g)
      ?.join(" ")} }`;
    return;
  }
  if (screenMedia) {
    styleElement.textContent = `@media only screen and ( ${screenMedia} ){ ${allStyles} }`;
    return;
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
