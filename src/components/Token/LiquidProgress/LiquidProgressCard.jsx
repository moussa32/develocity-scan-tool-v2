import React  from "react"
import { useState } from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"

export function LiquidProgressCard(){
    let [data, setData]=useState({
        title:'Liquidity',
        percentdecimal:2/5,
        precentageover:-5.24,
        series:40,
        barcolor:'#EA3943'  ,
        barpercentcolor:'#000'
      })
  
      return(
          <>
              <div>
                <ProgressCard carddata={data}/>
              </div>
          </>
      )

}