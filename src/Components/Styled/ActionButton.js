import styled, {css} from 'styled-components';

const ActionButton = styled.button`
    height: 30px;
    margin-left: 10px;
    margin-bottom: 10px;
    outline: none;

    border: none;
    border-radius: 15px;
    background-color: azure;
    font-family: 'Roboto Mono', monospace;

    &:hover{
        background-color: rgba(240, 248, 255, 0.904);
    }

    ${props => props.edit && css`
        margin-right: 10px;
    `}
`;

export default ActionButton;