import React from 'react'
import motherBase from '../Main/images/support-mother-base.jpg'


const AboutMore = () => {
    return (
        <div>
            <div className="mid-about-div">
                <div className="container-subText">
                    <h5>We want to bring you all the great content on our favorite game Metal Gear but we can't do it without your help. </h5>
                    <h5>Join us and become part of this growing force as we explore an discuss the epic game that has brought us great story telling and amazing memories.</h5>
                    <h5> We are UCBP, Under the Card Board Box Podcast and MGS is our business.</h5>
                </div>
                <div className="support-text-container">
                    <img id='img-size' src={motherBase} alt="Metal Gear Solid Delta Naked Snake" />
                    <h6>Enter the link below to join and support our Mother Base</h6>
                    <a id='text' className='support-text' href="https://www.patreon.com/UCBPodcast/membership" target='_blank' rel="noreferrer">DEPLOY HERE</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMore