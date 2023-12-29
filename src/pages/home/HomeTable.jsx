import { scoreTypeColor } from "@/shared/util";
import { getNetworkDetails } from "@/shared/util/tokenSupportedNetworks";
import BSCIcon from "@assets/images/BSC.png";
import { Link } from "react-router-dom";

const colsWidth = {
  token: "lg:w-[37%] flex-grow flex-shrink-0 mr-4-",
  network: "flex-shrink-0",
  scan: "w-[62px] flex-shrink-0 mr-4",
  score: "lg:w-[59px] flex-shrink-0 mx-auto mr-4",
};

const HomeTable = ({ records }) => { 
  
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
      className="flex w-full md:flex-nowrap flex-wrap justify-between items-center gap-4 border-[#9A9A9A]/20 [&:not(:last-of-type)]:border-b-[0.5px] py-5"
    >
      <div className={`${colsWidth.token} w-1/2 flex gap-5`}>
        {image ? (
          <img
            width={45}
            style={{ objectFit: "cover", height: 45, borderRadius: "50%" }}
            src={image}
            alt={name}
            title={name}
          />
        ) : (
          <h3 className="w-12 h-12 flex flex-shrink-0 items-center rounded-full justify-center bg-primary/50">
            {name?.charAt(1).toUpperCase()}
          </h3>
        )}
        <div className="flex items-start justify-center flex-col">
          <h3 className="uppercase text-sm font-bold text-gray-200 font-segoe">
            {name}
          </h3>
          <span className="uppercase font-segoe text-xs mt-1 text-stone-400">
            {ticker}
          </span>
        </div>
      </div>
      <div className={`${colsWidth.network} `}>
        <div className="bg-[#2F334B] col-span-2 px-2 text-[#888888] text-lg flex items-center justify-between p-1 rounded-sm gap-2">
          <img
            width={20}
            height={20}
            src={getNetworkDetails(network)?.icon}
            alt={network}
            title={network}
          />
          <span className="text-xs font-medium font-segoe uppercase">
            {getNetworkDetails(network)?.shortName}
          </span>
        </div>
      </div>
      <span className={`font-segoe text-base font-semibold ${colsWidth.scan}`}>
        {Number(value.toLocaleString("en-US")).toFixed()}
      </span>
      <div className={`${colsWidth.scan}`}>
        <span
          className={`flex items-center justify-center font-medium text-base pt-[4px] pb-[7px] px-[15px] ${
            scoreTypeColor(score).bg
          } bg-opacity-20 ${scoreTypeColor(score).text} rounded-sm`}
        >
          {Number(score.toLocaleString("en-US")).toFixed()}
        </span>
      </div>
    </Link>
  );

  return (
    <div className="text-white h-[500px] overflow-x-hidden lg:overflow-y-auto custom-scroll">
      <section className="flex justify-between gap-4 font-segoe mb-2 text-lg">
        <h3 className={colsWidth.token}>Token</h3>
        <h3 className={colsWidth.network}>Network</h3>
        <h3 className={colsWidth.scan}>Scan</h3>
        <h3 className={colsWidth.score}>Score</h3>
      </section>
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
      {(!records || records.length === 0) && (
        <span className="font-segoe font-semibold text-3xl text-center mx-auto block mt-16 capitalize text-opacity-20">
          No data found
        </span>
      )}
    </div>
  );
};

export default HomeTable;
