import classes from "./Escape.module.css";
import uniStyle from "../../index.module.css";
import "./../../responsiveGrid/responsive.css";
import { useQuery, gql } from "@apollo/client";

const DATAS = gql`
  # Write your query or mutation here
  query {
    homePage(id: 3) {
      data {
        attributes {
          PerfectEs {
            Title
            subTitle
            Imgs1 {
              data {
                attributes {
                  url
                }
              }
            }
            Imgs2 {
              data {
                attributes {
                  url
                }
              }
            }
            Imgs3 {
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
`;

export default function Escape({ theme }) {
  const { loading, error, data } = useQuery(DATAS);

  let primeryText = uniStyle.darkerColor;
  let secondaryText = uniStyle.darkColor;

  if (theme == "dark") {
    primeryText = uniStyle.lighterColor;
    secondaryText = uniStyle.lightColor;
  }

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  if (data) {
    const datax = data.homePage.data.attributes.PerfectEs;
    // console.log(JSON.stringify(datax.Imgs1.data.attributes.url));
    const prefix = "http://localhost:1337";
    const img1 = prefix + datax.Imgs1.data.attributes.url;
    const img2 = prefix + datax.Imgs2.data.attributes.url;
    const img3 = prefix + datax.Imgs3.data.attributes.url;
    console.log(img1 + "\n" + img2);

    return (
      <div className={classes.sectionContainer}>
        <div className={classes.anim}>
          <div className={`${classes.perfectEscapeBox}`}>
            <div className={classes.underLineC}>
              <p className={classes.escapeText}>
                {datax.Title}
                <br />
                Escape
              </p>
              <hr className={classes.underline} />
            </div>
            <p className={classes.escapeText2}>{datax.subTitle}</p>
          </div>

          {/* three divs */}

          <div className={classes.cardContainer}>
            <div className={classes.longImageCard}>
              <img
                className={classes.imgInCard}
                // src={require("../../assets/tour1.jpg")}
                src={img1}
                alt=""
              />
            </div>

            <div className={classes.longImageCard}>
              <img className={classes.imgInCard} src={img2} alt="" />
            </div>

            <div className={classes.longImageCard}>
              <img className={classes.imgInCard} src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
