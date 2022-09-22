import React from "react"
import { Link } from "gatsby"


const About = () => {
    const text = 'meu texto'

    return(
    <> 
     <nav>
  <Link to="/about" activeStyle={{color: "red"}}>About</Link> |
  <Link to="/contact" activeStyle={{color: "red"}}>Contact</Link>
  </nav>

    <h1>about</h1>
    <h2>{ text }</h2>
    </>
)
}
export default About