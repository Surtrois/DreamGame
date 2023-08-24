import React from 'react'
import "./css/JeuxVideo.css"
import jeuxvideo from "./img/jeuxvideo.jpg"
import jeuxvideo1 from "./img/jeuxvideo1.jpg"
import jeuxvideo2 from "./img/jeuxvideo2.jpg"
import jeuxvideo3 from "./img/jeuxvideo6.jpg"
import jeuxvideo4 from "./img/jeuxvideo7.jpg"
import jeuxvideo5 from "./img/jeuxvideo8.jpg"
import jeuxvideo6 from "./img/jeuxvideo13.jpg"
import retro from "./img/retro.jpg"
import retro1 from "./img/retro4.jpg"
import retro2 from "./img/retro5.jpg"
import retro3 from "./img/retro6.jpg"


const jeuxvideoSrc  = jeuxvideo
const jeuxvideoSrc1 = jeuxvideo1
const jeuxvideoSrc2 = jeuxvideo2
const jeuxvideoSrc3 = jeuxvideo3
const jeuxvideoSrc4 = jeuxvideo4
const jeuxvideoSrc5 = jeuxvideo5
const jeuxvideoSrc6 = jeuxvideo6
const retroSrc = retro
const retroSrc1 = retro1
const retroSrc2 = retro2
const retroSrc3 = retro3

export default function JeuxVideo() {
  return (
    <div>
    <p className='text-container'> C'est avec les jeux vidéo que l'aventure DreamGames a commencé à Billy-Montigny. 
      Du rétrogaming aux dernières sorties sur les consoles next gen, nous faisons notre maximum pour vous proposer un large choix
      vidéoludique au meilleur prix ! 
      Petit plus DreamGames : toute console achetée dans notre magasin sera sous 
      garantie pendant un mois. 
      </p>
<div className='gallery'>
<img className='image-container' src={jeuxvideoSrc} alt="Jeuxvideo" />
<img className='image-container' src={jeuxvideoSrc1} alt="Jeuxvideo" />
<img className='image-container' src={jeuxvideoSrc2} alt="Jeuxvideo" />
<img className='image-container' src={jeuxvideoSrc3} alt="Jeuxvideo" />
<img className='image-container' src={jeuxvideoSrc4} alt="Jeuxvideo" />
<img className='image-container' src={jeuxvideoSrc5} alt="Jeuxvideo" />
<img className='image-container' src={jeuxvideoSrc6} alt="Jeuxvideo" />
<img className='image-container' src={retroSrc} alt="retro" />
<img className='image-container' src={retroSrc1} alt="retro" />
<img className='image-container' src={retroSrc2} alt="retro" />
<img className='image-container' src={retroSrc3} alt="retro" />


</div>
      </div>

    
  )
}
