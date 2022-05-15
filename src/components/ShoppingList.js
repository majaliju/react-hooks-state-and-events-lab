import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleChange(e) {
    console.log(e.target.value)
  }


  // // my main issue is with this function here; 
  // // it's def not written properly but something here is 
  // // where I need to push forth on 
  // const itemsToDisplay = items.filter((item) => {
  //   // logic here was just re-factored from a previous lab
  //   if (selectedCategory === "All"){
  //     return true;
  //   } else {
  //     return item.value === setSelectedCategory;
  //   }
  // })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} onChange={handleChange} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
