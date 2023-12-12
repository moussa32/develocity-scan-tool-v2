import { requestTopTenWallets } from "@/api/contractInfo";
import TokenTable from "@/pages/token/TokenTable";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const TokenOwner = ({ transaction }) => {
  const { contractAddress, network } = useParams();
  const { data } = useQuery({
    queryKey: ["getOwner"],
    suspense: true,
    queryFn: () => requestContractOwner({ contractAddress, network }),
  });

  console.log(data);

  const transactionData = [];

  const columns = [
    {
      accessor: "id",
      Header: "Rank",
      width: 15,
      minWidth: 50,
      maxWidth: 90,
    },
    {
      accessor: "address",
      Header: "address",
      minWidth: 50,
      maxWidth: 100,
    },
    {
      accessor: "balance",
      Header: "balance",
      minWidth: 50,
      maxWidth: 90,
    },
    {
      accessor: "percentage",
      Header: "Percentage",
      minWidth: 50,
      maxWidth: 90,
    },
  ];

  if (transaction && transaction.transactions) {
    for (let i = 0; i < transaction.transactions.length; i++) {
      let id = i + 1;
      let fromAddress =
        transaction.transactions[i].from.substr(0, 4) +
        "..." +
        transaction.transactions[i].from.substr(-4);
      let toAddress =
        transaction.transactions[i].to.substr(0, 4) +
        "..." +
        transaction.transactions[i].to.substr(-4);
      let amount = Number(transaction.transactions[i].value).toFixed(5);
      let tokenSymbol = transaction.transactions[i].tokenSymbol;
      let hash = transaction.transactions[i].hash;
      // let hash = transaction.transactions[i].hash.substr(0, 4) + '...' + transaction.transactions[i].hash.substr(-4)
      transactionData.push({
        id,
        fromAddress,
        toAddress,
        amount,
        tokenSymbol,
        hash,
      });
    }
  }

  return (
    <>
      <TokenTable columns={columns} data={transactionData} />
    </>
  );
};

export default TokenOwner;
