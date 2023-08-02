import React from 'react'
import { Button, Row, Col} from 'reactstrap'
import { SocialIcon } from 'react-social-icons';
import './Contact.css';

function Contact() {
  return (
    <div id='Contact'>
        <h1 className='contactHeading'>
            Contact Me
        </h1>
        <div>
            <Row>
                <Col>
                    <a href='mailto: vibhasengar03@gmail.com' target='_blank' rel="noopener noreferre">
                        <Button color='info' outline className='cbuto'> 
                        <SocialIcon url="https://gmail.com/jaketrent" />Email Me
                        </Button>
                    </a>

                    <a href='https://www.linkedin.com/in/vibha-sengar-871586203/' target='_blank' rel="noopener noreferre">
                        <Button color='success' outline  className='cbuto'>
                        <SocialIcon url="https://linkedin.com/jaketrent" />&nbsp;LinkedIn
                        </Button>
                    </a>

                    <a href='https://github.com/Vibha261' target='_blank' rel="noopener noreferre">
                        <Button color='secondary' outline className='cbuto'>
                        <SocialIcon url="https://github.com/jaketrent" />&nbsp;Github
                        </Button>
                    </a>
                
                    <a href='https://leetcode.com/vibhasengar03/' target='_blank' rel="noopener noreferre">
                        <Button color='warning' outline className='cbuto'> 
                        <SocialIcon url="https://leetcode.com/jaketrent" /> &nbsp; Leetcode
                        </Button>
                    </a>
                </Col>
            </Row>
        </div>
      
    </div>
  )
}

export default Contact
