import React from 'react'
import Style from "./../../../StyleSheet/HighLighter.module.css"
import { IoMdLocate } from "react-icons/io"

export default function HightLighter() {
  return (
    <div className={Style.Container}>
      <div className={Style.borderLeft}></div>
      <div className={Style.content}>
        <div className={Style.title}>
          <h2>Thrilling Leh Ladakh Tour with Pangong Lake Highlights</h2>
        </div>
        <div className={Style.highLightContent}>
        <div className={Style.highLightdetails}>
            <IoMdLocate className={Style.iconStyle}/> A perfect blend of adventurous, thrilling and cultural experiences, handpicked by Thrillophilia’s outdoor experts
          </div>
          <div className={Style.highLightdetails}>
            <IoMdLocate className={Style.iconStyle}/> A perfect blend of adventurous, thrilling and cultural experiences, handpicked by Thrillophilia’s outdoor experts
          </div>
          <div className={Style.highLightdetails}>
            <IoMdLocate className={Style.iconStyle}/> A perfect blend of adventurous, thrilling and cultural experiences, handpicked by Thrillophilia’s outdoor experts
          </div>
        </div>
      </div>
    </div>
  )
}
