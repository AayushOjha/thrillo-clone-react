import { BsGift } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import React, {useState} from "react";
import classes from "./NavBar.module.css";
import "./../../responsiveGrid/responsive.css"

export default function NavBar() {

  const [primaryColor, setprimaryColor] = useState('white')

  const [navStickey, setnavStickey] = useState(false)

  const scrollFunc = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 64) {
      setnavStickey(true)
      setprimaryColor('black')
    } else {
      setnavStickey(false)
      setprimaryColor('white')
    }
  }

  window.addEventListener('scroll',scrollFunc)


  return (
    <>
      <div className={` ${ navStickey ? classes.headerTop + ' col-12 ' + classes.navStickey: classes.headerTop + ' col-11'}`}>
        <div className={`col-3 md-col-4 sm-cal-4 ${classes.logoMain}`}></div>
        <div className={classes.headerTopRight}>
          <div className={classes.navList}>
          <div className={classes.headerTopText}>
            <BsGift style={{color:primaryColor}} />
            <p style={{marginLeft:'5px', color:primaryColor}}>Gift an Experience</p>
          </div>
          <div className={classes.headerTopText}>
            <p style={{color:primaryColor}}>Log in</p>
          </div>
          </div>
          <GoThreeBars style={{fontSize:'1.8rem'}} className={classes.threeBar} />
        </div>
      </div>
    </>
  );
}
