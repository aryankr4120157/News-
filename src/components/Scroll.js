import React from 'react'
import scroll from './scrollUp.png'

export default function Scroll() {
    const scrollUp = () => {
        window.scrollTo(0,0);
        console.log("scrollUP")
      }
  return (
    <div>
      <img src={scroll} onClick={scrollUp} alt="not showing" />
    </div>
  )
}
