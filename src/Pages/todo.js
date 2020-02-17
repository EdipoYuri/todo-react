import React, {useState} from 'react'

import Form from '../components/add-form/add-form'
import List from '../components/todo-list/todo-list'

const Todo = () =>{
    const [editIndex, setIndex] = useState(-1)
    const [todoText, setTodoText] = useState('')

    return(
        <div>
            <Form
                editIndex={editIndex}
                setIndex={setIndex}
                todoText={todoText}
                setTodoText={setTodoText}
            />

            <List 
                editIndex={editIndex}
                setIndex={setIndex}
                setTodoText={setTodoText}
            />
        </div>
    )
}

export default Todo