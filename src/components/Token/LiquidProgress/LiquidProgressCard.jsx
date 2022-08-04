import React  from "react"
<<<<<<< HEAD
import { useState } from "react"
=======
>>>>>>> 5ed9685130d13e431a50302d86d3e65fab906a19
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function LiquidProgressCard(){
<<<<<<< HEAD
  const { t, i18n } = useTranslation(["token"])
  const lang=localStorage.getItem("i18nextLng")
    let data={
        title:'Liquidity',
=======
  const { t } = useTranslation(["token"])
    let data={
        title:t("token:liquidity"),
>>>>>>> 5ed9685130d13e431a50302d86d3e65fab906a19
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