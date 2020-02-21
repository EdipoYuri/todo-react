import React, {useState} from 'react'
import * as S from '../components/todo-list/styles'
import { useSelector, useDispatch } from "react-redux";

import { IS_ADDING_TODO } from "../utils/constants";
import TodoHeader from '../components/todo-list/todo-header'
import TodoList from '../components/todo-list'
import InputForm from '../components/add-form'

const List = () => {
    const [editIndex, setEditIndex] = useState(IS_ADDING_TODO)
    const [todoText, setTodoText] = useState('')

    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const setIndex = (index) => {
        setEditIndex(index)
    }

    const onClickClearAll = () => {
        dispatch({type: 'CLEAR_ALL'})
    }

    return(
        <>
            <S.TodoList>
                <TodoHeader />

                <TodoList 
                    editIndex={editIndex}
                    setIndex={setIndex}
                    setTodoText={setTodoText}
                />

                {todos.length !== 0 ? (
                    <S.ClearAll>
                        <S.ClearAllBtn onClick={onClickClearAll}>
                            <S.TrashAll />
                        </S.ClearAllBtn>
                    </S.ClearAll>
                ) : (
                    null
                )}  

                <InputForm
                    editIndex={editIndex}
                    setIndex={setIndex}
                    todoText={todoText}
                    setTodoText={setTodoText}
                />
            </S.TodoList>            
        </>
    )
}

export default List