import { Link } from "react-router-dom";
import PopularCard from "@pages/home/PopularCard";
import HomeTable from "@pages/home/HomeTable";
import BitcoinBlue from "@assets/images/bitcoinBlue.png";
import Ripple from "@assets/images/ripple.png";
import EthereumLight from "@assets/images/etherumLight.png";
import BSC from "@assets/images/bsc.svg";
import { useEffect, useState } from "react";
import { socket } from "@util/socket";

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
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [popularScan, setPopularScan] = useState([]);
  const [highScore, setHighScore] = useState([]);
  const [latestScan, setLatestScan] = useState([]);

  console.log(highScore, latestScan);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onPopularScan(value) {
      setPopularScan(value);
    }

    function onHighScore(value) {
      setHighScore(value);
    }

    function onLatestScan(value) {
      setLatestScan(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("popularScan", onPopularScan);
    socket.on("highScore", onHighScore);
    socket.on("latestScan", onLatestScan);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("popularScan", onPopularScan);
      socket.off("highScore", onHighScore);
      socket.off("latestScan", onLatestScan);
    };
  }, []);

  return (
    <>
      <section className="container py-[59.3px] border-b-[0.5px] border-[#4f4b4b]">
        <div className="flex justify-between mb-5 text-2xl">
          <h2 className="text-secondaryText font-semibold font-segoe">
            Popular Today
          </h2>
          <Link
            className="text-white font-segoe underline-offset-2 underline"
            to="/tokens"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isConnected &&
            popularScan.length > 0 &&
            popularScan?.map((item, index) => (
              <PopularCard
                key={index}
                name={item?.contractInfo?.name}
                symbol={item?.contractInfo?.symbol}
                logo={item?.contractInfo?.logo}
                score={item?.score}
                scans={item?.contractScan}
              />
            ))}
        </div>
      </section>
      <section className="container py-[59.3px] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="bg-[#2F334B] py-5 rounded-sm capitalize flex items-center justify-center text-white font-semibold font-segoe mb-[30px]">
            Score
          </h2>
          <HomeTable records={highScore} />
        </div>
        <div>
          <h2 className="bg-[#2F334B] py-5 rounded-sm capitalize flex items-center justify-center text-white font-semibold font-segoe mb-[30px]">
            last scan
          </h2>
          <HomeTable records={latestScan} />
        </div>
      </section>
    </>
  );
};

export default Popular;
