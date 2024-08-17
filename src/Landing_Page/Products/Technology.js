import React from 'react'

function Techno() {
    return ( 
        <div className='container border-bottom' style={{paddingBottom:"100px", paddingTop:"100px"}}>
            <div className='row text-center'>
                <h1 style={{color:"#434343"}}>Technology</h1> 
                <p style={{fontSize:"22px", color:"#424242"}} className='pb-2'>Sleek, modern, and intuitive trading platforms</p> 
                <p style={{fontSize:"17px"}}>Check out our  <a className='text-decoration-none' href='arrow'>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> </p> 
            </div>
        </div>
     );
}

export default Techno;