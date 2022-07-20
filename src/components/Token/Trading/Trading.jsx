import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function Trading() {
    const param = useParams()
    const contractAddress = param.contractAddress;
    const buySellBSCapi = useSelector(state => state.GetBuySellBSCdata.data);
    const statusBSCapi = useSelector(state => state.GetBuySellBSCdata.status);
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBuySellBSCResult(contractAddress));

    }, [dispatch, contractAddress]);
    const buySellBSCdata = buySellBSCapi.result;

    const data = [
        {
            name: t("token:buy"),
            value: buySellBSCdata ? buySellBSCdata.buyGasFeeUSD : null,
            // value:'one'
        },
        {
            name: t("token:sell"),
            value: buySellBSCdata ? buySellBSCdata.sellGasFeeUSD : null,
            // value:'two'
        },
        {
            name: t("token:gas_fee"),
            value: buySellBSCdata ? buySellBSCdata.tranferGasFeeUSD : null,
            // value:'three'
        },

    ]

    return (
        <>
            {(statusBSCapi=='success' || statusBSCapi=='loading')  &&
            <div className='col-12 col-md-6'>
                <h2 className='text-muted mx-2' style={{ fontFamily: 'SF Pro Display Medium', fontSize: '26px' }}>{t("token:trading")}</h2>
                <ListGroup listdata={data} title={t("token:gas_fee")}/>
            </div>}


        {statusBSCapi=='failed' && ''}

        </>
    )
}