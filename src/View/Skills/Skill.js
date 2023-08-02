import React from 'react'
import { Card, CardBody, CardDeck, CardTitle, CardText ,CardImg} from 'reactstrap'
import C from '../../Assest/Logo/C.png'
import cs from '../../Assest/Logo/cs.png'
import ht from '../../Assest/Logo/ht.jpeg'
import javas from '../../Assest/Logo/javas.jpeg'
import reac from '../../Assest/Logo/reac.png'
import OIP from '../../Assest/Logo/OIP.jpeg'
import './Skill.css';

function Skill() {
  return (
    <div id='Skills'>
      <h1 className='skillHeading'>
        Skills
      </h1>
      <CardDeck className='crd'>
        <div style={{padding: "5px"}}>
          <Card className='ca1'>
            <CardBody>
              <CardTitle className='Ct1'>
                C++
              </CardTitle>
              <hr/>
              <CardText>
                <CardImg src={C} alt="Skill Image" className='cardImg' width="190px"/>
              </CardText>
            </CardBody>
          </Card>
          </div>
          <div style={{padding: "5px"}}>
          <Card className='ca1'>
            <CardBody>
              <CardTitle className='Ct1'>
                HTML
              </CardTitle>
              <hr/>
              <CardText>
                <CardImg src={ht} alt="Skill Image" className='cardImg'/>
              </CardText>
            </CardBody>
          </Card>
          </div>
          <div style={{padding: "5px"}}>
          <Card className='ca1'>
            <CardBody>
              <CardTitle className='Ct1'>
                CSS
              </CardTitle>
              <hr/>
              <CardText>
                <CardImg src={cs} alt="Skill Image" className='cardImg'/>
              </CardText>
            </CardBody>
          </Card>
          </div>
          <div style={{padding: "5px"}}>
          <Card className='ca1'>
            <CardBody>
              <CardTitle className='Ct1'>
                JavaScript
              </CardTitle>
              <hr/>
              <CardText>
                <CardImg src={javas} alt="Skill Image" className='cardImg'/>
              </CardText>
            </CardBody>
          </Card>
          </div>
          <div style={{padding: "5px"}}>
          <Card className='ca1'>
            <CardBody>
              <CardTitle className='Ct1'>
                ReactJs
              </CardTitle>
              <hr/>
              <CardText>
                <img src={reac} alt="SkillImage" className='cardImg' width="180px"/>
              </CardText>
            </CardBody>
          </Card>
          </div>
          <div style={{padding: "5px"}}>
          <Card className='ca1'>
            <CardBody>
              <CardTitle className='Ct1'>
                SQL
              </CardTitle>
              <hr/>
              <CardText>
                <CardImg src={OIP} alt="Skill Image"className='cardImg'/>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </CardDeck>
    </div>
  )
}

export default Skill
