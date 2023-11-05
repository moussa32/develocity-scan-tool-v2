import BSC from "@assets/images/bsc.svg";
import BitcoinBlue from "@assets/images/bitcoinBlue.png";
import { scoreTypeColor } from "@/shared/util";

const PopularCard = ({ score }) => {
  return (
    <div className="bg-[#272B40] xl:px-[42px] rounded-lg p-6 lg:py-8 flex justify-between flex-wrap lg:flex-nowrap items-center">
      <div className="flex text-white flex-shrink-0">
        <img
          className="ltr:mr-4 rtl:ml-4 w-16 h-16 lg:w-14 lg:h-14 xl:w-[105px] xl:h-[105px]"
          src={BitcoinBlue}
          alt="coin name"
          title="coin name"
        />
        <div className="flex flex-col items-start justify-center gap-[2px]">
          <h2 className="font-bold font-segoe text-xl lg:text-2xl">Bitcoin</h2>
          <span className="flex-initial font-segoe text-xl lg:text-2xl">BTC</span>
        </div>
      </div>
      <div className="flex mt-6 lg:mt-0 flex-row-reverse justify-between lg:flex-col gap-3 order-3 lg:order-2 items-center w-full">
        <span className="font-segoe text-white text-xl lg:text-2xl">Scan: 107</span>
        <div className="bg-[#2F334B] text-[#888888] text-lg flex items-center justify-center py-2 px-[9.1px] rounded-sm gap-[9px]">
          <img className="w-[27.15px] h-[27.15px]" src={BSC} alt="network" title="network" />
          <span>BSC</span>
        </div>
      </div>
      {score && (
        <span
          className={`flex items-center order-2 lg:order-3 justify-center font-medium text-[26px] pt-[4px] pb-[7px] px-[15px] ${
            scoreTypeColor(score).bg
          } ${scoreTypeColor(score).text} bg-opacity-20 rounded-sm`}
        >
          {score}
        </span>
      )}
    </div>
  );
};

export default PopularCard;
