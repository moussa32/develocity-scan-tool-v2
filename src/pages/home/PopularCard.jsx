import { scoreTypeColor } from "@/shared/util";
import { Link } from "react-router-dom";
import { getNetworkDetails } from "@/shared/util/tokenSupportedNetworks";
import NoImageAvailable from "@images/No_image_available.png";

const PopularCard = ({
  score,
  scans,
  symbol,
  name,
  logo,
  address,
  network,
}) => {
  return (
    <Link
      to={`/token/${getNetworkDetails(network)?.shortName}/${address}`}
      className="bg-[#272B40] rounded-lg py-4 px-5 lg:px-6 flex justify-between flex-wrap lg:flex-nowrap items-center"
    >
      <div className="flex text-white grow shrink-0 w-[200px]">
        <img
          className="ltr:mr-4 bg-transparent object-contain rounded-full rtl:ml-4 w-10 h-10 lg:w-14 lg:h-14 xl:w-[50px] xl:h-[50px]"
          src={logo ? logo : NoImageAvailable}
          alt={name}
          title={name}
        />
        <div className="flex flex-col justify-center gap-[1px]">
          <h2 className="font-bold font-inter text-xs lg:text-md">{name}</h2>
          <span className="flex-initial font-inter text-xs lg:text-md">
            {symbol}
          </span>
        </div>
      </div>
      <div className="flex mt-4 lg:mt-0 flex-row-reverse flex-grow-0 flex-shrink justify-between lg:flex-col gap-3 order-3 lg:order-2 items-center w-full">
        <span className="font-inter text-white text-xs lg:text-md lg:text-md">
          Scan: {Number(scans).toFixed(0)}
        </span>
        <div className="bg-[#2F334B] text-[#888888] text-xs lg:text-md flex items-center justify-center py-1 lg:py-2 px-[7px] rounded-sm gap-2">
          <img
            className="w-4 h-4 lg:w-[20px] lg:h-[20px]"
            src={getNetworkDetails(network)?.icon}
            alt="network"
            title="network"
          />
          <span>{getNetworkDetails(network)?.shortName}</span>
        </div>
      </div>
      {score ? (
        <span
          className={`flex items-center order-2 lg:order-3 justify-center font-medium text-xs lg:text-base pt-[4px] pb-[7px] px-3 lg:px-4 ${
            scoreTypeColor(score).bg
          } ${scoreTypeColor(score).text} bg-opacity-20 rounded-sm`}
        >
          {Number(score).toFixed(0)}
        </span>
      ) : (
        <span
          className={`flex items-center order-2 lg:order-3 justify-center font-medium text-base pt-[4px] pb-[7px] lg:px-4 bg-red bg-danger
            ${scoreTypeColor(score).text} bg-opacity-20 rounded-sm`}
        >
          0
        </span>
      )}
    </Link>
  );
};

export default PopularCard;
