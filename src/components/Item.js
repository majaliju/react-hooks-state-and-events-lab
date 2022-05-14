import React, {useState} from "react";

function Item({ name, category }) {

  // checking if the cart is populated (> 0; true) or empty (=0; false)
  const [inCart, setInCart] = useState(true)

  // this function flips the switch and produces the opposite Boolean value
// eslint-disable-next-line
  function putInCart() {
    return setInCart((inCart) => !inCart)
  }

  // if className = inCart, it'll read "in-cart"
  // otherwise, it'll show an empty cart, where inCart = false
  const className = inCart ? "in-cart" : ""


  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
