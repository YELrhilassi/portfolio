import { useEffect, useState } from "react";
import fadeIn from "styles/animations/fadeIn.module.scss";
//
//
//
//
export default function useFadeIn(time = 400) {
  const [fadeInClass, setFadeInClass] = useState(fadeIn.isNot);

  useEffect(() => {
    setTimeout(() => {
      setFadeInClass(fadeIn.isReady);
    }, time);
  }, []);
  return [fadeInClass];
}
