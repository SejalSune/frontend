import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <img src='images\homeHero.png' alt='heroImage'/>
                <h1 className='mt-3'>Invest in everything</h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary mt-3' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;