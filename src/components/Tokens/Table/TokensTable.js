import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "../../Token/WalletsTable/WalletsTable.css";
import { useTranslation } from 'react-i18next';
const dataFake = [
    { hashNumber: 1, token: 'Hydrogen', score: "20", scans: 1.0079, rank: '#11', price: '$1.00', marketCap: "$570,689,853,077", totalSupply: "19,059,112", network: "BSC", fullReport: "https://www.hydrogen.org/" },
    { hashNumber: 2, token: 'Lithium', score: "20", scans: 4.0026, rank: '#12', price: '$1.00', marketCap: "$570,689,853,077", totalSupply: "19,059,112", network: "BSC", fullReport: "https://www.hydrogen.org/" },
    { hashNumber: 3, token: 'Beryllium', score: "20", scans: 5.0074, rank: '#13', price: '$1.00', marketCap: "$570,689,853,077", totalSupply: "19,059,112", network: "BSC", fullReport: "https://www.hydrogen.org/" },

]
const columns = [
    {
        dataField: "hashNumber",
        text: "#",
    },
    {
        dataField: "token",
        text: "Token",
        style: {
            display: 'flex',
            flexwrap: 'nowrap',
            width: '200px',
        },
        formatter: (cell, row) => {
            return (
                <div >
                    <img src={require('../../../assets/images/tron.png')} alt={row.token} style={{ width: '24px', height: '24px' }} />
                    <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.token}</span>
                    <img src={require('../../../assets/images/verification.png')} alt={row.token} style={{ width: '16px', height: '16px' }} />

                </div>
            )
        }

    },
    {
        dataField: "score",
        text: "Score",
        formatter: (cell, row) => {
            return (
                <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(234, 57, 67, .25)", width: '30px', height: '20px', fontFamily: "SF Pro Display Medium", fontSize: "14px", color: "#EA3943" }}>
                    {row.score}
                </div>
            )
        },
    },
    {
        dataField: "scans",
        text: "Scans"
    },
    {
        dataField: "rank",
        text: "Rank"
    },
    {
        dataField: "price",
        text: "Price"
    },
    {
        dataField: "marketCap",
        text: "Market Cap"
    },
    {
        dataField: "totalSupply",
        text: "Total Supply"
    },
    {
        dataField: "network",
        text: "Network",
        style: {
            display: 'flex',
            flexwrap: 'nowrap',
            width: '150px',
        },
        formatter: (cell, row) => {
            return (
                <div>
                    <img src={require('../../../assets/images/tron.png')} alt={row.token} style={{ width: '24px', height: '24px' }} />
                    <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.token}</span>
                </div>
            )
        }

    },
    {
        dataField: "fullReport",
        text: "Full Report",
        formatter: (cell, row) => {
            return (
                <img src={require('../../../assets/images/arrowRight.png')} alt={row.fullReport} style={{ width: '9px', height: '7px', marginLeft: "15px" }} />

            )
        }
    }

];

const TokensTable = () => {
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    return (

        <div className='tokens_table'>

            <BootstrapTable
                keyField="id"
                data={dataFake}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                alwaysShowAllBtns={true}
            />
        </div>

    )
}

export default TokensTable