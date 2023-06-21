export const Button = (props) => {
  return (
    <button type="submit" className="add-btn" onClick={props.onClick}>
      Add User
    </button>
  )
}