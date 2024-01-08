import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SpacialNumber = ({
  numbersAfterZero,
  zeroCounts,
  parsedNumber,
  digits = 10,
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <p className="mb-0">
              0.0
              <sub>{zeroCounts}</sub>
              {numbersAfterZero}
            </p>
          </TooltipTrigger>
          <TooltipContent>
            {Number(parsedNumber).toFixed(digits)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SpacialNumber;
