import { deletePostThunk, updatePostThunk } from '../../store/postsReducer';
import { Button } from "../Button/Button"
import './Post.css'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getCommentsThunk } from "../../store/commentsReducer";
import { useEffect, useState } from "react";

const Post = (props) => {
  const {posts} = props;
  if (!posts || posts.length === 0) return <p>Not found</p>
  const dispatch = useDispatch();
  
  return (
    posts.map(post => {
      return (
        <div className="post" key={post.id}>
          <div className="title">{post.title}</div>
          <div className="text">{post.body}</div>
          <Button onClick={e => dispatch(deletePostThunk(post.id))} value="Delete" />
          <Button onClick={e => dispatch(updatePostThunk(post.id))} value="Update" />
          <Link to={`/posts/${post.id}/comments`} className='info'>See comments</Link>
        </div>
      )
    })
  )
}

export default Post