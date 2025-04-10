import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/components.css"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h3>Welcome to MediCare+ Clinic</h3>
          <h1>Best Specialists</h1>
          <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
          <div className="hero-buttons">
            <button className="primary-btn">Make an Appointment</button>
            <button className="secondary-btn">Departments</button>
          </div>
        </div>
        <div className="hero-image">
          <StaticImage
            src="../images/doctor.png"
            alt="Doctor"
            placeholder="blurred"
            layout="constrained"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero