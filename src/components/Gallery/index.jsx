import './gallery.scss'
import { useState } from 'react'
import arrowLeft from '../../assets/img/left-arrow.png'
import arrowRight from '../../assets/img/right-arrow.png'

function Gallery({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0)
  const totalPictures = pictures.length

  const goToPreviousPicture = () => {
    setCurrentPicture((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1,
    )
  }

  const goToNextPicture = () => {
    setCurrentPicture((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="gallery">
      <div className="carousel">
        <button className="arrow left" onClick={goToPreviousPicture}>
          <img src={arrowLeft} alt="Previous" />
        </button>
        <img
          className="picture-carrousel"
          src={pictures[currentPicture]}
          alt={`${currentPicture + 1}`}
        />
        <button className="arrow right" onClick={goToNextPicture}>
          <img src={arrowRight} alt="Next" />
        </button>
        <p className="count-pictures">
          {currentPicture + 1} / {totalPictures}
        </p>
      </div>
    </div>
  )
}

export default Gallery
