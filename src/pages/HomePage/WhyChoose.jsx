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
  pregunta="Are there any discounts available for people in need?"
  respuesta="Yes, we offer special assistance programs and discounts. Please contact our customer support for more details."
/>
<FaqItem
  id="faq2"
  isOpen={openFaq === 'faq2'}
  onToggle={() => toggleFaq('faq2')}
  type="faq"
  pregunta="What payment methods do you accept?"
  respuesta="We accept credit and debit cards, PayPal, and bank transfers to ensure convenient and secure payments."
/>
<FaqItem
  id="faq3"
  isOpen={openFaq === 'faq3'}
  onToggle={() => toggleFaq('faq3')}
  type="faq"
  pregunta="How can I track the status of my order?"
  respuesta="Once your order is shipped, you'll receive a tracking number to monitor its progress in real time on our website."
/>
<FaqItem
  id="faq4"
  isOpen={openFaq === 'faq4'}
  onToggle={() => toggleFaq('faq4')}
  type="faq"
  pregunta="What is your return policy?"
  respuesta="You can request a return within 30 days of purchase, as long as the item is in its original unopened condition."
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