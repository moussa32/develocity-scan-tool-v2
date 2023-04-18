import { useTranslation } from "react-i18next";
import TokenTable from "../TokenTable";

const AddedLiquidity = ({ LiquidtyData }) => {
  const { t } = useTranslation(["token"]);
  function foramtNumber(val) {
    return Number(val).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const columns = [
    { accessor: "id", Header: "Rank", width: 50 },
    {
      accessor: "transaction",
      Header: t("token:transactions"),
      minWidth: 90,
      maxWidth: 115,

      Cell: ({ value }) => {
        return (
          <a
            href={`//Bscscan.com/tx/${value}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#2268e1",
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "SF Pro Display Medium",
            }}
          >
            {`${value.substr(0, 6)} ... ${value.substr(-4)}`}
          </a>
        );
      },
    },
    {
      accessor: "fromAddress",
      Header: t("token:fromaddress"),
      minWidth: 50,
      maxWidth: 90,
    },
    {
      accessor: "toAddress",
      Header: t("token:toaddress"),
      minWidth: 40,
      maxWidth: 90,
    },

    {
      accessor: "amount",
      Header: t("token:amount"),
      minWidth: 100,
      maxWidth: 95,
    },
    {
      accessor: "currency",
      Header: t("token:currency"),
      minWidth: 50,
      maxWidth: 90,
    },
  ];
  let AddLiquidtyData = [];
  if (LiquidtyData && LiquidtyData.addLiquidityTransaction) {
    for (let i = 0; i < LiquidtyData.addLiquidityTransaction.length; i++) {
      let fromAddress, toAddress, amount, transaction, currency;
      let id = i + 1;
      if (LiquidtyData.addLiquidityTransaction[i].sender) {
        fromAddress =
          LiquidtyData.addLiquidityTransaction[i].sender.substr(0, 3) +
          "..." +
          LiquidtyData.addLiquidityTransaction[i].sender.substr(-4);
      }
      if (LiquidtyData.addLiquidityTransaction[i].receiver) {
        toAddress =
          LiquidtyData.addLiquidityTransaction[i].receiver.substr(0, 3) +
          "..." +
          LiquidtyData.addLiquidityTransaction[i].receiver.substr(-4);
      }
      if (LiquidtyData.addLiquidityTransaction[i].amount) {
        amount = foramtNumber(LiquidtyData.addLiquidityTransaction[i].amount);
      }
      if (LiquidtyData.addLiquidityTransaction[i].transaction) {
        transaction = LiquidtyData.addLiquidityTransaction[i].transaction;
        // transaction = LiquidtyData.addLiquidityTransaction[i].transaction.substr(0, 3) + '...' + LiquidtyData.addLiquidityTransaction[i].transaction.substr(-4);
      }
      if (LiquidtyData.addLiquidityTransaction[i].currency) {
        currency = LiquidtyData.addLiquidityTransaction[i].currency;
      }
      AddLiquidtyData.push({ id, transaction, fromAddress, toAddress, amount, currency });
    }
  }

  return <TokenTable columns={columns} data={AddLiquidtyData} />;
};

export default AddedLiquidity;
