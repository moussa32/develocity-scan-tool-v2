import styles from './RugpullStyle.module.css'
import { fetchBSCResult } from '../../../Services/FetchBSCData'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Placeholder } from '../../common/Placeholder/Placeholder';

export function RugpullCard() {
    const param = useParams()
    const contractAddress = param.contractAddress;
    const bscdata = useSelector(state => state.GetBSCdata.data)
    const bscdata_status = useSelector(state => state.GetBSCdata.status)
    const LPtokenBalance_percentage = useSelector(state => state.tokenOwner.tokenOwner)
    const { t } = useTranslation(["token"])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBSCResult(contractAddress));
    }, [contractAddress, dispatch]);

    const percentage = Math.round(LPtokenBalance_percentage?.ownerInfo?.LPtokenBalance_percentage);

    return (

        <div>
            <div >
                {bscdata_status === 'success' && <> {
                    (percentage <= 30) ?
                        <>
                            <h5 className=' pt-3 pb-2' style={{ fontFamily: 'SF Pro Display Medium' }}>{t("token:rugpull")}</h5>

                            <div className={`d-flex  pt-0  `} >

                                <div className={styles.cardGreen}>
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16c784" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                                    </svg></span>
                                    <div className="px-2 pt-1" >
                                        <h5 className=''>{t("token:rugpull_test_notdetected")}</h5>
                                        <p> {t("token:rugpull_test_notdetected_msg", { percentage })}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <h5 className=' pt-3 pb-2' style={{ fontFamily: 'SF Pro Display Medium' }}>{t("token:rugpull")}</h5>
                            <div className={`d-flex  pt-0  `} >

                                <div className={styles.cardYellow}>
                                    <div>
                                        <span >
                                            <span className={styles.rgIcon}>!</span>
                                        </span>
                                    </div>
                                    <div className="text-start ps-2 pt-1" >
                                        <h5 >{t("token:rugpull_test_detected")}</h5>
                                        <p className="text-muted"> {t("token:Taken_owners_has_only_7_of_liquidity_which_increase_risk_of_Rugpull", { percentage })}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                }
                </>
                }
                {
                    bscdata_status === 'loading' &&
                    <div className={` ${styles.loader}`}>
                        <p className={styles.loaderCard}><Placeholder styling={{ width: '100%', height: '60px' }} /> </p>
                    </div>
                }

            </div>
        </div>
    )
}