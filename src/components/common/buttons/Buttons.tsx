import { useRef } from "react";
import st from "components/common/buttons/buttons.module.scss";
import { ArrowbtnToProps, ArrowButtonProps } from "./types";
import { Link, useNavigate } from "react-router-dom";

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

// function LinkBtn(params: any) {}

export function HomeLogo() {
  return (
    <Link to="/home/about">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6235 10.9013C30.6235 19.4859 21.7443 33.4116 14.5566 31.2813C4.40893 28.2738 1.44928 24.1592 2.71781 15.473C4.40906 8.15829 5.25468 5.87245 13.7109 2.67227C21.3215 -0.207819 30.6235 2.31672 30.6235 10.9013Z"
          fill="#F5D5A4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.061 9.65642C17.4362 7.70959 22.1116 3.27535 26.0015 2.04331C29.9344 0.797672 33.6942 7.00803 26.1939 12.6785C24.4212 14.0188 21.602 15.6479 18.4858 16.7756C20.6408 25.4057 25.1175 30.0259 28.3775 24.4468C29.1416 23.1392 28.6253 22.2384 29.2607 21.1052C29.7857 20.4659 30.3097 20.5247 30.8355 20.7274C31.7463 21.0787 32.0078 22.2675 30.3944 25.1732C28.3775 28.8054 20.9457 33.135 15.3926 14.9449C15.224 14.3928 19.1489 14.2185 23.4864 11.6905C26.1939 10.1125 29.2606 5.82088 28.3775 4.6004C27.7773 3.80513 25.0336 4.72779 21.8012 6.54732C18.4306 8.44461 15.4735 10.5864 14.7009 11.429C13.8168 17.7055 12.7394 21.2215 11.6066 23.2845C7.51776 30.2293 1.34551 28.6602 1.82657 23.2845C2.0476 20.8146 4.4512 17.9379 13.7006 10.5863V10.1827C13.6235 9.27874 13.071 10.7316 11.6285 11.868C10.7693 12.5449 7.71125 15.2049 5.80494 12.0683C5.22477 10.1827 6.60614 9.36591 7.32446 5.3269C7.67587 3.35098 7.13107 2.45016 6.27461 2.27581C4.03678 1.49125 3.31847 4.77477 2.26862 4.77477C1.02538 4.91037 -0.753836 4.51325 2.07523 1.83995C3.01457 0.95232 4.69985 0.241777 6.27461 0.590515C8.73347 1.13504 8.96404 2.9521 8.51245 5.3269C8.2638 6.61512 8.07041 6.75073 7.84939 7.82586C7.18633 9.83084 7.60074 13.6955 11.6285 10.1827C13.6235 8.44272 13.2644 4.10648 14.9497 4.10648C15.4746 4.22271 15.3917 6.46015 15.061 9.65642ZM13.4025 12.3298C12.233 17.3955 10.6674 27.3581 4.72748 24.9118C0.666226 22.2675 9.03738 15.2936 13.4025 12.3298Z"
          fill="#140E0E"
        />
      </svg>
    </Link>
  );
}
