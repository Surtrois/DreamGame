import React from 'react'
import "./css/Figurines.css"
import figurine from "./img/figurine2.jpg"
import figurine1 from"./img/firgurine1.jpg"
import figurine2 from "./img/figurine3.jpg"
import figurine3 from "./img/figurine4.jpg"
import figurine4 from "./img/figurine5.jpg"
import figurine5 from "./img/figurine6.jpg"
import figurine6 from "./img/figurine7.jpg"
import figurine7 from "./img/figurine8.jpg"

const figurineSrc = figurine
const figurineSrc1 = figurine1
const figurineSrc2 = figurine2
const figurineSrc3 = figurine3
const figurineSrc4 = figurine4
const figurineSrc5 = figurine5
const figurineSrc6 = figurine6
const figurineSrc7 = figurine7



export default function Figurines() {
  return (
    <div>
      <p className='text-container'>
      Entre import de figurines japonaises exclusives, vente de figurines Pop,
      arrivages de coffrets de dresseurs d'élite et de peluches Pokemon™,
      tout collectionneur pourra trouver son bonheur dans notre boutique !       
      </p>
      <div className='gallery'>
      <img className='image-container' src={figurineSrc} alt="Figurine" />
      <img className='image-container' src={figurineSrc1} alt="Figurine" />
      <img className='image-container' src={figurineSrc2} alt="Figurine" />
      <img className='image-container' src={figurineSrc3} alt="Figurine" />
      <img className='image-container' src={figurineSrc4} alt="Figurine" />
      <img className='image-container' src={figurineSrc5} alt="Figurine" />
      <img className='image-container' src={figurineSrc6} alt="Figurine" />
      <img className='image-container' src={figurineSrc7} alt="Figurine" />
      </div>
      </div>
  )
}
