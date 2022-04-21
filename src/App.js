import React from "react"
import { v4 as uuidv4 } from 'uuid'

import {
    Routes,
    Route,
    useLocation
} from "react-router-dom"

import LayoutStandard from './components/Layout/LayoutStandard'
// import LayoutToDo from './components/Layout/LayoutToDo'

import Home from './pages/home'
import About from './pages/about'
import Credits from './pages/credits'
import Err404 from './pages/err404'
import Teams from './pages/teams'
import TeamMembers from './pages/teammembers'
import ToDos from './pages/todos'
import ToDosEdit from './pages/todosedit'
import Members from "./pages/members"

export const ToDosContext = React.createContext()


const App = () => {

    const currentLocation = useLocation()
    const [completedList, setCompletedList] = React.useState([])
    const [todoList, setTodoList] = React.useState([
        {
            uid: uuidv4(),
            title: "First Test",
            completed: false
        },
        {
            uid: uuidv4(),
            title: "Second Test",
            completed: false
        },
        {
            uid: uuidv4(),
            title: "Third Test",
            completed: false
        }
    ])

    const updateList = (updatedItem) => {

        // console.log('updatedItem: ', updatedItem)

        if (updatedItem && todoList && todoList.length > 0) {
            const newList = todoList.map(itm => {
                if (itm.uid === updatedItem.uid) {
                    return { ...updatedItem }
                } else {
                    return { ...itm }
                }
            })

            setTodoList([...newList])
        }
    }

    const deleteTodoItem = (deleteUID) => {
        const newList = todoList.filter((itm) => {
            return itm.uid !== deleteUID
        })

        setTodoList([...newList])

    }

    const completeTodoItem = (completedUID) => {

        const completedItem = todoList.filter(itm => {
            return itm.uid === completedUID
        })

        if (completedItem.length > 0) {
            setCompletedList([
                ...completedList,
                {
                    ...completedItem[0],
                    completed: true
                }
            ])

            deleteTodoItem(completedUID)
        }

    }



    return (
        <>
            <div id="app-shell" className={`page-${currentLocation.pathname === "/" ? "home" : currentLocation.pathname.split('/')[1]}`}>
                <ToDosContext.Provider
                    value={{
                        todoList,
                        setTodoList,
                        updateList,
                        deleteTodoItem,
                        completedList,
                        completeTodoItem
                    }}
                >
                    <Routes>
                        <Route path="/" element={<LayoutStandard />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="credits" element={<Credits />} />
                            <Route path="members" element={<Members />} />
                            <Route path="teams/:id" element={<TeamMembers />} />
                            <Route path="teams" element={<Teams />} />
                            <Route path="*" element={<Err404 />} />
                        </Route>
                        <Route path="/todos" element={<LayoutStandard />}>
                            <Route index element={<ToDos />} />
                            <Route path="edit/:id" element={<ToDosEdit />} />
                        </Route>
                    </Routes>
                </ToDosContext.Provider>
            </div>
            <div id="app-shell-bg"></div>
        </>
    );
}



export { App as default }