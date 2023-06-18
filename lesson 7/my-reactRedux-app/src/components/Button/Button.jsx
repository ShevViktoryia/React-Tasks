export const Button = (props) => {
  return (
    <button type="submit" className="add-btn" id={props.id} onClick={props.onClick}>{props.value}</button>
  )
}