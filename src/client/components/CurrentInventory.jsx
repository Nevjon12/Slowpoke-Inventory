import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'


const inventoryAPI = axios.create({baseURL: "http://localhost:3000/inventory/"});

export default function CurrentInventory(){


    return (

        <div className="subComponent">

            <h4>Items Currently in Your Inventory</h4>
            <ul>
                <li></li>
            </ul>
            <button onClick={()=>{fetch('http://localhost:8080/ins')}}>Refresh Insulation List</button>
           

        </div>

    )

}