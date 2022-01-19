import classes from './HeroAnimatedText.module.css';

export default function HeroAnimatedText() {
  return (
    <div className={classes.cointainer} >
      <h1 className={classes.upperText} >
      It's time for new
      </h1>
      <h1 className={classes.lowerText} >
      Experiences
      </h1>
    </div>
  )
}
