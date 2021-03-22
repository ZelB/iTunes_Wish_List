import React from 'react'
import logoRightImg from './logoRight.jpg';

import { FaItunesNote } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderComp = () => {
    return (

        

        <div className='headerClass'>
            <Container fluid>

                <Row>
                    <Col sm={4}>
                    
                    <img src={logoRightImg} className='logoRightClass' alt='Logo' />
                    
                    
                    </Col>
                    <Col sm={8}>
                     Create Your iTunes  Wish List <FaItunesNote /> 
                    </Col>
                </Row>

                
            </Container>

            
            
            
           
        </div>
    )
}

export default HeaderComp
