import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Ticket from './CreateTicket';
import Portal from './SupportPortal';

function SupportPage() {
    return ( 
        <>
            <Navbar/>
            <Ticket/>
            <Portal/>
            <Footer/>
        </>
     );
}

export default SupportPage;