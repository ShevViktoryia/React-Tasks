import { useState } from 'react';
import { Header } from './components/Header/Header'
import { Task } from './components/Task/Task';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import './App.css';

function App() {
  const [inputTodo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [searchTodoInput, setSearchTodoInput] = useState('');
  const [searchList, setSearchList] = useState([]);

  const sortList = e => {
    setSearchTodoInput(e.target.value);
    if(todoList.length) {
      setSearchList(todoList.filter(item => {
        return item.includes(e.target.value);
      }));
    }
  }

  const resetInput = () => {
    setTodoList(prevState => ([inputTodo, ...prevState]));
    setTodo('');
  }

  return (
    <>
      <Header />
      <div className="todo-app">
      <h1>Todo</h1>
        <div>
          <Input
          id="search-input"
          value={searchTodoInput} 
          onChange={sortList}
          placeholder="Search Todo...."/>
          <div className="add_task_block">
            <Input
            id="todo-input"
            value={inputTodo} 
            onChange={e => setTodo(e.target.value)}/>
            <Button onClick={resetInput}/>
          </div>
          <ul className="todo-list">
            {
            searchTodoInput ? 
            searchList.map(text => (
              <Task key={text}>
                {text}
              </Task>
            )) :
            todoList.map(text => (
              <Task key={text}>
                {text}
              </Task>
            ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
