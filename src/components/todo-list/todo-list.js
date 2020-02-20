import React, {useState} from 'react'
import * as S from './styles'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";

import { IS_EDITING_TODO, IS_ADDING_TODO } from "../../utils/constants";
import TodoHeader from './todo-header'
import InputForm from '../add-form/add-form'

const List = () => {
    const [editIndex, setEditIndex] = useState(IS_ADDING_TODO)
    const [todoText, setTodoText] = useState('')

    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const setIndex = (index) => {
        setEditIndex(index)
    }

    const onClickConfirmRemove = (removeIndex) => {
        const confirmRemove = window.confirm("Deseja realmente apagar essa tarefa?")
        if(confirmRemove) onClickRemove(removeIndex)
    }

    const onClickRemove = (removeIndex) => {
        const newTodoList = todos.filter((item, index) => index !== removeIndex)
        dispatch({
            type: 'REMOVE_TODO',
            data: newTodoList, 
            index: removeIndex
        })
    }

    const isEditing = (index) => index === editIndex && editIndex >= IS_EDITING_TODO

    const onClickEdit = (index) => {
        const text = todos
        setEditIndex(index)
        setTodoText(text[index].text)
    }

    const handleCheckboxChange = (index) => {
        dispatch({type: 'COMPLETE_TODO', index})
    }

    const onClickClearAll = () => {
        dispatch({type: 'CLEAR_ALL'})
    }

    return(
        <>
            <S.TodoList>
                <TodoHeader />
                {todos.map((item, index) =>
                    <S.TodoItem key={index} isEditing={isEditing(index)}>

                        <S.CheckItem 
                            type="checkbox" 
                            onChange={() => handleCheckboxChange(index)} 
                        />

                        <S.TodoText isComplete={item.completed}>
                            {item.text}
                        </S.TodoText>

                        <S.ActionButton 
                            name="delete" 
                            onClick={() => onClickConfirmRemove(index)}
                        >
                            <S.TrashItem />
                        </S.ActionButton>

                        <S.ActionButton 
                            name="edit" 
                            onClick={() => onClickEdit(index)}
                            edit
                        >
                            <S.EditPencil />
                        </S.ActionButton>

                        {isEditing(index) ? '| Editting...' : ''}
                    </S.TodoItem>
                )}
                {todos.length !== 0 ? (
                    <S.ClearAllBtn onClick={onClickClearAll}>
                        <S.TrashAll />
                    </S.ClearAllBtn>
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