import { useState } from 'react'
import { addTodo, setIsEditing, setUpdateId, setUpdateText, updateTodo } from '../features/todo/todoSlice' 
import { useDispatch, useSelector } from 'react-redux'

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const isEditing = useSelector(state => state.isEditing);
    const updateId = useSelector(state => state.updateId);
    const updateText = useSelector(state => state.updateText);

    const addTodoHandler = (e) => {
      e.preventDefault()
      dispatch(addTodo(input))
      setInput('')
    }

    const handleUpdate = (e) => {
      e.preventDefault();
      if(updateText !== '') dispatch(updateTodo({id: updateId, text: updateText}));
      dispatch(setIsEditing(false));
      dispatch(setUpdateId(''));
      dispatch(setUpdateText(''));
    }

  return (
    <form onSubmit={isEditing ? handleUpdate : addTodoHandler} className="w-full max-w-2xl flex gap-1 space-x-3 mt-12">
      <input
        type="text"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={isEditing ? updateText : input}
        onChange={isEditing ? (e) => dispatch(setUpdateText(e.target.value)) : (e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isEditing ? 'Update' : 'Add'}
      </button>
    </form>
  )
}

export default AddTodo