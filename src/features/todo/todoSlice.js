import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    isEditing: false,
    updateId: '',
    updateText: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((curr) => curr.id === action.payload.id ? {...curr, text: action.payload.text} : curr);
        },
        setIsEditing: (state, action) => {
            state.isEditing = action.payload;
        },
        setUpdateId: (state, action) => {
            state.updateId = action.payload;
        },
        setUpdateText: (state, action) => {
            state.updateText = action.payload;
        }   
    }
})

export const {addTodo, deleteTodo, updateTodo, setIsEditing, setUpdateId, setUpdateText} = todoSlice.actions

export default todoSlice.reducer