import React from 'react'

function Ceo() {
    return ( 
        <div className='container border-top pt-5'>
            <div className='row justify-around'>
                <h2 className='text-center'>People</h2>
                <div className='col-md-6 mt-5 mx-auto d-flex flex-column align-items-center'>
                    <img src='images\nithinKamath.jpg' alt='ceo' style={{width:"50%", borderRadius:"50%"}}/>
                    <p className='fs-5 mb-0'>Nitin Kamath</p>
                    <p className='text-secondary'>Founder, CEO</p>
                </div>

                <div className='col mt-5'>
                    <p className='text-secondary fs-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='text-secondary fs-5'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='text-secondary fs-5'>Playing basketball is his zen.</p>
                    <p className='text-secondary fs-5'>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
     );
}

export default Ceo;