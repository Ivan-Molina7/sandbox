import vectorWCU from '../../assets/home/vectores/WCU.png'
import arrowBottom from '../../assets/home/faq/ArrowBottom.png'
import img1 from '../../assets/home/whyChoose/Image-1.png'
import { FaqItem } from '../../components/FaqItem';
import { useState } from 'react';


function WhyChoose() {

        
            const [openFaq, setOpenFaq] = useState(null);
        
            const toggleFaq = (id) => {
                setOpenFaq(prev => (prev === id ? null : id));
            };
        

    return (
        <section className="why-choose " id='chooseUs'>
            <div className="wrapper max-width-section">


                <div className="wrapper--2">
                       <div className="why-choose__titles">
                    <p className="why-choose__tag subtitle-tag">WHY CHOOSE US? </p>
                    <h2 className="why-choose__title title-section">We bring solutions to make
                        life easier.</h2>
                </div>

                    <ul className="faq-section__list ">

                        <FaqItem
                        id="faq1"
                        isOpen={openFaq === 'faq1'}
                        onToggle={() => toggleFaq('faq1')}
                        type="faq"
                        pregunta="Are there any discounts for people in need?"

                        respuesta="Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.
                                Cras mattis consectetur purus sit amet fermentum. Praesent
                                commodo cursus magna, vel."
                    />
                    <FaqItem
                        id="faq2"
                        isOpen={openFaq === 'faq2'}
                        onToggle={() => toggleFaq('faq2')}
                            type="faq"    
                        pregunta="Are there any discounts for people in need?"

                        respuesta="Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.
                                Cras mattis consectetur purus sit amet fermentum. Praesent
                                commodo cursus magna, vel."
                    />
                    <FaqItem
                        id="faq3"
                        isOpen={openFaq === 'faq3'}
                        onToggle={() => toggleFaq('faq3')}
    type="faq"
                        pregunta="Are there any discounts for people in need?"

                        respuesta="Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.
                                Cras mattis consectetur purus sit amet fermentum. Praesent
                                commodo cursus magna, vel."
                    />
                    <FaqItem
                        id="faq4"
                        isOpen={openFaq === 'faq4'}
                        onToggle={() => toggleFaq('faq4')}
    type="faq"
                        pregunta="Are there any discounts for people in need?"

                        respuesta="Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.
                                Cras mattis consectetur purus sit amet fermentum. Praesent
                                commodo cursus magna, vel."
                    />


                    </ul>

                </div>

                
                        <figure className="why-choose__thumbnail">
                        <img src={img1} alt="" />
                    </figure>
          
            </div>

            <img src={vectorWCU} className="why-choose__wave overlay-wave__image " alt="" />

        </section>
    );
}

export default WhyChoose;