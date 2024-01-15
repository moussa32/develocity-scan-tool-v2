// import { Link } from "react-router-dom";
import PopularCard from "@pages/home/PopularCard";
import HomeTable from "@pages/home/HomeTable";
import { useEffect, useState } from "react";
import { socket } from "@util/socket";
import Skeleton from "react-loading-skeleton";

const Popular = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [popularScan, setPopularScan] = useState([]);
  const [highScore, setHighScore] = useState([]);
  const [latestScan, setLatestScan] = useState([]);

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
      setPopularScan([]);
      setHighScore([]);
      setLatestScan([]);
    };
  }, []);

  return (
    <>
      <section className="container py-[59.3px] border-b-[0.5px] border-[#4f4b4b]">
        <div className="flex justify-between mb-5 text-lg md:text-2xl">
          <h2 className="text-secondaryText text-xl md:text-2xl font-semibold font-inter">
            Popular Today
          </h2>
          {/* <Link
            className="text-white font-inter text-base md:text-2xl underline-offset-2 underline"
            to="/tokens"
          >
            See All
          </Link> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-[660px] overflow-y-auto custom-scroll gap-4 lg:gap-5">
          {(!isConnected || popularScan.length == 0) &&
            [...new Array(10)].map(() => (
              <Skeleton
                className="w-full"
                height={116}
                highlightColor="#ffffff2e"
                baseColor="#2b2e3f"
              />
            ))}
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
                address={item?.contractAddress}
                network={item?.network}
              />
            ))}
        </div>
      </section>
      <section className="container py-[59.3px] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="bg-[#2F334B] py-5 rounded-sm capitalize flex items-center justify-center text-white font-semibold font-inter mb-[30px]">
            Score
          </h2>
          <HomeTable records={highScore} isConnected={isConnected} />
        </div>
        <div>
          <h2 className="bg-[#2F334B] py-5 rounded-sm capitalize flex items-center justify-center text-white font-semibold font-inter mb-[30px]">
            last scan
          </h2>
          <HomeTable records={latestScan} isConnected={isConnected} />
        </div>
      </section>
    </>
  );
};

export default Popular;
