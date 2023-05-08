import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Button from './Button'
import Carousel from './Carousel'
import { dark } from '../../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
 width: 75%;
 margin: 0 auto;
 ${'' /* background-color: lightblue; */}
 
 display: flex;
 justify-content: center;
 align-items: center;
 @media (max-width: 70em) {
  width: 85%;
 }
 @media (max-width: 64em) {
  width: 100%;
  flex-direction: column;

  &>*:last-child {
    width: 80%;
  }
 }
 
 @media (max-width: 40em) {
  &>*:last-child {
    width: 90%;
  }
 }
 `

const Box = styled.div`
 width: 50%;
 height: 100%;
 min-height: 60vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
 @media (max-width: 40em) {
  min-height: 50vh;
 }
 `

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
 }
 @media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};
 }
 @media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontlg};
 }
`

const SubText = styled.p`
font-size: ${(props) => props.theme.fontlg};
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
 }
 @media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontmd};
 }
 @media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontam};
 }
`

const SubTextLight = styled.p`
font-size: ${(props) => props.theme.fontmd};
color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontsm};
 }
 @media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontsm};
 }
 @media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontxs};
 }
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align-self: flex-start;

@media (max-width: 64em) {
  width: 100%;

  button {
    margin: 0 auto;
  }
 }
`

const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Box> <Carousel /> </Box>
        <Box>
          <Title>
          VisiEye: Rakan Kongsi Kesihatan Mata Anda.
          </Title>
          <SubText>
          Mata adalah bahagian penting dalam kesihatan anda. Tetapi sesetengah penyakit mata boleh menyebabkan kehilangan penglihatan, jadi penting untuk mengenal pasti dan merawat penyakit mata seawal mungkin.
          </SubText>
          <SubTextLight>
          [ visiEye ] Di pasaran selama lebih 6 bulan, ia telah berjaya membantu 30,680 orang yang mempunyai penyakit dan gejala mata. Satu-satunya teknologi dipatenkan 🇺🇸🇩🇪🇯🇵🇲🇽berteknologi tinggi di pasaran yang boleh melindungi mata Balasan yang baik daripada pelanggan.
          </SubTextLight>
          <a href='https://wa.link/f0wssi' target='_blank' rel='noopener noreferrer'>
            <ButtonContainer>
              <ThemeProvider theme={dark}>
                  <Button text='VisiEye' />
                {/* <Button text='VisiEye' link='https://wa.link/f0wssi' /> */}
              </ThemeProvider>
            </ButtonContainer>
          </a>
        </Box>
      </Container>
    </Section>
  )
}

export default About