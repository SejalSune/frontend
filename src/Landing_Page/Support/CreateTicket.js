import React from 'react'

function Ticket() {
    return ( 
        <div style={{backgroundColor:"#387fd1", paddingLeft:"180px", paddingRight:"120px", height:"430px"}} className='text-white'>
            <div className='row fs-5 pt-5 pb-5'>
                <div className='col'>Support Portal</div>
                <div className='col ps-5 fs-5' style={{textDecoration:"underline"}}>Track Ticket</div>
            </div>
            <div className='row fs-4'>
                <div className='col'>
                    <p>Search for an answer or browse help topics to create a ticket</p>
                    <div class="input-group mb-3 pt-3">
                        <input type="text" class="form-control" placeholder="Eg: how do i activate F&O, why is my order getting rejected..." aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className='row fs-5 pt-3'>
                        <div className='col' style={{textDecoration:"underline"}}>Track account opening</div>
                        <div className='col' style={{textDecoration:"underline"}}>Track segment activation</div>
                        <div className='col' style={{textDecoration:"underline"}}>Intraday margins</div>
                        <div className='col' style={{textDecoration:"underline"}}> Kite user manual</div>
                    </div>
                </div>
                <div className='col fs-5 ps-5'>
                    <p>Featured</p>
                    <ol>
                        <li className='pb-3'>Surveillance measure on scrips - August 2024</li>
                        <li>Latest Intraday leverages and Square-off timings</li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Ticket;