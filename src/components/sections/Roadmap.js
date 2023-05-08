import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from './DrawSvg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img1 from '../../assets/Nfts/d1.png'
import img2 from '../../assets/Nfts/d2.png'
import img3 from '../../assets/Nfts/d3.png'
import img4 from '../../assets/Nfts/d4.png'
import img5 from '../../assets/Nfts/d5.png'
import img6 from '../../assets/Nfts/d6.png'

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
height: 530vh;
background-color: #9FC9B3;
// background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
}
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${'' /* background-color: lightblue; */}

@media (max-width: 48em) {
  width: 90%;
}

&>*: nth-of-type(2n +1) {
  justify-content: start;
  @media (max-width: 48em) {
    justify-content: center;
}

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;

    @media (max-width: 48em) {
      border-radius: 0 50px 0 50px;
      text-align: left;
      p {
        border-radius: 0 40px 0 40px;
      }
}
  }
  p {
    border-radius: 40px 0 40px 0;
  }

}
&>*:nth-of-type(2n) {
  justify-content: end;
  @media (max-width: 48em) {
    justify-content: center;
}
  div {
    border-radius: 0 50px 0 50px;
    text-align: left;
  }
  p {
    border-radius: 0 40px 0 40px;
  }

}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
background-color: #9FC9B3;

@media (max-width: 48em) {
  justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em) {
  width: 70%;
}
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
}
`;

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};
font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxs};
}
`;

const ImageContainer = styled.div`
  margin-right: 1rem;

  img {
  width: 100%;
  height: auto;
 }
`;


const RoadMapItem = ({ imageSrc, title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <ImageContainer>
            <img src={imageSrc} alt={title} width='50' height='50' />
          </ImageContainer>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    // console.log(revealRefs);
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {

      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        }, {
        y: '-30%',
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=200px',
          end: 'bottom center',
          scrub: true,
          // markers: true,
        }
      }
      )
    })
    return () => {

    };
  }, [])

  return (
    <Section id='roadmap'>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem imageSrc={img1} addToRef={addToRefs} title='Diperbuat Dari Bahan Organik Dan Tradisional' subtext='Produk kami adalah 100% herba tumbuhan semulajadi tulen serta buah-buahan untuk mengekstrak produk penjagaan kesihatan untuk melindungi mata. Jika anda mengambil sebarang ubat hospital, ia tidak akan menjejaskan ubat anda.' />
          <RoadMapItem imageSrc={img2} addToRef={addToRefs} title='KKM & Halal Dari Jakim' subtext='【VisiEye】100% diperakui oleh pelbagai Jabatan Keselamatan ‼️ 
              ✅Kementerian Kesihatan  Malaysia【Pensijilan KKM】
              ✅Pensijilan Halal【Halal】
              【Saya jamin】bahawa tiada sebarang kesan sampingan.  Kerana setiap bahan adalah 100% semulajadi dan tidak mengandungi sebarang bahan perubatan atau kimia.' />
          <RoadMapItem imageSrc={img3} addToRef={addToRefs} title='Anugerah Berprestij Asia' subtext='Produk syarikat kami telah diterima.
              ✅Anugerah Jenama Integriti di Asia.  
              ✅Anugerah Perusahaan Jujur di Asia.  
              ✅Anugerah Kualiti Produk Integriti di Asia.' />
          <RoadMapItem imageSrc={img4} addToRef={addToRefs} title='Kita Ikhtiar' subtext='Jangan habis masa dan kos lebih untuk cari produk yang tidak berkesan lg😓
              Syukur Alhamdulillah🤲🏻
              #KitaIkhtiar
              #SolusiMataSihat
              #CegahSebelumParah' />
          <RoadMapItem imageSrc={img5} addToRef={addToRefs} title='Cara Makan' subtext='Produk (pek serbuk).  orang dewasa dan kanak-kanak boleh diterima.  Ambil 30 minit selepas sarapan, hanya 1 sachet setiap hari Selepas mengoyakkannya, tuangkan terus ke dalam mulut anda.' />
          <RoadMapItem imageSrc={img6} addToRef={addToRefs} title='Solusi Mata Sihat' subtext='Yang penting produk memang berkesan dan tak perlu panjang makan ,satu rawatan pasti selesai masalah mata anda.' />
        
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap