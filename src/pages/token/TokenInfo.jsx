import { useParams } from "react-router-dom";
import styles from "./TokenInfo.module.css";
import { useQuery } from "@tanstack/react-query";
import { requestContractInfo } from "@/api/contractInfo";

import clsx from "clsx";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import dayjs from "dayjs";
import SpacialNumber from "@/shared/components/SpacialNumber";
import { convertFromScientificNotation } from "@/shared/util/helpers";
// import { convertFromScientificNotation } from "@/shared/util/helpers";

const TokenInfo = () => {
  const { network, contractAddress } = useParams();
  const { data } = useQuery({
    queryKey: ["getTokenInfo", contractAddress],
    suspense: true,
    queryFn: () => requestContractInfo({ network, contractAddress }),
  });

  const tokenValue = () => {
    const digits = 6;
    const stringNumber = data?.result?.contractInfo?.tokenPriceUSD.toString();

    const { zeroCounts, numbersAfterZero, parsedNumber } =
      convertFromScientificNotation(stringNumber);

    if (stringNumber.includes("e") || zeroCounts > 2) {
      return (
        <SpacialNumber
          numbersAfterZero={numbersAfterZero}
          zeroCounts={zeroCounts}
          parsedNumber={parsedNumber}
          digits={digits}
        />
      );
    } else {
      if (Number(data?.result?.contractInfo?.tokenPriceUSD) > 0) {
        return Number(data?.result?.contractInfo?.tokenPriceUSD)
          .toFixed(digits)
          .toString();
      } else {
        return stringNumber;
      }
    }
  };
  return (
    <>
      <section>
        <h2 className="font-inter text-[21px] font-semibold text-[#E8EAEC] mb-[28.8px]">
          General Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[70px]">
          <div className={styles.infoWrapper}>
            <div className={clsx(styles.infoHeader, "gap-4")}>
              <div className={`flex gap-6 items-center`}>
                {data?.result?.contractInfo?.logo ? (
                  <img
                    width={55}
                    height={55}
                    className="flex-shrink-0"
                    src={data?.result?.contractInfo?.logo}
                    alt={data?.result?.contractInfo?.name}
                  />
                ) : (
                  <h2 className="w-[55px] h-[55px] flex-shrink-0 bg-primary rounded-full flex items-center justify-center font-semibold text-white">
                    {data?.result?.contractInfo?.name[0]}
                  </h2>
                )}
                <div className="flex flex-col">
                  <h3
                    className={` font-inter text-base font-bold text-[#E8EAEC]`}
                  >
                    {data?.result?.contractInfo?.name}
                  </h3>
                  <span className={` font-inter text-sm text-[#9A9A9A]`}>
                    ${data?.result?.contractInfo?.symbol}
                  </span>
                </div>
              </div>
              <span
                className={`font-inter flex items-center gap-2 text-center justify-center md:justify-end md:text-right text-2xl md:text-4xl font-bold text-white`}
              >
                {tokenValue()} <span>$</span>
              </span>
            </div>
            <div className="flex items-end font-inter justify-center md:justify-start text-center md:text-right text-[#E8EAEC] pb-4 px-5">
              Total Supply :{" "}
              {Number(
                (data?.result?.contractInfo?.total_supply).toLocaleString(
                  "en-US"
                )
              ).toFixed(0)}
            </div>
            <div className={styles.infoBody}>
              <div className="flex justify-between font-inter text-[#9A9A9A] px-4 md:px-9 pt-5">
                <span className="text-base md:text-xl">Total Scans:</span>
                <span className="text-white text-lg">
                  {data?.result?.interest}
                </span>
              </div>
              <div className="flex justify-between font-inter text-[#9A9A9A] px-4  md:px-9">
                <span className="text-base md:text-xl">Average Score:</span>
                <span className="text-white text-lg">0</span>
              </div>
              <div className="flex justify-between font-inter text-[#9A9A9A] px-4  md:px-9 ">
                <span className="text-base md:text-xl">Launched:</span>
                <span className="text-white text-lg">{0}</span>
              </div>
              <div className="flex justify-between font-inter text-[#9A9A9A] px-4  md:px-9 pb-5">
                <span className="text-base md:text-xl">Added:</span>
                <span className="text-white text-lg">
                  {dayjs(data?.result?.createdAt).format("DD MMM YYYY")}
                </span>
              </div>
            </div>
            <div
              className={`${styles.infoFooter} flex justify-between px-4  md:px-9 py-5`}
            >
              <h3 className="text-white font-bold font-inter">
                Copy Contract Address
              </h3>
              <CopyToClipboard
                text={contractAddress}
                onCopy={() =>
                  toast.success(
                    "Contract address has been copied successfully",
                    { toastId: "successCopy" }
                  )
                }
              >
                <svg
                  id="Component_6_3"
                  data-name="Component 6 – 3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.202"
                  height="32.258"
                  viewBox="0 0 28.202 32.258"
                >
                  <path
                    id="Rectangle_2071"
                    data-name="Rectangle 2071"
                    d="M1.29,1.29V25.806H21.935V1.29H1.29M1.29,0H21.935a1.29,1.29,0,0,1,1.29,1.29V25.806a1.29,1.29,0,0,1-1.29,1.29H1.29A1.29,1.29,0,0,1,0,25.806V1.29A1.29,1.29,0,0,1,1.29,0Z"
                    transform="translate(4.976 5.162)"
                    fill="#e8eaec"
                  />
                  <path
                    id="Path_17714"
                    data-name="Path 17714"
                    d="M3718.613,2687.56a.645.645,0,0,1-.645-.645v-24.6a.644.644,0,0,1,.645-.646h21.1a.645.645,0,0,1,0,1.291h-20.46v23.957A.645.645,0,0,1,3718.613,2687.56Z"
                    transform="translate(-3717.968 -2661.667)"
                    fill="#e8eaec"
                  />
                </svg>
              </CopyToClipboard>
            </div>
          </div>
          <div className={styles.ad}></div>
        </div>
      </section>
    </>
  );
};

export default TokenInfo;
