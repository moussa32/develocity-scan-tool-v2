import { useQuery } from "@tanstack/react-query";
import Liquidity10Top from "./Liquidity10Top";
import Wallet10Top from "./Wallet10Top";
import {
  requestContractAnalysis,
  requestContractLiquidity,
  requestContractTax,
} from "@/api/contractInfo";
import { useParams } from "react-router-dom";
import Liquidity from "./Liquidity";

const TokenDetails = () => {
  const { contractAddress, network } = useParams();

  const {
    data: taxes,
    isFetching: isTaxesFetching,
    isSuccess: isTaxesSuccess,
  } = useQuery({
    queryKey: ["getTax", contractAddress],
    suspense: true,
    queryFn: () => requestContractTax({ contractAddress, network }),
  });

  const {
    data: liquidity,
    isFetching: isLiquidityFetching,
    isSuccess: isLiquiditySuccess,
  } = useQuery({
    queryKey: ["getLiquditiy", contractAddress],
    suspense: true,
    queryFn: () => requestContractLiquidity({ contractAddress, network }),
  });

  const {
    data: analysis,
    isFetching: isAnalysisFetching,
    isSuccess: isAnalysisSuccess,
  } = useQuery({
    queryKey: ["getAnalysis", contractAddress],
    suspense: true,
    queryFn: () => requestContractAnalysis({ contractAddress, network }),
  });

  return (
    <>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1 mb-10">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
              Contract Analysis
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-base text-[#9A9A9A]">Mint:</h3>
                <span
                  className={`text-sm ${
                    analysis["flags.mint.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["mint"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">Burn:</h3>
                <span
                  className={`text-sm ${
                    analysis["flags.burn.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["burn"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">
                  Rufliction:
                </h3>
                <span
                  className={`text-sm ${
                    analysis["flags.reflection.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["reflection"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">
                  Honeypot Test:
                </h3>
                <span
                  className={`text-sm ${
                    analysis["flags.honeypotTest.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["honeypotTest"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">
                  Self Destruction:
                </h3>
                <span
                  className={`text-sm ${
                    analysis["flags.selfdistruction.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["selfdistruction"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">
                  Disable Trading:
                </h3>
                <span
                  className={`text-sm ${
                    analysis["flags.disabletrading.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["disabletrading"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">
                  Transfer Ownership:
                </h3>
                <span
                  className={`text-sm ${
                    analysis["flags.transferOwnership.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["transferOwnership"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">
                  Antiwhale:
                </h3>
                <span
                  className={`text-sm ${
                    analysis["flags.antiWhale.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["antiWhale"] ? "Detected" : "Not Detected"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-md text-[#9A9A9A]">Antibot:</h3>
                <span
                  className={`text-sm ${
                    analysis["flags.antiBot.color"] === "green"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {analysis["antiBot"] ? "Detected" : "Not Detected"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
            Holders Distribution
          </h2>
          <svg
            id="Group_991"
            data-name="Group 991"
            xmlns="http://www.w3.org/2000/svg"
            width="607"
            height="188.497"
            viewBox="0 0 689.351 188.497"
          >
            <g
              id="Group_705"
              data-name="Group 705"
              transform="translate(0 7.451)"
            >
              <text
                id="Wallet_Shrink"
                data-name="Wallet Shrink"
                transform="translate(29.801 169.731)"
                fill="#e8eaec"
                font-size="18"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="0" y="0">
                  Wallet Shrink
                </tspan>
              </text>
              <text
                id="_398"
                data-name="398"
                transform="translate(337.874 169.868)"
                fill="#e8eaec"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="-33.233" y="0">
                  398
                </tspan>
              </text>
              <circle
                id="Ellipse_67"
                data-name="Ellipse 67"
                cx="8.382"
                cy="8.382"
                r="8.382"
                transform="translate(0 154.594)"
                fill="#ea3943"
              />
              <text
                id="Airdrop_Holders"
                data-name="Airdrop Holders"
                transform="translate(29.801 91.366)"
                fill="#e8eaec"
                font-size="16"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="0" y="0">
                  Airdrop Holders
                </tspan>
              </text>
              <text
                id="_2_116"
                data-name="2,116"
                transform="translate(340.424 95.366)"
                fill="#e8eaec"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="-49.239" y="0">
                  2,116
                </tspan>
              </text>
              <circle
                id="Ellipse_66"
                data-name="Ellipse 66"
                cx="8.382"
                cy="8.382"
                r="8.382"
                transform="translate(0 80.091)"
                fill="#16c784"
              />
              <text
                id="Real_Holders"
                data-name="Real Holders"
                transform="translate(29.801 17)"
                fill="#e8eaec"
                font-size="18"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="0" y="0">
                  Real Holders
                </tspan>
              </text>
              <text
                id="_1_586"
                data-name="1,586"
                transform="translate(339.836 19)"
                fill="#e8eaec"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="-49.239" y="0">
                  1,586
                </tspan>
              </text>
              <circle
                id="Ellipse_65"
                data-name="Ellipse 65"
                cx="8.382"
                cy="8.382"
                r="8.382"
                transform="translate(0 3.725)"
                fill="#f5a341"
              />
            </g>
            <g
              id="Group_704"
              data-name="Group 704"
              transform="translate(502.895 0)"
            >
              <text
                id="Total"
                transform="translate(92.778 85.894)"
                fill="#e8eaec"
                font-size="15"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.022em"
              >
                <tspan x="-21.35" y="0">
                  TOTAL
                </tspan>
              </text>
              <text
                id="_4_000"
                data-name="4 000"
                transform="translate(92.19 111.382)"
                fill="#e8eaec"
                font-size="20"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
                letter-spacing="0.022em"
              >
                <tspan x="-26.055" y="0">
                  4 000
                </tspan>
              </text>
              <g
                id="Donut_size_04"
                data-name="Donut/size 04"
                transform="translate(0)"
              >
                <g
                  id="Donut_chart"
                  data-name="Donut chart"
                  transform="translate(0)"
                >
                  <rect
                    id="Rectangle_Copy_13"
                    data-name="Rectangle Copy 13"
                    width="161.686"
                    height="176.264"
                    rx="12"
                    transform="translate(11.756 12.233)"
                    fill="none"
                  />
                  <path
                    id="Donut_0"
                    d="M19.1,0a93.723,93.723,0,0,1,84.063,51.883,91.971,91.971,0,0,1-10.226,97.842A94.118,94.118,0,0,1,1.048,183.687L0,183.477l8.281-40.133a53.147,53.147,0,0,0,52.463-18.972,50.992,50.992,0,0,0,5.7-54.3A52.735,52.735,0,0,0,19.707,40.982l-.6,0Z"
                    transform="translate(73.721)"
                    fill="#16c784"
                  />
                  <path
                    id="Donut_1"
                    d="M.774,0l40.64,5.258A51.675,51.675,0,0,0,81.266,62.311l.789.171-8.388,40.111A92.652,92.652,0,0,1,.6,1.439Z"
                    transform="translate(0 80.353)"
                    fill="#f5a341"
                  />
                  <path
                    id="Donut_2"
                    d="M92.035,0V40.979A52.005,52.005,0,0,0,40.751,85.835l-.106.782L0,81.4C5.917,35.341,44.568.7,90.637.01Z"
                    transform="translate(0.169)"
                    fill="#ea3943"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
            Top 10 Wallets
          </h2>
          <Wallet10Top />
        </div>
        <div>
          <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
            Top 10 Liquidity Wallets
          </h2>
          <Liquidity10Top />
        </div>
      </div>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
            Liquidity
          </h2>
          <Liquidity />
        </div>
      </div>
      <div className="h-[1px] bg-[#EFF2F5]/20 my-[30px]"></div>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
              Gas Fee
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Buy:</h3>
                <span className="text-green-500">
                  {taxes?.buyGasFeeUSD.toLocaleString("en-US")} $
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Sell:</h3>
                <span className="text-green-500">
                  {taxes?.sellGasFeeUSD.toLocaleString()} $
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Transfer:</h3>
                <span className="text-green-500">
                  {taxes?.tranferGasFeeUSD.toLocaleString()} $
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
              Slippage
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Buy:</h3>
                <span className="text-green-500">
                  {taxes?.buyTax.toLocaleString()} %
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Sell:</h3>
                <span className="text-green-500">
                  {" "}
                  {taxes?.sellTax.toLocaleString()} %
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {/* <div>
            <h2 className="font-semibold font-segoe text-[#E8EAEC] mb-7 text-xl">
              Liquidity
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Buy:</h3>
                <span className="text-green-500">0.21 $</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Sell:</h3>
                <span className="text-green-500">0.21 $</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-segoe text-lg text-[#9A9A9A]">Transfer:</h3>
                <span className="text-green-500">0.21 $</span>
              </div>
            </div>
          </div> */}
          <div className="h-full">
            <div className="bg-[#25293E] justify-center items-center text-white h-full flex flex-col gap-y-4 rounded-md p-8">
              [ad space]
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenDetails;
