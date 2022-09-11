import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ads from '../../components/common/Ads/Ads'
import { NavBar } from '../../components/Home/Header/NavBar'
import Header from '../../components/Tokens/headerTable/Header'
import TokensTable from '../../components/Tokens/Table/TokensTable'
import { fetchTokenList } from '../../store/tokenListSlice'
import styles from './Tokens.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { TableLoader } from '../../components/common/TableLoader'

import CopyRight from '../../components/Home/CopyRight/CopyRight'

const Tokens = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(['Binance', 'score', 'High','']);
    const [isVerifyied,setIsVerifyied]=useState('all')
  
    useEffect(() => {
        console.log("value", value)
        dispatch(fetchTokenList(value));
       
    }, [dispatch, value]);

    let tokenList = useSelector(state => state.tokenList.tokenList);
    let tokenList_loading = useSelector(state => state.tokenList.loading);

console.log("tokenList", tokenList)
    const handleChange = (event) => {
        setValue([event.target.selectedOptions[0].getAttribute('data-network'), event.target.selectedOptions[0].getAttribute('data-quary'), event.target.selectedOptions[0].getAttribute('data-filter'), event.target.selectedOptions[0].getAttribute('data-contactScam')]);
        // setValue([event.target.getAttribute('data-network'), event.target.getAttribute('data-quary'), event.target.getAttribute('data-filter'), event.target.getAttribute('data-contactScam')]);
        // dispatch(fetchTokenList(value));
        setIsVerifyied('all') 

    };

    // On change category handler
    const categoryChange = ()=>{

    }

const handleclick=(e)=>{
    setIsVerifyied((current)=>!current )
   
}


const handleChange2=(e)=>{
    console.log("hello")
   
}






    return (
        <div >
            <NavBar />

            <div style={{ backgroundColor: "#F3F2F7", padding: "25px 0px 35px" }}>
                <div className='container'>
                    <div className='row' >
                        <div className='col-12 d-flex justify-content-center align-items-center'>
                            <Ads width='590px' height='80px' />
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#FFFFFF", padding: "40px 0px 0px 0px" }}>

                <div className='container' >
                    <div className='row'>
                        <div className='col-12'>
                            <Header />

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={styles.container_btn}>
                                <div className={styles.container_left}>
                                    {/* <div>
                                    <select className={styles.select_btn} value={value} onChange={handleChange} multiple={false}>
                                            <option data-network="Binance" data-quary="score" data-filter="High" data-contactScam="" >Trust Score</option>
                                            <option data-network="Binance" data-quary="interest" data-filter="High" data-contactScam="" >Popular Scans</option>
                                            <option data-network="Binance" data-quary="age" data-filter="High" data-contactScam="" >Last Scans</option>
                                            <option  data-network="Binance" data-quary="score" data-filter="High" data-contactScam="0" >Scam</option>
                                        
                                        </select>
                                    </div> */}
                                     <div>
                                    <select className={styles.select_btn} onChange={handleChange} multiple={false}>
                                            <option data-network="Binance" data-quary="score" data-filter="High" data-contactScam="" >Trust Score</option>
                                            <option data-network="Binance" data-quary="interest" data-filter="High" data-contactScam="" >Popular Scans</option>
                                            <option data-network="Binance" data-quary="age" data-filter="High" data-contactScam="" >Last Scans</option>
                                            <option  data-network="Binance" data-quary="score" data-filter="High" data-contactScam="0" >Scam</option>
                                        
                                        </select>
                                    </div>

                                    {/* test */}
                                    <div>
                                    <select className={styles.select_btn} onChange={categoryChange} multiple={false}>
                                            <option data-network="" data-quary="score" data-filter="High" data-contactScam="" hidden selected >Category</option>
                                            <option data-network="" data-quary="interest" data-filter="High" data-contactScam="" >Digital Currency</option>
                                            <option data-network="" data-quary="age" data-filter="High" data-contactScam="" >Exchange Tokens</option>
                                            <option  data-network="" data-quary="score" data-filter="High" data-contactScam="0" >Financial Crypto Assets</option>
                                            <option  data-network="" data-quary="score" data-filter="High" data-contactScam="0" >Infrastructure</option>
                                            <option  data-network="" data-quary="score" data-filter="High" data-contactScam="0" >NFTs</option>
                                            <option  data-network="" data-quary="score" data-filter="High" data-contactScam="0" >Stablecoins</option>
                                            <option  data-network="" data-quary="score" data-filter="High" data-contactScam="0" >Store of Value</option>  
                                        </select>
                                    </div>

                                    <button className={` ${isVerifyied ? styles.verified_btn : styles.notverified_btn}  ${value[3]?styles.disabled_verified_btn:''}`} onClick={handleclick} disabled={value[3]}>
                                        <span>Verified Tokens</span>
                                        {
                                            isVerifyied?
                                            <>
                                            <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="#9F4AE8"
                                        className="bi bi-patch-check-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg></>:<>
                                    <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="#DFDFE4"
                                className="bi bi-patch-check-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                                    </>
                                        }
                                        {/* <img src={require('../../assets/images/verificationblack.png')} alt='verification' style={{ width: '16px', height: '16px' }} /> */}
                                    </button>
                                </div>
                                <button className={styles.live_btn} disabled>
                                    <span>Live New Pairs</span>
                                </button>


                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        {
                            tokenList_loading==='success'?<div className='col-12'>
                            {tokenList && <TokensTable tokenList={tokenList?tokenList:null}  isVerifyied={isVerifyied}/>}
                        </div>:null
                        }
                        {
                            tokenList_loading===true?<div className='col-12'>
                            <TableLoader/>
                        </div>:null
                        }
            
                        
                    </div>
                </div>
       <CopyRight/>

            </div>

           
        </div >
        
    )
}

export default Tokens