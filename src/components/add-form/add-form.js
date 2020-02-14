import React from 'react';
import PropTypes from 'prop-types'

const Form = ({onSubmit, setItem, todoItem, editIndex}) => {
    const onChangeUpdate = (event) => {
        setItem(event.target.value)
    }

    return(
        <form className="addTaskForm" onSubmit={onSubmit}>
            <input
                type="text"
                name="inputTask"
                className="inputTask"
                onChange={onChangeUpdate}
                value={todoItem}
            />

            <button className="addButton" disabled={!todoItem}>
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