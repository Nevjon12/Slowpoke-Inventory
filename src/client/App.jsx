import React from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { 
    createBrowserRouter,
    Link,
    Route,
    RouterProvider,
    createRoutesFromElements,
 } from 'react-router-dom';
import NavBar from './pages/components/NavBarComponents/NavBar.jsx';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="settings"/>
        </Route>
    )
);


export default function App(){

   
    return (
        <>
            <RouterProvider router={router}/>
        </>
            
    )
    
};