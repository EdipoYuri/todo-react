import styled from 'styled-components'
import {PlusMedical} from 'styled-icons/boxicons-regular/PlusMedical'
import {Save} from 'styled-icons/material/Save'

export const PlusIcon = styled(PlusMedical)`
    color: white;
`

export const SaveIcon = styled(Save)`
    color: white;
`

export const TodoForm = styled.form`
    position: absolute;
    width: 100%;
    bottom: 0; left: 0;
    margin-bottom: 60px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputText = styled.input`
    width: 80%;
    height: 30px;
    outline: none;
    padding-left: 15px;
    text-align: center;
    border: none;
    border-bottom: 3px solid #5b1773;
    background-color: aliceblue;
    border-radius: 3px;
`     

export const AddButton = styled.button`
    width: 70px;
    height: 70px;
    position: fixed;
    margin-top: 60px;
    outline: none;
  
    border: none;
    border-radius: 40px;
    background-color: #5b1773;

    &:hover{
        background-color: #32a852;
    }
`