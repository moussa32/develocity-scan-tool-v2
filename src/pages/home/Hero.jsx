import heroVideoWebm from "@assets/videos/HomePageElement.webm";
import heroVideoMp4 from "@assets/videos/HomePageElement.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container pb-[80.7px] border-b-[0.5px] border-[#4f4b4b]">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <span className="uppercase bg-primary/20 flex items-center justify-center py-2 lg:max-w-[180px] w-fit px-12 lg:p-0 lg:w-full lg:h-[50px] font-medium text-sm lg:text-[20px] text-primary mb-8 lg:mb-[61px]">
            BETA STAGE
          </span>
          <h1 className="font-bold text-5xl lg:text-[56px] text-white font-segoe max-w-[446px] mb-[34px]">
            Master the art of crypto trading
          </h1>
          <p className="text-xl lg:text-[32px] font-segoe text-secondaryText">
            Trade smarter,not harder with our crypto scanner tool.
          </p>
          <p className="text-xl text-[32px] font-segoe text-secondaryText">
            Get real-time insights and maximize your profits effortlessly
          </p>
          <a href="https://develocity.finance">
            <button className="bg-primary text-white py-3.5 px-8 lg:w-[220px] lg:h-[60px] font-medium text-lg lg:text-[22px] mt-8 lg:mt-[97.1px]">
              Visit Develocity
            </button>
          </a>
        </div>
        <div className="mt-10 lg:mt-0 ">
          <video muted playsInline preload="auto" autoPlay controls={false}>
            <source src={heroVideoWebm} type="video/webm;" />
            <source
              src={heroVideoMp4}
              type='video/mp4; codecs="avc1.64001E, mp4a.40.2"'
            />
          </video>
        </div>
      </section>
    </section>
  );
};

export default Hero;
