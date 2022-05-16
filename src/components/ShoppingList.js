import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
// help via Kyrian, his method of solving 

    // create a variable to store filter components current and future state
  const [showList, setShowList] = useState("All")


  // use this function to update my state as needed
  function enactSetShowList(e){
    setShowList(e.target.value)
}
    
  // create a list whose elements are dependent on state
  const itemsList = showList === "All" ? items : items.filter((item) => item.category === showList)


//  console.log(items)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={enactSetShowList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id}  name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
