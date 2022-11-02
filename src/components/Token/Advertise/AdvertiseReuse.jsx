import { fetchviewAdvertismentResult } from "../../../store/FetchAdvertisment"
import { useDispatch } from "react-redux";
import styles from './Advertise.module.css'

export function AdvertiseReuse({  image, adURL, id, type, title, shape }) {
    const dispatch = useDispatch()
    const viewAdvertisment = () => {
        if (type === 'Impression') {
            window.open(adURL, '_blank');
        }
        else if (type === 'Click') {
            dispatch(fetchviewAdvertismentResult(id));
            window.open(adURL, '_blank');
        }
    }
    return (
        <>
            <div
             className={` position-relative 
             ${shape==='square284_254'&& styles.square284_254}
             ${shape==='rectangle590_72'&& styles.rectangle590_72}
             ${shape==='square285_142'&& styles.square285_142}

             
             `}>
                <span className={styles.advRibbon}>Ad</span>
                <div>
                    <button onClick={viewAdvertisment}
                        // disabled={type === 'Impression'}
                        className={`${type === 'Impression' ? styles.notActiveButton : styles.activeButton}`}>
                        <img src={image} alt={title} className={styles.image} />
                    </button>
                </div>
            </div>

        </>
    )
}

