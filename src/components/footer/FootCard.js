import classes from "./FootCard.module.css"

export default function FootCard() {
  return (
    <div className={classes.cointainer}>
      <div className={classes.halfContainer} >
        <div >
          <p className={classes.title}>ABOUT THRILLOPHILIA</p>
        </div>
      </div>
      <div className={classes.halfContainer} ></div>
    </div>
  )
}
