import React from 'react'
import { Container } from 'react-bootstrap'
import motherBase from '../Main/images/support-mother-base.jpg'

const About = () => {
    return (
        <div>
            <div className="container-main">
                <div className="container-content">
                    <h4 id='h4-margin' >What we are about...</h4>
                    <Container id='container-about'>
                        <div className="ratio ratio-21x9">
                            <iframe  width="500" height="115" src="https://www.youtube.com/embed/fT6m_Hi-vNE" title="About UCBP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                    </div>
                    </Container>
                    <div className="container-subText">
                        <h5>We want to bring you all great content on our favorite game Metal Gear but we can't do it without your help. </h5>
                        <h5>Join us and become part of this growing force as we explore an discuss the epic game that has brought us great story telling and amazing memories.</h5>
                        <h5> We are UCBP Under the Card Board Box Podcast and MGS is our business</h5>
                    </div>
                </div>
                <div className="support-text-container">
                    <h6>Enter the link below to Join and support our Mother Base</h6>
                    <a id='text' className='support-text' href="https://www.patreon.com/UCBPodcast/membership" target='_blank'>DEPLOY HERE</a>
                </div>
                <div className="support-container">
                    <img id='img-size' src={motherBase} alt="Metal Gear Solid Delta Naked Snake"/>
                </div>
            </div>
        </div>
    )
}

export default About