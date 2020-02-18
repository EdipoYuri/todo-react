import styled, {css} from 'styled-components'

export const ActionButton = styled.button`
    height: 30px;
    float: right;
    margin-right: 20px;
    margin-bottom: 10px;
    outline: none;

    border: 1px solid #000;
    border-radius: 15px;
    background-color: aliceblue;
    font-family: 'Roboto Mono', monospace;

    &:hover{
        background-color: crimson;
        color: white;
        border: 1px solid crimson;
    }

    ${props => props.edit && css`
        &:hover{
            background-color: darkcyan;
            border: 1px solid darkcyan;
        }
    `}
`

export const TaskItem = styled.li`
    width: 85%;
    margin-left: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
    list-style-type: none;

    ${props => props.isEditting && css`
        color: darkcyan;
    `}
`

export const TodoItem = styled.span`
    ${props => props.isComplete && css`
        text-decoration: line-through;
        color: green;
    `}
`

export const CheckItem = styled.input`

`