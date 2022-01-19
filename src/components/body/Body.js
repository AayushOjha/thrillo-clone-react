import classes from "./Body.module.css"
import ImageSlider from "./ImageSlider"
import Escape from "./Escape"
import DisplayRow from "./DisplayRow"
import GridView from "./GridView/GridView"
import data from "../../JSON data/data.json"

export default function Body() {

  const productCards = data.Sections[0].ProductCards
  const theme = data.theme
  console.log(productCards);

  return (
    <div className={classes.contentCointainer}>
      <Escape theme={theme}/>
      <ImageSlider/>
      {productCards.map((v,k)=>{
        return (
          <DisplayRow key={k} caption={v.caption} products={v.products} theme={theme}/>
        )
      })}
      <GridView/>
    </div>
  )
}
