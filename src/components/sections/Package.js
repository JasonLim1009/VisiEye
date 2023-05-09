import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/P1.png';
import img2 from '../../assets/P2.png';
import img3 from '../../assets/VisiEye_03.png';

import ConfettiComponent from './Confetti';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #9FC9B3;
${'' /* background-color: ${props => props.theme.body}; */}
position: relative;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};
}
`

const Container = styled.div`
width: 70%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index: 5;
backdrop-filter: blur(4px);
border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3s ease;
background-color: #fff;

&:hover{
  img {
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em) {
  width: 70vw;
}
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: #444654;
border: 1px solid ${props => props.theme.text};
padding: 1rem;
border-radius: 20px;
cursor: pointer;

img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Positon = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight: 500;
text-decoration: line-through;
text-decoration-color: red;
`

const Pomosi = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight: 900;
`

const Kotak = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight: 500;
text-decoration: line-through;
`

const MemberComponent = ({ img, name = '', position = '', pomosi ='', kotak ='' }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Positon>{position}</Positon>
      <Pomosi>{pomosi}</Pomosi>
      <Kotak>{kotak}</Kotak>
    </Item>
  )
}

const Package = () => {
  return (
    <Section id='Pakej'>
    <ConfettiComponent />
      <Title>Produk</Title>
        <Container>
            <MemberComponent img={img1} name='Package A' position='Harga Asal RM 199' pomosi='Harga Pomosi RM 149' kotak='1 kotak' />
            <MemberComponent img={img2} name='Package B' position='Harga Asal RM 597' pomosi='Harga Pomosi RM 299' kotak='2 kotak Free 1 kotak' />
            {/* <MemberComponent img={img3} name='Package C' position='Harga Asal RM 1194' pomosi='Harga Pomosi RM 499'/> */}
        </Container>
    </Section>
  )
}

export default Package