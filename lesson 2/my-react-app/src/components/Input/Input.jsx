export const Input = (props) => {
  return (
    <input
      type="text"
      id="todo-input"
      value={props.value}
      onChange={props.onChange}
    />
  )
}