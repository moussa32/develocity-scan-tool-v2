import { useTranslation } from "react-i18next";
import TokenTable from "../TokenTable";

const RemovedLiquidity = ({ LiquidtyData }) => {
  const { t } = useTranslation(["token"]);
  const columns = [
    { accessor: "id", Header: "Rank" },
    {
      accessor: "transaction",
      Header: t("token:transactions"),
      formatter: (cell, row) => {
        return (
          <div className="locked_tokens_network">
            <a href={`//Bscscan.com/tx/${cell}`} target="_blank" rel="noreferrer">
              {`${cell.substr(0, 3)} ... ${cell.substr(-4)}`}
            </a>
          </div>
        );
      },
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
      accessor: "currency",
      Header: t("token:currency"),
    },
  ];
  let RemovedLiquidityData = [];
  if (LiquidtyData && LiquidtyData.removeLiquidityTransaction) {
    for (let i = 0; i < LiquidtyData.removeLiquidityTransaction.length; i++) {
      let id = i + 1;
      let fromAddress =
        LiquidtyData.removeLiquidityTransaction[i].sender.substr(0, 3) +
        "..." +
        LiquidtyData.removeLiquidityTransaction[i].sender.substr(-4);
      let toAddress =
        LiquidtyData.removeLiquidityTransaction[i].receiver.substr(0, 3) +
        "..." +
        LiquidtyData.removeLiquidityTransaction[i].receiver.substr(-4);
      let amount = LiquidtyData.removeLiquidityTransaction[i].amount?.toString().substr(0, 5);
      let transaction = LiquidtyData.removeLiquidityTransaction[i].transaction;
      // let transaction = LiquidtyData.removeLiquidityTransaction[i].transaction.substr(0, 3) + '...' + LiquidtyData.removeLiquidityTransaction[i].transaction.substr(-4);
      let currency = LiquidtyData.removeLiquidityTransaction[i].currency;

      RemovedLiquidityData.push({ id, transaction, fromAddress, toAddress, amount, currency });
    }
  }

  return <TokenTable columns={columns} data={RemovedLiquidityData} />;
};

export default RemovedLiquidity;
