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
          <Accordion title='Apakah VisiEye dan bagaimana ia berfungsi?' >
          VisiEye ialah suplemen pemakanan yang direka untuk menyokong kesihatan mata dan melindungi daripada gejala berkaitan mata yang disebabkan oleh masa skrin yang berpanjangan. Ia mengandungi gabungan unik bahan semulajadi yang membantu mengurangkan ketegangan mata dan meningkatkan prestasi visual.
          </Accordion>
          <Accordion title='Siapa yang boleh menggunakan VisiEye?' >
          VisiEye boleh digunakan oleh sesiapa sahaja yang mengalami ketegangan mata, mata kering, atau gejala berkaitan mata lain yang disebabkan oleh masa skrin yang berpanjangan. Ini termasuk pelajar, pekerja pejabat, pemain permainan dan sesiapa sahaja yang menggunakan peranti digital untuk bekerja atau beriadah.
          </Accordion>
          <Accordion title='Adakah VisiEye selamat digunakan?' >
          Ya, VisiEye benar-benar selamat untuk digunakan. Ia diperbuat daripada bahan semulajadi dan telah diuji oleh pakar industri untuk memastikan keselamatan dan keberkesanannya.
          </Accordion>
        </Box>
        <Box>
          <Accordion title='Berapa lamakah masa yang diambil untuk melihat hasil daripada VisiEye?' >
          Tempoh masa yang diambil untuk melihat hasil daripada VisiEye boleh berbeza-beza bergantung pada individu dan keperluan kesihatan mata khusus mereka. Walau bagaimanapun, kebanyakan pengguna melaporkan mengalami peningkatan yang ketara dalam kesihatan mata dan prestasi visual dalam beberapa minggu selepas mula mengambil suplemen.
          </Accordion>
          <Accordion title='Bagaimana saya perlu mengambil VisiEye?' >
          Untuk hasil terbaik, ambil satu kapsul VisiEye setiap hari dengan hidangan. Adalah penting untuk mengikuti dos yang disyorkan dan berunding dengan profesional penjagaan kesihatan sebelum memulakan sebarang rejimen suplemen baharu.
          </Accordion>
          <Accordion title='Bolehkah VisiEye digunakan dengan suplemen atau ubat lain?' >
          Seperti mana-mana suplemen pemakanan, adalah penting untuk berunding dengan profesional penjagaan kesihatan sebelum mengambil VisiEye dengan suplemen atau ubat lain. Mereka boleh menasihati anda tentang sebarang kemungkinan interaksi atau kontraindikasi.
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