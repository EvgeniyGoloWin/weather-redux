import {type} from "@testing-library/user-event/dist/type";


const ADD = 'ADD'
const DELETE = 'DELETE'
const IMPORTANT ='IMPORTANT'
const DONE = 'DONE'
const EDIT = 'EDIT'
// const ADD_TEXT = 'ADD_TEXT'

const initialState = {
    todos: [{
        title:'Buy a cat',
        isDelete: false,
        isImportant: false,
        isDone: false,
        id: 666666
    },

        {
            title:'Buy a dog',
            isDelete: false,
            isImportant: false,
            isDone: false,
            id: 3232323232
        }
        ],
    count: 2,
    // text: "",
};

export default (state = initialState,action) => {
    switch (action.type) {
        case ADD : {
            return {
                ...state,
                todos: [...state.todos,{
                    title:action.title,
                    isDelete: false,
                    isImportant: false,
                    isDone: false,
                    id: Math.floor(Math.random() * 1000000)
                }],
                count: state.count + 1
            }
        }
        case DELETE : {
            return  {
                ...state,
                todos: state.todos.filter((item)=>item.id !== action.id),
                count: state.count -1
            }
        }
        case IMPORTANT : {
            return {
                ...state,
                todos: state.todos.map((item)=> {
                    if (item.id === action.id){
                        return {
                            ...item,isImportant: !item.isImportant
                        }
                        return item
                    }
                })
            }
        }
        case DONE : {
            return  {
                ...state,
                todos: state.todos.map((item)=> {
                    if (item.id === action.id){
                        return {
                            ...item,isDone: !item.isDone
                        }
                        return item
                    }
                })
            }
        }
        // case ADD_TEXT : {
        //     return {
        //         ...state,text: action.id
        //     }
        // }
        case EDIT : {
            console.log(state,)
            return {
                ...state,
                todos: [...state.todos ]
            }
        }
        default: return  state
}
}

export const addTask = (title) => {
    return (dispatch) => {
        return dispatch({type: ADD,title})
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE,id})
    }
}

export const doImportant = (id) => {
    return(dispatch) => {
        return dispatch({type: IMPORTANT,id})
    }
}

export const doDone = (id) => {
    return(dispatch) => {
        return dispatch({type: DONE,id})
    }
}

export const editTaskReducer = (title) => {
    console.log(title)
    return(dispatch) => {
        return dispatch({type: EDIT,title})
    }
}

