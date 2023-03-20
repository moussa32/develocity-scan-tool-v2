import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import TokenTable from "../TokenTable";
import "./WalletsTable.css";
import { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const WalletsTable = ({ walletsData }) => {
  const [walletInfo, setWalletInfo] = useState([]);
  const { t } = useTranslation(["token"]);

  useEffect(() => {
    const wallet = [];

    if (walletsData && walletsData.ownerInfo && walletsData.ownerInfo.top10LiquidityHolder) {
      for (let i = 0; i < walletsData.ownerInfo.top10LiquidityHolder.length; i++) {
        let id = i + 1;
        let address =
          walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(0, 8) +
          "..." +
          walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(-6);
        let walletaddress = walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress;
        let nameTag = "N/A";
        let balance = Number(walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderQuantity).toLocaleString("en-US");
        let percentage = `${Number(walletsData.ownerInfo.top10LiquidityHolder[i].percentage).toFixed(2)}%`;
        // let lockedLiquidityPercentage=walletsData.ownerInfo.top10LiquidityHolder[i].lockedLiquidityTokenPercentage;
        wallet.push({ id, address, walletaddress, nameTag, balance, percentage });
      }
      setWalletInfo(wallet);
    }
  }, [walletsData]);

  const newColumns = useMemo(
    () => [
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
    ],
    []
  );

  const selectRow = row => {
    let pairaddress = walletsData?.ownerInfo?.pairAddress;
    window.open(`https://bscscan.com/token/${pairaddress}?a=${row.walletaddress}`, "_blank");
  };

  return (
    <>
      {walletInfo && walletInfo.length > 0 && (
        <TokenTable columns={newColumns} data={walletInfo} onRowClick={selectRow} />
      )}
    </>
  );
};

export default memo(WalletsTable);
