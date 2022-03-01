import React from 'react'
import Style from "../../../StyleSheet/MainView.module.css"
import { BiTimeFive } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { GiDoctorFace } from "react-icons/gi"
import { MdOutlineFoodBank } from "react-icons/md"
import { AiFillCar } from "react-icons/ai"
import { AiOutlineSafety } from "react-icons/ai"
import { BsCashStack } from "react-icons/bs"




export default function MainView() {
  return (
    <div className={Style.container}>
      <div className={Style.borderLeft}>

      </div>
      <div className={Style.content}>
        <div>
        <div className={Style.title}>
          <h2>Thrilling Leh Ladakh Tour with Pangong Lake</h2>
        </div>
        <div className={Style.navIcon}>
          <div className={Style.rating}>
            <p> 5.0/5 </p>
          </div>
          <div className={Style.reviews}>
            <p> (83 Reviews) </p>
          </div>
          <div className={Style.duration}>
            <BiTimeFive/>5D/4N
          </div>
          <div className={Style.location}>
            <GoLocation/>Ladakh
          </div>
        </div>
        </div>
        <div className={Style.charector}>
          <div className={Style.guide +Style.flex}>
            <div  className={Style.icons}><GiDoctorFace className={Style.large}/></div>
            <p>Guide</p>
          </div>
          <div className={Style.meals+Style.flex}>
            <div className={Style.icons}><MdOutlineFoodBank className={Style.large}/></div>
            <p>Meals</p>
          </div>
          <div className={Style.transport+Style.flex}>
            <div className={Style.icons}><AiFillCar className={Style.large}/></div>
            <p>transport</p>
          </div>
          <div className={Style.safe+Style.flex}>
            <div className={Style.icons}><AiOutlineSafety className={Style.large}/></div>
            <p>Safe</p>
          </div>
          <div className={Style.cashback+Style.flex}>
            <div className={Style.icons}><BsCashStack className={Style.large}/></div>
            <p>CashBack</p>
          </div>
        </div>
      </div>
    </div>
  )
}
