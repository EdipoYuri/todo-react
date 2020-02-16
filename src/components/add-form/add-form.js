import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";

const Form = ({onSubmit, setItem, todoItem, editIndex}) => {
    const [todoText, setTodoText] = useState('')

    const dispatch = useDispatch()

    const addNewTodo = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_TODO', title: todoText})
        setTodoText('')
    }

    return(
        <form className="addTaskForm" onSubmit={addNewTodo}>
            <input
                type="text"
                name="inputTask"
                className="inputTask"
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />

            <button className="addButton" disabled={!todoText}>
                {editIndex < 0 ? 'Add' : 'Save'}
            </button>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    setItem: PropTypes.func.isRequired,
    todoItem: PropTypes.string.isRequired,
    editIndex: PropTypes.number.isRequired
}

export default Form