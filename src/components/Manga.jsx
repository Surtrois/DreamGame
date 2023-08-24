import React from 'react'
import "./css/Manga.css"
import manga from "./img/manga.jpg"
import manga1 from "./img/manga1.jpg"
import manga2 from "./img/manga2.jpg"

const mangaSrc = manga
const mangaSrc1 = manga1
const mangaSrc2 = manga2

export default function Manga() {
  return (
    <div>
      <p className='text-container'>
        Besoin de faire un peu de place dans votre bibliothèque ? Nous reprenons 
        également vos mangas pour leur donner une nouvelle vie ! Et qui 
        sait, peut être que LE tome manquant à votre collection vous attend sur 
        nos étagères...
      </p>
      <div className='gallery'>
      <img className='image-container' src={mangaSrc} alt="Manga" />
      <img className='image-container' src={mangaSrc1} alt="Manga" />
      <img className='image-container' src={mangaSrc2} alt="Manga" />
      </div>
    </div>
  )
}
