import NavBar from "./components/heroSection/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import MiddlePart from "./components/heroSection/MiddlePart";
import FooterH from "./components/heroSection/FooterH";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import data from "./JSON data/data.json";

function App() {
  const themeType = data.theme;
  let color = "#fff";
  if (themeType === "dark") {
    color = "#242B2E";
    console.log("color changed");
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

export default App;
