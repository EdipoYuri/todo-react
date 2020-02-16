import React from 'react'
import ActionButton from './add-remove-button'
import TaskItem from './todo-item'
import PropTypes from 'prop-types'

import { useSelector } from "react-redux";

const List = ({todoList, editIndex, onClickEdit, setList}) => {
    const todos = useSelector(state => state.data)

    const onClickConfirmRemove = (removeIndex) => {
        const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?")
        if(confirmRemove) onClickRemove(removeIndex)
    }

    const onClickRemove = (removeIndex) => {
        const newTodoList = todoList.filter((item, index)=> index !== removeIndex)
        setList(newTodoList)
    }

    const isEditting = (index) => index === editIndex && editIndex >= 0;

    return(
        <ul className="task-list">
            <h1>Tasks</h1>
            {todoList.map((item, index) =>
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
                        onClick={() => onClickEdit(index)}
                        edit
                    >
                        Edit
                    </ActionButton>
                    {isEditting(index) ? '| Editting...' : ''}
                </TaskItem>
            )}

            <ul>
            {todos.map((todo,index) => <li key={index}>{todo}</li>)}
            </ul>
        </ul>
    )
}

List.propTypes = {
    todoList: PropTypes.array.isRequired,
    editIndex: PropTypes.number.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    setList: PropTypes.func.isRequired
}

export default List