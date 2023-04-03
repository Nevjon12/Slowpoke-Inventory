import React, { Component } from 'react';
// import { connect } from 'react-redux';
import CurrentInventory from '../components/CurrentInventory';



export default function ManipulationContainer(){

    return (
        <div className="subContainerCurrent">

        <div><h1>Current Inventory</h1><br/></div>
       
            <div className='subContainer'>
                <CurrentInventory/>
            </div>

        </div>

    )

}