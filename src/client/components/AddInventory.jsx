import React from 'react';
import { useState, useEffect } from 'react';

const faces = ['KRAFT', 'UNFACED', 'FOIL', 'ENCAPSULATED'];
const ratings = [11, 13, 15, 19, 21, 30, 38, 49]
const widths = [15, 16, 23, 24];
const lengths =[8, 9];
const brands = ['KNAUF', 'OWENS CORNING', 'JOHNS MANSVILLE'];
const bundled = [4, 5];

export default function AddInventory(){


  
    return (
    
        <div className="subContainerChild">

            <h4 id="title">Add New Inventory Item</h4>
            <form id="newItemForm"  action="/" method='POST' >
                <label> New Item Details:<br/>
                    <>
                    Name: <input name='name' type="text" defaultValue={'input name'}></input><br/>
                    </>
                    <>
                    Rating:  <select name='rating' type="number">
                                {ratings.map((el)=>{
                                   return <option>{`${el}`}</option> 
                                })}
                        </select><br/> 
                    </>      
                    <>        
                    Face-Type: <select name='type' type="text">
                                {faces.map((el)=>{
                                   return <option>{`${el}`}</option> 
                                })}
                                </select>
                                <br />
                    </> 
                    <>
                    Width:  <select name='width' type="number">
                                {widths.map((el)=>{
                                   return <option>{`${el}`}</option> 
                                })} 
                            </select><br/>
                    </>
                    <>
                    Length: <select name='length' type="number">
                                {lengths.map((el)=>{
                                   return <option>{`${el}`}</option> 
                                })}
                            </select><br/>
                    </>
                    <>
                    Brand: <select name='brand' type="text">
                                {brands.map((el)=>{
                                   return <option>{`${el}`}</option> 
                                })}
                        
                            </select><br/>
                    </>
                    <>
                    Square /Bag: <input name='squareFootage' type="number"/><br/>
                    </>
                    <>
                    Bags /Bundle: <select name='bundleSize' type="number">
                                {bundled.map((el)=>{
                                   return <option>{`${el}`}</option> 
                                })}
                        </select><br/>
                    </>
                    <button type="submit" form="newItemForm" >Add to Inventory</button>    
                </label>
            </form>

        </div>

    )


}