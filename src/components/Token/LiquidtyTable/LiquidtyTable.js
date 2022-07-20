import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


const columns = [
    {
        dataField: "hash",
        text: "Hash",
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
        dataField: "tokenSymbol",
        text: "Symbol"
    }
];


const LiquidtyTable = ({ bSCTrasaction }) => {
    const bSCTrasactionData = [];

    if (bSCTrasaction && bSCTrasaction.transactions) {
        for (let i = 0; i < bSCTrasaction.transactions.length; i++) {
            let fromAddress = bSCTrasaction.transactions[i].from.substr(0, 4) + '...' + bSCTrasaction.transactions[i].from.substr(-4);
            let toAddress = bSCTrasaction.transactions[i].to.substr(0, 4) + '...' + bSCTrasaction.transactions[i].to.substr(-4);
            let amount = Number(bSCTrasaction.transactions[i].value).toLocaleString("en-US");
            let tokenSymbol = bSCTrasaction.transactions[i].tokenSymbol
            let hash = bSCTrasaction.transactions[i].hash.substr(0, 4) + '...' + bSCTrasaction.transactions[i].hash.substr(-4)
            bSCTrasactionData.push({ fromAddress, toAddress, amount, tokenSymbol, hash });
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
        <div className='large_table'> 

            <BootstrapTable
                keyField="id"
                data={bSCTrasactionData}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={true}
            />
        </div>
    )
}

export default LiquidtyTable