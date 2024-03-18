import React,{useState} from "react";

function Item({ name, category }) {
const [added ,setadd]= useState(0);
 
const appClass = added ? "in-cart" : "";

function addCard() {
setadd(!added);
}

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>

      <button className="add" onClick={addCard}>
       {added ? 'Add to Cart' : 'Remove From Cart'}
        </button>
    </li>
  );
}

export default Item;
 
// Add to Cart
// In the Item component, when the user clicks the <button> element, the item should be 
//added to their virtual cart. The way we'll show the user 
//that the item is in the cart is by changing the className on the <li> element:

// <li className="in-cart">
// {/* the item is in the cart */}
// </li>

// <li className="">
// {/* the item is NOT in the cart */}
// </li>
// If the item is not in the cart, the <button> element's text should read "Add to Cart", 
//and if the item is in the cart, the <button> element's text should read
// "Remove From Cart". Naturally, you'll also need to add state to the Item component to solve this deliverable!