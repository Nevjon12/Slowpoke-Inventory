import React, { Component } from 'react';
// import { connect } from 'react-redux';
import AddInventory from '../components/AddInventory';
import SearchInventory from '../components/SearchInventory';



export default function ManipulationContainer(){

    return (
        <div className='container'>

            <div className="subContainer" >
            <>
            <h1>Inventory Manipulator</h1>
            </>
            
            <AddInventory/>
               
            <SearchInventory/>
            </div>
            
        </div>

    )

}