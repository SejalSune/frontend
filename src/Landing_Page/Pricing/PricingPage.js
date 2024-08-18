import React from 'react'
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import OpenAccount from '../OpenAccount.js';
import PricingSecond from './PricingSecond.js';
import Price from './Price.js';
import Calculator from './Calculator.js';

function PricingPage() {
    return ( 
        <>
            <Navbar/>
            <Price/>
            <PricingSecond/>
            <OpenAccount/>
            <Calculator/>
            <Footer/>
        </>
     );
}

export default PricingPage;