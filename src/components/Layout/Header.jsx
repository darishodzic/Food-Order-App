import React from "react";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
