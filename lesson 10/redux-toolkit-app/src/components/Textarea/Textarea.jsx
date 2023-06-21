export const Textarea = (props) => {
  return (
    <textarea
      type="text"
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}