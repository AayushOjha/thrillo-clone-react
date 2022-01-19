import classes from "./DisplayRow.module.css";
import OneCard from "./PrductCard/OneCard";
import uniStyle from "../../index.module.css"

export default function DisplayRow({caption,products,theme}) {
  
  let primeryText = uniStyle.darkerColor;
  let secondaryText = uniStyle.darkColor;

  if (theme == "dark") {
    primeryText = uniStyle.lighterColor;
    secondaryText = uniStyle.lightColor;
  }

  return (
    <div className={classes.sectionContainer}>
      <h1 className={classes.topline +' '+ primeryText}>{caption}</h1>
      <div className={classes.smallDivider}></div>
      <div className={classes.rowContainer}>
        <div
          className={classes.longDiv}
          style={{ width: `${220 * 5 + 5 * 15}px` }}
        >
          {products.map((k, i) => {
            return (
              <OneCard
                key={i}
                name={k.tripName}
                price={k.tripPrice}
                currentPrice={k.tripCurrentPrice}
                rating={k.tripRating}
                image={k.tripImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
