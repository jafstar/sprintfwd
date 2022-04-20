import React from "react"
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import Layout from './components/Layout'

import Home from './pages/home'
import About from './pages/about'
import Credits from './pages/credits'
import Err404 from './pages/err404'
import Teams from './pages/teams'
import TeamMembers from './pages/teammembers'
import ToDos from './pages/todos'
import Members from "./pages/members"



const App = () => {

    const currentLocation = useLocation()

    return (
        <>


            <div id="app-shell" className={`page-${currentLocation.pathname === "/" ? "home" : currentLocation.pathname.split('/')[1]}`}>

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="credits" element={<Credits />} />
                        <Route path="members" element={<Members />} />
                        <Route path="teams/:id" element={<TeamMembers />} />
                        <Route path="teams" element={<Teams />} />
                        <Route path="todos" element={<ToDos />} />
                        <Route path="*" element={<Err404 />} />
                    </Route>
                </Routes>
            </div>

            <div id="app-shell-bg"></div>
        </>
    );
}



export { App as default }