import React, { useState } from "react";
import "./Cart.css";

import { PiCaretUp } from "react-icons/pi";
import { PiCaretDown } from "react-icons/pi";

const Cart = () => {
  const [mobileData, setMobileData] = useState([
    {
      name: "Samsung Galaxy S8",
      price: 399.99,
      img: "https://www.course-api.com/images/cart/phone-1.png",
      quantity: 1,
    },
    {
      name: "Google Pixel",
      price: 499.99,
      img: "https://www.course-api.com/images/cart/phone-2.png",
      quantity: 1,
    },
    {
        name: "Xiamoi Redmi Note 2",
        price: 699.99,
        img: "https://www.course-api.com/images/cart/phone-3.png",
        quantity: 1,
    },
    {
      name: "Samsung Galaxy S7",
      price: 599.99,
      img: "https://www.course-api.com/images/cart/phone-4.png",
      quantity: 1,
    },
  ]);

  // Function to remove an item from the cart
  const removeItem = (indexToRemove) => {
    const updatedData = [...mobileData];
    updatedData.splice(indexToRemove, 1);
    setMobileData(updatedData);
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (index) => {
    const updatedData = [...mobileData];
    updatedData[index].quantity++;
    setMobileData(updatedData);
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (index) => {
    const updatedData = [...mobileData];
    if (updatedData[index].quantity > 0) {
      updatedData[index].quantity--;
      setMobileData(updatedData);
    }
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return mobileData.reduce((total, mobile) => {
      return total + mobile.price * mobile.quantity;
    }, 0);
  };

  // Function to calculate the total number of items
//   const calculateTotalItems = () => {
//     return mobileData.reduce((total, mobile) => {
//       return total + mobile.quantity;
//     }, 0);
//   };

  // Function to clear the cart
  const clearCart = () => {
    setMobileData([]);
  };

  return (
    <>
    <h1 style={{
                    textAlign:'center'
                }}>YOUR BAG</h1>
      {/* <p>No of Items: {calculateTotalItems()}</p> */}
      {mobileData.length === 0 ? (
        <p style={{
            textAlign:'center',
            fontSize:'3rem'
        }}>is empty</p>
      ) : (
        <>
        
          {mobileData.map((mobile, index) => (
            <div className="cart-item" key={index} style={{marginTop : "40px"}}>
              <img src={mobile.img} width={"150px"} height={"200px"} alt="Mobile"/>
              <div>
                
                <h3 style={{
                    color:'#334155'
                }}>{mobile.name}</h3>
                <p style={{
                    color:'#64748B'
                }}>${mobile.price}</p>
                <button onClick={() => removeItem(index)}>remove</button>
              </div>
              <div className="quan-container" >
                <button onClick={() => increaseQuantity(index)}><PiCaretUp /></button>
                <p>{mobile.quantity}</p>
                <button onClick={() => decreaseQuantity(index)}><PiCaretDown /></button>
              </div>
            </div>
          ))}
          <div>
            <h2 id="total">Total: ${calculateTotal()}</h2>
            <button id="clear-cart" onClick={clearCart} style={{display:'flex',justifyContent:'center',alignItems:'center', marginBottom: '40px'}}>Clear Cart</button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;