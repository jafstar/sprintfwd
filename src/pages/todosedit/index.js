import React from 'react'

import {
    Link,
    useParams,
    useNavigate
} from "react-router-dom"
import { ToDosContext } from '../../App'


const ToDosEdit = () => {

    const ctx = React.useContext(ToDosContext)
    const params = useParams()
    let navigate = useNavigate();


    const [currentToDo, setCurrentToDo] = React.useState(null)
    const [currentInput, setCurrentInput] = React.useState("");
    const [currentHeaderText, setCurrentHeaderText] = React.useState("Edit")

    const handleInput = (val) => {
        setCurrentInput(val);
    }

    const handleEditBtn = () => {

        if (currentInput.trim() === "") {
            alert("Please enter a title");
            return
        }

        const editItem = {
            uid: params.id,
            title: currentInput
        }

        // console.log("Edit Item: ", editItem)

        ctx.updateList(editItem)

    }

    React.useEffect(() => {
        if (ctx?.todoList && ctx.todoList.length > 0) {



            const tmpToDo = ctx.todoList.filter((itm, idx) => {
                return itm.uid === params.id
            })


            if (tmpToDo.length > 0) {
                setCurrentToDo({ ...tmpToDo[0] })
                setCurrentInput(tmpToDo[0].title)
            }

        }
    }, [ctx])

    const localDelete = (uid) => {
        const confirmBool = confirm("Are you sure you want to delete this?")

        if (confirmBool) {
            setCurrentInput("")
            setCurrentToDo(null)
            ctx.deleteTodoItem(uid)
            setCurrentHeaderText("Successfully deleted item")
            navigate("/todos")
        }

    }


    return (
        <div>
            <div className="page-header">
                <div className="back-btn">
                    <Link to="/todos">
                        <span>&lt; Back</span>
                    </Link>
                </div>


            </div>

            <h2 className="txt-large">{currentHeaderText}</h2>
            {
                currentToDo
                    ? (<>
                        <div id="todo-inputs" className="flex">
                            <input
                                className="input-text"
                                type="search"
                                name="inputTodo"
                                size="20"
                                placeholder='Edit something epic...'
                                value={currentInput}
                                onChange={(evt) => handleInput(evt.target.value)}
                            />
                            <button className="btn-outline" onClick={handleEditBtn}>Update</button>
                        </div>
                        <br />

                        <div className="delete-btn-shell">
                            {
                                currentToDo ? <button className="btn-clear" onClick={() => localDelete(currentToDo.uid)}>X &nbsp; &nbsp; Delete</button> : null
                            }
                        </div>


                    </>
                    )
                    : null
            }
        </div>
    )

}

export { ToDosEdit as default }