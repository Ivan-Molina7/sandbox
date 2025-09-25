import FaqVector from '../../assets/home/vectores/faq.png'
import arrowBottom from '../../assets/home/faq/ArrowBottom.png'
import { useState } from 'react';
import { FaqItem } from '../../components/FaqItem';

function Faq() {

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(prev => (prev === id ? null : id));
    };



    return (
        <section className="faq-section" id='faq'>
            <div className="wrapper--faq max-width-section">
                <div className="wrapper">
                    <div className="faq-section__titles">
                        <p className="projects__tag subtitle-tag">FAQ</p>
                        <h2 className="projects__title title-section">If you don't see an answer to your question, you can send us
                            an email from our contact form.</h2>
                    </div>

                    <p className="faq-section__text">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
                    </p>

                    <a href="#" className="btn">All FAQ</a>
                </div>

                <ul className="faq-section__list">
                    <FaqItem
                        id="faq1"
                        isOpen={openFaq === 'faq1'}
                        onToggle={() => toggleFaq('faq1')}

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

                        pregunta="Are there any discounts for people in need?"

                        respuesta="Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.
                                Cras mattis consectetur purus sit amet fermentum. Praesent
                                commodo cursus magna, vel."
                    />
                </ul>
            </div>

            <img src={FaqVector} className=" overlay-wave__image " alt="" />
        </section>
    );
}

export default Faq;