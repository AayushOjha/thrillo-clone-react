import classes from "./FooterH.module.css";
import { GiAirBalloon, GiWireframeGlobe, GiTakeMyMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

export default function FooterH() {
  return (
    <div className={` col-8 md-col-10 sm-col-10 ${classes.heroFooter}`}>

      <div className={classes.footItem}>
        <div className={classes.iconBox}>
          <GiAirBalloon className={classes.icon} />
        </div>
        <div className={classes.footItemText}>
          <p>24,000+</p>
          <p>TRAVEL EXPERIENCE</p>
        </div>
      </div>
      <div className={classes.footItem}>
        <div className={classes.iconBox}>
          <GiWireframeGlobe className={classes.icon} />
        </div>
        <div className={classes.footItemText}>
          <p>56+</p>
          <p>Countries</p>
        </div>
      </div>

      <div className={classes.footItem}>
        <div className={classes.iconBox}>
          <GiTakeMyMoney className={classes.icon} />
        </div>
        <div className={classes.footItemText}>
          <p>Best Price</p>
          <p>GUARANTEED</p>
        </div>
      </div>

      <div className={classes.footItem}>
        <div className={classes.iconBox}>
          <FaUsers className={classes.icon} />
        </div>
        <div className={classes.footItemText}>
          <p>84 Million+</p>
          <p>USERS PER YEAR</p>
        </div>
      </div>

    </div>
  );
}
