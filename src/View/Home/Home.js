import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Vibha from '../../Assest/Image/Vibha.png'
import {Button} from 'reactstrap'
import './Home.css'

function Home() {
  return (
    <div id="MainPage">
        <Container>
            <Row >
                <Col xs={12} md={6}>
                    <Row className='Content'>                        
                        <h1 className='f'> Hi! </h1>
                        <h2 className='s'> I am Vibha Sengar</h2>
                        <h3 className='t'> Web developer</h3>
                        
                    </Row>
                    <br/>
                        <Button className='buto' color='primary' outline><a href="#About">Know more about me!</a></Button>
                </Col>
                <Col xs={12} md={6}>
                    <Row>
                        <img src={Vibha} alt='Profile' height='700px' width='80px'/>
                    </Row>
                </Col>

            </Row>
        </Container>
      
    </div>
  )
}

export default Home
