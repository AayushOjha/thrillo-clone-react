import React from 'react'
import Style from "./../../../../StyleSheet/Litinery.module.css"
import { IoMdArrowDropdown } from 'react-icons/io';
import { GoLocation } from "react-icons/go";
import img1 from "../../../../assets/Ban1.jpeg"



export default function Litinery () {
  return (
    <div className={Style.container}>
        <div className={Style.header}>
            <div className={Style.borderLeft}>
            </div>
            <div className={Style.title}>
                <div>
                <h3>Thrilling Leh Ladakh Tour with Pangong Lake Itinerary</h3>
                </div>
            </div>
            <div className={Style.expandAll}>
                <p>Expand All</p>
            </div>
        </div>
        <div className={Style.contentContainer}>
            <div className={Style.content}>
                
                    <div className={Style.bodyContainer}> 
                        <div>
                        <div className={Style.contentHeader}>
                                <div className={Style.day}>
                                    <h3>Day 1</h3>
                                </div>
                                <div className={Style.contentTitle}>
                                    <h4>Arrival in Leh | Welcome to the Top of the World</h4>
                                    <div className={Style.dropDownIcon}><IoMdArrowDropdown/></div>
                                </div>
                        </div>
                        </div>
                        <div>
                            <div className={Style.contentBody}>
                                <div className={Style.contentWrap}>
                                    <div className={Style.location}>
                                        <div><GoLocation/></div>
                                        <div><p>Leh</p></div>
                                    </div>
                                    <div className={Style.dataBody}>
                                        <ul>
                                            <li>After landing in Leh, get welcomed by our representative in a traditional way</li>
                                            <li>After landing in Leh, get welcomed by our representative in a traditional way</li>
                                            <li>After landing in Leh, get welcomed by our representative in a traditional way</li>
                                            <li>After landing in Leh, get welcomed by our representative in a traditional way</li>
                                            <li>After landing in Leh, get welcomed by our representative in a traditional way</li>
                                        </ul>
                                    </div>

                                    <div className={Style.imagesContainer}>
                                        <img src={img1}/>
                                        <img src={img1}/>
                                        <img src={img1}/>
                                    </div>
                                    <div className={Style.collapseOne}>
                                        <p>Collapse Day 1 Itinerary</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    
                
                
            </div>
        </div>
        
    </div>
  )
}
