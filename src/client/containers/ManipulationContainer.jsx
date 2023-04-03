import React, { Component } from 'react';
// import { connect } from 'react-redux';
import AddInventory from '../components/AddInventory';
import SearchInventory from '../components/SearchInventory';



export default function ManipulationContainer(){

    return (
        <div className="container">

        <h1>Inventory Manipulator</h1>
            <div className='subContainer'>
                <AddInventory/>
            </div>
            <div className='subContainer'>
                <SearchInventory/>
            </div>
        </div>

    )

}