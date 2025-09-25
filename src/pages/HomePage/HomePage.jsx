import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CompanyFacts from "./CompanyFacts";
import Customers from "./Customers";
import Faq from "./Faq";
import HeroSection from "./HeroSection";
import OurStrategy from "./OurStrategy";
import WhatWeDo from "./WhatWeDo";
import WhyChoose from "./WhyChoose";

function HomePage() {
    return ( 
        <>
          <Header></Header>
           <HeroSection/>
           <WhatWeDo/>
           <OurStrategy></OurStrategy>
           <WhyChoose></WhyChoose>
           <CompanyFacts></CompanyFacts>
           <Customers></Customers>
           <Faq></Faq>
           <Footer></Footer>
        </>
     );
}

export default HomePage;