import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export const CustomerCard = ({RatingStar, description, name, job, image}) => {
  return (

                        <div className="customers__card">
                            <Stack spacing={1}>
             
                                <Rating  defaultValue={RatingStar} precision={0.5} readOnly />
                            </Stack>
                            <div className="customers__card-content">
                                <p className="customers__description">{description}</p>

                                <div className="customers__profile">
                                    <img src={image} alt="" className="customers__profile-image" />
                                    <div className="customers__profile-content">
                                        <h3 className="customers__profile-name">{name}</h3>
                                        <p className="customers__profile-job">{job}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export const FactsCard = ({image, name, job, description, facebook, dribble, twitter}) => {
  return (
       <div className="company-facts__card">
                        <figure className="company-facts__card-thumbnail">
                            <img src={image} alt="" className="company-facts__card-image" />
                        </figure>
                        <div className="company-facts__card-content">
                            <h3 className="company-facts__card-name">{name}</h3>
                            <p className="company-facts__card-job">{job}</p>
                            <p className='company-facts__card-text'>{description}</p>
                            <div className="company-facts__card-socials">
                                <a href="#"><img src={twitter} alt="Twitter" /></a>
                                <a href="#"><img src={dribble} alt="Dribble" /></a>
                                <a href="#"><img src={facebook} alt="Facebook" /></a>
                            </div>
                        </div>
                    </div>
  )
}