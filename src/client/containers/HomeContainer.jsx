import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ManipulationContainer from './ManipulationContainer';
import FullInventoryContainer from './FullInventoryContainer';




export default function HomeContainer(){

    return (
        
        <div className="mainContainer">

            <h1 className='mainText'>
                Insulation Inventory<br/>
            </h1>
            <div>
                <FullInventoryContainer/>
                <ManipulationContainer/>
            </div>
        </div>

    )

}