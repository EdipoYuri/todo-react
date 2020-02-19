import React from "react"
import styled, {css} from 'styled-components'

const Header = styled.div`
    text-align: center;
    margin-left: -40px;
    margin-bottom: 30px;
`

const HeaderText = styled.div`
    width: 100%;


    ${props=>props.isDate && css`
        color: purple;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 40%);
    `}
`

const data = new Date()
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const todayDate = `${weekDays[data.getDay()]}, ${data.getDate()} de ${months[data.getMonth()]} de ${data.getFullYear()}`

const TodoHeader = () => {
    return(
        <Header>
            <HeaderText isDate>{todayDate}</HeaderText>
            <HeaderText>Lista de Tarefas</HeaderText>
        </Header>
    )
}

export default TodoHeader