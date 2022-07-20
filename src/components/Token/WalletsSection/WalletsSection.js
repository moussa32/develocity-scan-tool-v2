import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Wallet10Top from '../WalletsTable/Wallet10Top';
import WalletsTable from '../WalletsTable/WalletsTable';
import BSCTrasactionTable from '../WalletsTable/BSCTrasactionTable';

import './WalletsSection.css'
const WalletsSection = ({ walletsData, topWalletData, bSCTrasaction }) => {
    let Active = topWalletData?.ownerInfo?.top10LiquidityHolder.length > 0 ? 'TopWallets' : 'LiquidityWallets'
    return (
        <>
            <Tabs defaultActiveKey={Active} id="uncontrolled-tab-example" >
                {
                    topWalletData?.ownerInfo?.top10LiquidityHolder.length > 0 &&
                    <Tab eventKey="TopWallets" title="Top 10 Wallets" >
                        <Wallet10Top topWalletData={topWalletData} />
                    </Tab>
                }
                {
                    walletsData?.ownerInfo?.top10LiquidityHolder.length > 0 &&
                    <Tab eventKey="LiquidityWallets" title="Top 10 Liquidity Wallets">
                        <WalletsTable walletsData={walletsData} />
                    </Tab>
                }
                {
                    bSCTrasaction?.tokenTransaction?.length > 0 &&
                    <Tab eventKey="TokenTransactions" title="Token Transactions">
                            <BSCTrasactionTable bSCTrasaction={bSCTrasaction} />
                    </Tab>
                }


            </Tabs>
        </>
    )
}

export default WalletsSection