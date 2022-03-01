import React from 'react'
import Style from "../StyleSheet/ProductBanner.module.css"
import logo from "../assets/ThrilloLogo.png"
import img1 from "../assets/Ban1.jpeg"
import img2 from "../assets/Ban2.jpeg"
import img3 from "../assets/Ban3.jpeg"
import img4 from "../assets/Ban4.jpeg"
import img from "../assets/BannerImage.jpeg"

export default function ProductBanner() {
  return (
      <div className={ Style.Container }>
        <div className={Style.imageContainer}>
            <div className={ Style.container }>
                <img  src ={ img }/>
            </div>
            <div className={Style.gridImage}>
                <img src={img1} alt= "Img1"/>
                <img src={img2} alt= "Img1"/>
                <img src={img3} alt= "Img1"/>
                <img src={img4} alt= "Img1"/>
            </div> 
        </div>
        <div className={Style.header}> 
            <div className={Style.headerContainer}>
                <img src={ logo }/>
                <div>
                    <p>Login</p>
                </div>
            </div>
        </div>
      </div>
    
  )
}
