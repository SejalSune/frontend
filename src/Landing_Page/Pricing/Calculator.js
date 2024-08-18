import React from 'react'

function Calculator() {
    return ( 
        <div className='container pt-5 mt-5 ps-5 pe-5' >
            <div className='row pb-3 text-primary' style={{paddingLeft:"170px", marginTop:"50px"}}>
                <div className='col'>Brokerage calculator</div>
                <div className='col'>List of charges</div>
            </div>
            <div className='row text-dark-emphasis fs-6' style={{paddingLeft:"110px", marginBottom:"50px"}}>
                <ul>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
            </div>
        </div>
     );
}

export default Calculator;