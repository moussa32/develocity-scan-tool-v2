import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import TokenTable from "../TokenTable";
import "./WalletsTable.css";

const Wallet10Top = ({ topWalletData }) => {
  const [walletInfo, setWalletInfo] = useState([]);
  const { t } = useTranslation(["token"]);
  const { contractAddress } = useParams();

  useEffect(() => {
    const wallet = [];

    if (topWalletData && topWalletData.topTenHolder) {
      for (let i = 0; i < topWalletData.topTenHolder.length; i++) {
        let id = i + 1;
        let walletaddress = topWalletData.topTenHolder[i].TokenHolderAddress;
        let address =
          topWalletData.topTenHolder[i].TokenHolderAddress.substr(0, 8) +
          "..." +
          topWalletData.topTenHolder[i].TokenHolderAddress.substr(-6);
        let nameTag = "N/A";
        let balance = Number(topWalletData.topTenHolder[i].TokenHolderQuantity).toLocaleString("en-US");
        let percentage = `${Number(topWalletData.topTenHolder[i].percentage).toFixed(2)}%`;
        wallet.push({ id, walletaddress, address, nameTag, balance, percentage });
      }
      setWalletInfo(wallet);
    }
  }, [topWalletData]);

  const columns = [
    {
      accessor: "id",
      Header: t("token:rank"),
    },
    {
      accessor: "address",
      Header: t("token:address"),
    },
    {
      accessor: "nameTag",
      Header: t("token:nametag"),
    },
    {
      accessor: "balance",
      Header: t("token:balance"),
    },
    {
      accessor: "percentage",
      Header: t("token:percentage"),
    },
  ];

  const selectRow = row => {
    window.open(`https://bscscan.com/token/${contractAddress}?a=${row.walletaddress}`, "_blank");
  };

  return (
    <>
      {walletInfo && walletInfo.length > 0 && <TokenTable columns={columns} data={walletInfo} onRowClick={selectRow} />}
    </>
  );
};

export default memo(Wallet10Top);
