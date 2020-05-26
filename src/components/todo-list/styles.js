import styled, {css} from 'styled-components'
import {TrashAlt} from 'styled-icons/boxicons-solid/TrashAlt'
import {Trash} from 'styled-icons/boxicons-regular/Trash'
import {Pencil} from 'styled-icons/boxicons-regular/Pencil'

// Ícones da lista de To-Do

export const TrashAll = styled(TrashAlt)`
    color: white;
`
export const TrashItem = styled(Trash)`
    color: white;
`
export const EditPencil = styled(Pencil)`
    color: white;
`

export const ActionButton = styled.button`
    width: 40px;
    height: 40px;
    float: right;
    margin-right: 20px;
    margin-bottom: 10px;
    
    outline: none;
    border: none;
    border-radius: 20px;

    background-color: #ff1100;

    &:hover{
        background-color: crimson;
    }

    ${props => props.edit && css`
        background-color: #00a62c;

        &:hover{
            background-color: #01701f;
        }
    `}
`

export const ClearAll = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ClearAllBtn = styled.button`
    width: 40px;
    height: 40px;
    outline:none;

    margin-left: -40px;
    border-radius: 20px;
    border:none;
    background-color:#ff1100;

    &:hover{
        background-color: #cf0e00;
    }
`

export const TodoList = styled.ul`
    width: 40%;
    height: 70vh;
    margin-top: 60px;
    margin-left: 25vw;
    padding-top: 10px;
    position: relative;
  
    border-radius: 15px;
  
    background-color: aliceblue;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    font-family: 'Lemonada', cursive;

    &:first-child{
        color:purple;
    }
`

export const TodoItem = styled.li`
    width: 85%;
    margin-left: 20px;
    margin-top: 20px;
    list-style-type: none;

    ${props => props.isEditing && css`
        color: darkcyan;
    `}
`

export const TodoText = styled.span`
    ${props => props.isComplete && css`
        text-decoration: line-through;
        color: green;
    `}
`

export const CheckItem = styled.input`
`