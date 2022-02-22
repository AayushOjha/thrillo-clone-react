import { useEffect } from "react";
import classes from "./Body.module.css";
import ImageSlider from "./ImageSlider";
import Escape from "./Escape";
import DisplayRow from "./DisplayRow";
// import GridView from "./GridView/GridView";
import { useQuery, gql } from "@apollo/client";
import axios from "axios";
import "./../../responsiveGrid/responsive.css";

const DATAS = gql`
  query {
    homePage(id: 1) {
      data {
        attributes {
          GlobalStylings {
            theme
            primeryColor
            backgroundColor
          }
          Header {
            BrandName
            Actions {
              value
            }
          }
          tripRow {
            Title
            Row {
              tripTitle
              tripPrice
              tripRating
              tripThumbnail {
                data {
                  attributes {
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
`;

export default function Body() {
  // axios
  //   .get(
  //     "https://staging-agents.thrillophilia.com/apis/v1/products?limit=5&offset=0",
  //     {
  //       headers: {
  //         "x-client-id": "AGT5WhZ4iuFQP",
  //         "x-client-secret":
  //           "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBR1Q1V2haNGl1RlFQIiwiZXhwIjoxNjQ1Njk2NDMyfQ.9AIsP6B2S4ZFxmaDJhhnB0Vrpy_eOjT8icI6AZHxI94",
  //       },
  //       crossDomain: true,
  //     }
  //   )
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const { loading, error, data } = useQuery(DATAS);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  if (data) {
    // const datar = JSON.stringify(data.homePage.data.attributes);
    const datax = data.homePage.data.attributes;
    const productCards = datax.tripRow;
    // const xs = productCards.Row;

    const theme = datax.GlobalStylings.theme;

    return (
      <div
        className={`${classes.contentCointainer} col-10 md-col-12 sm-col-12`}
      >
        {/* <Escape theme={theme}/> */}
        <Escape theme={"light"} />
        <ImageSlider />
        {productCards.map((v, k) => {
          return (
            <DisplayRow key={k} caption={v.Title} products={v} theme={theme} />
          );
        })}
        {/* <GridView/> */}
      </div>
    );
  }
}
