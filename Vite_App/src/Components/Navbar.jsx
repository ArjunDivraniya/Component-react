import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink to="/meal" className={(e)=>{return e.isActive?"Active":"no"}}><div className="navtext">Meal</div></NavLink>
      <NavLink to="/coketail" className={(e)=>{return e.isActive?"Active":"no"}}><div className="navtext">Coketail</div></NavLink>
      <NavLink to="/potter" className={(e)=>{return e.isActive?"Active":"no"}}><div className="navtext">Potter</div></NavLink>
      <NavLink to="/indianbank" className={(e)=>{return e.isActive?"Active":"no"}}><div className="navtext">Indian_Bank</div></NavLink>
    </div>
  )
}

export default Navbar
