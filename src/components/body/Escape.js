import classes from "./Escape.module.css";
import uniStyle from "../../index.module.css";

export default function Escape({ theme }) {
  let primeryText = uniStyle.darkerColor;
  let secondaryText = uniStyle.darkColor;

  if (theme == "dark") {
    primeryText = uniStyle.lighterColor;
    secondaryText = uniStyle.lightColor;
  }

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.anim}>
        <div className={classes.perfectEscapeBox}>
          <div className={classes.underLineC}>
            <p className={classes.escapeText + " " + primeryText}>
              Find The Perfect
              <br />
              Escape
            </p>
            <hr className={classes.underline} />
          </div>
          <p className={classes.escapeText2 + " " + secondaryText}>
            Discover your ideal Experience
          </p>
        </div>
        <div className={classes.longImageCard}>
          <img
            className={classes.imgInCard}
            src={require("../../assets/tour1.jpg")}
            alt=""
          />
        </div>
        <div className={classes.longImageCard}>
          <img
            className={classes.imgInCard}
            src={require("../../assets/tour2.jpg")}
            alt=""
          />
        </div>
        <div className={classes.longImageCard}>
          <img
            className={classes.imgInCard}
            src={require("../../assets/tour3.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}