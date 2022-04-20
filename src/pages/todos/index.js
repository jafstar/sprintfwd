import * as React from 'react';
import './styles.css'

const ToDos = () => {

    const [todoList, setTodoList] = React.useState([]);
    const [completedList, setCompletedList] = React.useState([]);
    const [currentInput, setCurrentInput] = React.useState("");

    const handleAddBtn = () => {

        if (currentInput.trim() === "") {
            alert("Please enter a title");
            return
        }

        const newItem = {
            title: currentInput
        }
        setTodoList([
            ...todoList,
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
            { ...todoList[completedIdx] }
        ])
        // setTimeout(() => {
        //     const tmpList = todoList.filter((itm, idx) => {
        //         return idx !== completedIdx
        //     })

        //     setTodoList([
        //         ...tmpList
        //     ])

        //     setCompletedList([
        //         ...completedList,
        //         { ...todoList[completedIdx] }
        //     ])


        // }, 200)

    }

    const deleteTodoItem = (deleteIdx) => {
        const tmpList = todoList.filter((_, idx) => {
            return idx !== deleteIdx
        })

        setTodoList([
            ...tmpList
        ])
    }

    React.useEffect(() => {
        setTodoList([{
            title: "First Test",
            desc: "A test todo item."
        }])
    }, [])

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
                    todoList.length >= 1 && todoList.map((itm, idx) => {
                        return (
                            <div key={`table-row-${idx}`}>
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
                                            <span onClick={() => deleteTodoItem(idx)}>X</span>
                                        </div>

                                    </div>

                                </div >

                            </div>
                        )
                    })
                }

                {
                    todoList.length === 0
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