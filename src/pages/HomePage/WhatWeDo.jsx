import img1 from "../../assets/home/whatWeDo/wwd-1.png";
import img2 from "../../assets/home/whatWeDo/wwd-2.png";
import img3 from "../../assets/home/whatWeDo/wwd-3.png";



function WhatWeDo() {
    return (
        <section className="what-we-do pb-responsive" id="whatwedo">

            <div className="what-we-do__titles">
                <p className="what-we-do__tag subtitle-tag">WHAT WE DO?</p>
                <h2 className="what-we-do__title title-section">The service we offer is specifically <br /> designed to meet your needs.</h2>
            </div>

            <div className="what-we-do__cards max-width-section">

                <div className="what-we-do__card">
                    <figure className="what-we-do__card-thumbnail">
                        <img src={img2} alt="" className="what-we-do__card-image" />
                    </figure>
                    <div className="what-we-do__card-content">
                        <h3 className="what-we-do__card-title">Web Design</h3>
                        <p className="what-we-do__card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  <a href="#" className="what-we-do__card-link">Learn More</a>
                    </div>
                </div>

                <div className="what-we-do__card">
                    <figure className="what-we-do__card-thumbnail">
                        <img  src={img3} alt="" className="what-we-do__card-image" />
                    </figure>
                    <div className="what-we-do__card-content">
                        <h3 className="what-we-do__card-title">Graphic Design</h3>
                        <p className="what-we-do__card-text">Maecenas faucibus mollis interdum.
                            Vivamus sagittis lacus vel augue laoreet.
                            Sed posuere consectetur.</p>
                  <a href="#" className="what-we-do__card-link">Learn More</a>
                    </div>
                </div>

                <div className="what-we-do__card">
                    <figure className="what-we-do__card-thumbnail">
                        <img  src={img1}  alt="" className="what-we-do__card-image" />
                    </figure>
                    <div className="what-we-do__card-content">
                        <h3 className="what-we-do__card-title">3D Animation</h3>
                        <p className="what-we-do__card-text">Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Praesent commodo
                            cursus magna scelerisque.</p>
                        <a href="#" className="what-we-do__card-link">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;