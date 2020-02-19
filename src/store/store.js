import { createStore } from "redux"

const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.title,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            return state.filter((item,index) => index !== action.index)

        case 'CLEAR_ALL':
            return []
        

        case 'EDIT_TODO':
            return state.map((item, index) => 
                (index !== action.index) 
                    ? item 
                    : {text: action.title})

        case 'COMPLETE_TODO':
            return state.map((item, index) => 
                (index === action.index) 
                    ? {...item, completed: !item.completed} 
                    : item)
                    
        default:
            return state
    }
}

const store = createStore(todos)

export default store