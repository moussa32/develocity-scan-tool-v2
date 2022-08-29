import React  from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function LiquidProgressCard(){

  const { t } = useTranslation(["token"])
    let data={
        title:t("token:liquidity"),
        percentdecimal:2/5,
        precentageover:-5.24,
        series:40,
        barcolor:'#EA3943'  ,
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