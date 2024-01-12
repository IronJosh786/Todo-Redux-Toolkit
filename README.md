# Redux-Toolkit To-Do App

A simple React-based Todo App using Redux Toolkit for efficient state management.

## Demo

https://superb-dieffenbachia-c58623.netlify.app/

## Features

- Create, Read, Update, and Delete tasks (CRUD operations).
- Fully responsive design.
- Built with React & Redux-Toolkit for a fast and efficient development experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ironjosh786/Todo-Redux-Toolkit.git

2. Change to the project directory

   ```bash
   cd your-todo-app

3. Install the dependencies

   ```bash
   npm install

4. Start the development server

   ```bash
   npm start

## Redux State Management with Redux Toolkit
The app uses Redux Toolkit for efficient state management. The state is defined in todoslice.js. Key parts of the state include:

- todos: An array containing the list of todos.
- isEditing: A boolean indicating whether a todo is currently being edited.
- updateId: The id of the todo being updated.
- updateText: The updated text for the todo being edited.

Redux actions are dispatched to modify the state. For example:

- addTodo: Adds a new todo to the list.
- deleteTodo: Deletes a todo from the list.
- updateTodo: Updates the text of a todo.
- setIsEditing: Sets the editing state.
- setUpdateId: Sets the id of the todo being updated.
- setUpdateText: Sets the updated text for the todo being edited.

## Contributing
Feel free to contribute by opening issues, submitting pull requests, or providing feedback.
