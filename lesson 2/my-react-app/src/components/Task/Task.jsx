export const Task = (props) => {
  return (
    <li className="todo-item">
      <input 
      type="checkbox"/>
      {props.children}
      <button id='delete_btn'>Delete</button>
    </li>
  )
}