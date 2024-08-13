import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-6'>
                    <img src='images\education.svg' alt='education'/>
                </div>
                <div className='col-6 pt-5'>
                    <h2 className='pt-5'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p><a href='/' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p><a href='/' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Education;