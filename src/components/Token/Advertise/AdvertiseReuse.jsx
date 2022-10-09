import styles from './Advertise.module.css'
export function AdvertiseReuse({styling}){
    let stylingAdvertise={
        height:styling.height,
        marginTop:styling.marginTop
    }
    return(
        <>
            <div className="border   bg-light w-100" style={stylingAdvertise}>  
            </div>
          
        </>
    )
}