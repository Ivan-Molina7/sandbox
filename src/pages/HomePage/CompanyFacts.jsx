import ComanyFacts from '../../assets/home/vectores/CompanyFacts.png'

import img1 from '../../assets/home/companyFacts/icon-01.png'
import img2 from '../../assets/home/companyFacts/icon-02.png'
import img3 from '../../assets/home/companyFacts/icon-03.png'

import sm1 from '../../assets/home/companyFacts/sm1.png'
import sm3 from '../../assets/home/companyFacts/sm2.png'
import sm2 from '../../assets/home/companyFacts/sm3.png'

import profile1 from '../../assets/home/companyFacts/profile1.png'
import profile2 from '../../assets/home/companyFacts/profile-02.png'
import profile3 from '../../assets/home/companyFacts/profile-03.png'
import profile4 from '../../assets/home/companyFacts/profile-04.png'
import profile5 from '../../assets/home/companyFacts/profile-05.png'
import profile6 from '../../assets/home/companyFacts/profile-06.png'


import left from '../../assets/home/lastProjects/arrow1.png'
import right from '../../assets/home/lastProjects/arrow2.png'

import { projects } from '../../utils/projectsData'
import { useState } from 'react'
import { FactsCard } from '../../components/CustomerCard'


function CompanyFacts() {

    const [activeIndex, setActiveIndex] = useState(0);
     const total = projects.length;
     
    const prev = () => {
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const next = () => {
        setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };


  const secondIndex = (activeIndex + 1) % total;


    return (
        <section className="company-facts ">

            <div className="wrapper--facts max-width-section">
                <div className="wrapper">
                    <div className="company-facts__content">

                        <div className="company-facts__titles">
                            <p className="company-facts__tag subtitle-tag">COMPANY FACTS</p>
                            <h2 className="company-facts__title title-section">We are proud of our design team</h2>
                        </div>

                        <p>Just sit back and relax while we take care of your business needs for you.</p>
                    </div>
                    <div className="company-facts__items">
                        <div className="company-facts__item">
                            <figure className="company-facts__item-thumbnail">
                                <img src={img1} alt="" className="company-facts__item-image" />
                            </figure>
                            <div className="company-facts__item-content">
                                <h2 className="company-facts__item-title">50K+</h2>
                                <p className="company-facts__item-text">Happy Customers</p>
                            </div>
                        </div>

                        <div className="company-facts__item">
                            <figure className="company-facts__item-thumbnail">
                                <img src={img2} alt="" className="company-facts__item-image" />
                            </figure>
                            <div className="company-facts__item-content">
                                <h2 className="company-facts__item-title">1000+</h2>
                                <p className="company-facts__item-text">Completed Projects</p>
                            </div>
                        </div>

                        <div className="company-facts__item">
                            <figure className="company-facts__item-thumbnail">
                                <img src={img3} alt="" className="company-facts__item-image" />
                            </figure>
                            <div className="company-facts__item-content">
                                <h2 className="company-facts__item-title">20+</h2>
                                <p className="company-facts__item-text">Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company-facts__cards">

                    <FactsCard
                    
                        image={profile1}
                        name={"Coriss Ambady"}
                        job={"Financial Analyst"}
                        description={"Fermentum massa justo sit amet risus morbi leo."}
                        twitter={sm1}
                       twitterLink={"https://www.facebook.com/"}
                        dribble={sm2}
                        dribbleLink={"https://dribbble.com/"}
                        facebook={sm3}
                        facebookLink={"https://www.instagram.com/"}
                    />

                    <FactsCard
                        image={profile5}
                        name={"Laura Widerski"}
                        job={"Sales Specialist"}
                        description={"Fermentum massa justo sit amet risus morbi leo."}
                        twitter={sm1}
                        twitterLink={"https://www.facebook.com/"}
                        dribble={sm2}
                        dribbleLink={"https://dribbble.com/"}
                        facebook={sm3}
                        facebookLink={"https://www.instagram.com/"}
                    />

                    <FactsCard
                        image={profile2}
                        name={"Cory Zamora"}
                        job={"Marketing Specialist"}
                        description={"Fermentum massa justo sit amet risus morbi leo."}
                        twitter={sm1}
                        twitterLink={"https://www.facebook.com/"}
                        dribble={sm2}
                        dribbleLink={"https://dribbble.com/"}
                        facebook={sm3}
                        facebookLink={"https://www.instagram.com/"}
                    />

                    <FactsCard
                        image={profile3}
                        name={"Nikolas Brooten"}
                        job={"Sales Manager"}
                        description={"Fermentum massa justo sit amet risus morbi leo."}
                        twitter={sm1}
                        twitterLink={"https://www.facebook.com/"}
                        dribble={sm2}
                        dribbleLink={"https://dribbble.com/"}
                        facebook={sm3}
                        facebookLink={"https://www.instagram.com/"}
                    />



       
                </div>
            </div>

            <div className="projects max-width-section">
                <div className="projects__titles">
                    <p className="projects__tag subtitle-tag">LATEST PROJECTS</p>
                    <h2 className="projects__title title-section">Check out some of our awesome projects with creative ideas and great design.</h2>
                </div>

                <div className="projects__slider">
                    {[activeIndex, secondIndex].map((index) => (
                        <div
                            key={index}
                            className={`projects__card ${index === activeIndex || index === secondIndex ? 'active' : ''}`}
                        >
                            <figure className="projects__card-thumbnail">
                                <img src={projects[index].image} alt={projects[index].title} className="projects__card-image" />
                            </figure>
                            <div className="projects__card-content">
                                <h3 className="projects__card-name">{projects[index].title}</h3>
                                <p className="projects__card-description">{projects[index].description}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>


                <div className="projects__arrows">
                    <a className='btn' onClick={prev}>  <img src={left} className="projects__card-image" /></a>
                    <a className='btn' onClick={next}>  <img src={right} className="projects__card-image" /></a>
                </div>

            </div>

            <img src={ComanyFacts} className=" overlay-wave__image " alt="" />

        </section>
    );
}

export default CompanyFacts;