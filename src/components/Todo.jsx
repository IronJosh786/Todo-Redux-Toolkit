import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteTodo, updateTodo, setIsEditing, setUpdateId, setUpdateText} from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleUpdate = (id, text) => {
    dispatch(setIsEditing(true));
    dispatch(setUpdateId(id));
    dispatch(setUpdateText(text));
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const [isCompleted, setIsCompleted] = useState({});

  const handleCompleted = (id) => {
    setIsCompleted((prevClickedItems) => ({
      ...prevClickedItems,
      [id]: !(prevClickedItems[id] || false),
    }));
  }

  return (
    <>
    <ul className="list-none w-full max-w-2xl">
        {todos.map((todo) => (
          <li
            className={`${isCompleted[todo.id] ? 'bg-green-400' : 'bg-slate-800'} mt-4 flex justify-between items-center px-4 py-2 rounded`}
            key={todo.id}
          >
            <div className='flex gap-2'>
              <input type="checkbox" onClick={(e) => handleCompleted(todo.id)} />
              <div className={`${isCompleted[todo.id] ? 'text-slate-950' : 'text-white'}`}>{todo.text}</div>
            </div>
              <div className="flex gap-5">
                <button
                    onClick={() => handleUpdate(todo.id, todo.text)}
                    disabled={isCompleted[todo.id]}
                    className={`disabled:opacity-50 text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md`}
                    >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" 
                        />
                    </svg>
                </button>
                <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
              </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos