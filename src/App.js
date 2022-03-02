import HeroSection from "./components/heroSection/HeroSection";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";

const DATAS = gql`
  query {
    homePage(id: 3) {
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

function App() {
  const { loading, error, data } = useQuery(DATAS);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log("error occored");
    return <h1>error</h1>;
  }

  if (data) {
    const datax = data.homePage.data.attributes;

    const themeType = datax.GlobalStylings.theme;
    let color = "#fff";
    if (themeType === "dark") {
      color = "#242B2E";
    }

    return (
      <div style={{ backgroundColor: `${color}` }}>
        <HeroSection bg={themeType} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
