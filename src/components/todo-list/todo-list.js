import React from 'react'
import ActionButton from './add-remove-button'
import TaskItem from './todo-item'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from "react-redux";

const List = ({ editIndex, setIndex, setTodoText }) => {
    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const onClickConfirmRemove = (removeIndex) => {
        const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?")
        if(confirmRemove) onClickRemove(removeIndex)
    }

    const onClickRemove = (removeIndex) => {
        const newTodoList = todos.filter((item, index) => index !== removeIndex)
        dispatch({type: 'REMOVE_TODO', data: newTodoList, index: removeIndex})
    }

    const isEditting = (index) => index === editIndex && editIndex >= 0;

    const onClick = (index) => {
        const text = todos
        setIndex(index)
        setTodoText(text[index])
    }

    return(
        <ul className="task-list">
            <h1>Tasks</h1>
            {todos.map((item, index) =>
                <TaskItem key={index} isEditting={isEditting(index)}>
                    {item}
                    <ActionButton 
                        name="delete" 
                        onClick={() => onClickConfirmRemove(index)}
                    >
                        Delete
                    </ActionButton>
                    <ActionButton 
                        name="edit" 
                        onClick={() => onClick(index)}
                        edit
                    >
                        Edit
                    </ActionButton>
                    {isEditting(index) ? '| Editting...' : ''}
                </TaskItem>
            )}
        </ul>
    )
}

List.propTypes = {
    editIndex: PropTypes.number.isRequired,
    setIndex: PropTypes.func.isRequired,
    setTodoText: PropTypes.func.isRequired
}

export default List