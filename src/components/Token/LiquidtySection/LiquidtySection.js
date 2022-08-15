import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AddedLiquidity from '../LiquidtyTable/AddLiquidty'
import LiquidtyTable from '../LiquidtyTable/LiquidtyTable'
import RemovedLiquidity from '../LiquidtyTable/RemovedLiquidity'
import { useTranslation } from 'react-i18next';

const LiquidtySection = ({ LiquidtyData, bSCTrasaction }) => {
    // console.log("bSCTrasaction", bSCTrasaction)
    const { t } = useTranslation(["token"])


    return (
        <>
            <Tabs defaultActiveKey="LiquidtyTransactions" id="uncontrolled-tab-example" >

                {bSCTrasaction?.tokenTransaction?.length !== 0  &&
                    <Tab eventKey="LiquidtyTransactions" title={t("token:liquidity_transactions")} >
                        <LiquidtyTable bSCTrasaction={bSCTrasaction} />
                    </Tab>
                }

                {LiquidtyData?.addLiquidityTransaction?.length !== 0 &&
                    <Tab eventKey="AddedLiquidity" title={t("token:added_liquidity")}>
                        <AddedLiquidity LiquidtyData={LiquidtyData} />
                    </Tab>}
                {LiquidtyData?.removeLiquidityTransaction?.length !== 0 && 
                <Tab eventKey="RemovedLiquidity" title={t("token:removed_liquidity")}>
                    <RemovedLiquidity LiquidtyData={LiquidtyData} />
                </Tab>}

            </Tabs>
        </>
    )
}

export default LiquidtySection