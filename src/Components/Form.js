import React from 'react';

function Form({onSubmit, setItem, todoItem, editIndex}){
    const onChangeUpdate = (event) => {
        setItem(event.target.value);
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

            {todoItem !=='' ? (
                <button className="addButton">
                    {editIndex < 0 ? 'Add' : 'Save'}
                </button>
            ) : (
                null
            )}
        </form>
    )
}

export default Form;