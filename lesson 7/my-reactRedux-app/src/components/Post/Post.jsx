import { DELETE_POST, UPDATE_POST } from '../../store/postsReducer';
import { Button } from "../Button/Button"
import './Post.css'
import { useDispatch } from "react-redux";

const Post = (props) => {
  const {posts} = props;
  if (!posts || posts.length === 0) return <p>Not found</p>
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch({
      type: DELETE_POST,
      payload: {
        id: id
      }
    })
  }
  const updatePost = (id, title, text) => {
    dispatch({
      type: UPDATE_POST,
      payload: {
        id: id,
        title: "update",
        text: "update"
      }
    })
  }
  return (
    posts.map(post => {
      return (
        <div className="post">
          <div className="title" key={post.id}>{post.title}</div>
          <div className="text">{post.text}</div>
          <Button id={post.id} onClick={e => deletePost(e.target.id)} value="Delete" />
          <Button id={post.id} title={post.title} text={post.text} onClick={e => updatePost(e.target.id, e.target.title, e.target.text)} value="Update" />
        </div>
      )
    })
  )
}

export default Post