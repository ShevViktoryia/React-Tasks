import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST, GET_POST, IS_LOADING, addPostThunk } from "../../store/postsReducer";
import { getPostThunk } from "../../store/postsReducer";
import { useEffect, useState } from "react";
import Post from "../Post/Post";

const PostsPage = () => {
  const [inputTitle, setTitle] = useState('');
  const [inputText, setText] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  // const addPost = () => {
  //   dispatch({
  //     type: ADD_POST,
  //     payload: {
  //       id: posts[posts.length-1].id + 1,
  //       title: inputTitle,
  //       text: inputText
  //     }
  //   })
  // }

  useEffect(() => {
    dispatch(getPostThunk());
  }, [])

  const resetInput = () => {
    setTitle('');
    setText('');
    dispatch(addPostThunk({title: inputTitle, body: inputText}));
  }

  return (
    <>
      <div className="about_block">
        <h1>Posts page</h1>
        <div className='form_wrapper'>
          <div className="add_post">
            <Input
            id="input_title"
            value={inputTitle} 
            onChange={e => setTitle(e.target.value)}
            placeholder="Title" />
            <Textarea
            id="input_text"
            value={inputText} 
            onChange={e => setText(e.target.value)}
            placeholder="Text" />
          </div>
          <Button id="add_user" onClick={resetInput} value="Add User" />
        </div>
        <div className="posts_wrapper">
          <Post posts={posts} />
        </div>
      </div>
    </>
  )
}

export default PostsPage