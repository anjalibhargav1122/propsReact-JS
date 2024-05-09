import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>


      <ul className='list-unstyled d-flex justify-content-evenly mt-5'><NavLink className='text-decoration-none' to='/'>
        <li>Home</li></NavLink>
        <NavLink className='text-decoration-none' to='/about'>
          <li>About</li></NavLink>
        <NavLink className='text-decoration-none' to='/contact'>

          <li>Contact</li></NavLink>

      </ul>



    </div>
  )
}

export default Header