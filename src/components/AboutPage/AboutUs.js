import React from "react";
import Style from "./AboutUs.module.css";
// import source from "../../assets/Banner.jpeg";
import { useQuery, gql } from "@apollo/client";

const DATAS = gql`
  query {
    aboutUs(id: 1) {
      data {
        attributes {
          AboutText
          bgColor
          FeatureImg {
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
`;

export default function AboutUs() {
  const { loading, error, data } = useQuery(DATAS);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  if (data) {
    const datax = data.aboutUs.data.attributes;
    const imgName = datax.FeatureImg.data.attributes.url;
    const image = `http://localhost:1337${imgName}`;

    return (
      <div
        className={Style.container}
        style={{ backgroundColor: `${datax.bgColor}` }}
      >
        <div className={Style.leftContainer}>
          <img src={image} />
        </div>
        <div className={Style.rightContainer}>
          <div className={Style.title}>
            <h1>About Us</h1>
          </div>
          <p>{datax.AboutText}</p>
        </div>
      </div>
    );
  }
}
