import styled, {css} from 'styled-components'

const ActionButton = styled.button`
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

export default ActionButton;