import { useDispatch, useSelector } from "react-redux";
import { getCommentsThunk } from "../../store/commentsReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";

const CommentsPage = () => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);
  const {id} = useParams();

  useEffect(() => {
    console.log(id)
    dispatch(getCommentsThunk(id));
  }, [])

  return (
    <>
      <div className="about_block">
        <h1>Comments page</h1>
        <div className="posts_wrapper">
          <Comment comments={comments} />
        </div>
      </div>
    </>
  )
}

export default CommentsPage