import React from 'react'

function Portal() {
    return ( 
        <div className='container '>
            <div className='row pb-5'>
                <p className='fs-3 pt-5 pb-3 ps-5 text-secondary-emphasis'>To create a ticket, select a relevant topic</p>
                <div className='col'>
                    <ul style={{listStyleType:"none"}}>
                        <li className='fs-4' style={{paddingBottom:"5px"}}><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Getting started</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Online</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Offline</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Charges</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Company, Partnership and HUF</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Non Resident Indian (NRI)</li>
                    </ul>
                </div>
                <div className='col'>
                    <ul style={{listStyleType:"none"}}>
                        <li className='fs-4' style={{paddingBottom:"5px"}}><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Login credentials</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Your Profile</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Account modification and segment addition</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>CMR & DP ID</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Nomination</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Transfer and conversion of shares</li>
                    </ul>
                </div>
                <div className='col'>
                    <ul style={{listStyleType:"none"}}>
                        <li className='fs-4' style={{paddingBottom:"5px"}}><i class="fa fa-signal" aria-hidden="true"></i> Trading and Markets</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Trading FAQs</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Kite</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Margins</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Product and order types</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Corporate actions</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Kite features</li>
                    </ul>
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col'>
                    <ul style={{listStyleType:"none"}}>
                        <li className='fs-4' style={{paddingBottom:"5px"}}> <i class="fa fa-envelope-o" aria-hidden="true"></i> Funds</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Fund withdrawal</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Adding funds</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Adding bank accounts</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>eMandates</li>
                    </ul>
                </div>
                <div className='col'>
                    <ul style={{listStyleType:"none"}}>
                        <li className='fs-4' style={{paddingBottom:"5px"}}><i class="fa fa-eercast" aria-hidden="true"></i> Console</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>IPO</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Portfolio</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Funds statement</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Profile</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Reports</li>
                        <li style={{paddingLeft:"30px",paddingBottom:"7px"}} className='text-primary'>Referral program</li>
                    </ul>
                </div>
                <div className='col'>
                    <ul style={{listStyleType:"none"}}>
                        <li className='fs-4' style={{paddingBottom:"5px"}}><i class="fa fa-dot-circle-o" aria-hidden="true"></i> Coin</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Understanding mutual funds and Coin</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Coin app</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Coin web</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>Transactions and reports</li>
                        <li style={{paddingLeft:"28px",paddingBottom:"7px"}} className='text-primary'>National Pension Scheme (NPS)</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Portal;