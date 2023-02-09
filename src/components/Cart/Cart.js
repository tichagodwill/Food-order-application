import React from "react";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-item"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: "2",
          price: "12.99",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {CartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>35.60</span>
      </div>
      <div className={classes.action}>
        <buttton className={classes["button--alt"]}>Close</buttton>
        <buttton className={classes.button}>Order</buttton>
      </div>
    </div>
  );
};

export default Cart;
