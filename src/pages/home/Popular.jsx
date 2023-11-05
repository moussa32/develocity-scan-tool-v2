import { Link } from "react-router-dom";
import PopularCard from "@pages/home/PopularCard";
import HomeTable from "@pages/home/HomeTable";
import BitcoinBlue from "@assets/images/bitcoinBlue.png";
import Ripple from "@assets/images/ripple.png";
import EthereumLight from "@assets/images/etherumLight.png";
import BSC from "@assets/images/bsc.svg";

const records = [
  {
    name: "bitcoin",
    ticker: "btc",
    image: BitcoinBlue,
    network: { name: "binance", ticker: "bsc", image: BSC },
    value: 107,
    score: 94,
  },
  {
    name: "ripple",
    ticker: "xrp",
    image: Ripple,
    network: { name: "binance", ticker: "bsc", image: BSC },
    value: 1052,
    score: 74,
  },
  {
    name: "ethereum",
    ticker: "eth",
    image: EthereumLight,
    network: { name: "binance", ticker: "bsc", image: BSC },
    value: 5095002,
    score: 67,
  },
];

const Popular = () => {
  return (
    <>
      <section className="container py-[59.3px] border-b-[0.5px] border-[#4f4b4b]">
        <div className="flex justify-between mb-5 text-2xl">
          <h2 className="text-secondaryText font-semibold font-segoe">Popular Today</h2>
          <Link className="text-white font-segoe underline-offset-2 underline" to="/tokens">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PopularCard score={94} />
          <PopularCard score={55} />
          <PopularCard score={94} />
          <PopularCard score={70} />
        </div>
      </section>
      <section className="container py-[59.3px] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="bg-[#2F334B] py-5 rounded-sm capitalize flex items-center justify-center text-white font-semibold font-segoe mb-[30px]">
            Score
          </h2>
          <HomeTable records={records} />
        </div>
        <div>
          <h2 className="bg-[#2F334B] py-5 rounded-sm capitalize flex items-center justify-center text-white font-semibold font-segoe mb-[30px]">
            last scan
          </h2>
          <HomeTable records={records} />
        </div>
      </section>
    </>
  );
};

export default Popular;
