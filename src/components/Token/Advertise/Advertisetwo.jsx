import { useState } from "react"
import { AdvertiseReuse } from "./AdvertiseReuse"

export function Advertisetwo({styling}){
    let stylingdata={
        height:'80px',
        width:'200px',
        marginTop:styling.marginTop
    }
    return(
        <>
        <AdvertiseReuse styling={stylingdata}/>
           
        </>
    )
}