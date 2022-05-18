import React from 'react'
import '../../style.css'

const Header = () => {
  return (
   <div className='header'>
       <div className="logo">eCommerce</div>
       <div>
           <button>Login</button>
           <button>Signup</button>
       </div>
   </div>
  )
}

export default Header