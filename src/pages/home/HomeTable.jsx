import { scoreTypeColor } from "@/shared/util";
import { getNetworkDetails } from "@/shared/util/tokenSupportedNetworks";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const colsWidth = {
  token: "lg:w-[37%] flex-grow flex-shrink-0 mr-4-",
  network: "flex-shrink-0",
  scan: "lg:w-[62px] flex-shrink-0 mr-4",
  score: "lg:w-[59px] flex-shrink-0 mx-auto mr-4",
};

const HomeTable = ({ records, tableClassNames, isConnected }) => {
  const Record = ({
    image,
    name,
    ticker,
    contractAddress,
    network,
    score,
    value,
  }) => (
    <Link
      to={`/token/${getNetworkDetails(network)?.shortName}/${contractAddress}`}
      className="flex w-full flex-wrap lg:flex-nowrap justify-between items-center gap-4 border-[#9A9A9A]/20 [&:not(:last-of-type)]:border-b-[0.5px] py-4 lg:py-5"
    >
      <div className={`${colsWidth.token} w-full lg:w-1/2 flex gap-5`}>
        {image ? (
          <img
            style={{ objectFit: "cover", height: 45, borderRadius: "50%" }}
            className="w-9 lg:w-11"
            src={image}
            alt={name}
            title={name}
          />
        ) : (
          <h3 className="w-9 h-9 lg:w-11 lg:h-11 flex flex-shrink-0 items-center rounded-full justify-center bg-primary/50">
            {name?.charAt(1).toUpperCase()}
          </h3>
        )}
        <div className="flex items-start justify-center flex-col">
          <h3 className="uppercase text-xs lg:text-sm font-semibold text-gray-200 font-inter">
            {name}
          </h3>
          <span className="uppercase font-inter text-xs text-stone-400">
            {ticker}
          </span>
        </div>
      </div>
      <div className={`${colsWidth.network} `}>
        <div className="bg-[#2F334B] col-span-2 px-2 text-[#888888] text-lg flex items-center justify-between p-1 rounded-sm gap-2">
          <img
            className="w-4 lg:w-5 h-4 lg:h-5"
            src={getNetworkDetails(network)?.icon}
            alt={network}
            title={network}
          />
          <span className="text-xs font-medium font-inter uppercase">
            {getNetworkDetails(network)?.shortName}
          </span>
        </div>
      </div>
      <span className={`font-inter text-sm font-semibold ${colsWidth.scan}`}>
        {Number(value.toLocaleString("en-US")).toFixed()}
      </span>
      <div className={`${colsWidth.scan}`}>
        <span
          className={`flex items-center justify-center font-medium text-sm pt-[4px] pb-[7px] px-[15px] ${
            scoreTypeColor(score).bg
          } bg-opacity-20 ${scoreTypeColor(score).text} rounded-sm`}
        >
          {Number(score.toLocaleString("en-US")).toFixed()}
        </span>
      </div>
    </Link>
  );

  return (
    <div className={clsx("text-white", tableClassNames)}>
      <section className="hidden lg:flex flex-nowrap justify-between gap-4 font-inter mb-2 text-lg">
        <h3 className={colsWidth.token}>Token</h3>
        <h3 className={colsWidth.network}>Network</h3>
        <h3 className={colsWidth.scan}>Scan</h3>
        <h3 className={colsWidth.score}>Score</h3>
      </section>
      <section className="grid grid-cols-1 gap-4 font-inter mb-2 text-lg h-[500px] overflow-x overflow-y-auto custom-scroll">
        {records &&
          records.length > 0 &&
          records.map((item, index) => (
            <Record
              key={`${index}${item?.name}`}
              name={item?.contractInfo?.name}
              image={item?.contractInfo?.logo}
              ticker={item?.contractInfo?.symbol}
              score={item?.score}
              network={item?.network}
              value={item?.interest}
              contractAddress={item?.contractAddress}
            />
          ))}
      </section>

      {(!isConnected || records.length == 0) && (
        <div className="grid grid-cols-1 gap-4">
          {[...new Array(6)].map(() => (
            <Skeleton
              className="w-full"
              height={50}
              highlightColor="#ffffff2e"
              baseColor="#2b2e3f"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeTable;
