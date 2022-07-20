import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AddedLiquidity from '../LiquidtyTable/AddLiquidty'
import LiquidtyTable from '../LiquidtyTable/LiquidtyTable'
import RemovedLiquidity from '../LiquidtyTable/RemovedLiquidity'

const LiquidtySection = ({ LiquidtyData, bSCTrasaction }) => {
    return (
        <>
            <Tabs defaultActiveKey="LiquidtyTransactions" id="uncontrolled-tab-example" >

                {bSCTrasaction?.tokenTransaction?.length > 0 &&
                    <Tab eventKey="LiquidtyTransactions" title="Liquidty Transactions"   >
                        <LiquidtyTable bSCTrasaction={bSCTrasaction} />
                    </Tab>
                }

                {LiquidtyData?.addLiquidityTransaction?.length !== 0 &&
                    <Tab eventKey="AddedLiquidity" title="Added Liquidity">
                        <AddedLiquidity LiquidtyData={LiquidtyData} />
                    </Tab>}
                {LiquidtyData?.removeLiquidityTransaction?.length !== 0 && <Tab eventKey="RemovedLiquidity" title="Removed Liquidity">
                    <RemovedLiquidity LiquidtyData={LiquidtyData} />
                </Tab>}
            
            </Tabs>
        </>
    )
}

export default LiquidtySection