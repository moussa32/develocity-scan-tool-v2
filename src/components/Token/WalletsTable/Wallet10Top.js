import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./WalletsTable.css";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';







const Wallet10Top = ({ topWalletData }) => {
    const { t } = useTranslation(["token"])
    const param = useParams()
    const contractAddress = param.contractAddress;

    const columns = [
        {
            dataField: "id",
            text: t("token:rank"),
        },
        {
            dataField: "walletaddress",
            text: "wallet address",
            hidden:true,
        },
        {
            dataField: "address",
            text: t("token:address"),
            style:{
                cursor:'pointer'
            }
        },
        {
            dataField: "nameTag",
            text: t("token:nametag"),
        },
        {
            dataField: "balance",
            text: t("token:balance"),
        },
        {
            dataField: "percentage",
            text: t("token:percentage")
        }
    ];
    const wallet = [];

    if (topWalletData && topWalletData.topTenHolder) {

        for (let i = 0; i < topWalletData.topTenHolder.length; i++) {
            let id = i + 1;
            let walletaddress = topWalletData.topTenHolder[i].TokenHolderAddress;
            let address = topWalletData.topTenHolder[i].TokenHolderAddress.substr(0, 8) + '...' + topWalletData.topTenHolder[i].TokenHolderAddress.substr(-6);
            let nameTag = 'N/A'
            let balance = Number(topWalletData.topTenHolder[i].TokenHolderQuantity).toLocaleString("en-US");;
            let percentage = `${(Number(topWalletData.topTenHolder[i].percentage)).toFixed(2)}%`;
            wallet.push({ id, walletaddress,address, nameTag, balance, percentage });

        }
    }

    const selectRow = {
        mode: "radio",
        hideSelectColumn: true,
        clickToSelect: true,
        style: {
          backgroundColor: "#ebeded",
          color: "#000"
        },
        onSelect: (row, isSelect, rowIndex, e) => {
          // eslint-disable-next-line no-restricted-globals
        //   location.href=`https://bscscan.com/token/${contractAddress}?a=${row.walletaddress}`
          window.open(`https://bscscan.com/token/${contractAddress}?a=${row.walletaddress}`, '_blank');
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
            <BootstrapTable
                keyField="id"
                data={wallet}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={true}
                selectRow={selectRow}
            />
        </>

    )
}

export default Wallet10Top


