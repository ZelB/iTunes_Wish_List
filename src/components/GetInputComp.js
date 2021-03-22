import React from 'react'

//Import Bootstrap components
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Each Component will have own state
import { useState } from 'react';


const GetInputComp = ({ onAdd }) => {
    //setting initial state 
    const [mediaType, setMedia] = useState('Select Media');
    const [searchInputText, setSearchInputText] = useState('');



    const onSearchClick = (e) => {
        e.preventDefault();

        //validation to check is text has been added
        if (!searchInputText) {
            alert("Please add a search word");
            return;
        }

        //when passed through validation, we will add task
        onAdd ({searchInputText, mediaType});

        //Form must be clear for new input - set the state. When user submitted task
        setMedia('Select Media');
        setSearchInputText('');
    }


    return (
        <div>
            <Container className='stepsContainClass' fluid>
                <Row>
                    <Col className='colClass'>
                        
                            <h2 className='setpClass'>Step 1</h2> 
                            <h5>Select The Type Of Media:</h5>

                            <DropdownButton id="dropdown-basic-button" title={mediaType} variant="secondary" onSelect={(e) => setMedia(e) }>
                                <Dropdown.Item eventKey="allTrack">All</Dropdown.Item>
                                <Dropdown.Item eventKey="ebook">Books</Dropdown.Item>
                                <Dropdown.Item eventKey="movie">Movies</Dropdown.Item>
                                <Dropdown.Item eventKey="podcast">Podcasts</Dropdown.Item>
                                <Dropdown.Item eventKey="musicTrack">Music</Dropdown.Item>
                                <Dropdown.Item eventKey="musicVideo">Music Videos</Dropdown.Item>
                                <Dropdown.Item eventKey="audiobook">Audiobooks</Dropdown.Item>
                                <Dropdown.Item eventKey="tvShow">TV shows</Dropdown.Item>
                                <Dropdown.Item eventKey="software">Software</Dropdown.Item>
                                <Dropdown.Item eventKey="shortFilm">Short Film</Dropdown.Item>

                            </DropdownButton>
                        
                     </Col>

                    <Col className='colClass'>
                       
                            <h2 className='setpClass'>Step 2</h2> 
                            <h5>Enter Search Keyword: </h5>
                            <input type='text' 
                                        value={searchInputText} 
                                        placeholder='eg: Song Name'
                                        onChange={(e) => setSearchInputText(e.target.value) }/>
                        
                    </Col>

                    <Col className='colClass'>
                        
                            <h2 className='setpClass'>Step 3</h2>
                            <Button variant="dark" onClick={onSearchClick}>Search</Button>
                        
                    </Col>
                </Row>
            </Container>
            <br /> 

            </div>

    )
}

export default GetInputComp
