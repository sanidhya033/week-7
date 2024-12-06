//import { Dashboard } from './components/Dashboard'
import { lazy } from 'react';
//import { Landing } from './components/Landing'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React from 'react'

// use navigate should be used in a component thats inside browser router 

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

// this is lazy routing makes website more optimal not give the website to the client at once
// it gives the website in bundles 

function App() {
  // location.href gives you the current route here it is - http://localhost:5173/

  return (
   <div>
    <div>
    {/*    <button onClick={()=>{
        window.location.href ="/";
       }}>Landing page</button> 

       <button onClick={()=>{
        window.location.href ="/dashboard";
       }}>Dashboard</button>   */}
      
      
      </div>
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
      
  )

}

function Appbar(){
  const navigate = useNavigate();

  return <div>
    <div>

    <button onClick={()=>{
        navigate("/");
       }}>Landing page</button> 

       <button onClick={()=>{
           navigate("/dashboard");
       }}>Dashboard</button>  
      
    </div>
      
  </div>
}
// this windows.href is not the right way coz page is reloading its not a client side change page is still reloading
// we should use the use navigate hook 


export default App
