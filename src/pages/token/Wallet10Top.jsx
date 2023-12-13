import { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TokenTable from "./TokenTable";
import { useQuery } from "@tanstack/react-query";
import { requestTopTenWallets } from "@/api/contractInfo";
import "./WalletsTable.css";

const Wallet10Top = () => {
  const { network, contractAddress } = useParams();
  const { data, isSuccess, isFetched } = useQuery({
    queryKey: ["getTopTen"],
    suspense: true,
    queryFn: () => requestTopTenWallets({ network, contractAddress }),
  });
  const [walletInfo, setWalletInfo] = useState([]);

  useEffect(() => {
    if (data && data.topTenHolder && isSuccess && isFetched) {
      const wallet = [];
      for (let i = 0; i < data.topTenHolder.length; i++) {
        let id = i + 1;
        let walletaddress = data.topTenHolder[i].TokenHolderAddress;
        let address =
          data.topTenHolder[i].TokenHolderAddress.substr(0, 8) +
          "..." +
          data.topTenHolder[i].TokenHolderAddress.substr(-6);
        let nameTag = "N/A";
        let balance = Number(
          data.topTenHolder[i].TokenHolderQuantity
        ).toLocaleString("en-US");
        let percentage = `${Number(data.topTenHolder[i].percentage).toFixed(
          2
        )}%`;
        wallet.push({
          id,
          walletaddress,
          address,
          nameTag,
          balance,
          percentage,
        });
      }
      setWalletInfo(wallet);
    }
  }, [data]);

  const columns = [
    {
      accessor: "id",
      Header: "#",
      width: 25,
    },
    {
      accessor: "address",
      Header: "address",
      render: () => {
        return <span style={{ color: "#3861fb" }}></span>;
      },
      minWidth: 42,
      maxWidth: 60,
    },
    {
      accessor: "balance",
      Header: "balance",
      minWidth: 42,
      maxWidth: 73,
    },
    {
      accessor: "percentage",
      Header: "percentage",
      minWidth: 42,
      maxWidth: 70,
    },
  ];

  const selectRow = (row) => {
    window.open(
      `https://bscscan.com/token/${contractAddress}?a=${row.walletaddress}`,
      "_blank"
    );
  };

  return (
    <>
      {walletInfo && walletInfo.length > 0 && (
        <TokenTable
          columns={columns}
          data={walletInfo}
          onRowClick={selectRow}
        />
      )}
    </>
  );
};

export default memo(Wallet10Top);
