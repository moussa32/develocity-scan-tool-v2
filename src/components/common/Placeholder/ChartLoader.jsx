import styles from './ChartLoader.module.css'
export function ChartLoader({styling}) {
    let styledataouter={
        width:styling.outerwidth,
        height:styling.outerheight,
        backgroundColor:styling.bgouter
    }
    let styledatainner={
        width:styling.innerwidth,
        height:styling.innerheight,
        backgroundColor:styling.bginner
    }
    return (
        <>
        <div className='placeholder-glow'>

       
            <div className={`placeholder ${styles.outerCircle} `} style={styledataouter}>
                <div className={styles.innerCircle} style={styledatainner}>

                </div>
            </div>
            </div>
        </>
    )
}