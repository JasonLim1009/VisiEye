import React from 'react'
import styled from 'styled-components'
import GIF from '../../assets/HomeVideo.mp4'
import VisiEye01 from '../../assets/VisiEye_front.png';

const VideoContainer = styled.div`
width: 100%;

video {
    width: 100%;
    height: auto;
}

img {
  width: 100%;
  height: auto;
 }

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        {/* <video src={GIF} type='video/mp4' autoPlay muted loop /> */}
        <img src={VisiEye01} alt='NFT' />
    </VideoContainer>
  )
}

export default CoverVideo