import React from 'react'
import './About.css'
import { Container, Row, Col, Button} from 'reactstrap'
import Profile from '../../Assest/Image/Profile.png'

function About() {
  return (
    <div id="About">
        <h1 className='hea'>About Me</h1>
    <Container>
        <Row>
            <Col xs={12} md={6}>
                <Row >
                    <img className='pr' src={Profile} alt='Profile'/>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <p className='aboutContent'>
                    I am a passionate web developer. <br/>
                    I have a strong foundation in front-end and 
                    back-end development, combined with a deep 
                    understanding of user experience and design principles. <br/>
                    My journey in web development began with a fascination for the 
                    endless possibilities that the digital realm offers. 
                    Over the years, I have honed my skills in HTML, CSS, and 
                    JavaScript, and responsive web interfaces.<br/>
                    I stay up to date with the latest web development trends and advancements.
                    I actively participate in online communities, attend conferences, and engage
                        in continuous learning to expand my knowledge and keep my skills sharp.<br/>

                    </p>
                </Row>
                <a href='https://drive.google.com/file/d/1QzA7IK15PMj7LAGgG7Oz_rj1L90wsg4I/view?usp=drive_link' target='_blank' download>
                    <Button className='Resume' color='info' outline>
                        Resume
                    </Button>    
                </a>
                <a href='https://www.linkedin.com/in/vibha-sengar-871586203/' target='_blank'>
                    <Button className='Resume' color='success' outline>
                        LinkedIn
                    </Button>
                </a>
                <a href='https://github.com/Vibha261' target='_blank'>
                    <Button className='Resume' color='primary' outline>
                        Github
                        </Button>
                </a>
                <a href='mailto: vibhasengar03@gmail.com' target='_blank'>
                    <Button className='Resume' color='warning' outline>
                        Gmail
                        </Button>
                </a>
                <a href='https://leetcode.com/vibhasengar03/' target='_blank'>
                    <Button className='Resume' color='danger' outline>
                        Leetcode
                        </Button>
                </a>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
