import styled, {css} from 'styled-components'

const TaskItem = styled.li`
    width: 85%;
    margin-left: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
    list-style-type: none;

    ${props => props.isEditting && css`
        color: darkcyan;
    `}
`

export default TaskItem