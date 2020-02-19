import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

import { IS_ADDING_TODO } from '../../utils/constants'

const Form = ({editIndex, setIndex, todoText, setTodoText}) => {
    const dispatch = useDispatch()
    
    const onSubmit = (event) => {
        event.preventDefault()
        if (editIndex === IS_ADDING_TODO){
          
            dispatch({type: 'ADD_TODO', title: todoText})
        } else {
            dispatch({
                type: 'EDIT_TODO', 
                title: todoText, 
                index: editIndex
            })
        }

        setIndex(IS_ADDING_TODO)
        setTodoText('')
    }

    return(
        <form className="addTaskForm" onSubmit={onSubmit}>
            <input
                type="text"
                name="inputTask"
                className="inputTask"
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />

            <button className="addButton" disabled={!todoText}>
                {(editIndex < 0) 
                    ? 'Add' 
                    : 'Save'
                }
            </button>
        </form>
    )
}

Form.propTypes = {
    editIndex: PropTypes.number.isRequired,
    setIndex: PropTypes.func.isRequired,
    todoText: PropTypes.string.isRequired,
    setTodoText: PropTypes.func.isRequired
}

export default Form