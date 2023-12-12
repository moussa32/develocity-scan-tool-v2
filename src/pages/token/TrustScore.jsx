import { useQuery } from "@tanstack/react-query";
import styles from "./TrustScore.module.css";
import { requestHumanSummary } from "@/api/contractInfo";
import { useParams } from "react-router-dom";

const ProblemCard = () => {
  return (
    <div
      className={`flex flex-col font-segoe lg:max-w-[496px] ${styles.problemCard}`}
    >
      <h4 className={`${styles.problemCardTitle} text-white text-[21px]`}>
        Lorem ipsum dolor
      </h4>
      <p className={`${styles.problemCardDescrption} `}>
        Lorem ipsum dolor sit..
      </p>
    </div>
  );
};

const TrustScore = () => {
  const { contractAddress } = useParams();
  const { data } = useQuery({
    queryKey: ["getHumanSummary"],
    suspense: true,
    queryFn: () => requestHumanSummary({ contractAddress }),
  });

  return (
    <div className="grid grid-cols-1  lg:flex gap-11">
      <div className="bg-[#25293E] flex-col py-[42px] px-[36px] flex items-center justify-center rounded-[10px]">
        {/* <svg
          id="Group_1073"
          data-name="Group 1073"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="221.253"
          height="310.288"
          viewBox="0 0 221.253 310.288"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#9f4ae8" />
              <stop offset="1" stop-color="#3861fb" />
            </linearGradient>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_2045"
                data-name="Rectangle 2045"
                width="146.768"
                height="145.807"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-2">
              <path
                id="Path_17711"
                data-name="Path 17711"
                d="M86.749,0a2.886,2.886,0,0,0,0,5.771,67.132,67.132,0,1,1-58.548,100,2.886,2.886,0,0,0-5.03,2.83A72.908,72.908,0,1,0,86.749,0Z"
                transform="translate(-22.8)"
                fill="url(#linear-gradient)"
              />
            </clipPath>
            <filter id="Ellipse_126">
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" result="color" />
              <feComposite operator="out" in="SourceGraphic" in2="blur" />
              <feComposite operator="in" in="color" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
            <filter id="Ellipse_127">
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-2" />
              <feFlood flood-opacity="0.161" result="color-2" />
              <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
              <feComposite operator="in" in="color-2" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
            <filter id="Ellipse_128">
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-3" />
              <feFlood flood-opacity="0.161" result="color-3" />
              <feComposite operator="out" in="SourceGraphic" in2="blur-3" />
              <feComposite operator="in" in="color-3" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_990" data-name="Group 990" transform="translate(6.7 0)">
            <text
              id="_59_"
              data-name="59%"
              transform="translate(61.56 86.735)"
              fill="#e8eaec"
              font-size="35"
              font-family="SegoeUI-Semibold, Segoe UI"
              font-weight="600"
            >
              <tspan x="0" y="0">
                59%
              </tspan>
            </text>
            <g
              id="Group_648"
              data-name="Group 648"
              transform="translate(19.326 0)"
            >
              <g
                id="Group_647"
                data-name="Group 647"
                transform="translate(0 0)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_17710"
                  data-name="Path 17710"
                  d="M158.1,72.268A70.018,70.018,0,1,1,88.087,2.25,70.017,70.017,0,0,1,158.1,72.268Z"
                  transform="translate(-14.222 0.636)"
                  fill="none"
                  stroke="#414358"
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
              </g>
            </g>
            <g
              id="Group_649"
              data-name="Group 649"
              transform="translate(29.241 0)"
              clip-path="url(#clip-path-2)"
            >
              <rect
                id="Rectangle_2046"
                data-name="Rectangle 2046"
                width="161.352"
                height="161.774"
                transform="translate(178.532 102.615) rotate(150)"
                fill="url(#linear-gradient)"
              />
            </g>
            <image
              id="Rectangle_2047"
              data-name="Rectangle 2047"
              width="64.023"
              height="64.023"
              transform="translate(0 74.53)"
              xlink:href="data:image/png;base64,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"
            />
            <path
              id="Path_17712"
              data-name="Path 17712"
              d="M35.54,85.055a8.6,8.6,0,1,1-8.6-8.6,8.6,8.6,0,0,1,8.6,8.6"
              transform="translate(5.184 21.6)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_1072"
            data-name="Group 1072"
            transform="translate(0 177.846)"
          >
            <text
              id="Problems_detected:"
              data-name="Problems detected:"
              transform="translate(0 15)"
              fill="#9a9a9a"
              font-size="14"
              font-family="SegoeUI, Segoe UI"
            >
              <tspan x="0" y="0">
                Problems detected:
              </tspan>
            </text>
            <text
              id="CRITCAL"
              transform="translate(25.789 55.2)"
              fill="#9a9a9a"
              font-size="15"
              font-family="SegoeUI, Segoe UI"
            >
              <tspan x="0" y="0">
                CRITCAL
              </tspan>
            </text>
            <text
              id="IMPORTANT"
              transform="translate(25.789 91.305)"
              fill="#9a9a9a"
              font-size="15"
              font-family="SegoeUI, Segoe UI"
            >
              <tspan x="0" y="0">
                IMPORTANT
              </tspan>
            </text>
            <text
              id="_43"
              data-name="43"
              transform="translate(204.253 91.305)"
              fill="#e8eaec"
              font-size="15"
              font-family="SegoeUI, Segoe UI"
            >
              <tspan x="0" y="0">
                43
              </tspan>
            </text>
            <text
              id="INFORMATIONAL"
              transform="translate(25.789 128.442)"
              fill="#9a9a9a"
              font-size="15"
              font-family="SegoeUI, Segoe UI"
            >
              <tspan x="0" y="0">
                INFORMATIONAL
              </tspan>
            </text>
            <text
              id="_41"
              data-name="41"
              transform="translate(204.253 128.442)"
              fill="#e8eaec"
              font-size="15"
              font-family="SegoeUI, Segoe UI"
            >
              <tspan x="0" y="0">
                41
              </tspan>
            </text>
            <g data-type="innerShadowGroup">
              <circle
                id="Ellipse_126-2"
                data-name="Ellipse 126"
                cx="6.705"
                cy="6.705"
                r="6.705"
                transform="translate(0 43.326)"
                fill="#ea3943"
              />
              <g
                transform="matrix(1, 0, 0, 1, 0, -177.85)"
                filter="url(#Ellipse_126)"
              >
                <circle
                  id="Ellipse_126-3"
                  data-name="Ellipse 126"
                  cx="6.705"
                  cy="6.705"
                  r="6.705"
                  transform="translate(0 221.17)"
                  fill="#fff"
                />
              </g>
            </g>
            <g data-type="innerShadowGroup">
              <circle
                id="Ellipse_127-2"
                data-name="Ellipse 127"
                cx="6.705"
                cy="6.705"
                r="6.705"
                transform="translate(0 79.432)"
                fill="#f5a341"
              />
              <g
                transform="matrix(1, 0, 0, 1, 0, -177.85)"
                filter="url(#Ellipse_127)"
              >
                <circle
                  id="Ellipse_127-3"
                  data-name="Ellipse 127"
                  cx="6.705"
                  cy="6.705"
                  r="6.705"
                  transform="translate(0 257.28)"
                  fill="#fff"
                />
              </g>
            </g>
            <g data-type="innerShadowGroup">
              <circle
                id="Ellipse_128-2"
                data-name="Ellipse 128"
                cx="6.705"
                cy="6.705"
                r="6.705"
                transform="translate(0 116.568)"
                fill="#9a9a9a"
              />
              <g
                transform="matrix(1, 0, 0, 1, 0, -177.85)"
                filter="url(#Ellipse_128)"
              >
                <circle
                  id="Ellipse_128-3"
                  data-name="Ellipse 128"
                  cx="6.705"
                  cy="6.705"
                  r="6.705"
                  transform="translate(0 294.41)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg> */}
        <div className={`${styles.circalWrapper}`}>
          <div className="font-segoe font-semibold text-[35px]">
            {data?.result?.contractScan.toFixed(2)}%
          </div>
        </div>
        <h2 className="font-segoe text-left self-start text-sm text-[#9A9A9A] mt-8">
          Problems detected:
        </h2>
        <div className="w-full flex flex-col gap-4 mt-5">
          <div className="flex items-center gap-2 text-white">
            <div className="w-[14px] bg-[#EA3943] h-[14px] rounded-full"></div>
            <h3 className="text-[#9A9A9A] flex-grow">CRITCAL</h3>
            <span>{data?.result?.numberOfHighIssue}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-[14px] bg-[#F5A341] h-[14px] rounded-full"></div>
            <h3 className="text-[#9A9A9A] flex-grow">IMPORTANT</h3>
            <span>{data?.result?.numberOfMediunIssue}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-[14px] bg-[#9A9A9A] h-[14px] rounded-full"></div>
            <h3 className="text-[#9A9A9A] flex-grow">INFORMATIONAL</h3>
            <span>{data?.result?.numberOfLowIssue}</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[496px]">
        <h3 className="font-segoe text-white text-[21px] mb-5">Problem List</h3>
        <div className="flex flex-col gap-[10px] w-full ">
          <ProblemCard />
          <ProblemCard />
          <ProblemCard />
        </div>
      </div>
      <div className="self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 448 423"
          className="self-center md:w-[448px] md:h-[423px] mx-auto lg:mx-0"
        >
          <defs>
            <filter
              id="Rectangle_2079"
              x="0"
              y="0"
              width="448"
              height="423"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_2079)">
            <rect
              id="Rectangle_2079-2"
              data-name="Rectangle 2079"
              width="430"
              height="405"
              rx="10"
              transform="translate(9 6)"
              fill="#25293e"
            />
          </g>
          <text
            id="_ad_space_"
            data-name="[ad space]"
            transform="translate(171 217)"
            fill="#888"
            font-size="23"
            font-family="SegoeUI, Segoe UI"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              [ad space]
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TrustScore;
