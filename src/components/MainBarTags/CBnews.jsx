import React from 'react'
import { Container } from 'react-bootstrap'
import delta from "../Main/images/Metal Gear Solid Delta.jpg"

const CBnews = () => {
    return (
        <div>
            <div className="news-container">
                <h3 id='h3-margin'>C-B News</h3>
                <hr />
                <div className="top-header">
                    <h3>The moment we have all been waiting for...</h3>
                    <img id='img-size' src={delta} alt="Metal Gear Solid Delta Naked Snake"/>
                </div>
                <div className="connect-line"></div>
                    <Container>
                        <div className="ratio ratio-21x9">
                            <h3 id='h4-margin'>Our reaction</h3>
                            <iframe id='delta-reaction' width="500" height="115" src="https://www.youtube.com/embed/OXR2yuzN09w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </Container>
            </div>
        </div>
    )
}

export default CBnews