import React from 'react'
import { Link } from 'react-router-dom'
import '../../style.css'

const Header = () => {
  return (
   <div className='header'>
       <div className="logo">eCommerce</div>
       <div>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
       </div>
   </div>
  )
}

export default Header