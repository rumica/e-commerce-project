import React, { useState } from 'react'
import '../../style.css'

const LoginForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sub')
  }  
    
  return (
    <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input  className='email' type="email" />
        <label>Password</label>
        <input type="password" />
        <button type='submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm