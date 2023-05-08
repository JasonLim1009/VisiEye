import React from 'react'
import styled from 'styled-components'
import Typerwriter from 'typewriter-effect'
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}

.text-1 {
    color: red;
}

.text-2 {
    color: orange;
}

.text-3 {
    color: yellow;
}

.text-4 {
    color: teal;
}

.text-5 {
    color: blue;
}

.text-6 {
    color: pink;
}

.text-7 {
    color: purple;
}

.text-8 {
    color: brown;
}

@media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
}
`;

const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
        margin: 0 auto;
    }
}
`

const TypeWriterText = () => {
    return (
        <>
            <Title>TINGKAP PELINDUNG MATA
                <Typerwriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class="text-1">KATARAK.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-2">SELAPUT LUAR.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-3">GLAUKOMA.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-4">FLOATERS.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-5">RABUN JAUH.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-6">RABUN DEKAT.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-7">MATA KERING.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-8">RABUN SILAU.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }} />
            </Title>
            <SubTitle>Gejala Sakit Mata? Cuba Rawatan Ini.</SubTitle>
            <ButtonContainer>
                <a href='https://wa.link/f0wssi' target='_blank' rel='noopener noreferrer'>
                    <Button text='VisiEye' />
                </a>
                {/* <Button text='VisiEye' link='https://wa.link/f0wssi' /> */}
            </ButtonContainer>
        </>
    )
}

export default TypeWriterText