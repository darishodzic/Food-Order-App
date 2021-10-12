import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cardItems = (
    <ul className={classes["card-items"]}>
      {[{ id: "c1", name: "sushi", amount: "2", price: "23" }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cardItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>32.54</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
