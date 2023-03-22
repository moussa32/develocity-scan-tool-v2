import { useTranslation } from "react-i18next";
import TokenTable from "../TokenTable";

const LiquidtyTable = ({ bSCTrasaction }) => {
  const { t } = useTranslation(["token"]);
  const bSCTrasactionData = [];

  const columns = [
    {
      accessor: "id",
      Header: "Rank",
    },
    {
      accessor: "hash",
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
    },
  ];

  if (bSCTrasaction && bSCTrasaction.transactions) {
    for (let i = 0; i < bSCTrasaction.transactions.length; i++) {
      let id = i + 1;
      let fromAddress =
        bSCTrasaction.transactions[i].from.substr(0, 4) + "..." + bSCTrasaction.transactions[i].from.substr(-4);
      let toAddress =
        bSCTrasaction.transactions[i].to.substr(0, 4) + "..." + bSCTrasaction.transactions[i].to.substr(-4);
      let amount = Number(bSCTrasaction.transactions[i].value).toFixed(5);
      let tokenSymbol = bSCTrasaction.transactions[i].tokenSymbol;
      let hash = bSCTrasaction.transactions[i].hash;
      // let hash = bSCTrasaction.transactions[i].hash.substr(0, 4) + '...' + bSCTrasaction.transactions[i].hash.substr(-4)
      bSCTrasactionData.push({ id, fromAddress, toAddress, amount, tokenSymbol, hash });
    }
  }

  return (
    <>
      <TokenTable columns={columns} data={bSCTrasactionData} />
    </>
  );
};

export default LiquidtyTable;
