import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function AddInventory(){

    return (
    
        <div className="subContainer">

            <h4 id="title">Add New Inventory Item</h4>
            <form id="newItemForm" method='post'>
                <label> New Item Details:<br/>

                    Name: <input type="text"/><br/>
                    Rating:  <input type="text"/><br/>                
                    Face-Type: <input type="text"/><br/>
                    Width:  <input type="text"/><br/>
                    Length: <input type="text"/><br/>
                    Brand: <input type="text"/><br/>
                    Square /Bag: <input type="text"/><br/>
                    Bags /Bundle: <input type="text"/><br/>
                    <button type="submit" form="newItemForm">Add to Inventory</button>    
                </label>
            </form>

        </div>

    )


}