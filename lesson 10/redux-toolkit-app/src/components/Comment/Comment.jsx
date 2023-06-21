import './Comment.css'

const Comment = (props) => {
  const {comments} = props;
  if (!comments || comments.length === 0) return <p>Not found</p>
  
  return (
    comments.map(comment => {
      return (
        <div className="comment" key={comment.id}>
          <div className="name">{comment.name}</div>
          <div className="text">{comment.body}</div>
        </div>
      )
    })
  )
}

export default Comment