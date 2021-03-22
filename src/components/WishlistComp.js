import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//impoty love and delete icons
import { FcLike } from "react-icons/fc";
import { FiTrash2 } from "react-icons/fi";

//use state to set initial value of array
import { useState, useEffect } from 'react';

const WishlistComp = () => {

  //set initial state of array
  const [wishListitemsImport, setWwishListitemsImport] = useState([]);
    //use useEffect so when the app loads for the first time (or the page is refreshed) that the results from localStorage are loaded
    useEffect(() => {
        //get saved array from session storage
        setWwishListitemsImport(JSON.parse(sessionStorage.getItem('wishListArray')) || []);
    }, []);

return (
    <div className='wishlistClass'>
        <h1 className='setpClass'>Your Wish List Items Are As Follow:</h1>
        
        {wishListitemsImport.length > 0? (<Table striped bordered hover variant="dark" responsive="md">
                
                <thead>
                <tr>
                    <th><FcLike /></th>
                    <th>Media</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Wish List</th>
                </tr>
                </thead>
    
                <tbody>
                {wishListitemsImport.map((item, index) => (
                        <tr key={index}>
                            <td><FcLike /></td>
                            <td>{item.kind}</td>
                            <td>{item.trackName}</td>
                            <td>${item.price}</td>
                            <td><Button variant="dark" 
                                onClick={()=>{
                                    console.log(item);
                                    const newWishListArray = [...wishListitemsImport.slice(0, index), ...wishListitemsImport.slice(index + 1)]
                                    setWwishListitemsImport(newWishListArray);
                                    sessionStorage.setItem('wishListArray', JSON.stringify(newWishListArray));
                                    }}>
                                    <FiTrash2 /></Button></td>
                        </tr>
                )
                )}
                
                </tbody>
    
          </Table>) : (<h4>No items in Wish List.  Go to HOME PAGE</h4>)}        
            
           
    </div>
)
}

export default WishlistComp

