import React from "react";
import { Link } from "gatsby"


const Contact = () => {
    const text = 'meu texto'

    return(
    <> 
  <nav>
  <Link to="/about" activeStyle={{color: "red"}}>About</Link> |
  <Link to="/contact" activeStyle={{color: "red"}}>Contact</Link>
  </nav>

    <h1>Contact</h1>
    <h2>{ text } contact</h2>
    </>
)
}
export default Contact