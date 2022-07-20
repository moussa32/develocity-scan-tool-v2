import { useState } from "react"
import HeaderText from "../HeaderText/HeaderText"
import { Placeholder } from "../../common/Placeholder/Placeholder"
import styles from './ListGroup.module.css'

export function ListGroup({ listdata, title }) {
    // دي كل الداتا اللي بترجع من api 
    // if (listdata) {
    //     console.log("listdata", listdata);
    // listdata.addLiquidityPer 
    // listdata.removeLiquidityPer
    // listdata.burnLiquidityPer
    // }
    let stylingdata = {
        width: '100px',
        height: '20px'
    }

    return (
        <>
            <div className={`text-muted  mt-3 ${styles.title}`}>
                <HeaderText nameHeader={title} title="Welcome to develocity." />
            </div>
            
            <div className={`mx-2 ${styles.groupcard}`}>
                {
                    listdata  ?
                        <>
                            {listdata.map((i) =>
                            (
                                <div className={`d-flex justify-content-between px-3 py-2 border-bottom  ${styles.listitemcontainer} `}>
                                    {(i.value  || i.value==0) ?  <>
                                        {i.name}
                                        {title=='Slippage' &&  <span>{i.value}%</span>  }
                                        {title=='Gas Fee' &&  <span>${i.value}</span>  }
                                        {title=='Liquidity' &&  <span>{i.value}%</span>  }
                                    </>:
                                    <>
                                        <Placeholder styling={stylingdata}/>
                                        <Placeholder styling={ {width:'50px',height:'20px'}}/>
                                    </>
                                    }
                                   
                                    
                                    
                                </div>
                            )
                            )}
                        </>
                        : ''
                }
            </div>


        </>
    )
}