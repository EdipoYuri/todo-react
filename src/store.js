import { createStore } from "redux"

function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.title]
        case 'REMOVE_TODO':
            return state.filter((item,index) => index !== action.index)
        case 'EDIT_TODO':
            return state.map((item, index) => index !== action.index ? item : action.title)
        default:
            return state
    }
}

const store = createStore(todos)

export default store