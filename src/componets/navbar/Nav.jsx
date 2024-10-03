import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Nav.css"
function Nav() {
  return (
        <div>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Signup">Sign Up</Link>
        </nav>
        <Outlet/>
        </div>
        )      
}

export default Nav