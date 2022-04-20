import React from "react"
import {
    NavLink,
    Link,
    useLocation
} from "react-router-dom"

import MenuOptions from '../../components/MenuOptions'

import './styles.css'

const Header = () => {

    const routeLocation = useLocation()

    const [currentLocation, setCurrentLocation] = React.useState(null)


    React.useEffect(() => {
        console.log(routeLocation)
        setCurrentLocation(routeLocation)
    }, [routeLocation])
    return (
        <div>
            <header className="flex space-between">
                <div id="logo">
                    <h1>
                        <Link to="/">Sprint <span>&raquo;</span>Fwd</Link>
                    </h1>
                </div>

                <div>
                    <MenuOptions />
                </div>

            </header>

            <div id="navigation-main">
                {
                    currentLocation && currentLocation.pathname === "/"
                        ? null
                        : (
                            <nav>
                                <ul className="nav-list">
                                    <li>

                                        <NavLink to="/todos">
                                            <div className="menu-icon-text">
                                                <i className="gg-play-list-check"></i>
                                                <span>To Do's</span>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/teams">
                                            <div className="menu-icon-text">
                                                <i className="gg-trophy"></i>
                                                <span>Teams</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/members">
                                            <div className="menu-icon-text">
                                                <i className="gg-user-list"></i>
                                                <span>Members</span>
                                            </div>
                                        </NavLink>
                                    </li>





                                </ul>
                            </nav>
                        )
                }

            </div>
        </div>
    );
}

export { Header as default }