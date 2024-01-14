import axios from "axios";
import BASE_URL from "./constant";
import { getContractTypeByName } from "@/shared/util/tokenSupportedNetworks";

const requestSearch = async ({ name }) => {
  const request = axios
    .get(`${BASE_URL}/user/suggestion`, {
      params: {
        name,
      },
    })
    .then((data) => data.data);
  return request;
};

const requestTopTenWallets = async ({ network, contractAddress }) => {
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "getBSCTop10";
      case "ETH":
        return "getETHTop10";
      case "Polygon":
        return "getPolygonTop10";
    }
  };

  const response = await axios.get(
    `${BASE_URL}/contract/${methodByNetwork()}`,
    {
      params: {
        contractAddress,
      },
    }
  );
  return response.data.result;
};

const requestContractLiquidity = async ({ network, contractAddress }) => {
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "getBscLiquidityScan";
      case "ETH":
        return "getETHLiquidityScan";
      case "MATIC":
        return "getPolygonLiquidityScan";
    }
  };

  const response = await axios.get(
    `${BASE_URL}/contract/${methodByNetwork()}/${contractAddress}`
  );
  return response.data.result;
};

const requestContractOwner = async ({ network, contractAddress }) => {
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "getBSCOwnerDetails";
      case "ETH":
        return "getETHOwnerDetails";
      case "MATIC":
        return "getPolygonOwnerDetails";
    }
  };

  const response = await axios.get(
    `${BASE_URL}/contract/${methodByNetwork()}`,
    {
      params: {
        contractAddress,
      },
    }
  );
  return response.data.result;
};

const requestContractTax = async ({ network, contractAddress }) => {
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "buySellBSCFeePercentage";
      case "ETH":
        return "buySellFeeETHPercentage";
      case "MATIC":
        return "buySellFeePolygonPercentage";
    }
  };

  const response = await axios.get(
    `${BASE_URL}/contract/${methodByNetwork()}`,
    {
      params: {
        contractAddress,
      },
    }
  );
  return response.data.result;
};

const requestContractAnalysis = async ({ network, contractAddress }) => {
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "getBSCContractDetail";
      case "ETH":
        return "getETHContractDetails";
      case "MATIC":
        return "getPolygonContractDetails";
    }
  };

  const response = await axios.get(
    `${BASE_URL}/contract/${methodByNetwork()}/${contractAddress}`
  );
  return response.data.result;
};

const requestContractHolders = async ({ network, contractAddress }) => {
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "BSCholderScan";
      case "ETH":
        return "ETHholderScan";
      case "MATIC":
        return "polygonHolderScan";
    }
  };

  const response = await axios.get(
    `${BASE_URL}/contract/${methodByNetwork()}`,
    {
      params: {
        contractAddress,
      },
    }
  );
  return response.data.result;
};

const requestHumanSummary = async ({ contractAddress, network }) => {
  let request;
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "humanSummary";
      case "ETH":
        return "ethHumanSummary";
      case "MATIC":
        return "polygonHumanSummary";
    }
  };

  if (network === "ETH" || network === "MATIC") {
    request = await axios
      .post(`${BASE_URL}/contract/${methodByNetwork()}`, {
        contractAddress,
      })
      .then((data) => data?.data);
  } else {
    request = await axios
      .get(`${BASE_URL}/contract/${methodByNetwork()}/${contractAddress}`)
      .then((data) => data?.data);
  }

  return request;
};

const requestTokens = async ({ page = 1 } = {}) => {
  const request = axios
    .get(`${BASE_URL}/static/getAllContracts`, {
      params: {
        page,
      },
    })
    .then((data) => data.data);
  return request;
};

const requestIP = async () => {
  const request = axios
    .get("https://api.ipify.org?format=json")
    .then((data) => data.data);

  return request;
};

const requestContractInfo = async ({ contractAddress, network }) => {
  const { ip } = await requestIP();
  const methodByNetwork = () => {
    switch (network) {
      case "BSC":
        return "bsctokenInfo";
      case "ETH":
        return "ethTokenInfo";
      case "MATIC":
        return "polygonTokenInfo";
    }
  };

  const contractInfo = axios
    .get(`${BASE_URL}/contract/${methodByNetwork()}`, {
      params: {
        contractAddress,
        contractType: getContractTypeByName(network)?.contractType,
        ipAddress: ip,
      },
    })
    .then((data) => {
      return data.data;
    });
  return contractInfo;
};

export {
  requestSearch,
  requestContractInfo,
  requestHumanSummary,
  requestTopTenWallets,
  requestContractOwner,
  requestContractTax,
  requestContractLiquidity,
  requestContractHolders,
  requestTokens,
  requestContractAnalysis,
};
