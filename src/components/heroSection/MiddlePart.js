import HeroAnimatedText from "./HeroAnimatedText"
import SearchComponent from "./SearchComponent"
import './../../responsiveGrid/responsive.css'

export default function MiddlePart() {
  return (
    // <div style={{zIndex:'1',width:'50%', paddingTop:'100px'}}>>
    <div style={{zIndex:'1', paddingTop:'100px'}} className={`col-8 md-col-10 sm-col-10`} >
      <HeroAnimatedText/>
      <SearchComponent/>
    </div>
  )
}
