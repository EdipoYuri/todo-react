import React from 'react'
import * as Styles from './styles'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";

import { IS_EDITING_TODO } from "../../utils/constants";

const List = ({ editIndex, setIndex, setTodoText }) => {
    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const onClickConfirmRemove = (removeIndex) => {
        const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?")
        if(confirmRemove) onClickRemove(removeIndex)
    }

    const onClickRemove = (removeIndex) => {
        const newTodoList = todos.filter((item, index) => index !== removeIndex)
        dispatch({
            type: 'REMOVE_TODO',
            data: newTodoList, 
            index: removeIndex
        })
    }

    const isEditing = (index) => {
        return index === editIndex && editIndex >= IS_EDITING_TODO
    }

    const onClickEdit = (index) => {
        const text = todos
        setIndex(index)
        setTodoText(text[index].text)
    }

    const handleCheckboxChange = (index) => {
        dispatch({type: 'COMPLETE_TODO', index})
    }

    return(
        <ul className="task-list">
            <h1>Tasks</h1>
            {todos.map((item, index) =>
                <Styles.TaskItem key={index} isEditting={() => isEditing(index)}>

                    <Styles.CheckItem 
                        type="checkbox" 
                        onChange={() => handleCheckboxChange(index)} 
                    />

                    <Styles.TodoItem isComplete={item.completed}>
                        {item.text}
                    </Styles.TodoItem>

                    <Styles.ActionButton 
                        name="delete" 
                        onClick={() => onClickConfirmRemove(index)}
                    >
                        Delete
                    </Styles.ActionButton>

                    <Styles.ActionButton 
                        name="edit" 
                        onClick={() => onClickEdit(index)}
                        edit
                    >
                        Edit
                    </Styles.ActionButton>

                    {() => isEditing(index) ? '| Editting...' : ''}
                </Styles.TaskItem>
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