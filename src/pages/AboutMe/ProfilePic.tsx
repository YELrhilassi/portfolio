import st from "./aboutMe.module.scss";

export default function ProfilePic() {
  return (
    <>
      <svg className={st.animate} viewBox="-50 -50 500 500" fill="none">
        <g id="orbit">
          <path
            id="moon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.1438 358.339C42.059 357.739 36.9474 357.457 27.6131 361.764C9.57209 370.088 -5.82107 400.389 11.7217 417.239C20.9879 426.138 30.981 426.743 42.3092 428.33C48.2833 429.167 60.9229 426.817 66.2931 424.237C72.6904 421.165 78.3406 418.474 82.621 411.759C100.242 384.116 72.7418 358.339 51.1438 358.339Z"
            fill="#5A5753"
          />
          <path
            id="moonPath"
            d="M180.087 437.088C124.462 437.088 80.3328 411.961 49.7688 372.433C19.1936 332.891 2.18433 278.917 0.912564 221.272C4.29847 101.098 100.437 17.4095 218.194 17.396C283.256 21.4427 335.137 44.3026 369.638 79.5706C404.136 114.836 421.321 162.568 416.892 216.501C410.655 292.448 382.485 341.412 342.221 374.492C299.136 409.891 249.723 437.088 180.087 437.088Z"
            stroke="#5A5753"
            strokeWidth="1.82456"
          />
        </g>
      </svg>

      <img className={st.profilePic} src="/roundProfilePic.jpg" alt="" />
    </>
  );
}
