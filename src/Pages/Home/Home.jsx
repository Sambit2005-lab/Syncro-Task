import React from 'react';
import Navbar from '../../components/Navbar_1.jsx';
import Services from '../../components/Services.jsx';
import PricingPlans from '../../components/Pricing_plans.jsx';
import About_us from '../../components/About_us.jsx';
import FaqFooter from '../../components/faq_footer.jsx';

function Home() {
    return (
        <>

          <Navbar/>
            <Services/>
            <PricingPlans/>
            <About_us/>
            <FaqFooter/>




        </>
    );
}

export default Home;