import React , { useState } from 'react'
import { BsCircle} from "react-icons/bs"
import {GiDuration} from "react-icons/gi"    
import {BiRupee} from "react-icons/bi"    
import img1 from "../../../../assets/Ban4.jpeg"
import Style from './../../../../StyleSheet/PackageOptions.module.css'
import { TiTick } from "react-icons/ti"




export default function PackageOptions() {

    const [Flag, setFlag] = useState(false);

  return (
      <div className={Style.wrapper}>
          <div className={Style.wrapperHeader}>
            <div className={Style.borderLeft}></div>
            <div><h2>Select Package Option</h2></div>
          </div>
        <div className={Style.container}>
        <div className={Style.upperBody}>
            <div className={Style.leftContent}>
                <div><BsCircle/></div>
                <div className={Style.content}>
                    <h3>Leh Ladakh Tour With Pangong Lake</h3>
                    <p><GiDuration/> 5 Days,4 Nights</p>
                    <h4 className={Style.toggle} onClick={() => setFlag(!Flag)}> { Flag ? "Hide Details" : "Show Details"} </h4>
                </div>
            </div>
            <div className={Style.rightContent}>
                <div className={Style.prevPrice}>
                <BiRupee/>18,900
                </div>
                <div className={Style.currentPrice}>
                    <div><BiRupee/><b>12,950</b></div><div className={Style.smallText}>Per Adult </div>
                </div>
            </div>
        </div>
        <div className={ Flag ? Style.show : Style.hide }>
        <hr/>
        <div className={Style.lowerBody}>
            <div className={Style.imageContainer}>
                <img src = { img1 } alt="image1" /> 
                <img src = { img1 } alt="image1" /> 
                <img src = { img1 } alt="image1" /> 
            </div>
            <div className={Style.data}>
            Break the monotony of city life and get ready to explore the wonders of Ladakh, the ‘Land of High Passes'. All equipment, meal areas, accommodation, etc. are sanitized before and after every use to ensure the utmost safety and hygiene of the travelers.    
            </div>
            <div className={Style.priceIncludes}>
                <h4>Price Includes</h4>
                <div className={Style.includes}>
                    <div><TiTick className={Style.reactIcon} /> </div>
                    <div>Transfers <br/>
                    Airport pick up and drop as per your flight timings<br/>
                    Comfortable and hygienic vehicle (Innova/Xylo/Similar) for 
                    sightseeing on all days as per the itinerary.</div>
                </div>
                <div className={Style.includes}>
                    <div><TiTick className={Style.reactIcon} /> </div>
                    <div>Driver <br/>
                    Highly-Experienced driver cum guide.</div>
                </div>
                <div className={Style.includes}>
                    <div><TiTick className={Style.reactIcon} /> </div>
                    <div>Meals <br/>
                    Buffet breakfast and dinner on all days
                    </div>
                </div>
                
            </div>
            <div><h4 className={Style.hidebtn} onClick={() => setFlag(!Flag)}>Hide Details</h4></div>
        </div>
        </div>
        
    </div>
      </div>
    
  )
}
