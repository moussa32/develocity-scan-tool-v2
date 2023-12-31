import { QueryErrorResetBoundary } from "@tanstack/react-query";
import clsx from "clsx";
import { ErrorBoundary } from "react-error-boundary";
import { MdOutlineReplay } from "react-icons/md";

const ErrorCoverageWrapper = ({
  children,
  wrapperClassName,
  message = "N/A",
}) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary, error }) => (
            <div
              className={clsx(
                wrapperClassName,
                "bg-red-500/95 flex items-center gap-9 justify-between rounded text-white h-full py-6 px-4"
              )}
            >
              <div>
                <p className="text-lg">{message}</p>
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
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorCoverageWrapper;
