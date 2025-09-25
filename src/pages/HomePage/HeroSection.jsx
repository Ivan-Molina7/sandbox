import heroMain from '../../assets/home/Hero/HeroMain.png'

import brand2 from '../../assets/home/Hero/HeroBrands/brand-02.png'
import brand3 from '../../assets/home/Hero/HeroBrands/brand-03.png'
import brand4 from '../../assets/home/Hero/HeroBrands/brand-04.png'
import brand5 from '../../assets/home/Hero/HeroBrands/brand-05.png'
import brand6 from '../../assets/home/Hero/HeroBrands/brand-06.png'
import brand7 from '../../assets/home/Hero/HeroBrands/brand-07.png'
import brand8 from '../../assets/home/Hero/HeroBrands/brand-08.png'


import vectorHero from '../../assets/home/vectores/Hero.png'

function HeroSection() {
    return (
        <section className="hero" >

            <div className="wrapper max-width-section">

                <div className="wrapper--2">
                    <div className="hero__content">
                        <figure className="hero__thumbnail">
                            <img src={heroMain} alt="" className="hero__image" />
                        </figure>
                        <div className="hero__texts">
                            <h1 className="hero__title">A digital agency
                                specializing on <span>mobile design</span></h1>
                            <h3 className='hero__subtitle'>We are an award winning design agency that strongly believes in the power of creative ideas.</h3>

                            <a href="#" className='btn'>Get Started</a>
                        </div>
                    </div>

                    <p >Trusted by over 2K+ clients across the world</p>
                </div>

                <div className="hero__brands">
                    <img src={brand8} alt="" className="hero__brand" />
                    <img src={brand5} alt="" className="hero__brand" />
                    <img src={brand3} alt="" className="hero__brand" />
                    <img src={brand7} alt="" className="hero__brand" />
                    <img src={brand4} alt="" className="hero__brand" />
                    <img src={brand6} alt="" className="hero__brand" />
                    <img src={brand2} alt="" className="hero__brand" />
                </div>
            </div>


            <img src={vectorHero} className="hero__wave overlay-wave__image " alt="" />

        </section>
    );
}

export default HeroSection;