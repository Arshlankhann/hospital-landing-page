import * as React from "react"
import "../styles/components.css"

const Subscribe = ()=>{
    return(
        <>
        <div className="subcontainer">
            <div className="subbox">
                <h2>Subscribe to Newsletter</h2>
                <p>We have a wide experience in experience design and strategy,</p>
                <form>
                <input placeholder="Enter your email address"></input>
                <button>Send Now</button>
                </form>
            </div>
        </div>
        </>
    )
}


export default Subscribe