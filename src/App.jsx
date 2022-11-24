import React, { useEffect } from 'react';
import m from './app.module.scss';
import CreateTodo from './components/createTodo/CreateTodo';
import TodoList from './components/todoList/TodoList';
import { useItems } from './hooks/useItems';


function App() {
  //eslint-disable-next-line no-unused-vars
  const [items, itemsRef, getItems] = useItems();

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={m.app}>
      <h1>Todo-лист</h1>
      <CreateTodo />
      <TodoList items={items} />
    </div>
  );
}

export default App;
