import React from 'react'
import styled from 'styled-components';
import Banner from '../Banner';
import Logo from '../sections/Logo';
import Package from '../sections/Package';
import Facebook from '../../Icons/Facebook';
import Instagram from '../../Icons/Instagram';
import Twitter from '../../Icons/Twitter';
import LinkedIn from '../../Icons/LinkedIn';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #9FC9B3;
${'' /* background-color: ${props => props.theme.body}; */}
position: relative;
color: ${(props) => props.theme.text};
display: flex;
${'' /* justify-content: center;
align-items: center; */}
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${props => props.theme.text};

@media (max-width: 48em) {
  width: 90%;

  h1{
    font-size: ${props => props.theme.fontxxxl};
  }
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
  width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>* {
  padding-right: 0.5rem;
  transform: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
  display: none;
}
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after {
  content: ' ';
  display: block;
  width: 0;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after {
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a {
  text-decoration: underline;
}

@media (max-width: 48em) {
  flex-direction: column;
  width: 100%;

  span {
    margin-bottom: 1rem;
  }
}
`

const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;

@media (max-width: 48em) {
  width: 100%;
  justify-content: center;
}
`

const JoinNow = styled.button`
display: inline-block;
background-color: #000;
color: #fff;
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

@media (max-width: 48em) {
  padding: 1rem 2rem;
}
@media (max-width: 30em) {
  padding: 0.5rem 2rem;
  font-size: ${props => props.theme.fontsm};
}

&:hover {
    transform: scale(0.9);
}

&::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #000;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const Contact = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontsm};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

@media (max-width: 48em) {
  padding: 1rem 2rem;
}
@media (max-width: 30em) {
  padding: 0.5rem 2rem;
  font-size: ${props => props.theme.fontsm};
}

&:hover {
    transform: scale(0.9);
}

&::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`


const Footer = () => {

  const scrollTo = (id) => {
    let element = document. getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  return (
    <Section>
      <Banner />
      <Container >
        <Left>
          <Logo />
          <Package />
          <BtnContainer>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScEbqibw1-38mEhhA9NWhidSuW10NMPPt0-JiRYcIJ6yU648Q/viewform?usp=sf_link'>
              <JoinNow>
              Order Now
              </JoinNow>
            </a>
            {/* <Button text='VisiEye' link='https://wa.link/f0wssi' /> */}
          </BtnContainer>
          
          <IconList>
            <a href='https://wa.link/ziqijw'>
              <Contact>
              WhatsApp Us
              </Contact>
            </a>
            {/* <a href='https://www.facebook.com/Lindungi-Mata-109578888781581' target='blank' rel='noopener noreferrer'>
              <Facebook />
            </a>
            <a href='https://www.instagram.com/jasonlim1009/?igshid=YmMyMTA2M2Y%3D' target='blank' rel='noopener noreferrer'>
              <Instagram />
            </a>
            <a href='https://www.twitter.com/' target='blank' rel='noopener noreferrer'>
              <Twitter />
            </a>
            <a href='https://www.linkedin.com/' target='blank' rel='noopener noreferrer'>
              <LinkedIn />
            </a> */}
          </IconList>
        </Left>
        <MenuItems>
        <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>
          <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Copyright Ins Tech International Sdn Bhd (1317446-P).<br/>All rights reserved.
        </span>
        <span>
        2.1,Tower 9 Avenue 5,<br/>The Horizon Bangsar South
        No 8,<br/>ln Kerinchi 59200 Kuala Lumpur
          {/* Made with &#10084; by <a href='https://wa.link/f0wssi' target='_blank' rel='noopener noreferrer'>
            JasonLim
          </a> */}
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer
