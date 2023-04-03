import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

const inventoryAPI = axios.create({baseURL: "http://localhost:3000/inventory/"});

export default function CurrentInventory(){

    let inventoryList;

    useEffect(() => { 
        const data = async()=>{
            const results = await inventoryAPI.get('data');
            console.log(results.data.Inventory, typeof(results))
        }
        data();
    }, []);

    console.log('it worked', inventoryList)

    return (

        <div className="subComponent">

            <h4>Items Currently in Your Inventory</h4>
            <form method="get">
            <button type="submit">Refresh Insulation List</button>
            </form>

        </div>

    )

}