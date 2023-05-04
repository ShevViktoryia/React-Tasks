import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Task } from './components/Task/Task';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

function App() {
  const [inputTodo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

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
          <div className="add_task_block">
            <Input
            value={inputTodo} 
            onChange={e => setTodo(e.target.value)}/>
            <Button onClick={resetInput}/>
          </div>
          <ul className="todo-list">
            {
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
