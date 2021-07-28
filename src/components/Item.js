import React, {useState} from "react";


// click buttton to add to cart, by changing className on li element.
// 
function Item({ name, category }) {
const [inCart, setInCart] = useState (false)


// for handleclick, the funtion passes in the variable and toggles to false (!isCart)
function handleClick () {
setInCart((inCart) => !inCart)
//console.log(inCart)
}
const changeCartState = inCart ? "in-cart" : ""


  return (
    <li className={changeCartState}>

      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>

    // <li className="">

    // </li>
  );
}

export default Item;
