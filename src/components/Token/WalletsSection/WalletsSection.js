import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Wallet10Top from '../WalletsTable/Wallet10Top';
import WalletsTable from '../WalletsTable/WalletsTable';
import BSCTrasactionTable from '../WalletsTable/BSCTrasactionTable';
import { useTranslation } from 'react-i18next';

import './WalletsSection.css'
const WalletsSection = ({ walletsData, topWalletData, bSCTrasaction }) => {
    const { t } = useTranslation(["token"])
    let Active = topWalletData?.ownerInfo?.top10LiquidityHolder.length > 0 ? 'TopWallets' : 'LiquidityWallets'
    return (
        <>
            <Tabs defaultActiveKey={Active} id="uncontrolled-tab-example" >
                {
                    walletsData?.ownerInfo?.top10LiquidityHolder.length > 0 &&
                    <Tab eventKey="LiquidityWallets" title={t("token:top10liquiditywallets")} className="h-50">
                        <WalletsTable walletsData={walletsData} />
                    </Tab>
                }
                {
                    topWalletData?.topTenHolder?.length > 0 &&
                    <Tab eventKey="TopWallets" title={t("token:top10wallets")}>
                        <Wallet10Top topWalletData={topWalletData} />
                    </Tab>
                }

                {
                    bSCTrasaction?.tokenTransaction?.length > 0 &&
                    <Tab eventKey="TokenTransactions" title={t("token:tokenTransactions")}>
                        <BSCTrasactionTable bSCTrasaction={bSCTrasaction} />
                    </Tab>
                }


            </Tabs>
        </>
    )
}

export default WalletsSection