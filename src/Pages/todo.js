import React, {useState} from 'react'

import Form from '../components/add-form/add-form'
import List from '../components/todo-list/todo-list'
import { IS_ADDING_TODO } from "../utils/constants";

const Todo = () =>{
    const [editIndex, setEditIndex] = useState(IS_ADDING_TODO)
    const [todoText, setTodoText] = useState('')

    const setIndex = (index) => {
        setEditIndex(index)
    }

    return(
        <div>
            <List 
                editIndex={editIndex}
                setIndex={setIndex}
                setTodoText={setTodoText}
            />
        </div>
    )
}

export default Todo