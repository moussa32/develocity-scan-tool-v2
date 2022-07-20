import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import HeaderText from '../HeaderText/HeaderText';
import "./TokenOwner.css"



const columns = [
    {
        dataField: "address",
        text: "Address",
    },
    {
        dataField: "ownership",
        text: "Ownership",
        formatter: (cell, row) => {
            console.log(row.ownership);
            return (
                <div>
                    {row.ownership ? <span className="token_owner_rennounced">Rennounced</span> : <span className="token_owner_not_rennounced">Not Rennounced</span>}
                </div>

            )
        }
    },
    {
        dataField: "liquidity",
        text: "Liquidity",
        formatter: (cell, row) => {
            return (
                <div className='token_owner_liquidity'>
                    {row.liquidity.liquidity !== 'NaN' ? <p className='liquidity'>{row.liquidity.liquidity}</p> : <p className='liquidity'>0</p>
                    }

                    < p className='rate' > {row.liquidity.rate}%</p >
                </div >
            )
        }
    },
    {
        dataField: "tokens",
        text: "Tokens",
        formatter: (cell, row) => {
            return (
                <div className='token_owner_tokens'>
                    <p className='tokens'>{row.tokens.tokens}</p>
                    <p className='rate'>{row.tokens.rate}%</p>
                    {/* <p className='price'>{row.tokens.price}</p> */}
                </div>
            )
        }
    }
];

const TokenOwner = ({ tokenOwnerData }) => {
    const OwnerData = [];

    if (tokenOwnerData && tokenOwnerData.ownerInfo) {
        const address = tokenOwnerData.ownerInfo.ownerAddress.substr(0, 8) + '...' + tokenOwnerData.ownerInfo.ownerAddress.substr(-6);
        const renounceOwnership = tokenOwnerData.ownerInfo.renounceOwnership;
        const tokenBalance = tokenOwnerData.ownerInfo.tokenBalance;
        const tokenBalance_percentage = tokenOwnerData.ownerInfo.tokenBalance_percentage.toLocaleString("en-US")
        const LPtokenBalance = tokenOwnerData.ownerInfo.LPtokenBalance.toLocaleString("en-US")
        const LPtokenBalance_percentage = tokenOwnerData.ownerInfo.LPtokenBalance_percentage.toLocaleString("en-US")
        OwnerData.push({ address: address, ownership: renounceOwnership, liquidity: { liquidity: tokenBalance, rate: tokenBalance_percentage }, tokens: { tokens: LPtokenBalance, rate: LPtokenBalance_percentage, price: '287,547$' } });
    }

    return (
        <>
            {
                OwnerData.length > 0 ? <>
                    <HeaderText nameHeader="Token Owner" title="Welcome to develocity." />
                    <BootstrapTable
                        keyField="id"
                        data={OwnerData}
                        columns={columns}
                        hover={true}
                        bordered={false}
                        loading={true}
                        alwaysShowAllBtns={true}
                    />
                </> : null
            }

        </>
    )
}

export default TokenOwner