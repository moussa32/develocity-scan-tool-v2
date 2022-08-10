import styles from './DescList.module.css'
export function DescList({dtermheader,dterm,ddata,stylingobj}){

    let styling={
       marginTop:stylingobj.marginTop 
    }
    return(
        <>
        <dl style={styling}>
            <dt><span className={styles.dtermheader}>{dtermheader}</span> {dterm}</dt>
            <ul>
                {
                  ddata.map((item,ind)=>(
                    <li key={ind}>{item}</li>
                ) )  
                }
            </ul>
          
        </dl>
        </>
    )
}