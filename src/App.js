import React, {useState} from 'react';
import './App.css';


function App() {
  const [todoItem, setTodoItem]=useState('');
  const [todoList, setTodoList]=useState([]);
  const [editIndex, setIndex]=useState(-1);

  const onChangeUpdate = (event) => {
    setTodoItem(event.target.value);
    console.log(todoItem);
  }

  const onSubmitAddEdit = (event) => {
    event.preventDefault();

    editIndex < 0 ? (
      setTodoList([...todoList, todoItem])
    ) : (
      saveTask()
    )

    setTodoItem('');
  }

  const onClickEdit = (index) => {
    setTodoItem(todoList[index]);
    setIndex(index);
  }

  const saveTask = () => {
    const newList = todoList.map((item, index) => index !== editIndex ? item : todoItem);
    setTodoList(newList);
    setIndex(-1);
  }

  const onClickConfirmRemove = (removeIndex) => {
    const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?");
    if(confirmRemove===true){
      onClickRemove(removeIndex);
    }
    //confirmRemove === true ? onClickRemove(removeIndex) : null;
  }

  const onClickRemove = (removeIndex) => {
    const newTodoList = todoList.filter((item, index)=> index !== removeIndex);
    setTodoList(newTodoList);
  }

  return (
    <div id="main-page" >
      <form className="addTaskForm" onSubmit={onSubmitAddEdit}>
        <input
          type="text"
          name="inputTask"
          className="inputTask"
          onChange={onChangeUpdate}
          value={todoItem}
        />

        {todoItem !=='' ? (
          <button className="addButton">
            {editIndex < 0 ? 'Add' : 'Edit'}
          </button>
        ) : (
          null
        )
}
      </form>

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
              className="deleteButton" 
              onClick={() => onClickEdit(index)}
              >
                Edit
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
