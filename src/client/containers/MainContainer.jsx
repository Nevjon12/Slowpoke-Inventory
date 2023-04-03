import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ManipulationContainer from '../containers/ManipulationContainer';
import FullInventoryContainer from '../containers/FullInventoryContainer';




export default function MainContainer(){

    return (
        
        <div className="mainContainer">

        <h1 className='mainText'>
            Slowpoke's Insulation Inventory<br/>
            <p>Imagine that it works fully.</p>
        </h1>
        
        <FullInventoryContainer/>
        <ManipulationContainer/>

        </div>

    )

}