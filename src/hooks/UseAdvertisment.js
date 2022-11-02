import { fetchgetAdvertismentResult } from '../store/FetchAdvertisment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function UseAdvertisment(position) {
    
    const dispatch = useDispatch();
    const getAdvertismentData = useSelector(state => state.GetAdvertismentodata.data); 
    const advertisment_Status = useSelector(state => state.GetAdvertismentodata.status); 
    const advertisment_code = useSelector(state => state.GetAdvertismentodata.responsecode); 

    //  requset advertisment
    useEffect(() => {
        dispatch(fetchgetAdvertismentResult(position))
    }, [dispatch, position])

    return {
        getAdvertismentData,
        advertisment_Status,
        advertisment_code
    }
}
