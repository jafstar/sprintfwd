import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
    Link
} from "react-router-dom"

import './styles.css'

import { ToDosContext } from '../../components/Layout/LayoutToDo'


const ToDos = () => {
    const ctx = React.useContext(ToDosContext)


    const [currentInput, setCurrentInput] = React.useState("");
    const [currentListType, setcurrentListType] = React.useState("active")

    const handleAddBtn = () => {

        if (currentInput.trim() === "") {
            alert("Please enter a title");
            return
        }

        const newItem = {
            uid: uuidv4(),
            title: currentInput
        }
        ctx.setTodoList([
            ...ctx.todoList,
            newItem
        ])

        setCurrentInput("");
    }

    const handleInput = (val) => {
        setCurrentInput(val);
    }

    const handleBtnSwitch = (listType) => {
        setcurrentListType(listType)
    }

    const handleCompleteItem = (itemUID) => {
        ctx.completeTodoItem(itemUID)
        setcurrentListType("archive")

    }



    return (
        <div className="todo-list">

            {/* <div id="todo-completed">
                <span> You have completed {completedList.length} item{completedList.length === 1 ? "" : "s"}</span>
            </div> */}
            <label htmlFor="inputTodo">Make Your Day</label>
            <div id="todo-inputs" className="flex">

                <input
                    className="input-text"
                    type="search"
                    name="inputTodo"
                    size="20"
                    placeholder='Do something epic...'
                    value={currentInput}
                    onChange={(evt) => handleInput(evt.target.value)}
                />
                <button className="btn-outline" onClick={handleAddBtn}>Add</button>
            </div>

            <div className="btn-switch-shell">
                <button onClick={() => handleBtnSwitch('active')} className={`btn-switch ${currentListType === "active" ? 'switch-active' : 'switch-inactive'}`}>To Do</button>
                <button onClick={() => handleBtnSwitch('archive')} className={`btn-switch ${currentListType === "archive" ? 'switch-active' : 'switch-inactive'}`}>Completed</button>
            </div>
            <div>


                {
                    currentListType === "active" && ctx.todoList.length >= 1 && ctx.todoList.map((itm, idx) => {
                        return (
                            <div className="list-item-shell" key={`table-row-${idx}`}>

                                <div className="list-item">
                                    <div className='list-item-header'>
                                        <div className="flex">
                                            <div className='list-item-col-left'>

                                                <label className="checkbox-shell">
                                                    <input type="checkbox" onClick={() => handleCompleteItem(itm.uid)} />
                                                    <span className="checkbox-span"></span>
                                                </label>

                                            </div>
                                            <div className='list-item-col-center'>
                                                <Link to={`/todos/edit/${itm.uid}`}>
                                                    <h3>{itm.title}</h3>
                                                    <div className='flex space-between'>
                                                        <span className="todo-date">{new Date().toDateString()}</span>

                                                    </div>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>

                                </div>


                            </div>
                        )
                    })
                }

                {
                    currentListType === "active" && ctx.todoList.length === 0
                        ? (
                            <div className="list-item-none">No items in the list!</div>
                        )
                        : null
                }
            </div>


            <div>
                <ul>
                    {
                        currentListType === "archive" && ctx.completedList.length >= 1 && ctx.completedList.map((itm, idx) => {
                            return (
                                <li key={`completed-item-idx`}>
                                    <div className="list-item">
                                        <div className='list-item-header'>


                                            <div className='flex space-between align-center w100'>
                                                <h3>{itm.title}</h3>
                                                <span className="todo-date">{new Date().toDateString()}</span>

                                            </div>




                                        </div>

                                    </div >

                                </li>
                            )
                        })
                    }
                </ul>
                {
                    currentListType === "archive" && ctx.completedList.length === 0
                        ? (
                            <div className="list-item-none">You need to do something!</div>
                        )
                        : null
                }
            </div>


        </div>
    )


}

export { ToDos as default }