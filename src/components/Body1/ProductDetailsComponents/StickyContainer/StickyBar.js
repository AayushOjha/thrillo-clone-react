import React from 'react'
import Style from "./../../../../StyleSheet/StickyBar.module.css"

export default function StickyBar() {
  return (
    <div className={Style.container}>
        <p>Itinerary</p>
        <p>PackageOptions</p>
        <p>Map</p>
        <p>Reviews</p>
        <p>Policies</p>
        <p>FAQs</p>
    </div>
  )
}
