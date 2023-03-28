import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TokenTable from "../TokenTable";
import "./WalletsTable.css";

const BSCTrasactionTable = ({ bSCTrasaction }) => {
  const [updatedBSCTrasaction, setUpdatedBSCTrasaction] = useState([]);
  const { t } = useTranslation(["token"]);

  useEffect(() => {
    if (bSCTrasaction && bSCTrasaction.tokenTransaction) {
      let tempbSCTrasactionData = [];
      for (let i = 0; i < bSCTrasaction.tokenTransaction.length; i++) {
        let uniqeKey = i;
        let fromAddress =
          bSCTrasaction.tokenTransaction[i].from.substr(0, 4) +
          "..." +
          bSCTrasaction.tokenTransaction[i].from.substr(-4);
        let toAddress =
          bSCTrasaction.tokenTransaction[i].to.substr(0, 4) + "..." + bSCTrasaction.tokenTransaction[i].to.substr(-4);
        let amount = Number(bSCTrasaction.tokenTransaction[i].value).toLocaleString("en-US");
        let tokenSymbol = bSCTrasaction.tokenTransaction[i].tokenSymbol;
        let id =
          bSCTrasaction.tokenTransaction[i].hash.substr(0, 4) +
          "..." +
          bSCTrasaction.tokenTransaction[i].hash.substr(-4);
        let hash = bSCTrasaction.tokenTransaction[i].hash;
        tempbSCTrasactionData.push({ uniqeKey, fromAddress, toAddress, amount, tokenSymbol, id, hash });
      }
      setUpdatedBSCTrasaction(tempbSCTrasactionData);
    }
  }, [bSCTrasaction]);

  const columns = [
    {
      accessor: "id",
      Header: t("token:hash"),
    },
    {
      accessor: "fromAddress",
      Header: t("token:fromaddress"),
    },
    {
      accessor: "toAddress",
      Header: t("token:toaddress"),
    },
    {
      accessor: "amount",
      Header: t("token:amount"),
    },
    {
      accessor: "tokenSymbol",
      Header: t("token:tokenSymbol"),
      width: 42,
    },
  ];

  const onSelect = row => {
    window.open(`https://bscscan.com/tx/${row.hash}`, "_blank");
  };

  return (
    <div>
      {updatedBSCTrasaction && updatedBSCTrasaction.length > 0 && (
        <TokenTable columns={columns} data={updatedBSCTrasaction} onRowClick={onSelect} />
      )}
    </div>
  );
};
export default BSCTrasactionTable;
