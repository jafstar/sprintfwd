import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
    Link
} from "react-router-dom"

import './styles.css'

import { ToDosContext } from '../../App'


const ToDos = () => {
    const ctx = React.useContext(ToDosContext)


    const [completedList, setCompletedList] = React.useState([]);
    const [currentInput, setCurrentInput] = React.useState("");

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

    const completeTodoItem = (completedIdx) => {
        setCompletedList([
            ...completedList,
            { ...ctx.todoList[completedIdx] }
        ])
    }




    return (
        <div className="todo-list">

            {/* <div id="todo-completed">
                <span> You have completed {completedList.length} item{completedList.length === 1 ? "" : "s"}</span>
            </div> */}
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
            <ul>


                {
                    ctx.todoList.length >= 1 && ctx.todoList.map((itm, idx) => {
                        return (
                            <div className="list-item-shell" key={`table-row-${idx}`}>
                                <Link to={{
                                    pathname: `/todos/edit/${itm.uid}`

                                }}>
                                    <div className="list-item">
                                        <div className='list-item-header'>
                                            <div className="flex">
                                                <div className='list-item-col-left'>
                                                    <label className="checkbox-shell">
                                                        <input type="checkbox" onClick={() => completeTodoItem(idx)} />
                                                        <span className="checkbox-span"></span>
                                                    </label>
                                                </div>
                                                <div className='list-item-col-center'>
                                                    <h3>{itm.title}</h3>
                                                    <div className='flex space-between'>
                                                        <span className="todo-date">{new Date().toDateString()}</span>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='list-item-col-right'>

                                            </div>

                                        </div>

                                    </div >
                                </Link>

                            </div>
                        )
                    })
                }

                {
                    ctx.todoList.length === 0
                        ? (
                            <div className="list-item-none">No items in the list!</div>
                        )
                        : null
                }
            </ul>




        </div>
    )


}

export { ToDos as default }