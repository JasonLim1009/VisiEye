import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import img1 from '../../assets/Nfts/a1.png'
import img2 from '../../assets/Nfts/a2.png'
import img3 from '../../assets/Nfts/a3.png'
import img4 from '../../assets/Nfts/a4.png'
import img5 from '../../assets/Nfts/a5.png'
import img6 from '../../assets/Nfts/a6.png'
import img7 from '../../assets/Nfts/a7.png'
import img8 from '../../assets/Nfts/a8.png'

import img9 from '../../assets/Nfts/b1.png'
import img10 from '../../assets/Nfts/b2.png'
import img11 from '../../assets/Nfts/b3.png'
import img12 from '../../assets/Nfts/b4.png'
import img13 from '../../assets/Nfts/b5.png'
import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child {
  animation-duration: 35s;

  @media (max-width: 30em) {
    animation-duration: 10s;
  }
}
&>*:last-child {
  animation-duration: 25s;

  @media (max-width: 30em) {
    animation-duration: 10s;
  }
}
`

const move = keyframes`
0% { transform: translateX(100%) };
100% { transform: translateX(-100%) };
`

const Row = styled.div`
${'' /* background-color: lightblue; */}
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};

${'' /* div {
  width: 5rem;
  height: 5rem;
  margin: 2rem;
  background-color: yellow;
} */}
`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};
border-radius: 20px;
cursor: pointer;

@media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

img {
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: #A37F72;
${'' /* background-color: ${props => props.theme.text}; */}
border: 2px solid ${props => `rgba{${props.theme.bodyRgba}, 0.5}`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span {
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img {
  width: 1rem;
  height: auto;
}
`

const NftItem = ({ img, number = 0, price = 0, passRef }) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return (
    <ImgContainer onMouseOver={e => pause(e) } onMouseOut={e => play(e) }>
      <img src={img} alt='The Weirdos' />
      <Details>
        <div>
          <span>Item :</span> <br/>
          <h1># {number}</h1>
        </div>
        {/* <div>
          <span>Certificate</span>
          <Price>
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div> */}
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id='showcase'>
      <Row direction='none' ref={Row1Ref}>
        <NftItem img={img1} number={"Digestive enzymes"} passRef={Row1Ref} />
        <NftItem img={img2} number={"Yeast beta-glucan"} passRef={Row1Ref} />
        <NftItem img={img3} number={"Mixed Berries"} p passRef={Row1Ref} />
        <NftItem img={img4} number={"Astaxanthin Extract"} passRef={Row1Ref} />
        <NftItem img={img5} number={"Carotene"} passRef={Row1Ref} />
        <NftItem img={img6} number={"Pumpkin Seeds"} passRef={Row1Ref} />
        <NftItem img={img7} number={"Zeaxanthin"} passRef={Row1Ref} />
        <NftItem img={img8} number={"Lutein"} passRef={Row1Ref} />
       
      </Row>
      <Row direction='reverse' ref={Row2Ref}>
        <NftItem img={img9} number={"TOP 100 HONESTY AWARDS"} passRef={Row2Ref} />
        <NftItem img={img10} number={"ASIA HONESTY AWARD"} passRef={Row2Ref} />
        <NftItem img={img11} number={"PRODUCT AWARD"} passRef={Row2Ref} />
        <NftItem img={img12} number={"ENTERPRISE AWARD"} passRef={Row2Ref} />
        <NftItem img={img13} number={"ENTREPRENEUR AWARD"} passRef={Row2Ref} />

      </Row>
    </Section>
  )
}

export default Showcase