import classes from "./DisplayRow.module.css";
import OneCard from "./PrductCard/OneCard";
import uniStyle from "../../index.module.css"

export default function DisplayRow({caption,products,theme}) {
  
  let primeryText = uniStyle.darkerColor;
  let secondaryText = uniStyle.darkColor;

  if (theme === "dark") {
    primeryText = uniStyle.lighterColor;
    secondaryText = uniStyle.lightColor;
  }

  // console.log(JSON.stringify(products.Row));

  return (
    <div className={classes.sectionContainer}>
      <h1 className={classes.topline +' '+ primeryText}>{caption}</h1>
      <div className={classes.smallDivider}></div>
      <div className={classes.rowContainer}>
        <div
          className={classes.longDiv}
          style={{ width: `${220 * products.Row.length + products.Row.length  * 10}px` }}
        >
          {products.Row.map((k, i) => {
            // console.log(k.tripThumbnail.data.attributes.url);
            return (
              <OneCard
                key={i}
                name={k.tripTitle}
                price={k.tripPrice+1000}
                currentPrice={k.tripPrice}
                rating={k.tripRating}
                // rating={"4.5 reviews"}
                image={k.tripThumbnail.data.attributes.url}
              />
              // <h3 key={i}>#</h3>
            );
          })}
        </div>
      </div>
    </div>
  );
}
