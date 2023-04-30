export const convertFromScientificNotation = value => {
  let zeroCounts = 0;
  let isNotZero = false;
  let searchInDecimalsArrayIndex = 0;

  const [, decimals] = Number.parseFloat(value).toFixed(25).toString().split(".");
  const decimalsArray = decimals.split("").map(Number);

  while (!isNotZero) {
    if (decimalsArray[searchInDecimalsArrayIndex] === 0) {
      ++zeroCounts;
      ++searchInDecimalsArrayIndex;
    } else {
      isNotZero = true;
      break;
    }
  }
  return {
    zeroCounts,
    number: value,
    parsedNumber: Number.parseFloat(value).toFixed(25),
    numbersAfterZero: [decimalsArray[searchInDecimalsArrayIndex], decimalsArray[searchInDecimalsArrayIndex + 1]],
    formattedNumber: `0.0${zeroCounts - 1}${decimalsArray[searchInDecimalsArrayIndex]}${
      decimalsArray[searchInDecimalsArrayIndex + 1]
    }`,
  };
};
