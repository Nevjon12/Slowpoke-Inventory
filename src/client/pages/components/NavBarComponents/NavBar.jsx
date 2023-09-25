import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar(){

  return(
    <>
      <Link to={'/login'}>Login</Link>
      <Link to={'/home'}>Home</Link>
      <Link to={'/settings'}>Settings</Link>
      <br></br>
    </>
  )
}