import MySearch from "@/shared/components/MySearch";
import TokenSummary from "./TokenSummary";
import { ErrorBoundary } from "react-error-boundary";
import { MdOutlineReplay } from "react-icons/md";
import ErrorCoverageWrapper from "@/shared/components/ErrorCoverageWrapper";

const TokenHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <ErrorCoverageWrapper>
        <TokenSummary name="Bitcoin" ticker="$BTC" />
      </ErrorCoverageWrapper>
      <ErrorCoverageWrapper message="Contract responded with wrong fit">
        <MySearch />
      </ErrorCoverageWrapper>
    </div>
  );
};

export default TokenHeader;
