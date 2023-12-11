import BSCNetworkIcon from "@images/BSC.png";
import ETHNetworkIcon from "@images/eth.png";
import POLNetworkIcon from "@images/polygon.png";

const supportedNetworks = {
  binance: {
    id: 1,
    name: "binance",
    contractType: "Binance",
    shortName: "BSC",
    icon: BSCNetworkIcon,
  },
  ethereum: {
    id: 2,
    name: "ethereum",
    contractType: "Ethereum",
    shortName: "ETH",
    icon: ETHNetworkIcon,
  },
  polygon: {
    id: 3,
    name: "polygon",
    contractType: "Polygon",
    shortName: "MATIC",
    icon: POLNetworkIcon,
  },
};

export const getNetworkDetails = (networkName) =>
  supportedNetworks[networkName.toLowerCase()];

export const getContractTypeByName = (shortName) => {
  const nestedObjects = Object.values(supportedNetworks);
  return (
    nestedObjects.find((obj) => Object.values(obj).includes(shortName)) || null
  );
};
