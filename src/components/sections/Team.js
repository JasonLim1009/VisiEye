import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/Nfts/t1.png';
import img2 from '../../assets/Nfts/t2.png';
import img3 from '../../assets/Nfts/t3.png';
import img4 from '../../assets/Nfts/t4.png';
import img5 from '../../assets/Nfts/t5.png';
import img6 from '../../assets/Nfts/t6.png';
import img7 from '../../assets/Nfts/t7.png';
import img8 from '../../assets/Nfts/t8.png';
import img9 from '../../assets/Nfts/t9.png';
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
background-color: ${props => props.theme.carouselColor};
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
font-weight: 400;
`

const MemberComponent = ({ img, name = '', position = '' }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Positon>{position}</Positon>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id='team'>
    <ConfettiComponent />
      <Title>Testimoni</Title>
      <Container>
        <MemberComponent img={img1} name='SITI AISHAH BT HJ IBRAHIM (57thn)' position='Selaput ,baru makan sekotak visiEYE sudah berkesan bagus!' />
        <MemberComponent img={img2} name='Sudiman salatulla (62thn)' position='Katarak 2thn ,makan produk visiEYE minggu ke 4 sudah kurang 80% Katarak.' />
        <MemberComponent img={img3} name='Shariff MD Zaini(47thn)' position='Glaucoma baru makan produk visiEYE 10 sachet sudah berkesan bagus!' />
        <MemberComponent img={img4} name='Rariani bt Amar (38thn)' position='Rabun & Silau ,selepas makan produk visiEYE 1 set 4 kotak selesai masalah matanya.' />
        <MemberComponent img={img5} name='Muh Nazri (45thn)' position='Selaput ,makan produk visiEYE hari ke 4 sudah dapat berkesan.' />
        <MemberComponent img={img6} name='Indai Nanang (52thn)' position='Rabun Dekat  pelanggan ini baru makan 6 hari shj sdh berkesan bgs👍' />
        <MemberComponent img={img7} name='Zuhaii suddin (41thn)' position='Cegah Rabun Jauh dengan Produk Berkualiti Tinggi visiEYE!' />
        <MemberComponent img={img8} name='Halijah Asri (10thn)' position='Memang berkesan bagus,baru sekotak Silau sudah hilang💪' />
        <MemberComponent img={img9} name='Mohd bin Arfin (56thn)' position='VisiEYE - Solusi Tepat untuk Floaters' />
      </Container>
    </Section>
  )
}

export default Team