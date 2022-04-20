import React from 'react'
import {
    Link
} from "react-router-dom"
import "./styles.css"

const Home = () => {

    return (
        <div id="home">

            <div id="enter-link" className="btn-outline">
                <Link to="/todos">Enter</Link>
            </div>

        </div>
    )
}

export { Home as default }

