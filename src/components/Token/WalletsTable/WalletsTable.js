import { logDOM } from '@testing-library/react';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./WalletsTable.css";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';







const WalletsTable = ({ walletsData }) => {
    const { t, } = useTranslation(["token"])
    // const param = useParams()
    // const contractAddress = param.contractAddress;

   
    const columns = [
        {
            dataField: "id",
            text: t("token:rank"),
            searchable: false
        },
        {
            dataField: "walletaddress",
            text: "wallet address",
            hidden:true,
        },
        {
            dataField: "address",
            text: t("token:address"),
            searchable: false
        },
        {
            dataField: "nameTag",
            text: t("token:nametag"),
            search: true
        },
        {
            dataField: "balance",
            text: t("token:balance"),
            searchable: false
        },
        {
            dataField: "percentage",
            text: t("token:percentage"),
             searchable: false
        }
    ];

    
    let pairaddress=walletsData?.ownerInfo?.pairAddress
    const wallet = [];

    if (walletsData && walletsData.ownerInfo && walletsData.ownerInfo.top10LiquidityHolder) {

        for (let i = 0; i < walletsData.ownerInfo.top10LiquidityHolder.length; i++) {
            let id = i + 1;
            let address = walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(0, 8) + '...' + walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(-6);
            let walletaddress = walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress;
            let nameTag = 'N/A'
            let balance = Number(walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderQuantity).toLocaleString("en-US");
            let percentage = `${Number(walletsData.ownerInfo.top10LiquidityHolder[i].percentage).toFixed(2)}%`;
            // let lockedLiquidityPercentage=walletsData.ownerInfo.top10LiquidityHolder[i].lockedLiquidityTokenPercentage;
            wallet.push({ id, address,walletaddress, nameTag, balance, percentage });

        }
    }

  const selectRow = {
  mode: "radio",
  clickToSelect: true,
  style: {
    backgroundColor: "rgba(5, 6, 70, 0.5)",
    color: "white"
  },
  onSelect: (row) => {
    // eslint-disable-next-line no-restricted-globals
    // location.href=`https://bscscan.com/token/${pairaddress}?a=${row.walletaddress}`
    window.open(`https://bscscan.com/token/${pairaddress}?a=${row.walletaddress}`, '_blank');
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
        <>
        {/* <Link to={`/${contractAddress}`}>  */}
            <BootstrapTable
                keyField="id"
                data={wallet}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={false}
                selectRow={selectRow}
                
            />
        {/* </Link> */}
    
        </>

    )
}

export default WalletsTable


