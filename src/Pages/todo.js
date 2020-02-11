import React, {useState} from 'react'

import Form from '../Components/Form/Form'
import List from '../Components/List/List'

const Todo = () =>{
    const [todoItem, setTodoItem]=useState('')
    const [todoList, setTodoList]=useState([])
    const [editIndex, setIndex]=useState(-1)

    const onSubmit = (event) => {
        event.preventDefault()

        editIndex < 0 ? (
            setTodoList([...todoList, todoItem])
        ) : (
            saveTask()
        )

        setTodoItem('')
    }

    const onClickEdit = (index) => {
        setTodoItem(todoList[index])
        setIndex(index)
    }

    const saveTask = () => {
        const newList = todoList.map((item, index) => index !== editIndex ? item : todoItem)
        setTodoList(newList)
        setIndex(-1)
    } 

    return(
        <div>
            <Form 
                onSubmit={onSubmit}
                setItem={setTodoItem}
                todoItem={todoItem}
                editIndex={editIndex}
            />

            <List 
                todoList={todoList}
                editIndex={editIndex}
                onClickEdit={onClickEdit}
                setList={setTodoList}
            />
        </div>
    )
}

export default Todo