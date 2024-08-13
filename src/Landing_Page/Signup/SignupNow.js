import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

function SignupNow() {
    return ( 
        <>
            <Navbar/>
            <div className='container pt-5'>
                <div className='row pt-5'>
                    <div className='col'>
                        <img src='images\signup.png' alt='signup'/>
                    </div>
                    <div className='col pt-5 ps-5'>
                       <h2>Signup now</h2> 
                       <p className='text-body-secondary'>Or track your existing application.</p> 
                       <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">+91</span>
                            <input type="text" className="form-control me-5" placeholder="Mobile Number" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div>
                            <p className='.fs-6 text text-body-tertiary' style={{fontSize:"12px"}}>You will receive an OTP on your number</p>
                            <button className="btn btn-primary mb-3">Continue</button>
                            <p className='text-body-tertiary' style={{fontSize:"12px"}}>Want to open an NRI account?</p>
                        </div>
                    </div>
                    <p className='text-body-tertiary text-center pt-5' style={{fontSize:"12px"}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. <br/>Please visit this article to know <a href='/' style={{textDecoration:"none"}}>more.</a></p>
                    <p className='text-body-tertiary text-center' style={{fontSize:"12px"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help,<a href='/' style={{textDecoration:"none"}}> click here.</a></p>
                </div>
            </div>
            <Footer/>
        </>
     );
}

export default SignupNow;