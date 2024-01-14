import { useQuery } from "@tanstack/react-query";
import TokensTable from "./TokensTable";
import { requestTokens } from "@/api/contractInfo";
import { useState } from "react";

const tokenList = [
  {
    isNotListed: true,
    contractScan: 90,
    interest: 500,
    rank: 5000,
    contractInfo: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      name: "Bitcoin",
      current_price: 50000,
      market_cap: 500000000,
      totalSupply: 500000,
    },
  },
  {
    isNotListed: true,
    contractScan: 60,
    interest: 500,
    rank: 5000,
    contractInfo: {
      logo: "https://logowik.com/content/uploads/images/tron-trx-icon3386.logowik.com.webp",
      name: "Tron",
      current_price: 550,
      market_cap: 500000000,
      totalSupply: 500000,
    },
  },
  {
    isNotListed: true,
    contractScan: 80,
    interest: 500,
    rank: 5000,
    contractInfo: {
      logo: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png",
      name: "Bitcoin",
      current_price: 480,
      market_cap: 500000000,
      totalSupply: 500000,
    },
  },
  {
    isNotListed: true,
    contractScan: 40,
    interest: 500,
    rank: 5000,
    contractInfo: {
      logo: "",
      name: "Bitcoin",
      current_price: 50,
      market_cap: 500000000,
      totalSupply: 500000,
    },
  },
  {
    isNotListed: true,
    contractScan: 40,
    interest: 500,
    rank: 5000,
    contractInfo: {
      logo: "",
      name: "Bitcoin",
      current_price: 50,
      market_cap: 500000000,
      totalSupply: 500000,
    },
  },
];
const isVerifyied = "all";

const TokensPage = () => {
  const [page, setPage] = useState(1);
  const { data, refetch } = useQuery({
    queryKey: ["getTokens", page],
    queryFn: () => requestTokens({ page }),
    enabled: true,
  });

  console.log(data?.contracts);

  return (
    <div className="min-h-[calc(100vh_-_397px)] bg-primaryBg">
      <div className="container bg-primaryBg">
        <div className="pt-24">
          <h1 className="text-white text-[39px]">Tokens</h1>
          <TokensTable
            currentPage={page}
            tokenList={data?.contracts ? data?.contracts : null}
            counts={data?.contractsCount}
            onChangePage={setPage}
            isVerifyied={isVerifyied}
          />
        </div>
      </div>
    </div>
  );
};

export default TokensPage;
