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

  },
});


export const selectPost = (state) => state.post;

export default postSlice.reducer