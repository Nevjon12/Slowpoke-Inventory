import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function SearchInventory(){

    return (
        <div className="subComponent">

            <h4>Inventory Lookup</h4>
            <form className="Lookup Form">
                <label> Search Criteria:<br/>
                
                    Rating: <input type="text" name="Rating"/><br/>
                    Face-Type:  <input type="text" name="Type"/><br/>
                    Width: <input type="text" name="Width"/><br/>
                    Brand: <input type="text" name="Length"/><br/>
                                   
                </label>
            </form>
            <button type="submit" form="Lookup Form">Search</button>
            
        </div>
    )

}