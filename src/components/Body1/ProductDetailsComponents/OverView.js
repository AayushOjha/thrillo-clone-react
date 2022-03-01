import React from 'react'
import Style from '../../../StyleSheet/Overview.module.css'
import { useState } from 'react'
export default function OverView() {
  const [isReadMore,setReadMore] = useState(false)
  return (
    <div className={Style.container}>
      <div className={Style.borderLeft}></div>
      <div className={Style.content}>
        <div className={Style.title}>
          <h2>Thrilling Leh Ladakh Tour with Pangong Lake Overview</h2>
        </div>
        <div className={Style.aboutTour}>
          <h3> About the Tour: </h3>
          <p>A visit to the top of the world, Leh-Ladakh features most of the world’s highest motorable passes with the spectacular beauty of snow-capped mountains. Admired for its unparalleled scenic views, pristine icy lakes, and swirling roads, Ladakh is becoming the most instagrammable place in India and is on everyone’s bucket list. Adding to its exceptional beauty are the ancient Buddhist monasteries mostly nestled in the mountains and from thousands of years. </p>
        </div>
        <div className={Style.QuickInfo}>
            <h3>Quick info:</h3>
            <p><b>Route:</b>Leh - Sham valley - Khardungla - Pangong Tso - Leh</p>
            <p><b>Duration:</b>5 Days & 4 Nights </p>
            <p><b>Start point:</b>Leh Airport</p>
            <p><b>Endpoint:</b> Leh Airport</p>
            <p><b>Passes covered:</b>Khardung-la (18380 ft.) and Chang-la (17688 ft.)</p>
            
          </div>

        <div className={isReadMore ? Style.view : Style.dontView }>
          
          <div className={Style.Inclusions}>
            <h3>Inclusions:</h3>
            <ul>
              <li>Airport pick up and drop as per your flight timings</li>
              <li>Comfortable and hygienic vehicle (Innova/Xylo/Similar) for sightseeing on all days as per the itinerary.</li>
              <li>Stay on a double (couples and special requests) and triple sharing basis in hygienic and sanitized hotels</li>
              <li>Buffet breakfast and dinner on all days</li>
              <li>Highly-Experienced driver cum guide</li>
            </ul>
          </div>
          <div className={Style.ThingsNot}>
          <h3>Things not to miss:</h3>
            <ul>
              <li>Airport pick up and drop as per your flight timings</li>
              <li>Comfortable and hygienic vehicle (Innova/Xylo/Similar) for sightseeing on all days as per the itinerary.</li>
              <li>Stay on a double (couples and special requests) and triple sharing basis in hygienic and sanitized hotels</li>
              <li>Buffet breakfast and dinner on all days</li>
              <li>Highly-Experienced driver cum guide</li>
            </ul>
          </div>
          <div className={Style.reach}>
          <h3> How to reach: </h3>
            <p>The easiest way to travel to Ladakh is by air. The nearest airport is Kushok Bakula Rimpochee Airport (IXL) located in Leh. This airport is connected with many international airports in India like Delhi. It also receives flights from Srinagar, Jammu, Chandigarh, and other common destinations in India.</p>
          </div>
        
        </div>
        <div className={Style.readBtn} onClick={() => setReadMore(!isReadMore)}>
            {isReadMore ? "Read less":"Read More"}
        </div>
      </div>

    </div>
  )
}
