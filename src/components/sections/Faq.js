import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
min-height: 100vh;
width: auto;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.body};
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;

@media (max-width: 48em) {
  font-size: ${(props) => props.theme.fontxl};
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  flex-direction: column;

  &>*:last-child {
    &>*:first-child {
      margin-top: 0;
    }
  }
}
`

const Box = styled.div`
width: 45%;

@media (max-width: 64em) {
  width: 90%;
  align-self: center;
}
`

const Faq = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    })

    return () => {
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section ref={ref} id='faq'>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title='What is VisiEye and how does it work?' >
          VisiEye is a dietary supplement that is designed to support eye health and protect against eye-related symptoms caused by prolonged screen time. It contains a unique blend of natural ingredients that help to reduce eye strain and improve visual performance.
          </Accordion>
          <Accordion title='Who can use VisiEye?' >
          VisiEye can be used by anyone who experiences eye strain, dry eyes, or other eye-related symptoms caused by prolonged screen time. This includes students, office workers, gamers, and anyone who uses digital devices for work or leisure.
          </Accordion>
          <Accordion title='Is VisiEye safe to use?' >
          Yes, VisiEye is completely safe to use. It is made from natural ingredients and has been tested by industry experts to ensure its safety and efficacy.
          </Accordion>
        </Box>
        <Box>
          <Accordion title='How long does it take to see results from VisiEye?' >
          The length of time it takes to see results from VisiEye can vary depending on the individual and their specific eye health needs. However, most users report experiencing noticeable improvements in eye health and visual performance within a few weeks of starting to take the supplement.
          </Accordion>
          <Accordion title='How should I take VisiEye?' >
          For best results, take one capsule of VisiEye daily with a meal. It is important to follow the recommended dosage and consult with a healthcare professional before starting any new supplement regimen.
          </Accordion>
          <Accordion title='Can VisiEye be used with other supplements or medications?' >
          As with any dietary supplement, it is important to consult with a healthcare professional before taking VisiEye with other supplements or medications. They can advise you on any potential interactions or contraindications.
          </Accordion>
          {/* <Accordion title='Does VisiEye come with a guarantee?' >
          Yes, VisiEye comes with a satisfaction guarantee. If for any reason you are not satisfied with the product, you can contact the manufacturer for a full refund within a certain time frame.
          </Accordion> */}
        </Box>
      </Container>
    </Section>
  )
}

export default Faq