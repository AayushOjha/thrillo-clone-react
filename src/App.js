import NavBar from "./components/heroSection/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import MiddlePart from "./components/heroSection/MiddlePart";
import FooterH from "./components/heroSection/FooterH";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
// import data from "./JSON data/data.json";
import { useQuery, gql } from "@apollo/client"


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

function App() {

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
  
  const themeType = datax.GlobalStylings.theme;
  let color = "#fff";
  if (themeType === "dark") {
    color = "#242B2E";
  }

  return (
    <div style={{ backgroundColor:`${color}` }}>
      <HeroSection bg={themeType}>
        <NavBar />
        <MiddlePart />
        <FooterH />
      </HeroSection>
      <Body />
      <Footer />
    </div>
  );
}
  
}

export default App;