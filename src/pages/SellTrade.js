import React from 'react';
import Navbar from '../components/Navbar';
import Selling from '../components/Selling';
import CarValue from '../components/CarValue';
import Works from '../components/Works';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import TradeInCard from '../components/TradeInCard';
import Footer from '../components/Footer';


function SellTrade() {
    return (
        <main>
            <Navbar />
            <Selling />
            <CarValue />
            <Works />
            <Testimonials />
            <Faq />
            <TradeInCard />
            <Footer />
        </main>
    )
}

export default SellTrade