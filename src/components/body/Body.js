import classes from "./Body.module.css"
import ImageSlider from "./ImageSlider"
import Escape from "./Escape"
import DisplayRow from "./DisplayRow"
import GridView from "./GridView/GridView"
import { useQuery, gql } from "@apollo/client"
import data from "../../JSON data/data.json"

const DATAS = gql`
query{
  homePage(id: 1){
    data{
      attributes{
        GlobalStylings{
          theme
          primeryColor
          backgroundColor
        }
        Header{
          BrandName
          Actions{
            value
          }
        }
        tripRow{
        	Title
          Row{
            tripTitle
            tripPrice
            tripRating
            tripThumbnail{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`


export default function Body() {

  // const productCards = data.Sections[0].ProductCards
  // const theme = data.theme
  // console.log(productCards);

const {loading, error, data} = useQuery(DATAS)

if (loading) {
  return(
    <h1>loading...</h1>
  )
}
if (error) {
  console.log("error occored");
  return(
    <h1>
      error
    </h1>
  )
}

if (data) {
  const datar = JSON.stringify(data.homePage.data.attributes)
  const datax = data.homePage.data.attributes
  const productCards = datax.tripRow
  // const xs = productCards.Row

  // console.log(typeof(productCards))

  const theme = datax.GlobalStylings.theme

  return (
    <div className={classes.contentCointainer}>
      <Escape theme={theme}/>
      <ImageSlider/>
      {productCards.map((v,k)=>{
        return (
          <DisplayRow key={k} caption={v.Title} products={v} theme={theme}/>
        )
      })}
      <GridView/>
    </div>
  )
}

}
