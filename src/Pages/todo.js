import React, {useState} from 'react'

import Form from '../components/add-form/add-form'
import List from '../components/todo-list/todo-list'
import { IS_ADDING_TODO } from "../utils/constants";

const Todo = () =>{
    const [editIndex, setEditIndex] = useState(IS_ADDING_TODO)
    const [todoText, setTodoText] = useState('')

    /*
    useEffect()
    memo()
    FEITO - limpar o código; deixar no padrão do style guide
    FEITO - numeros mágicos
    FEITO - excluir todos os to-do's
    adicionar typescript no projeto
    */

    const setIndex = (index) => {
        setEditIndex(index)
    }

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