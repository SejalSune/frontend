import React from 'react'

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row pt-5'>
                <div className='col-6'>
                    <h2 className='pb-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center pt-5'>
                    <img src='images\pricing0.svg' alt='price' style={{height:"80px"}}/><span style={{fontSize:"10px"}}>Free account
                    opening</span>
                    <img src='images\pricing0.svg' alt='price' style={{height:"80px"}}/><span style={{fontSize:"10px"}}>Free equity delivery
                    and direct mutual funds</span>
                    <img src='images\other-trades.svg' alt='price' style={{height:"80px"}}/><span style={{fontSize:"10px"}}> Intraday and
                    F&O</span>
                </div>
            </div>
        </div>
     );
}

export default Pricing;