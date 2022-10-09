
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Slippage() {
    const param = useParams()
    const contractAddress = param.contractAddress;
    const buySellBSCslippage = useSelector(state => state.GetBuySellBSCdata.data);
    const statusSlippage = useSelector(state => state.GetBuySellBSCdata.status);
    const { t } = useTranslation(["token"])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBuySellBSCResult(contractAddress));

    }, [dispatch, contractAddress]);
    const buySellBSCdataslippage = buySellBSCslippage.result;

    const data = [
        {
            name: t("token:buy"),
            value: buySellBSCdataslippage ? buySellBSCdataslippage.buyTax : null,
        },
        {
            name: t("token:sell"),
            value: buySellBSCdataslippage ? buySellBSCdataslippage.sellTax : null,
        },

    ]

    return (
        <>
            {(statusSlippage==='success' || statusSlippage==='loading')  &&
            <div className='col-12 col-md-6'>
                <ListGroup listdata={data} title={t("token:slippage")} info={t("token:infoDescription.slippageInfo")}/>
            </div>}

        {statusSlippage==='failed' && ''}

        </>
    )
}