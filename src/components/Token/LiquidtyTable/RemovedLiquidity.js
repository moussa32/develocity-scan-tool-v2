import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';




const columns = [
    {
        dataField: "transaction",
        text: "Transaction",
    },
    {
        dataField: "fromAddress",
        text: "From Address",
    },
    {
        dataField: "toAddress",
        text: "To Address",
    },

    {
        dataField: "amount",
        text: "Amount"
    },
    {
        dataField: "currency",
        text: "Currency"
    }
];


const RemovedLiquidity = ({ LiquidtyData }) => {
    let RemovedLiquidityData = []
    if (LiquidtyData && LiquidtyData.removeLiquidityTransaction) {
        for (let i = 0; i < LiquidtyData.removeLiquidityTransaction.length; i++) {
            let fromAddress = LiquidtyData.removeLiquidityTransaction[i].sender.substr(0, 3) + '...' + LiquidtyData.removeLiquidityTransaction[i].sender.substr(-4);
            let toAddress = LiquidtyData.removeLiquidityTransaction[i].receiver.substr(0, 3) + '...' + LiquidtyData.removeLiquidityTransaction[i].receiver.substr(-4);
            let amount = LiquidtyData.removeLiquidityTransaction[i].amount.substr(0, 5)
            let transaction = LiquidtyData.removeLiquidityTransaction[i].transaction.substr(0, 3) + '...' + LiquidtyData.removeLiquidityTransaction[i].transaction.substr(-4);
            let currency = LiquidtyData.removeLiquidityTransaction[i].currency;

            RemovedLiquidityData.push({ transaction, fromAddress, toAddress, amount, currency });
        }
    }




    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        hideSizePerPage: true,
        nextPageText: '>',
        prePageText: '<',
        withFirstAndLast: false,
        alwaysShowAllBtns: true,
    });

    return (
        <BootstrapTable
            keyField="id"
            data={RemovedLiquidityData}
            columns={columns}
            hover={true}
            bordered={false}
            loading={true}
            pagination={pagination}
            alwaysShowAllBtns={true}
        />
    )
}

export default RemovedLiquidity