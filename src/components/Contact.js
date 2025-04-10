import * as React from "react"
import "../styles/components.css"

const Contact = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Medi<span>Care+</span></h1>
        </div>
        <nav className="navigation">
          <ul>
            <li className="bold"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">News</a></li>
          </ul>
        </nav>
        <button className="contact-btn">News</button>
      </div>
    </header>
  )
}

export default Contact