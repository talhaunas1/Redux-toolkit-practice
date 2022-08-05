import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
 import  { nanoid } from "@reduxjs/toolkit";  //  help us to genreate reandom id
import { postAdded } from "../features/counter/post/postSlice";



const AddPost = () => {

    const dispatch = useDispatch()

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChnage = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePost=()=>{
    if(title && content){
        dispatch(
            postAdded({
                id:nanoid,
                title,
                content
            })
        )
        setTitle('')
        setContent('')
    }
  }
  return (
    <div>
      <h2>add a new post</h2>
      <form>
        <lable>Post Title</lable>
        <input
          type="text"
          name="postTitle"
          value={title}
          onChange={onTitleChnage}
        />

        <lable>Content</lable>
        <input
          type="text"
          name="postCONTENT"
          value={content}
          onChange={onContentChange}
        />
        <button onClick={onSavePost}>Save Post</button>
      </form>
    </div>
  );
};

export default AddPost;
