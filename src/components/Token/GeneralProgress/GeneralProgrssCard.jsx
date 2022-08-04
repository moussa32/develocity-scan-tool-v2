import React  from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function GeneralProgrssCard(){
  const { t } = useTranslation(["token"])
    let data={
        title:t("token:general"),
        percentdecimal:6/7,
        precentageover:8.13,
        series:83,
        barcolor:'#16c784'  ,
        barpercentcolor:'#000'
      }
    
      return(
          <>
              <div>
                <ProgressCard carddata={data}/>
              </div>
          </>
      )
}