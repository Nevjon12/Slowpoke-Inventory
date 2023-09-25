import React, { Component } from 'react';
// import { connect } from 'react-redux';
import CurrentInventory from '../../components/HomeComponents/CurrentInventory';



export default function FullInventoryContainer(){

    return (
        <div className="subContainerParent">
            <h1>Current Inventory</h1>    
            <div className='subContainer'>
                <CurrentInventory/>
            </div>
        </div>
    )
}