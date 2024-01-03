import MySearch from "@/shared/components/MySearch";
import TokenSummary from "./TokenSummary";
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
