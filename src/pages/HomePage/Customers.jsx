import profile1 from '../../assets/home/companyFacts/profile1.png'
import profile2 from '../../assets/home/companyFacts/profile-02.png'
import profile3 from '../../assets/home/companyFacts/profile-03.png'
import profile4 from '../../assets/home/companyFacts/profile-04.png'
import profile5 from '../../assets/home/companyFacts/profile-05.png'
import profile6 from '../../assets/home/companyFacts/profile-06.png'


import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { CustomerCard } from '../../components/CustomerCard';


function Customers() {



    return (
        <section className="customers pb-responsive ">

            <div className="wrapper max-width-section">
                <div className="customers__titles">
                    <p className="customers__tag subtitle-tag">HAPPY CUSTOMERS</p>
                    <h2 className="customers__title title-section">Don't take our word for it. See what <br /> customers are saying about us.</h2>
                </div>




                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 360: 1, 767: 2, 1200: 3 }}
                    className="customers__cards"
                >
                    <Masonry gutter="16px">

                        <CustomerCard
                            RatingStar={4}
                            description=" “Vivamus sagittis lacus vel augue laoreet
                            rutrum faucibus dolor auctor. Vestibulum
                            id ligula porta felis euismod semper. Cras
                            justo odio dapibus facilisis sociis natoque
                            penatibus.”"
                            name="Coriss Ambadye"
                            job="Financial Analyst"
                            image={profile1}
                        />

                        <CustomerCard
                            RatingStar={5}
                            description="“Fusce dapibus, tellus ac cursus tortor
                                mauris condimentum fermentum massa
                                justo sit amet. Vivamus sagittis lacus vel
                                augue laoreet rutrum faucibus dolor
                                auctor. Cras mattis consectetur purus sit
                                amet fermentum. Aenean lacinia
                                bibendum nulla sed.”        "
                            name="Cory Zamora"
                            job="Marketing Specialist"
                            image={profile2}
                        />

                        <CustomerCard
                            RatingStar={4.5}
                            description=" “Curabitur blandit tempus porttitor.
                                Vivamus sagittis lacus vel augue laoreet
                                rutrum faucibus dolor auctor. Nullam
                                quis risus eget porta ac consectetur
                                vestibulum. Donec sed odio dui
                                consectetur adipiscing elit.”"
                            name="Nikolas Brooten"
                            job="Sales Manager"
                            image={profile3}
                        />

                        <CustomerCard
                            RatingStar={3.5}
                            description=" “Etiam adipiscing tincidunt elit convallis
                                felis suscipit ut. Phasellus rhoncus
                                tincidunt auctor. Nullam eu sagittis
                                mauris. Donec non dolor ac elit aliquam
                                tincidunt at at sapien. Aenean tortor
                                libero condimentum ac laoreet vitae.”"
                            name="Rachel Curley"
                            job="Financial Analyst"
                            image={profile4}
                        />

                        <CustomerCard
                            RatingStar={4}
                            description=" ““Donec id elit non mi porta gravida at
                                eget metus. Nulla vitae elit libero, a
                                pharetra augue. Cum sociis natoque
                                penatibus et magnis dis parturient
                                montes, nascetur ridiculus mus.”"
                            name="Laura Widerski"
                            job="Sales Specialist"
                            image={profile5}
                        />

                        <CustomerCard
                            RatingStar={5}
                            description=" “Maecenas sed diam eget risus varius
                            blandit sit amet non magna. Cum sociis
                            natoque penatibus magnis dis montes,
                            nascetur ridiculus mus. Donec sed odio
                            dui. Nulla vitae elit libero.”"
                            name="Jackie Sanders"
                            job="Investment Planner"
                            image={profile6}
                        />



                    </Masonry>
                </ResponsiveMasonry>

            </div>



        </section>
    );
}

export default Customers; 