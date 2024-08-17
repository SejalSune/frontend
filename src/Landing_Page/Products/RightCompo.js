import React from 'react'

function Right({photo,heading,para}) {
    return ( 
        <>
            <div className='container pt-5 pb-5'>
                <div className='row align-items-center ms-5 me-5'>
                    <div className='col-md-6'>
                        <h2>{heading}</h2>
                        <p>{para}</p>
                        <a href='/' className='text-decoration-none'>Learn more  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='col-md-6 ps-5'>
                        <img src={photo} alt={heading} className='img-fluid'/>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Right;