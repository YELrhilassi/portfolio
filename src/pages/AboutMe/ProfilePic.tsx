export default function ProfilePic() {
  return (
    <svg viewBox="0 0 442 438" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="aboutProfilePic">
        <g id="profilePic">
          <mask
            id="mask0_335_2415"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="23"
            y="0"
            width="419"
            height="422"
          >
            <path
              id="applyedMask"
              d="M441.312 200.092C435.057 276.257 406.787 325.459 366.311 358.714C323.125 394.195 273.513 421.516 203.597 421.516C91.7317 421.516 26.053 320.404 23.5106 204.785C26.9005 84.0473 123.512 0 241.733 0C372.243 8.10608 450.21 91.7268 441.312 200.092Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_335_2415)">
            <rect
              id="img"
              x="-35.9523"
              y="-127.094"
              width="477.952"
              height="637.587"
              fill="url(#pattern0)"
            />
          </g>
        </g>
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
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image" transform="scale(0.00138525 0.00103842)" />
        </pattern>
        <image
          id="image"
          width="722 "
          height="963"
          xlinkHref="/profilePic.png"
        />
      </defs>
    </svg>
  );
}
