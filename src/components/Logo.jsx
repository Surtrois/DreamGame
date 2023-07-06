import React from 'react'
import banniere from "./img/banniere.png"
import "./css/logo.css"

export default function Banner() {
  const banniereSrc = banniere
  return (
    <a href='/home'>
    <img className='banner' src={banniereSrc} alt="Banniere" />
    </a>
  )
}
