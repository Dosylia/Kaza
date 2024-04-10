import './rating.scss'
import StarRed from '../../assets/img/star-red.png'
import StarGrey from '../../assets/img/star-grey.png'

function Rating({ rating }) {
  const maxRating = 5

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(
          <img key={i} className="star star-red" src={StarRed} alt="" />,
        )
      } else {
        stars.push(
          <img key={i} className="star star-grey" src={StarGrey} alt="" />,
        )
      }
    }
    return stars
  }

  return <div className="rating">{renderStars()}</div>
}

export default Rating
