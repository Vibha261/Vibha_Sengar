import React from 'react'
import './Project.css'
import { Card, CardBody, CardHeader,CardImg,} from 'reactstrap'
import ELibrary from '../../Assest/Image/Elibrary.png'
import Temp from '../../Assest/Image/Temp.png'
import count from '../../Assest/Image/count.png'

function Project() {
  return (
    <div id="Project">
        <div>
            <h1 className='projectHeading'>Project</h1>
            <div>
            <Card className='cr1'>
                    <CardHeader className='ch1'>E-Library</CardHeader>
                    <center><CardImg src={ELibrary} alt='Project' className='ci1'/></center>
                    <CardBody className='bd'>
                        <h1>Description:</h1> A Virtual Library
                        <h1>Technology:</h1> HTML, CSS, JavaScript, ReactJs
                        <h1>Role:</h1> Complete Development
                        <h1>Link:</h1> <a href='https://vibha261.github.io/ELibrary/' target='_blank' rel="noreferrer">E-Library</a>
                    </CardBody>
                </Card>
                <br/>
                <Card className='cr1'>
                    <CardHeader className='ch1'>Temperature Controller</CardHeader>
                    <center><CardImg src={Temp} alt='Project' className='ci1'/></center>
                    <CardBody className='bd'>
                        <h1>Description:</h1> Control the overall temperature.
                        <h1>Technology:</h1> React JS, JavaScript
                        <h1>Role:</h1> Complete Development
                        <h1>Link:</h1> <a href='https://vibha261.github.io/TemperatureController/' target='blank' rel="noreferrer">Temperature Controller</a>
                    </CardBody>
                </Card>
                <br/>
                <Card className='cr1'>
                    <CardHeader className='ch1'>Counter Application</CardHeader>
                    <center><CardImg src={count} alt='Project' className='ci1'/></center>
                    <CardBody className='bd'>
                        <h1>Description:</h1> Count the value according to the command.
                        <h1>Technology:</h1> React JS, JavaScript
                        <h1>Role:</h1> Complete Development
                        <h1>Link:</h1> <a href='https://vibha261.github.io/CountApp/' target='blank' rel="noreferrer">Counter Application</a>
                    </CardBody>
                </Card>
            </div>
        </div>
      
    </div>
  )
}

export default Project
