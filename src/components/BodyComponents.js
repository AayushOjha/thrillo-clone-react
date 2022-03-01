import React from 'react'
import MainView from './Body1/ProductDetailsComponents/MainView'
import OverView from './Body1/ProductDetailsComponents/OverView'
import HightLighter from './Body1/ProductDetailsComponents/HightLighter'
import StickyComponent from './Body1/ProductDetailsComponents/StickyComponent'
import Style from "../StyleSheet/BodyComponent.module.css"


export default function BodyComponents() {
  return (
    <div className={Style.container}> 
      {/* <p>BodyComponents</p> */}
      <div className={Style.order}><MainView/></div>
      <div className={Style.order}><OverView/></div>
      <div className={Style.order}><HightLighter/></div>
      <div className={Style.order}><StickyComponent/></div>
      
      
      
      
    </div>

  )
}



// select e.Emp_id, e.Emp_name,d.Depatment_name from Employee e,Depatment d,leave_avail_details ld,Leave l
// where e.id = ld.id And ld.days = 0 and e.Depatment_id = d.Depatment_id
// order by e.Emp_id;