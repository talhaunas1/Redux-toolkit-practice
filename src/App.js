import logo from "./logo.svg";
import "./App.css";
import PostList from "./Component/PostList";
import AddPost from "./Component/AddPost";
// import Counter from "./Component/Counter";

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <PostList/>
      <AddPost/>
    </div>
  );
}

export default App;
