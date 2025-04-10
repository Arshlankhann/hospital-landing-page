import * as React from "react"
import "../styles/components.css"

const Specialist = () => {
    return (
        <>
            <div className="specialist">
                <h1>We Have The Best Specialist</h1><h3>We have a wide experience in experience design and strategy,<br></br> with locally-rooted knowledge.</h3>

                <div className="scontainer">
                    <div className="dr"><div className="blueimg"></div><h1>Dr. Awaatif Al</h1><h3>Dental Care</h3></div>
                    <div className="dr"><div className="blueimg"></div><h1>Dr. Filipa Gaspar</h1><h3>Cardiology</h3></div>
                    <div className="dr"><div className="blueimg"></div><h1>Dr. Sukhmeet Gorae</h1><h3>Neurological</h3></div>
                    <div className="dr"><div className="blueimg"></div><h1>Dr. Siri Jakobsson</h1><h3>Prediatrics</h3></div>
                </div>
            </div>
        </>
    )
}
export default Specialist