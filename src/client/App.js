import React from 'react';
import MainContainer from './containers/HomeContainer.jsx'
import { 
    createBrowserRouter,
    Route,
    RouterProvider,
    createRoutesFromElements
 } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainContainer/>}>
            <Route path='/login'/>
            <Route path='/home'/>
            <Route path='/settings'/>
        </Route>
    )
)


function App(){

   
    return (
        
            <RouterProvider router={router}/>
            
    )
    
}

export default App;