import React  from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function ContractProgrssCard(){
    let data={
      title:'Contract',
      percentdecimal:5/8,
      precentageover:-1.2,
      series:62,
      barcolor:'#16c784'  ,
      barpercentcolor:'#000'
    }
    const { t } = useTranslation(["token"])
    return(
        <>
            <div>
              <ProgressCard carddata={data}/>
            </div>
        </>
    )
}