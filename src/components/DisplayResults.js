import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState} from 'react'

const DisplayResults = ( {itemsArray}) => {

    //array to hold all the selected items
    const [selectedItemsArray, setSelectedItemsArray] = useState([]);

    //used arrow function within each click to add to an array
    //will save all items in selectedItemsArray and save to session storage

    return (
        <div>
             <Table striped bordered hover variant="dark" responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Media</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Wish List</th>
                </tr>
                </thead>

                <tbody>
                {itemsArray.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.kind}</td>
                            <td>{item.trackName}</td>
                            <td>${item.price}</td>
                            <td>{item.averageUserRating}</td>
                            <td><Button variant="info" 
                                onClick={()=>{
                                    console.log(item);
                                    selectedItemsArray.push(item);
                                    setSelectedItemsArray([...selectedItemsArray]);
                                    console.log(selectedItemsArray);
                                    sessionStorage.setItem('wishListArray', JSON.stringify(selectedItemsArray));
                                    }}>
                                    Add</Button></td>
                        </tr>
                )
                )}
                
                </tbody>

          </Table>
            
        </div>
    )
}

export default DisplayResults
