import React, { Component } from 'react';
import FullInventoryContainer from './containers/HomeContainers/FullInventoryContainer';
import ManipulationContainer from './containers/HomeContainers/ManipulationContainer';
import NavBar from './components/NavBarComponents/NavBar';



export default function Home(){

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