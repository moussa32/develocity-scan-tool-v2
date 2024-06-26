import { Tab } from "@headlessui/react";
import { useState } from "react";
import TokenInfo from "./TokenInfo";
import TrustScore from "./TrustScore";
import TokenDetails from "./TokenDetails";
import ErrorCoverageWrapper from "@/shared/components/ErrorCoverageWrapper";

// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { requestContractInfo } from "@/api/contractInfo";

const TokenContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const { network, contractAddress } = useParams();
  // const { data } = useQuery({
  //   queryKey: ["getTokenInfo"],
  //   suspense: true,
  //   queryFn: () => requestContractInfo({ network, contractAddress }),
  // });

  return (
    <div>
      <section className="bg-[#EFF2F5] h-[1px] w-full my-[50px]"></section>
      <section className="flex flex-col md:flex-row gap-y-8 justify-between">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="bg-[#272B40] rounded-[10px] h-[48.56px] w-full md:w-[400px] items-center flex  justify-between">
            <Tab className="text-white font-semibold text-[11px] lg:text-xs font-inter h-full ui-selected:bg-[#2F334B] rounded-[10px] px-4 lg:px-8">
              Trust Score
            </Tab>
            <Tab className="text-white font-semibold text-[11px] lg:text-xs font-inter h-full ui-selected:bg-[#2F334B] rounded-[10px] px-4 lg:px-8">
              Details
            </Tab>
            <Tab className="text-white font-semibold text-[11px] lg:text-xs font-inter h-full ui-selected:bg-[#2F334B] rounded-[10px] px-4 lg:px-8">
              Token Information
            </Tab>
          </Tab.List>
        </Tab.Group>
        {/* <div className="flex gap-[10px]">
          <Button
            variant="outline"
            className="border-1 min-w-fit border-primary bg-transparent h-[42px] max-w-[160px] flex font-medium text-sm items-center w-full transition-all duration-200 ease-in-out justify-center text-primary hover:text-semiWhite hover:bg-primary"
          >
            Download Report
          </Button>
          <Button className="h-[42px] gap-2 max-w-[160px] flex items-center w-full font-medium text-sm transition-all duration-200 ease-in-out justify-center bg-primary text-white hover:text-primary hover:bg-white">
            Share
            <img src={ShareIcon} alt="Share" />
          </Button>
        </div> */}
      </section>
      <section className="mt-[50px]">
        {selectedIndex === 0 && (
          <ErrorCoverageWrapper>
            <TrustScore />
          </ErrorCoverageWrapper>
        )}
        {selectedIndex === 1 && (
          <ErrorCoverageWrapper>
            <TokenDetails />
          </ErrorCoverageWrapper>
        )}
        {selectedIndex === 2 && (
          <ErrorCoverageWrapper>
            <TokenInfo />
          </ErrorCoverageWrapper>
        )}
      </section>
    </div>
  );
};

export default TokenContent;
