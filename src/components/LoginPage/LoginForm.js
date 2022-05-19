import React, { useState } from 'react'
import { Icon } from '../../Icons'

const LoginForm = () => {
    
  return (
    <form>
        <label>E-mail</label>
        <Icon name='user'/>
        <input  className='email' type="email" />
        <label>Password</label>
        <input type="password" />
        <button type='submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm