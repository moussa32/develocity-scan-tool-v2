


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
import { useParams } from 'react-router-dom';
export function Slippage() {
    const param = useParams()
    const contractAddress = param.contractAddress;
    const buySellBSCslippage = useSelector(state => state.GetBuySellBSCdata.data);
    const statusSlippage = useSelector(state => state.GetBuySellBSCdata.status);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBuySellBSCResult(contractAddress));

    }, [dispatch, contractAddress]);
    const buySellBSCdataslippage = buySellBSCslippage.result;

    const data = [
        {
            name: 'Buy',
            value: buySellBSCdataslippage ? buySellBSCdataslippage.buyTax : null,
            // value:'one'
        },
        {
            name: 'Sell',
            value: buySellBSCdataslippage ? buySellBSCdataslippage.sellTax : null,
            // value:'two'
        },

    ]

    return (
        <>
            {(statusSlippage=='success' || statusSlippage=='loading')  &&
            <div className='col-12 col-md-6'>
                <ListGroup listdata={data} title='Slippage'/>
            </div>}

        {statusSlippage=='failed' && ''}

        </>
    )
}