import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/NavBar.css"

export const NavBar = () => {
  return (
    <nav>
      <div>
        <h3>DocStruct</h3>
      </div>

      <div>
        <ul>
          <li><Link to="/visualization">Visualization</Link></li>
          <li><Link to="/generate">Generate Pdf</Link></li>
        </ul>
      </div>
    </nav>
  )
}
