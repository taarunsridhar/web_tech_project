import React from "react"
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {
    return (
        <div className="homepage">
            <div id="div1">
            <a href="http://localhost:3008">Weight Tracker</a>
            </div>

            <div id="div2">
            <a href="http://localhost:3000">Expense Tracker</a>
            </div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage