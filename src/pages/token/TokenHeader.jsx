import TokenSummary from "./TokenSummary";

const TokenHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <TokenSummary name="Bitcoin" ticker="$BTC" />
    </div>
  );
};

export default TokenHeader;
