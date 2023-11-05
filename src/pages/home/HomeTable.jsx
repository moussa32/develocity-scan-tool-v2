import { scoreTypeColor } from "@/shared/util";

const colsWidth = {
  token: "lg:w-[37%] flex-shrink-0 mr-4-",
  network: "lg:w-[90px] flex-shrink-0 mr-4",
  scan: "lg:w-[62px] flex-shrink-0 mr-4",
  score: "lg:w-[59px] flex-shrink-0 mr-4",
};

const HomeTable = ({ records }) => {
  const Record = ({ image, name, ticker, network, score, value }) => (
    <section className="flex w-full justify-between items-center gap-4 border-[#9A9A9A] [&:not(:last-of-type)]:border-b-[0.5px] py-7">
      <div className={`${colsWidth.token} flex gap-5`}>
        <img width={52.25} height={52.25} src={image} alt={name} title={name} />
        <div className="flex items-start justify-center flex-col font-segoe">
          <h3 className="uppercase font-bold">{name}</h3>
          <span className="uppercase">{ticker}</span>
        </div>
      </div>
      <div className={`${colsWidth.network}`}>
        <div className="bg-[#2F334B] col-span-2 w-[81.86px] text-[#888888] text-lg flex items-center justify-start p-1.5 rounded-sm gap-[9px]">
          <img width={22.84} height={22.84} src={network?.image} alt={network?.name} title={network?.name} />
          <span className="text-xs uppercase">{network?.ticker}</span>
        </div>
      </div>
      <span className={`font-segoe text-lg ${colsWidth.scan}`}>{value.toLocaleString("en-US")}</span>
      <div className={`${colsWidth.scan}`}>
        <span
          className={`flex items-center justify-center font-medium text-[26px] pt-[4px] pb-[7px] px-[15px] ${
            scoreTypeColor(score).bg
          } bg-opacity-20 ${scoreTypeColor(score).text} rounded-sm`}
        >
          {score}
        </span>
      </div>
    </section>
  );

  return (
    <div className="text-white overflow-x-scroll lg:overflow-auto">
      <section className="flex justify-between gap-4 font-segoe mb-8 text-lg">
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
            name={item?.name}
            image={item?.image}
            ticker={item?.ticker}
            score={item?.score}
            network={item?.network}
            value={item?.value}
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
