import React from 'react'
export default function ShareIcon({color}) {
    return (
        <>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke={color} strokeWidth="2" d="M19,13 L19,23 L1,23 L1,5 L1,5 L11,5 M14,1 L23,1 L23,10 M10,14 L22.9999998,1 L10,14 Z"></path>
                </svg>
        </>
    )
}
