import instagram from '../Main/images/instagram.png'
import facebook from '../Main/images/fb-icon.png'
import twitter from '../Main/images/twitter.png'
import { Link } from 'react-router-dom';
import React from 'react'

const BotBar = () => {
    return (
        <div>
            <div className="bottom-bar">
                <nav class="">
                    <div class="">
                        <div class="">
                            <div class="bottom-nav">
                                <a><Link reloadDocument className='nav-link' to={"/"}>Home</Link></a>
                                <a><Link reloadDocument to={"/about"} className='nav-link'>About</Link></a>
                                <a><Link reloadDocument to={"/UCBP"} className='nav-link'>Episodes</Link></a>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
                <div className="social-mediaB">
                    <a href="https://twitter.com/UCBPodcast" target='_blank'><img className='bot-social-logo' src={twitter} alt='Facebook Logo' /></a>
                    <a href="https://www.facebook.com/groups/UnderTheCardBoardBox/?fref=nf" target='_blank'><img className='bot-social-logo' src={facebook} alt='Facebook Logo' /></a>
                    <a href="https://www.instagram.com/ucbpodcast/" target='_blank'><img className='bot-social-logo' src={instagram} alt='Instagram Logo' /></a>
                </div>
            </div>
        </div>
    )
}

export default BotBar