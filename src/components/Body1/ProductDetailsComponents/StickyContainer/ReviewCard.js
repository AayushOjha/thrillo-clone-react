import React , { useState }from 'react'
import Style from "../../../../StyleSheet/Review.module.css"
import img1 from "../../../../assets/Ban3.jpeg"
import { AiFillStar } from "react-icons/ai"



export default function ReviewCard() {
    const data = "You will feel the true sense of the word FREEZE when you visit Pangong Tso. That said, the view you're experiencing is simply breathtaking. The sky and lake colors compliment each other absolutely. I saw so many shades of blue that day and the hue of the lake continued to change every hour. I think you might find the right words for a poet or writer to explain this phenomenon. Although no explanation is appropriate for this location, if you're fortunate enough, I'd suggest you'll have the chance to click with your camera on the ultimate images."
    const [Flag, setFlag] = useState(false);
    const dataDynamic = Flag ? data : data.substring(0,200)+"..."; 

  return (
    <div className={Style.cardContainer}>
        <div className={Style.profilePic}>
            <img src={img1} />
        </div>
        <div className={Style.userName}>Rameshwar Reddy</div>
        <div className={Style.userReview}>{dataDynamic}</div>
        
        <div className={Style.toggleBtn} onClick={() => setFlag(!Flag)}><h3>{Flag ? "Read Less":"Read More"}</h3></div>

    </div>
  )
}
