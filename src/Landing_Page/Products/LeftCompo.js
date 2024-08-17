import React from 'react'

function Left({photo, heading, para}) {
    return ( 
        <>
            <div className='container pt-5 pb-5'>
                <div className='row align-items-center ms-5 me-5'>
                    <div className='col-md-6'>
                        <img src={photo} alt={heading} className='img-fluid'/>
                    </div>
                    <div className='col-md-6 ps-5'>
                        <h2>{heading}</h2>
                        <p>{para}</p>
                        <a href='/' className='pe-5 text-decoration-none'>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='/' className='text-decoration-none'>Learn more  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <div className='row pt-3'>
                            <img src='images\appstoreBadge.svg' alt='appstore' className='w-25'/>
                            <img src='images\googlePlayBadge.svg' alt='appstore' className='w-25'/>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Left;