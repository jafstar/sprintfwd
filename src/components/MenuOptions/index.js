import React from 'react'
import {
    Link
} from "react-router-dom"


import './styles.css'

const MenuOptions = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleClickBtn = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="menu-options" onClick={() => handleClickBtn()}>
            <div className="menu-options-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {
                showMenu
                    ? (
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/credits">Credits</Link>
                                </li>
                            </ul>
                        </nav>
                    )
                    : null
            }

        </div>
    )
}

export { MenuOptions as default }