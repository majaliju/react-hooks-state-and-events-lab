import React, {useState} from "react";

function Item({ name, category }) {

  // checking if the cart is populated (> 0; true) or empty (=0; false)
  const [inCart, setInCart] = useState(false)

  // this function flips the switch and produces the opposite Boolean value
  function putInCart() {
    return setInCart((inCart) => !inCart)
  }

  // if className = inCart, it'll read "in-cart"
  // otherwise, it'll show an empty cart, where inCart = false
  const className = inCart ? "in-cart" : ""

  const buttonClass = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={putInCart}>{buttonClass}</button>
    </li>
  );
}

export default Item;
