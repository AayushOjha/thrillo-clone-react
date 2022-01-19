import { BsGift } from "react-icons/bs";
import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={classes.headerTop}>
        <div className={classes.logoMain}></div>
        <div className={classes.headerTopRight}>
          <div className={classes.headerTopText}>
            <BsGift color="#fff" />
            <p style={{marginLeft:'5px'}}>Gift an Experience</p>
          </div>
          <div className={classes.headerTopText}>
            <p>Log in</p>
          </div>
        </div>
      </div>
    </>
  );
}
