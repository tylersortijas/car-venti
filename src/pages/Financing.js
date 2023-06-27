import React from 'react'

import Navbar from '../components/Navbar';
import FinanceHero from "../components/finance/FinanceHero";
import ChooseCarventi from "../components/finance/ChooseCarventi";
import ReducePayment from "../components/finance/ReducePayment";
import CustomCard from "../components/finance/CustomCard";
import FinanceExperience from "../components/finance/FinanceExperience";
import FinanceTestimonial from "../components/finance/FinanceTestimonial";
import FinanceFaq from "../components/finance/FinanceFaq";
import PrequalifyCard from "../components/finance/PrequalifyCard";
import Footer from '../components/Footer';

function Financing() {
    return (
        <main>
            <Navbar />
            <FinanceHero />
            <ChooseCarventi />
            <ReducePayment />
            <CustomCard />
            <FinanceExperience />
            <FinanceTestimonial />
            <PrequalifyCard />
            <Footer />
        </main>
    )
}

export default Financing