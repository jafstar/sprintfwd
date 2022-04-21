import React from "react"
import { v4 as uuidv4 } from 'uuid'

import {
    Outlet
} from "react-router-dom"


import Header from "./Header";

export const ToDosContext = React.createContext()

const LayoutToDo = () => {

    const [todoList, setTodoList] = React.useState([{
        uid: uuidv4(),
        title: "First Test",
        desc: "A test todo item."
    }])

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




    return (
        <>
            <ToDosContext.Provider
                value={{
                    todoList,
                    setTodoList,
                    updateList,
                    deleteTodoItem
                }}
            >
                <Header />
                <main>
                    <Outlet />
                </main>
            </ToDosContext.Provider>
        </>
    );
}

export { LayoutToDo as default }