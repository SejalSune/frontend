import React from 'react'

function Trust() {
    return ( 
        <div className='cotainer ps-5 pe-5 pt-5'>
            <div className='row pt-5 ps-5 pe-5 pb-5'>
                <div className='col-6'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h4> Customer-first always</h4>
                    <p className='mb-5'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>The Zerodha universe</h4>
                    <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <div className='row'><img src='images\ecosystem.png' alt='ecosystem' style={{height:"40%"}}/></div>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <img src='images\pressLogos.png' alt='newspaper' style={{width:"50%"}}/>
            </div>
        </div>
     );
}

export default Trust;