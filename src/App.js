import React from 'react'
import './App.css';

// import useState
import { useState } from 'react';
//Browser Router for the NAV
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Components
import Header from './components/HeaderComp';
import GetInputComp from './components/GetInputComp';
import DisplayResults from './components/DisplayResults';
import WishlistComp from './components/WishlistComp';

//Bootstrap Components
import Nav from 'react-bootstrap/Nav'

const App = () => {

  //Create an array to store the Items returned from search in and method to update the state
  const [searchedItemsArray, setSearchedItemsArray] = useState([]);

  //iTunes API feedback state
  const [searchResults, setSearchResult] = useState({
    searchResults: []}
  );
 

  //Gets input from child component - media and search words (callback function)
  const addNewItem = (item) => {
        const newItem = {item};
        setSearchedItemsArray([...searchedItemsArray, newItem]);

        //extract the data from the search word - media and content
        let searchWords = item.searchInputText;
        let mediaSelection = item.mediaType;

        //replace the empty strings with '+' 
        let searchString = searchWords.replaceAll(" ", "+");

        componentDidMount(searchString, mediaSelection);

        
  }

  console.log(searchResults.searchResults)

  //fetch the data from iTunes store
  const componentDidMount = (searchString, mediaSelection) => {
           fetch(`https://itunes.apple.com/search?term=${searchString}&entity=${mediaSelection}`)
          .then( res => res.json())
          .then(
            (returnedItems) => {
            setSearchResult({searchResults: returnedItems.results});
            },
              (error) => {
                alert(error);
          });

          console.log(searchString)
          console.log(mediaSelection)    

          
      }

  

  
  

 // <DisplayResults data={searchResults.searchResults} />
 //{searchResults.length > 0? (<DisplayResults data={searchResults.searchResults} />) : ('No Items Searched Yet')}
  return (
    
    <div className="App" >
      <Header />

      <Nav fill variant="tabs" defaultActiveKey="/" >
            <Nav.Item className='navBorderClass'>
              <Nav.Link href="/" className='navClass'>Home Page</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navBorderClass'>
              <Nav.Link href="/wishlist" className='navClass'>Go To Wish List</Nav.Link>
            </Nav.Item>
          </Nav>

      <BrowserRouter>
        <Switch>
          <Route path='/wishlist' > <WishlistComp /> </Route>
        </Switch>
      </BrowserRouter>

      <GetInputComp onAdd={addNewItem} />
      <br />
      
      <h2 className='setpClass'> Step 4: iTunes Search Results </h2>
      <DisplayResults itemsArray={searchResults.searchResults} />

    </div>
  )
}


export default App
