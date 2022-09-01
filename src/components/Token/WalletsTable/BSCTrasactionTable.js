import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useTranslation } from 'react-i18next';
import "./WalletsTable.css";



const BSCTrasactionTable = ({ bSCTrasaction }) => {
    const { t } = useTranslation(["token"])
    const columns = [
        {
            dataField: "id",
            text: t("token:hash"),
            style:{
                cursor:'pointer'
            }
        },
        {
            dataField: "hash",
            text: "Hash",
            hidden:true,
            style:{
                cursor:'pointer'
            }
        },
        {
            dataField: "fromAddress",
            text: t("token:fromaddress"),
            style:{
                color:'#000',
                cursor:'pointer'
            }
        },
        {
            dataField: "toAddress",
            text:   t("token:toaddress"),
            style:{
                cursor:'pointer'
            }
        },

        {
            dataField: "amount",
            text: t("token:amount"),
            style:{
                cursor:'pointer'
            }
        },
        {
            dataField: "tokenSymbol",
            text: t("token:tokenSymbol"),
            style:{
                cursor:'pointer'
            }
        }
    ];

    const bSCTrasactionData = [];

    if (bSCTrasaction && bSCTrasaction.tokenTransaction) {

        for (let i = 0; i < bSCTrasaction.tokenTransaction.length; i++) {
            let fromAddress = bSCTrasaction.tokenTransaction[i].from.substr(0, 4) + '...' + bSCTrasaction.tokenTransaction[i].from.substr(-4);
            let toAddress = bSCTrasaction.tokenTransaction[i].to.substr(0, 4) + '...' + bSCTrasaction.tokenTransaction[i].to.substr(-4);
            let amount = Number(bSCTrasaction.tokenTransaction[i].value).toLocaleString("en-US");
            let tokenSymbol = bSCTrasaction.tokenTransaction[i].tokenSymbol
            let id = bSCTrasaction.tokenTransaction[i].hash.substr(0, 4) + '...' + bSCTrasaction.tokenTransaction[i].hash.substr(-4)
            let hash = bSCTrasaction.tokenTransaction[i].hash
            bSCTrasactionData.push({ fromAddress, toAddress, amount, tokenSymbol, id,hash });
        }
    }
    const selectRow = {
        mode: "radio",
        hideSelectColumn: true,
        clickToSelect: true,
        style: {
        //   backgroundColor: "#ebeded",
          color: "#000"
        },
        onSelect: (row, isSelect, rowIndex, e) => {
          // eslint-disable-next-line no-restricted-globals
        //   location.href=`https://bscscan.com/tx/${row.hash}`
          window.open(`https://bscscan.com/tx/${row.hash}`, '_blank');
        }
      };


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
        <div >
            <BootstrapTable
                keyField="id"
                data={bSCTrasactionData}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={true}
                selectRow={selectRow}
            />
        </div>
    )
}
export default BSCTrasactionTable

