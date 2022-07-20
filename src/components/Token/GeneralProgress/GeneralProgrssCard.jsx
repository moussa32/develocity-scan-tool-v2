import React  from "react"
import { useState } from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"

export function GeneralProgrssCard(){
    let [data, setData]=useState({
        title:'General',
        percentdecimal:6/7,
        precentageover:8.13,
        series:83,
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