import React from 'react'
import ActionButton from '../Styles/ActionButton'
import TaskItem from '../Styles/TaskItem'
import PropTypes from 'prop-types'

const List = ({todoList, editIndex, onClickEdit, setList}) => {
    const onClickConfirmRemove = (removeIndex) => {
        const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?")
        if(confirmRemove===true){
            onClickRemove(removeIndex)
        }
        //confirmRemove === true ? onClickRemove(removeIndex) : null
    }

    const onClickRemove = (removeIndex) => {
        const newTodoList = todoList.filter((item, index)=> index !== removeIndex)
        setList(newTodoList)
    }

    return(
        <ul className="task-list">
            <h1>Tasks</h1>
            {todoList.map((item, index) =>
                <TaskItem key={index} >
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
                    {index === editIndex && editIndex >= 0 ? '| Editting...' : ''}
                </TaskItem>
            )}
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