import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  /*
  creating a state varialbe (isDark) and 
   The second element (setDark is the function) returned by useState 
   and is a function  that takes a new value to update the state variable (isDark) .

  */
  const [isDark, setDark] = useState (false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const color = isDark ? "App dark" : "App light"

  function handleClick () {
    setDark((isDark) => !isDark)
  }

  return (
    <div className={color}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
