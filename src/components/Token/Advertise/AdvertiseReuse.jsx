import { fetchviewAdvertismentResult } from "../../../Services/FetchAdvertisment"
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
             className={`border bg-light w-100 position-relative ${shape === 'square' ? styles.advSquare : styles.advRectangle}`}>
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

