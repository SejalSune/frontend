import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Description from './Description';
import Ceo from './Ceo';

function AboutPage() {
    return (
        <>
            <Navbar/>
            <Description/>
            <Ceo/>
            <Footer/>
        </>
        
     );
}

export default AboutPage;