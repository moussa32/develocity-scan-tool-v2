import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import HeaderText from '../HeaderText/HeaderText';
import './LockedTokens.css'
// import { useTranslation } from 'react-i18next';
import unicrypt from '../../../assets/unicrptLogo.png'

function getTimeStamp(milliSecond){
    let date=new Date(milliSecond).toISOString().slice(0, 16).replace('T', ' ')
    return date;
}
const columns = [
    {
        dataField: "network",
        text: "Network",
        formatter: (cell, row) => {
            return (
                <div className='locked_tokens_network'>                    
                    <img className='logo' src={row.network==='unicrypt'?unicrypt:unicrypt} alt="logo" width={100}/>
                    <p>{row.network}</p>
                </div>
            )
        }
    },
    {
        dataField: "address",
        text: "Address",
    },
    {
        dataField: "tokens",
        text: "Tokens",
        formatter: (cell, row) => {
            return (
                <div className='locked_tokens_tokens'>
                    <p className='tokens'>{row.tokens}</p>
                    {/* <p className='rate'>{row.rate}</p> */}
                </div>
            )
        }
    },
    {
        dataField: "unlockedOn",
        text: "Unlocked on",
        formatter: (cell, row) => {
            return (
                <div className='locked_tokens_tokens'>
                    <p className='tokens'>{
                    getTimeStamp(cell)
                    }</p>
                    {/* <p className='rate'>{row.rate}</p> */}
                </div>
            )
        }
    },
];

const LockedTokens = ({ LockedTokensData }) => {
    // const { t } = useTranslation(["token"])
    let LockedData = []
    if (LockedTokensData?.APIsResult ) {
        for (let i = 0; i < LockedTokensData.APIsResult.length; i++) {
            let id=i;
            let network = LockedTokensData?.APIsResult[i].network;
            let address = LockedTokensData?.APIsResult[i].lpAddress.substr(0, 5) + '...' + LockedTokensData?.APIsResult[i].lpAddress.substr(-5);
            // let rate = LockedTokensData.ownerInfo.lockedToken[i].lockedPercentage;
            let tokens = LockedTokensData?.APIsResult[i].lockedAmount;
            let image = LockedTokensData?.APIsResult[i].logoURL;
            let unlockedOn=(LockedTokensData?.APIsResult[i].lockedDuration );
            LockedData.push({ id,network, address, tokens ,unlockedOn,image});
        }
    }
    return (
        <>
            <HeaderText nameHeader="Locked Tokens" title="Welcome to develocity." />
            <BootstrapTable
                keyField="id"
                data={LockedData}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                alwaysShowAllBtns={true}
            />
        </>
    )
}

export default LockedTokens