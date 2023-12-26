import VerifyIcon from "@assets/images/verifyIcon.svg";

import styles from "./TokenSummary.module.css";
import { useQuery } from "@tanstack/react-query";
import { requestContractInfo } from "@/api/contractInfo";
import { useParams } from "react-router-dom";

const TokenSummary = () => {
  const { network, contractAddress } = useParams();
  const { data } = useQuery({
    queryKey: ["getTokenInfo"],
    suspense: true,
    queryFn: () => requestContractInfo({ network, contractAddress }),
  });

  return (
    <div className="flex w-full flex-col md:flex-row md:flex-nowrap justify-center items-center flex-wrap font-sf md:items-start text-white">
      {data?.result?.contractInfo?.logo ? (
        <img
          src={data?.result?.contractInfo?.logo}
          alt={data?.result?.contractInfo?.name}
          width={64}
        />
      ) : (
        <h2 className="flex items-center justify-center w-20 text-xl h-[4.5rem] rounded-full bg-primary/90">
          {data?.result?.contractInfo?.name[0]}
        </h2>
      )}
      <div className="flex flex-wrap w-full pl-3 flex-col">
        <div className="flex flex-wrap w-full items-center gap-3">
          <h1 className={`${styles.tokenName} flex-grow md:flex-grow-0`}>
            {data?.result?.contractInfo?.name}
          </h1>
          <span className={`${styles.badge}`}>
            ${data?.result?.contractInfo?.symbol}
          </span>
          {data?.result?.isNotListed && (
            <button className={`${styles.submitTokenButton}`}>
              Submit your token
            </button>
          )}
          {data?.result?.isTokenVerification && (
            <img src={VerifyIcon} alt="token virefied" />
          )}
          <div className="flex gap-2">
            {data?.result?.contractInfo?.telegram && (
              <a href={data?.result?.contractInfo?.telegram}>
                <svg
                  id="Telegram"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle
                    id="Ellipse_68"
                    data-name="Ellipse 68"
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#e8eaec"
                  />
                  <path
                    id="Path_257"
                    data-name="Path 257"
                    d="M71.76,366.92a.777.777,0,0,0-.762-.447,1.642,1.642,0,0,0-.523.094c-.077.029-7.722,2.95-10.857,4.237a.881.881,0,0,0-.529.471A.6.6,0,0,0,59.4,372c.779.343,2.4.82,2.908.966.168.557.753,2.5,1.025,3.33a.544.544,0,0,0,.56.346c.041,0,.068,0,.068,0a.291.291,0,0,0,.187-.1.28.28,0,0,0,.072-.166l.162-2.346,1.247.934c.975.729,2.137,1.593,2.787,2.064a1.153,1.153,0,0,0,.664.251.908.908,0,0,0,.831-.747c.539-2.1,1.329-6.06,1.8-8.428l.1-.518A1,1,0,0,0,71.76,366.92Zm-7.918,6.532-.144,2.083c-.355-1.132-.875-2.868-.882-2.889,0-.006-.007-.01-.009-.016v-.012l5.977-3.892a2.938,2.938,0,0,1,.562-.314c.209-.045.258.037.221.087a10.189,10.189,0,0,1-.831.785l-4.764,3.946v0A.283.283,0,0,0,63.842,373.452Z"
                    transform="translate(-54.307 -359.872)"
                    fill="#888"
                  />
                </svg>
              </a>
            )}
            {data?.result?.contractInfo?.twitter && (
              <a href={data?.result?.contractInfo?.twitter}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="Telegram" transform="translate(-0.429)">
                    <circle
                      id="Ellipse_68"
                      data-name="Ellipse 68"
                      cx="12"
                      cy="12"
                      r="12"
                      transform="translate(0.429)"
                      fill="#e8eaec"
                    />
                    <path
                      id="Path_258"
                      data-name="Path 258"
                      d="M289.758,158.569a7.326,7.326,0,0,0,11.271-6.5,5.228,5.228,0,0,0,1.286-1.334,5.146,5.146,0,0,1-1.48.405,2.579,2.579,0,0,0,1.132-1.425,5.16,5.16,0,0,1-1.635.625,2.578,2.578,0,0,0-4.39,2.349,7.309,7.309,0,0,1-5.309-2.692,2.579,2.579,0,0,0,.8,3.439,2.563,2.563,0,0,1-1.167-.322,2.579,2.579,0,0,0,2.066,2.559,2.579,2.579,0,0,1-1.163.044,2.578,2.578,0,0,0,2.406,1.789A5.177,5.177,0,0,1,289.758,158.569Z"
                      transform="translate(-284.036 -142.625)"
                      fill="#888"
                    />
                  </g>
                </svg>
              </a>
            )}
            {data?.result?.contractInfo?.facebook && (
              <a href={data?.result?.contractInfo?.facebook}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="Telegram" transform="translate(0.143)">
                    <circle
                      id="Ellipse_68"
                      data-name="Ellipse 68"
                      cx="12"
                      cy="12"
                      r="12"
                      transform="translate(-0.143)"
                      fill="#e8eaec"
                    />
                    <path
                      id="Path_259"
                      data-name="Path 259"
                      d="M188.12,158.532h2.613v-6.543h1.823l.194-2.191h-2.017v-1.248c0-.516.1-.72.6-.72h1.414v-2.274h-1.809c-1.944,0-2.821.856-2.821,2.5V149.8h-1.359v2.218h1.359Z"
                      transform="translate(-177.755 -140.045)"
                      fill="#888"
                    />
                  </g>
                </svg>
              </a>
            )}
            {data?.result?.contractInfo?.website && (
              <a href={data?.result?.contractInfo?.website}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="Telegram" transform="translate(-0.286)">
                    <circle
                      id="Ellipse_68"
                      data-name="Ellipse 68"
                      cx="12"
                      cy="12"
                      r="12"
                      transform="translate(0.286)"
                      fill="#e8eaec"
                    />
                    <path
                      id="Path_300"
                      data-name="Path 300"
                      d="M110.926,33.6a7.327,7.327,0,1,0,7.328,7.326A7.331,7.331,0,0,0,110.926,33.6Zm.333.779a1.681,1.681,0,0,1,.653.4,4.357,4.357,0,0,1,.916,1.379c.091.2.177.421.257.651h-1.826Zm-.666,0v2.434h-1.825c.08-.23.165-.448.257-.651a4.357,4.357,0,0,1,.916-1.379A1.683,1.683,0,0,1,110.593,34.382Zm-1.269.08a5.262,5.262,0,0,0-.907,1.43,8.817,8.817,0,0,0-.352.925h-2.381a6.655,6.655,0,0,1,3.64-2.354Zm3.2,0a6.657,6.657,0,0,1,3.64,2.354h-2.381a8.82,8.82,0,0,0-.352-.925A5.258,5.258,0,0,0,112.529,34.462Zm-7.305,3.02h2.652a14.08,14.08,0,0,0-.4,3.113h-3.2a6.628,6.628,0,0,1,.95-3.113Zm3.341,0h2.028V40.6h-2.449a13.347,13.347,0,0,1,.421-3.113Zm2.694,0h2.028a13.353,13.353,0,0,1,.421,3.113h-2.449Zm2.718,0h2.653a6.625,6.625,0,0,1,.95,3.113h-3.205a14.1,14.1,0,0,0-.4-3.113Zm-9.7,3.779h3.2a14.139,14.139,0,0,0,.387,3.072H105.2a6.629,6.629,0,0,1-.924-3.072Zm3.87,0h2.449v3.072h-2.039a13.4,13.4,0,0,1-.41-3.072Zm3.115,0h2.449a13.41,13.41,0,0,1-.409,3.072h-2.04Zm3.115,0h3.205a6.628,6.628,0,0,1-.924,3.072h-2.668a14.149,14.149,0,0,0,.387-3.072ZM105.651,45h2.4a8.9,8.9,0,0,0,.366.968,5.259,5.259,0,0,0,.907,1.43,6.654,6.654,0,0,1-3.673-2.4Zm3.1,0h1.84v2.477a1.68,1.68,0,0,1-.653-.4,4.361,4.361,0,0,1-.916-1.379c-.1-.216-.188-.448-.272-.694Zm2.506,0H113.1c-.084.246-.174.479-.271.694a4.358,4.358,0,0,1-.916,1.379,1.681,1.681,0,0,1-.653.4Zm2.542,0h2.4a6.657,6.657,0,0,1-3.674,2.4,5.257,5.257,0,0,0,.907-1.43A8.87,8.87,0,0,0,113.8,45Z"
                      transform="translate(-98.641 -28.929)"
                      fill="#888"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-[#E8EAEC] flex flex-wrap max-w-full items-center gap-3 my-4 md:my-0 truncate">
          Contract Address:{" "}
          <a className={`${styles.contract} truncate`} href={``}>
            {contractAddress}
          </a>
        </p>
        <div className="flex flex-wrap gap-3 w-full my-3">
          <div className={styles.badge}>Rank #{data?.result?.interest}</div>
          <div className={styles.badge}>{data?.result?.contractType}</div>
          <div className={styles.badge}>
            Total Scans - {(data?.result?.contractInfo).toLocaleString("en-US")}
          </div>
          <div className={styles.badge}>
            Average Score - {(82).toLocaleString("en-US")}
          </div>
          <a
            href={data?.result?.contractInfo?.whitepaper}
            className={styles.badge}
          >
            View More 
          </a>
        </div>
        <svg
          className="hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="484"
          height="90"
          viewBox="0 0 484 90"
        >
          <text
            id="Netguru"
            transform="translate(152.5 28.5)"
            fill="#888"
            font-size="11"
            font-family="SegoeUI, Segoe UI"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              Market Cap
            </tspan>
          </text>
          <text
            id="Netguru-2"
            data-name="Netguru"
            transform="translate(152.5 49.5)"
            fill="#fff"
            font-size="16"
            font-family="SegoeUI-Semibold, Segoe UI"
            font-weight="600"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              ${data?.result?.contractInfo?.market_cap.toLocaleString("en-US")}
            </tspan>
          </text>
          <text
            id="Netguru-3"
            data-name="Netguru"
            transform="translate(17.5 49.5)"
            fill="#fff"
            font-size="16"
            font-family="SegoeUI-Semibold, Segoe UI"
            font-weight="600"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              $
              {data?.result?.contractInfo?.current_price.toLocaleString(
                "en-US"
              )}
            </tspan>
          </text>
          <text
            id="Netguru-4"
            data-name="Netguru"
            transform="translate(344.5 49.5)"
            fill="#fff"
            font-size="16"
            font-family="SegoeUI-Semibold, Segoe UI"
            font-weight="600"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              {Number(
                data?.result?.contractInfo?.total_supply.toLocaleString("en-US")
              ).toFixed(2)}
            </tspan>
          </text>
          <text
            id="Netguru-5"
            data-name="Netguru"
            transform="translate(17.5 28.5)"
            fill="#888"
            font-size="11"
            font-family="SegoeUI, Segoe UI"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              Current Price
            </tspan>
          </text>
          <text
            id="Netguru-6"
            data-name="Netguru"
            transform="translate(344.5 28.5)"
            fill="#888"
            font-size="10"
            font-family="SegoeUI, Segoe UI"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              Total Supply
            </tspan>
          </text>
          <text
            id="_1.05_"
            data-name="+1.05%"
            transform="translate(17.5 67.5)"
            fill="#16c784"
            font-size="11"
            font-family="SegoeUI, Segoe UI"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              +1.05%
            </tspan>
          </text>
          <text
            id="_-4.87_"
            data-name="-4.87%"
            transform="translate(152.5 67.5)"
            fill="#ea3943"
            font-size="10"
            font-family="SegoeUI, Segoe UI"
            letter-spacing="0.022em"
          >
            <tspan x="0" y="0">
              -4.87%
            </tspan>
          </text>
          <path
            id="Union_1"
            data-name="Union 1"
            d="M-4038.5,90a1.5,1.5,0,0,1-1.5-1.5V1.5a1.5,1.5,0,0,1,1.5-1.5h481a1.5,1.5,0,0,1,1.5,1.5v87a1.5,1.5,0,0,1-1.5,1.5Zm479.5-3V3h-163.5V87Zm-166.5,0V3H-3913V87ZM-4037,87h121V3h-121Z"
            transform="translate(4040)"
            fill="#272b40"
          />
        </svg>
      </div>
    </div>
  );
};

export default TokenSummary;
