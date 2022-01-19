import HeroAnimatedText from "./HeroAnimatedText"
import SearchComponent from "./SearchComponent"

export default function MiddlePart() {
  return (
    <div style={{zIndex:'1',width:'50%'}}>
      <HeroAnimatedText/>
      <SearchComponent/>
    </div>
  )
}
