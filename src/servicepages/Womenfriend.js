
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function WishList() {
  const [value, setValue] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
    console.log("data saved");
  }, [wishList]);

  function clickHandler() {
    setWishList((list) => list.concat({ id: uuid(), wish: value }));
    setValue("");
  }
  const changeHandler = (e) => setValue(e.target.value);
  return (
    <div>
      <input
        onChange={changeHandler}
        value={value}
        placeholder="I wish..."
      ></input>
      <button onClick={clickHandler}>Add</button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}>{wish}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Wishlist add items</h1>
      <WishList />
    </div>
  );
}
