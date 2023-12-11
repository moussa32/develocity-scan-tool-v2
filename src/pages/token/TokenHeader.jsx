import MySearch from "@/shared/components/MySearch";
import TokenSummary from "./TokenSummary";

const TokenHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <TokenSummary name="Bitcoin" ticker="$BTC" />
      <MySearch />
    </div>
  );
};

export default TokenHeader;
