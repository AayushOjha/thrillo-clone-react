import React from "react";
import classes from "./HeroSection.module.css";
import NavBar from "./NavBar";
import MiddlePart from "./MiddlePart";
import FooterH from "./FooterH";

export default function HeroSection({ children, bg }) {
  let img =
    "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80";
  if (bg == "dark") {
    img =
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  }

  return (
    <div className={classes.outer} style={{ backgroundImage: `url(${img})` }}>
      {/* {console.log(datax)} */}
      <div className={classes.blackBg} />
      <NavBar />
      <MiddlePart />
      <FooterH />
    </div>
  );
}
