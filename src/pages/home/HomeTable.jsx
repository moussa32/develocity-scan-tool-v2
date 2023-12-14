import { scoreTypeColor } from "@/shared/util";
import BSCIcon from "@assets/images/BSC.png";

const colsWidth = {
  token: "lg:w-[37%] flex-shrink-0 mr-4-",
  network: " flex-shrink-0",
  scan: "lg:w-[62px] flex-shrink-0 mr-4",
  score: "lg:w-[59px] flex-shrink-0 mr-4",
};

const HomeTable = ({ records }) => {
  const Record = ({ image, name, ticker, network, score, value }) => (
    <section className="flex w-full justify-between items-center gap-4 border-[#9A9A9A]/20 [&:not(:last-of-type)]:border-b-[0.5px] py-5">
      <div className={`${colsWidth.token} flex gap-5`}>
        {console.log(network)}
        {image ? (
          <img
            width={45}
            style={{ objectFit: "cover", height: 45, borderRadius: "50%" }}
            src={image}
            alt={name}
            title={name}
          />
        ) : (
          <h3 className="w-12 h-12 flex items-center rounded-full justify-center bg-primary/50">
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
      <div className={`${colsWidth.network}`}>
        <div className="bg-[#2F334B] col-span-2 px-5 text-[#888888] text-lg flex items-center justify-between p-1.5 rounded-sm gap-2">
          <img
            width={20}
            height={20}
            src={BSCIcon}
            alt={network}
            title={network}
          />
          <span className="text-xs font-medium font-segoe uppercase">
            {network}
          </span>
        </div>
      </div>
      <span className={`font-segoe text-base font-semibold ${colsWidth.scan}`}>
        {value.toLocaleString("en-US")}
      </span>
      <div className={`${colsWidth.scan}`}>
        <span
          className={`flex items-center justify-center font-medium text-base pt-[4px] pb-[7px] px-[15px] ${
            scoreTypeColor(score).bg
          } bg-opacity-20 ${scoreTypeColor(score).text} rounded-sm`}
        >
          {score}
        </span>
      </div>
    </section>
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
