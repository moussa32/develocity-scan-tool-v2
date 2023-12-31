import { useParams } from "react-router-dom";
import styles from "./TokenInfo.module.css";
import { useQuery } from "@tanstack/react-query";
import { requestContractInfo } from "@/api/contractInfo";
import clsx from "clsx";

const TokenInfo = () => {
  const { network, contractAddress } = useParams();
  const { data } = useQuery({
    queryKey: ["getTokenInfo", contractAddress],
    suspense: true,
    queryFn: () => requestContractInfo({ network, contractAddress }),
  });

  return (
    <>
      <section>
        <h2 className="font-segoe text-[21px] font-semibold text-[#E8EAEC] mb-[28.8px]">
          General Informations
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
                    className={` font-segoe text-base font-bold text-[#E8EAEC]`}
                  >
                    {data?.result?.contractInfo?.name}
                  </h3>
                  <span className={` font-segoe text-sm text-[#9A9A9A]`}>
                    ${data?.result?.contractInfo?.symbol}
                  </span>
                </div>
              </div>
              <div className="flex items-end font-segoe text-[#E8EAEC]">
                Total Supply :{" "}
                {Number(
                  (data?.result?.contractInfo?.total_supply).toLocaleString(
                    "en-US"
                  )
                ).toFixed(14)}
                $
              </div>
              <span className={`font-segoe text-[42px] font-bold text-white`}>
                {Number(data?.result?.contractInfo?.tokenPriceUSD).toFixed(4)}
              </span>
            </div>
            <div className={styles.infoBody}>
              <div className="flex justify-between font-segoe text-[#9A9A9A] px-9 pt-5">
                <span className="text-xl">Total Scans:</span>
                <span className="text-white text-lg">
                  {data?.result?.interest}
                </span>
              </div>
              <div className="flex justify-between font-segoe text-[#9A9A9A] px-9">
                <span className="text-xl">Average Score:</span>
                <span className="text-white text-lg">0</span>
              </div>
              <div className="flex justify-between font-segoe text-[#9A9A9A] px-9 ">
                <span className="text-xl">Launched:</span>
                <span className="text-white text-lg">{0}</span>
              </div>
              <div className="flex justify-between font-segoe text-[#9A9A9A] px-9 pb-5">
                <span className="text-xl">Added:</span>
                <span className="text-white text-lg">
                  {data?.result?.createdAt}
                </span>
              </div>
            </div>
            <div
              className={`${styles.infoFooter} flex justify-between px-9 py-5`}
            >
              <h3 className="text-white font-bold font-segoe">
                Copy Contract Address
              </h3>
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
            </div>
          </div>
          <div className={styles.ad}></div>
        </div>
      </section>
    </>
  );
};

export default TokenInfo;
