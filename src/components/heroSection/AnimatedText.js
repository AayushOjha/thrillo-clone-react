import classes from "./AnimatedText.module.css";

export default function AnimatedText() {
  return (
    <div style={classes.cointainer}>
      <div className={classes.imgCointainer}>
        <div className={classes.imgSlider}>
          {/* <img src="./assets/imgCal04.jpg" id="lastone" alt="slider image" />
          <img src="./assets/imgCal01.jpg" alt="slider image" />
          <img src="./assets/imgCal02.jpg" alt="slider image" />
          <img src="./assets/imgCal03.jpg" alt="slider image" />
          <img src="./assets/imgCal04.jpg" alt="slider image" />
          <img src="./assets/imgCal01.jpg" id="firstone" alt="slider image" /> */}
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
