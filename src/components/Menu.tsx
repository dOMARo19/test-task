import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../routes/Config'


const Menu = () => {
  return (
    <div className = "container">
      <nav className = "menu">
        <ul className = "menu-list">
          {routes.map((route) => (
            <li key={route.path} className = "menu-item">
              <NavLink to={route.path} className = "menu-link">
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
