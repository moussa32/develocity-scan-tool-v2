import React, { useState } from 'react'
import Ads from '../../components/common/Ads/Ads'
import { NavBar } from '../../components/Home/Header/NavBar'
import Header from '../../components/Tokens/headerTable/Header'
import TokensTable from '../../components/Tokens/Table/TokensTable'

const Tokens = () => {
    const [value, setValue] = useState('fruit');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
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
            <div style={{ backgroundColor: "#FFFFFF", padding: "40px 0px" }}>

                <div className='container' >
                    <div className='row'>
                        <div className='col-12'>
                            <Header />

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div >
                                <select style={{width:'400px'}} value={value} onChange={handleChange}>
                                    <option value="fruit">Fruit</option>
                                    <option value="vegetable">Vegetable</option>
                                    <option value="meat">Meat</option>
                                </select>

                                <p>We eat {value}!</p>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <TokensTable />

                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Tokens