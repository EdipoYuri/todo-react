import React from 'react';

function List({todoList, editIndex, onClickEdit, setList}){
    const onClickConfirmRemove = (removeIndex) => {
        const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?");
        if(confirmRemove===true){
            onClickRemove(removeIndex);
        }
        //confirmRemove === true ? onClickRemove(removeIndex) : null;
    }

    const onClickRemove = (removeIndex) => {
        const newTodoList = todoList.filter((item, index)=> index !== removeIndex);
        setList(newTodoList);
    }

    return(
        <ul>
            <h1>Tasks</h1>
            {todoList.map((item, index) =>
                <li key={index}>
                    {item}
                    <button 
                        name="delete" 
                        className="deleteButton" 
                        onClick={() => onClickConfirmRemove(index)}
                    >
                        Delete
                    </button>
                    <button 
                        name="edit" 
                        className="deleteButton editButton"
                        onClick={() => onClickEdit(index)}
                    >
                        Edit
                    </button>
                    {index === editIndex && editIndex >= 0 ? '| Editting...' : ''}
                </li>
            )}
        </ul>
    )
}

export default List;