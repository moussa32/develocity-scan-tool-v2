import { memo, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import TokenTable from "./TokenTable";
import { useQuery } from "@tanstack/react-query";
import { requestContractLiquidity } from "@/api/contractInfo";
import "./WalletsTable.css";

const Liquidity = () => {
  const { network, contractAddress } = useParams();
  const { data, isSuccess, isFetched } = useQuery({
    queryKey: ["getContractLiquidity"],
    suspense: true,
    queryFn: () => requestContractLiquidity({ network, contractAddress }),
  });

  const liquditiy = useMemo(
    () =>
      data?.liquidityInfo?.map((item, index) => ({
        id: index,
        addLiquidity: item?.addLiquidityBal.toFixed(),
        removeLiquidity: item?.removeLiquidityBal.toFixed(),
        burnLiquidityPer: item?.burnLiquidityPer.toFixed(),
      })) ?? [],
    [data]
  );

  console.log(liquditiy);

  const columns = [
    {
      accessor: "id",
      Header: "#",
      width: 25,
    },
    {
      accessor: "addLiquidity",
      Header: "Add Liquidity",
      minWidth: 42,
      maxWidth: 73,
    },
    {
      accessor: "burnLiquidityPer",
      Header: "Burned Liquidity",
      minWidth: 42,
      maxWidth: 70,
    },
    {
      accessor: "removeLiquidity",
      Header: "Removed Liquidity",
      minWidth: 42,
      maxWidth: 70,
    },
  ];

  return (
    <div className="my-10">
      {liquditiy && liquditiy.length > 0 && (
        <TokenTable columns={columns} data={liquditiy} />
      )}
      {liquditiy?.length === 0 && (
        <p className="text-white/50 font-semibold text-xl flex items-center justify-center font-inter h-full">
          There are no liquidity wallets
        </p>
      )}
    </div>
  );
};

export default memo(Liquidity);
