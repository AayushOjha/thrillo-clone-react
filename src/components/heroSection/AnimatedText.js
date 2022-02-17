import classes from "./AnimatedText.module.css";

export default function AnimatedText() {
  return (
    <div style={classes.cointainer}>
      <div className={classes.imgCointainer}>
        <div className={classes.imgSlider}>
          <h1 className={classes.text} >Experiences</h1>
          <h1 className={classes.text} >Adventures</h1>
          <h1 className={classes.text} >Escapes</h1>
          <h1 className={classes.text} >Thrills</h1>
          <h1 className={classes.text} >Experiences</h1> 
        </div>
      </div>
    </div>
  );
}
