import FootCard from "./FootCard";
import "./../../responsiveGrid/responsive.css";
import classes from "./Footer.module.css";
import SocilaLine from "./SocialLine";
import { useQuery, gql } from "@apollo/client";

export default function Footer() {
  let img = "../../assets/ThrillophilliaDark.png";

  const query = gql`
    query {
      homePage(id: 1) {
        data {
          attributes {
            Footer {
              Copy_Right_Text
              Credits
              Light_Logo {
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

  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  if (data) {
    const dataObject = data.homePage.data.attributes.Footer;
    const imgName = dataObject.Light_Logo.data.attributes.url;
    const image = `http://localhost:1337${imgName}`;

    return (
      <section className={`col-12 ${classes.cointainer}`}>
        {/* <FootCard/> */}

        <div className={`col-11 md-col-10 ${classes.logoBar}`}>
          <div
            className={`col-5 md-col-4 sm-col-3 ${classes.lineAround}`}
          ></div>
          <div className={` col-2 md-col-3 sm-col-5 ${classes.thrilloLogo}`}>
            <img className={`${classes.imgLogo}`} src={image} />
          </div>
          <div
            className={`col-5 md-col-4 sm-col-3 ${classes.lineAround}`}
          ></div>
        </div>
        <SocilaLine marginVertical={"20px"} />

        <p className={` col-9 md-col-10 sm-col-11 ${classes.myPera}`}>
          <b>&copy; {dataObject.Copy_Right_Text}</b>
        </p>
        <p className={` col-9 md-col-10 sm-col-11 ${classes.myPera}`}>
          {dataObject.Credits}
        </p>
      </section>
    );
  }
}
