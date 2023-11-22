import React from 'react'
import { Container } from 'react-bootstrap'

const UCBPepisodes = () => {


    return (
        <div className='main-episode-container'>
            <h3>Here are the most recent 10 episodes</h3>
            <div className="ucbp-container">
                <hr />
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed/episodes/U-C-B-P-Episode-64-E3-Predictions-2021-e12al7i" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed/episodes/U-C-B-P-Episode-63-Gaming-Fatigue-etrr82" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed/episodes/U-C-B-P-Episode-62-The-Twin-Lies-espc31" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed/episodes/U-C-B-P-Episode-61-New-MGS-V-Update-eqe3o0" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed/episodes/U-C-B-P-Episode-60-epqek3" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <Container>
                    <iframe src="https://podcasters.spotify.com/pod/show/under-the-cardboard-box-a/embed/episodes/U-C-B-P-Episode-59-Bluepoint-Games---Metal-Gear-ep6qvu" height="102px" width="700px" frameborder="0" scrolling="no"></iframe>
                </Container>
                <hr />
            </div>
        </div>
    )
}

export default UCBPepisodes