import { useRef } from "react";
import st from "components/common/buttons/buttons.module.scss";
import { ArrowbtnToProps, ArrowButtonProps } from "./types";
import { useNavigate } from "react-router-dom";

export function ArrowBtn({ className, ...rest }: ArrowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const switchClass = () => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add(st.animateBtn);
      button.onanimationend = () => button.classList.remove(st.animateBtn);
    }
  };

  return (
    <div className={`${st.arrowBtn} ${className}`} onClick={switchClass}>
      <button ref={buttonRef} {...rest} />
    </div>
  );
}

export function ArrowBtnTo({ to, ...rest }: ArrowbtnToProps) {
  const navigate = useNavigate();

  return <ArrowBtn onAnimationEnd={() => navigate(to)} {...rest} />;
}

function LinkBtn(params: any) {}
