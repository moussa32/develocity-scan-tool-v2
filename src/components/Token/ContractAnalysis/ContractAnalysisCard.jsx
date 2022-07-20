import styles from './ContractAnalysis.module.css'
import React ,{ useEffect , useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchBSCResult } from "../../../Services/FetchBSCData";
import { Placeholder } from '../../common/Placeholder/Placeholder';
import { useParams } from 'react-router-dom';

export function ContractAnalysisCard(){
    const param = useParams()
    const contractAddress = param.contractAddress;
    const bscdata = useSelector(state => state.GetBSCdata.data)
    const bscstatus = useSelector(state => state.GetBSCdata.status);
   
    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchBSCResult (contractAddress));
    },[contractAddress]);

    const newbscdata = bscdata.result;
    let data=[
        {
            name:'Mint',
            value:newbscdata?newbscdata.mint:null,
            // value:true
        },
        {
            name:'Burn',
            value:newbscdata?newbscdata.burn:null,
            // value:true
        },
        {
            name:'Reflection',
            value:newbscdata?newbscdata.reflection:null,
            // value:true
        },
        {
            name:'Self Destruction',
            value:newbscdata?newbscdata.selfdistruction:null,
            // value:false
        },
        {
            name:'Transfer Ownership',
            value:newbscdata?newbscdata.transferOwnership:null,
            // value:true
        },
        {
            name:'Antiwhale',
            value:newbscdata?newbscdata.antiWhale:null,
            // value:true
        },
        {
            name:'Antibot',
            value:newbscdata?newbscdata.antiBot:null,
            // value:false
        }


    ];

    return(
        <>
            {(bscstatus=='success' )  &&
              <div className="" style={{width:'100%'}}>
              <h5 style={{fontFamily: 'SF Pro Display Medium'}} className='text-start pt-3 pb-2'>Contract Analysis</h5>
              <div className={`list-group align-self-center border-0  ${styles.listGroup} `} >
              {data.map( (item)=>{
                  return ( 
                      <div className="list-group-item rounded-0 " >
                          <div className={` d-flex w-100 justify-content-between text-start  ${styles.listitem}`}  >
                              <div className="align-items-center d-flex h-100" >{item.name}</div>
                              <div className="align-items-center d-flex h-100 ">
                                {item.value===true?
                                <span className={` py-1 ${styles.detected }`}>Detected</span>
                                :
                                <span className={`py-1 ${styles.notdetected }`} >NOT DETECTED</span>
                                }
                                </div>
                          </div>
                      </div>
                     
                  )
              } )}
              </div>
          </div>
        
        }

        {bscstatus=='loading' && 
                         <div className="" style={{width:'100%'}}>
                         <h5 style={{fontFamily: 'SF Pro Display Medium'}} className='text-start pt-3 pb-2'>Contract Analysis</h5>
                         <div className={`list-group align-self-center border-0  ${styles.listGroup} `} >
                         {data.map( (item)=>{
                             return ( 
                                 <div className="list-group-item rounded-0 " >
                                     <div className={` d-flex w-100 justify-content-between text-start  ${styles.listitem}`}  >
                                         <p className="align-items-center d-flex h-100" ><Placeholder  styling={ {width:'100px',height:'20px'}} /> </p>
                                         <p className="align-items-center d-flex h-100 "> <Placeholder  styling={ {width:'50px',height:'20px'}} /> </p>
                                     </div>
                                 </div>
                                
                             )
                         } )}
                         </div>
                     </div>
        }

        {bscstatus=='failed' && ''}
        
        </>
    )
}