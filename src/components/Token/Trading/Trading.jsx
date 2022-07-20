import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
import { useParams } from 'react-router-dom';
export function Trading() {
    const param = useParams()
    const contractAddress = param.contractAddress;
    const buySellBSCapi = useSelector(state => state.GetBuySellBSCdata.data);
    const statusBSCapi = useSelector(state => state.GetBuySellBSCdata.status);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBuySellBSCResult(contractAddress));

    }, [dispatch, contractAddress]);
    const buySellBSCdata = buySellBSCapi.result;

    const data = [
        {
            name: 'Buy',
            value: buySellBSCdata ? buySellBSCdata.buyGasFeeUSD : null,
            // value:'one'
        },
        {
            name: 'Sell',
            value: buySellBSCdata ? buySellBSCdata.sellGasFeeUSD : null,
            // value:'two'
        },
        {
            name: 'Transfet',
            value: buySellBSCdata ? buySellBSCdata.tranferGasFeeUSD : null,
            // value:'three'
        },

    ]

    return (
        <>
            {(statusBSCapi=='success' || statusBSCapi=='loading')  &&
            <div className='col-12 col-md-6'>
                <h2 className='text-muted mx-2' style={{ fontFamily: 'SF Pro Display Medium', fontSize: '26px' }}>Trading</h2>
                <ListGroup listdata={data} title='Gas Fee'/>
            </div>}


        {statusBSCapi=='failed' && ''}

        </>
    )
}