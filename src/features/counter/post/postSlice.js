import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "learning reux tool-kit",
    content: "i've heard good think will ",
  },
  {
    id: "2",
    title: "slicese......",
    content: "the maore i say slice the mkre i get motivated ",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    postAdded(state,action) {
        state.push(action.payload)
    }
  },
});


export const selectPost = (state) => state.post;
export const {postAdded} = postSlice.actions
export default postSlice.reducer