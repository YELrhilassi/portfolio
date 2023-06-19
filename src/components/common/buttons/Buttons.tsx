import { useRef } from "react";
import st from "components/common/buttons/buttons.module.scss";
import { ArrowButtonProps } from "./types";

export function ArrowButton({ className }: ArrowButtonProps) {
  const button = useRef<HTMLButtonElement>(null);

  const buttonClick = (button: HTMLButtonElement | null) => {
    if (button) {
      const { classList } = button;
      !classList.contains(st.animateBtn)
        ? classList.add(st.animateBtn)
        : classList.remove(st.animateBtn);
    }
  };

  return (
    <div className={`${st.arrowBtn} ${className}`}>
      <button
        ref={button}
        onClick={() => buttonClick(button.current)}
        onAnimationEnd={() => buttonClick(button.current)}
      />
    </div>
  );
}
