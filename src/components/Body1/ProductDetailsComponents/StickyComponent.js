import React from 'react'
import StickyBar from './StickyContainer/StickyBar'
import Style from "./../../../StyleSheet/StickyComponent.module.css"
import Litinery from './StickyContainer/Litinery'
import PackageOptions from './StickyContainer/PackageOptions'
import Maps from "../ProductDetailsComponents/StickyContainer/Map"
import Review from "../ProductDetailsComponents/StickyContainer/Review"


export default function StickyComponent() {
  return (
      <div className={Style.wrapper}>
          <div className={Style.Container}>
            <div  className={Style.item}><StickyBar /><Litinery/></div>
            {/* <div className={Style.item}></div> */}
            <div className={Style.item}><PackageOptions/></div>
            <div className={Style.item}><Maps /></div>
        </div>
        <div className={Style.ReviewContiner}>
            <Review />
        </div>
      </div>
    
  )
}
