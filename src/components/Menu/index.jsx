import React from 'react'
import { Link } from 'gatsby'
const Menu = () => (

    <nav>
  <Link to="/about" activeStyle={{color: "red"}}>About</Link> |
  <Link to="/contact" activeStyle={{color: "red"}}>Contact</Link>
  </nav>
)

export default Menu