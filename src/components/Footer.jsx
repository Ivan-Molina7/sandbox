import logo from '../assets/LogoSandBox--white.png'

function Footer() {
    return (
        <footer className="footer">

            <div className="footer__title max-width-section">
                <h2 className="footer__title-text">Join our community by using our services and grow your business.</h2>
                <a href="#" className="btn">Try It For Free</a>
            </div>

            <div className="separator max-width-section"></div>

            <div className="footer__content footer__content--mobile">

                <div className="wrapper">
                    <img src={logo} alt="" className="footer__logo" />

                    <ul className="footer__content-list">
                        <li className="footer__content-list-item">
                            <a href="#" className="footer__content-list-item-link">About Us</a>
                        </li>
                        <li className="footer__content-list-item">
                            <a href="#" className="footer__content-list-item-link">Our Story</a>
                        </li>
                        <li className="footer__content-list-item">
                            <a href="#" className="footer__content-list-item-link">Projects</a>
                        </li>
                        <li className="footer__content-list-item">
                            <a href="#" className="footer__content-list-item-link">Terms of Use</a>
                        </li>
                        <li className="footer__content-list-item">
                            <a href="#" className="footer__content-list-item-link">Privacy Policy</a>
                        </li>
                    </ul>

                    <div className="footer__social-media">
                        <a href="https://www.facebook.com" target="_blank" className="footer__social-media-link">
                            {/* <img src="" alt="" className="footer__social-media-link-image" /> */}
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="footer__social-media-link">
                            {/* <img src="" alt="" className="footer__social-media-link-image" /> */}
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="footer__social-media-link" />
                    </div>
                </div>

                <div className="footer__contact">
                    <h3 className="footer__contact-title">Get in Touch</h3>
                    <div className="footer__contact-content">
                        
                        <p className="footer__contact-text">
                        Moonshine St. 14/05 <br />
                        Light City, London, <br />
                        United Kingdom</p>

                        <a href="mailto:6u3lN@example.com" className="footer__contact-content-link">info@email.com</a>
                    </div>
                </div>

                <div className="footer__email">
                    <h2 className="footer__email-title">Subscribe to our newsletter to get our news & deals delivered to you.</h2>

                    <form action="" className="footer__email-form">
                        <input type="email" placeholder="Email Address" className="footer__email-form-input" />
                        <button type="submit" className="btn btn--email">Join</button>
                    </form>

                </div>

        
                    <p className="footer__copyright">© 2023 Sandbox. All rights reserved.</p>
      
            </div>



            <div className="footer__content footer__content--desktop max-width-section">
                <div className="wrapper">
                      <img src={logo} alt="" className="footer__logo" />

                    <p className="footer__copyright-text">Copyright &copy; 2023 All Rights Reserved</p>

                    <div className="footer__social-media">
                        <a href="https://www.facebook.com" target="_blank" className="footer__social-media-link">
                            {/* <img src="" alt="" className="footer__social-media-link-image" /> */}
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="footer__social-media-link">
                            {/* <img src="" alt="" className="footer__social-media-link-image" /> */}
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="footer__social-media-link" />
                    </div>
                </div>

                      <div className="footer__contact">
                    <h3 className="footer__contact-title">Get in Touch</h3>
                    <div className="footer__contact-content">
                        
                        <p className="footer__contact-text">
                        Moonshine St. 14/05 <br />
                        Light City, London, <br />
                        United Kingdom</p>

                        <a href="mailto:6u3lN@example.com" className="footer__contact-content-link">info@email.com</a>
                    </div>
                </div>


                <ul className="footer__content-list">
                    <h4 className="footer__contact-title">Learn More</h4>

                    <li className="footer__content-list-item">
                        <a href="#" className="footer__content-list-item-link">Home</a>
                    </li>
                    <li className="footer__content-list-item">
                        <a href="#" className="footer__content-list-item-link">About</a>
                    </li>
                    <li className="footer__content-list-item">
                        <a href="#" className="footer__content-list-item-link">Pricing</a>
                    </li>
                    <li className="footer__content-list-item">
                        <a href="#" className="footer__content-list-item-link">Blog</a>
                    </li>
                    <li className="footer__content-list-item">
                        <a href="#" className="footer__content-list-item-link">Contact</a>
                    </li>
                </ul>

         <div className="footer__email">
                    <h2 className="footer__contact-title">Our Newsletter</h2>

                    <p>Subscribe to our newsletter to get our
news & deals delivered to you.</p>

                    <form action="" className="footer__email-form">
                        <input type="email" placeholder="Email Address" className="footer__email-form-input" />
                        <button type="submit" className="btn btn--email">Join</button>
                    </form>

                </div>
            </div>
        </footer>
    );
}

export default Footer;