import "./Input.css"
export const Input = (props) => {
  return (
    <input
      type="text"
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}