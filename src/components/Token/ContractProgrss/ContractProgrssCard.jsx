import React  from "react"
import { useState } from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"

export function ContractProgrssCard(){
    let [data, setData]=useState({
      title:'Contract',
      percentdecimal:5/8,
      precentageover:-1.2,
      series:62,
      barcolor:'#16c784'  ,
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