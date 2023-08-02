import React from 'react'
import './Project.css'
import { Card, CardBody, CardHeader,CardImg, CardTitle } from 'reactstrap'
import ELibrary from '../../Assest/Image/Elibrary.png'
import Temp from '../../Assest/Image/Temp.png'

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
                        <h1>Link:</h1> <a href='https://github.com/Vibha261/ELibrary' target='blank' rel="noopener noreferre">E-Library</a>
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
                        <h1>Link:</h1> <a href='https://github.com/Vibha261/ELibrary' target='blank' rel="noopener noreferre">Temperature Controller</a>
                    </CardBody>
                </Card>

            </div>
        </div>
      
    </div>
  )
}

export default Project
