import { useQuery } from "@tanstack/react-query";
import Liquidity10Top from "./Liquidity10Top";
import Wallet10Top from "./Wallet10Top";
import {
  requestContractAnalysis,
  requestContractHolders,
  requestContractLiquidity,
  requestContractTax,
} from "@/api/contractInfo";
import { useParams } from "react-router-dom";
import Liquidity from "./Liquidity";
import Chart from "react-apexcharts";

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
    data: holders,
    isFetching: isHoldersFetching,
    isSuccess: isHoldersSuccess,
  } = useQuery({
    queryKey: ["getHolders", contractAddress],
    suspense: true,
    queryFn: () => requestContractHolders({ contractAddress, network }),
  });

  console.log(holders);

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

  var options = {
    series: [150, 250, 100],
    labels: ["Real holders", "Airdrop holders", "Wallet Shrink"],
    dataLabels: {
      enabled: false,

      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: false,
        top: 10,
        left: 10,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
    foreColor: "#fff",

    legend: {
      show: true,
      position: "bottom",
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: false,
              color: "#E8EAEC",
            },
            value: {
              color: "#E8EAEC",
              fontSize: "20px",
              fontWeight: "700",
            },
            total: {
              show: true,
              showAlways: true,
              color: "#E8EAEC",
              label: "Total",
            },
          },
        },
      },
    },
    colors: ["#F5A341", "#16C784", "#EA3943"],
  };

  const chartData = {
    series: [
      holders.realholders,
      holders.airdropHolders,
      holders.shrinkHolders,
    ],
  };

  return (
    <>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1 mb-10">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
              Contract Analysis
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-base text-[#9A9A9A]">Mint:</h3>
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
                <h3 className="font-inter text-md text-[#9A9A9A]">Burn:</h3>
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
                <h3 className="font-inter text-md text-[#9A9A9A]">
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
                <h3 className="font-inter text-md text-[#9A9A9A]">
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
                <h3 className="font-inter text-md text-[#9A9A9A]">
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
                <h3 className="font-inter text-md text-[#9A9A9A]">
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
                <h3 className="font-inter text-md text-[#9A9A9A]">
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
                <h3 className="font-inter text-md text-[#9A9A9A]">
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
                <h3 className="font-inter text-md text-[#9A9A9A]">Antibot:</h3>
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
        {/* <div className="flex flex-col gap-8">
          <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
            Holders Distribution
          </h2>
          {holders.realholders === 0 &&
          holders.airdropHolders === 0 &&
          holders.shrinkHolders === 0 ? (
            <p className="text-white/50 font-semibold text-2xl flex items-center justify-center font-inter h-full">
              No holders
            </p>
          ) : (
            <Chart
              options={options}
              series={chartData.series}
              type="donut"
              className="w-full lg:w-[500px] flex items-center justify-center"
              height={320}
            />
          )}
        </div> */}
      </div>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
            Top 10 Wallets
          </h2>
          <Wallet10Top />
        </div>
        <div className="flex flex-col lg:block">
          <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
            Top 10 Liquidity Wallets
          </h2>
          <Liquidity10Top />
        </div>
      </div>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
            Liquidity
          </h2>
          <Liquidity />
        </div>
      </div>
      <div className="h-[1px] bg-[#EFF2F5]/20 my-[30px]"></div>
      <div className="grid gap-32 lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
              Gas Fee
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Buy:</h3>
                <span className="text-green-500">
                  {taxes?.buyGasFeeUSD?.toLocaleString("en-US")} $
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Sell:</h3>
                <span className="text-green-500">
                  {taxes?.sellGasFeeUSD?.toLocaleString()} $
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Transfer:</h3>
                <span className="text-green-500">
                  {taxes?.tranferGasFeeUSD?.toLocaleString()} $
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
              Slippage
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Buy:</h3>
                <span className="text-green-500">
                  {taxes?.buyTax?.toLocaleString()} %
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Sell:</h3>
                <span className="text-green-500">
                  {taxes?.sellTax?.toLocaleString()} %
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {/* <div>
            <h2 className="font-semibold font-inter text-[#E8EAEC] mb-7 text-xl">
              Liquidity
            </h2>
            <div className="bg-[#25293E] flex flex-col gap-y-4 rounded-md p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Buy:</h3>
                <span className="text-green-500">0.21 $</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Sell:</h3>
                <span className="text-green-500">0.21 $</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-inter text-lg text-[#9A9A9A]">Transfer:</h3>
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
