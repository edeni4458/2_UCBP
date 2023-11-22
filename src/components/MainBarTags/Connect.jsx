import podchaser from '../Main/images/podchaser.png'
import instagram from '../Main/images/instagram.png'
import google from '../Main/images/google-pods.png'
import facebook from '../Main/images/fb-icon.png'
import twitter from '../Main/images/twitter.png'
import youtube from '../Main/images/youtube.jpeg'
import spotify from '../Main/images/spotify.jpg'
import apple from '../Main/images/apple-vec.png'
import React, { useEffect, useState } from 'react'


const Connect = () => {
    // const [active, setActive] = useState("red")



    return (
        <div>
            <div className="main-connect">
                <div className="contact">
                    <h2>Contact</h2>
                    <h5>email</h5>
                    <a id='underline' href="mailto:underthecardboardbox@gmail.com">underthecardboardbox@gmail.com</a>
                </div>
                <div className="connect-container">
                    <h3>Follow us on</h3>
                    <div className="social-media">
                        <a href="https://twitter.com/UCBPodcast" target='_blank'><img className='codec-image' src={twitter} alt='Facebook Logo' /></a>
                        <a href="https://www.facebook.com/groups/UnderTheCardBoardBox/?fref=nf" target='_blank'><img className='codec-image' src={facebook} alt='Facebook Logo' /></a>
                        <a href="https://www.instagram.com/ucbpodcast/" target='_blank'><img className='codec-image' src={instagram} alt='Instagram Logo' /></a>
                    </div>
                </div>
                <div className="codec-container">
                <h3>Choose your codec frequencey below</h3>
                <div className="codec-links">
                <a href="https://www.youtube.com/@UnderTheCardboardBox" target='_blank'><img className='codec-image-U' src={youtube} alt="Spotify logo" /></a>
                <a href="https://open.spotify.com/show/2aIiRya7gIuVEQ2MnPi7iY" target='_blank'><img className='codec-image' src={spotify} alt="Spotify logo" /></a>
                <a href="https://www.podchaser.com/podcasts/under-the-cardboard-box-a-meta-69852" target='_blank'><img className='codec-image' src={podchaser} alt="Podchaser logo" /></a>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly91bmRlcnRoZWNhcmRib2FyZGJveC5wb2RvbWF0aWMuY29tL3JzczIueG1s" target='_blank'><img className='codec-image' src={google} alt="Google logo" /></a>
                <a href="https://podcasts.apple.com/us/podcast/under-the-cardboard-box-a-metal-gear-solid-podcast/id1059651069" target='_blank'><img id='apple-img' className='codec-image' src={apple} alt="Apple logo" /></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Connect