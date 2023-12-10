import TokenContent from "./TokenContent";
import TokenHeader from "./TokenHeader";

const TokenPage = () => {
  return (
    <div className="bg-primaryBg min-h-[calc(100vh-397px)] pt-[45px] pb-[105px]">
      <div className="container flex flex-col">
        <TokenHeader />
        <TokenContent />
      </div>
    </div>
  );
};

export default TokenPage;
