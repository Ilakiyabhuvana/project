import  React from "react"
import uuid from "react-uuid";
import "../index.css";
import { useEffect, useState } from "react";
function Help()
{

     const [value, setValue] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(post));
    console.log("data saved");
  }, [post]);

  function clickHandler() {
    setPost((list) => list.concat({ id: uuid(), post: value }));
    setValue("");
  }

  const changeHandler = (e) => setValue(e.target.value);
  return (
    <div>
        <div>
      <input
        onChange={changeHandler}
        value={value}
        placeholder="Enter Your StorY"
      ></input>
      <button onClick={clickHandler}>Add</button>
      <ul>
        {post.map(({ id, post }) => (
          <li key={id}>{post}</li>
        ))}
      </ul>

      </div>
    </div>
    )
        
}
export default function App() {
    return (
      <div className="blog">
       <center> <h1>SHARE YOUR STORY</h1> </center>
        <p> IVAL IS VOICE OF THE WOMAN </p>
        <Help />
      </div>
    );
  }
  