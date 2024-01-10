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
  const { contractAddress, network } = useParams();
  const { data } = useQuery({
    queryKey: ["getHumanSummary", contractAddress],
    suspense: true,
    queryFn: () => requestHumanSummary({ contractAddress, network }),
  });

  return (
    <div className="grid grid-cols-1  lg:flex gap-11">
      <div className="bg-[#25293E] flex-col py-[42px] px-[36px] flex items-center justify-center rounded-[10px]">
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
            <div className="w-[14px] bg-slate-300 h-[14px] rounded-full"></div>
            <h3 className="text-[#9A9A9A] flex-grow uppercase">low</h3>
            <span>{data?.result?.numberOfLowIssue}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-[14px] bg-emerald-500 h-[14px] rounded-full"></div>
            <h3 className="text-[#9A9A9A] flex-grow uppercase">Optimization</h3>
            <span>{data?.result?.numberOfOptimizationIssue}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-[14px] bg-[#9A9A9A] h-[14px] rounded-full"></div>
            <h3 className="text-[#9A9A9A] flex-grow">INFORMATIONAL</h3>
            <span>{data?.result?.numberOfLowIssue}</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[496px]">
        {/* <h3 className="font-segoe text-white text-[21px] mb-5">Problem List</h3>
        <div className="flex flex-col gap-[10px] w-full ">
          <ProblemCard />
          <ProblemCard />
          <ProblemCard />
        </div> */}
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
