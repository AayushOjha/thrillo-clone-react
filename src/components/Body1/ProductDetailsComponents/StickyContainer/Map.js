import React from 'react'
import Style from "../../../../StyleSheet/Maps.module.css"
import { GiEuropeanFlag } from "react-icons/gi"
import {FaFontAwesomeFlag,FaFlagCheckered} from "react-icons/fa"
import { FiExternalLink  } from "react-icons/fi";

export default function Map() {
  return (
    <div className={Style.wrapper}>
        <div className={Style.header}>
            <p>Thrilling Leh Ladakh Tour with Pangong Lake Map</p>
        </div>
        <div className={Style.body}>
            <div>
                <p>Starting Points</p>
                <div className={Style.MapContent}>
                    <div className={Style.green}>
                    <FaFontAwesomeFlag/>
                    </div>
                    <div className={Style.dataMap}>
                        <div>
                    <div className={Style.locationName}>Leh</div>
                        <div className={Style.locationDetails}>Leh</div></div>
                        <div><FiExternalLink/></div>
                        
                    </div>
                </div>
            </div>
            <div>
                <p>Pickup Points</p>
                <div className={Style.MapContent}>
                    <div  className={Style.yellow}><GiEuropeanFlag/></div>
                    <div className={Style.dataMap}>
                        <div>
                            <div className={Style.locationName}>Leh Airport Travel Terminal</div>
                            <div className={Style.locationDetails}>Leh Airport Travel Terminal, Leh,<br/> 194101</div>
                        </div>
                        <div>
                            <FiExternalLink/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Drop Points</p>
                <div className={Style.MapContent}>
                <div className={Style.red}><FaFlagCheckered/></div>
                <div className={Style.dataMap}>
                    <div>
                        <div className={Style.locationName}>Leh Airport Travel Terminal</div>
                        <div className={Style.locationDetails}>Leh Airport Travel Terminal, Leh,<br/>194101</div>
                    </div>
                    <div>
                        <FiExternalLink/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
