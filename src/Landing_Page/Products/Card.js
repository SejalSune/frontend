import React from 'react'

function Card({img,para}) {
    return ( 
        <>
            <div className='ps-3 pe-3'>
                <img src={img} alt='company' className='w-25'/>
                <p>{para}</p>
            </div>
        </>
     );
}

export default Card;