import React from 'react';



export default function CurrentInventory(){


    return (

        <div className="subContainerChild">
                <h4>Items Currently in Your Inventory</h4>
                <button onClick={()=>{fetch('http://localhost:8080/ins')}}>Refresh Insulation List</button>
                <button onClick={()=>{fetch('http://localhost:8080/clear', {method : 'DELETE'})} }>Clear Insulation List</button>

        </div>

    )

}