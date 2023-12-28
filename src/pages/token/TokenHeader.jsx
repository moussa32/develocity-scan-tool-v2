import MySearch from "@/shared/components/MySearch";
import TokenSummary from "./TokenSummary";
import { ErrorBoundary } from "react-error-boundary";
import { MdOutlineReplay } from "react-icons/md";

const TokenHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <TokenSummary name="Bitcoin" ticker="$BTC" />
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div className="bg-red-500/95 flex items-center gap-9 justify-between rounded text-white h-full py-6 px-4">
            <div>
              <p className="text-lg">Contract responded with wrong fit</p>
              <p className="text-sm mt-4">{error.message}</p>
            </div>
            <button
              onClick={() => resetErrorBoundary()}
              className="cursor-pointer flex-shrink-0 bg-white/50 w-10 h-10 rounded flex items-center justify-center"
            >
              <MdOutlineReplay size={20} />
            </button>
          </div>
        )}
      >
        <MySearch />
      </ErrorBoundary>
    </div>
  );
};

export default TokenHeader;
