import { fetchviewAdvertismentResult } from "../../../Services/FetchAdvertisment"
import { useDispatch } from "react-redux";
import styles from './Advertise.module.css'

export function AdvertiseReuse({ styling, image,adURL, id, type ,title}) {
    const dispatch=useDispatch()
    let stylingAdvertise = {
        height: styling.height,
        marginTop: styling.marginTop
    }
    const viewAdvertisment=()=>{
        dispatch (fetchviewAdvertismentResult(id));
        window.open(adURL, '_blank');
    }
    return (
        <>
            <div className="border bg-light w-100" style={stylingAdvertise}>
                <div>
                    <button onClick={viewAdvertisment}
                        disabled={type === 'Impression'}
                        className={`${type === 'Impression' ? styles.notActiveButton : styles.activeButton}`}>
                        <img src={image} alt={title} width={200} className={styles.image}/>
                    </button>
                </div>
            </div>

        </>
    )
}

