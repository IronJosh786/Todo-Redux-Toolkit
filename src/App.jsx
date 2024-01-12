import { useState } from 'react'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <h1 className='text-5xl font-bold text-center text-white mt-5'>To Do</h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App
