import './housing.scss'
import LogementsData from '../../datas/logements.json'
import Gallery from '../../components/Gallery'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Housing() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [apartment, setApartment] = useState(null)

  useEffect(() => {
    function filterHousing(housing) {
      const HousingFiltered = housing.find((d) => d.id === id)
      if (!HousingFiltered) {
        navigate('/error')
      } else {
        setApartment(HousingFiltered)
      }
    }

    filterHousing(LogementsData)

    return () => {
      setApartment(null)
    }
  }, [id, navigate])

  if (!apartment) {
    return <p>Appartement introuvable.</p>
  }

  return (
    <main>
      <Gallery pictures={apartment.pictures} />
      <div className="apartment-info">
        <div className="apartment-name-location">
          <h1 className="apartment-name">{apartment.title}</h1>
          <p>{apartment.location}</p>
        </div>
        <div className="apartment-owner">
          <p
            dangerouslySetInnerHTML={{
              __html: apartment.host.name.replace(' ', '<br />'),
            }}
          ></p>
          <img src={apartment.host.picture} alt={apartment.host.name} />
        </div>
      </div>
      <div className="apartment-tag-rating">
        <Tag tags={apartment.tags} />
        <Rating rating={apartment.rating} />
      </div>
      <div className="collapse-content">
        <Collapse collapseTitle={'Description'}>
          <p>{apartment.description}</p>
        </Collapse>
        <Collapse collapseTitle={'Equipement'}>
          {apartment.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </Collapse>
      </div>
    </main>
  )
}

export default Housing
