import classes from "./HeroAnimatedText.module.css";
import { useQuery, gql } from "@apollo/client";

const DATAS = gql`
  query {
    homePage(id: 3) {
      data {
        attributes {
          Header {
            HeroText1
            HeroText2
          }
        }
      }
    }
  }
`;

export default function HeroAnimatedText() {
  const { loading, error, data } = useQuery(DATAS);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  if (data) {
    const datax = data.homePage.data.attributes.Header;

    return (
      <div className={classes.cointainer}>
        <h1 className={classes.upperText}>{datax.HeroText1}</h1>
        <h1 className={classes.lowerText}>{datax.HeroText2}</h1>
      </div>
    );
  }
}
