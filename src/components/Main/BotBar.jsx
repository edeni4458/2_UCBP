import instagram from '../Main/images/instagram.png'
import facebook from '../Main/images/fb-icon.png'
import twitter from '../Main/images/twitter.png'
import React from 'react'

const BotBar = () => {
    return (
        <div>
            <div className="bottom-bar">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid flex-row">
                        <div class="container-fluid flex-row ">
                            <div class="d-flex justify-content-evenly bd-highlight text-white">
                                <a class="nav-link active" aria-current="page" href="">Home</a>
                                <a class="nav-link" href="">About</a>
                                <a class="nav-link" href="">Connect</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
                <div className="social-mediaB">
                    <a href="https://twitter.com/UCBPodcast" target='_blank'><img className='codec-imageB' src={twitter} alt='Facebook Logo' /></a>
                    <a href="https://www.facebook.com/groups/UnderTheCardBoardBox/?fref=nf" target='_blank'><img className='codec-imageB' src={facebook} alt='Facebook Logo' /></a>
                    <a href="https://www.instagram.com/ucbpodcast/" target='_blank'><img className='codec-imageB' src={instagram} alt='Instagram Logo' /></a>
                </div>
            </div>
        </div>
    )
}

export default BotBar