import './home.scss'
import Banner from '../../components/Banner/'
import Card from '../../components/Card/'
import ImgBanner from '../../assets/img/banner-home.webp'
import LogementsData from '../../datas/logements.json'
import { Link } from 'react-router-dom'

const banner = 'banner'
const pShow = 'pShow'

function Home() {
  return (
    <main>
      <Banner img={ImgBanner} className={banner} classNameP={pShow} />
      <section className="logements-cards">
        {LogementsData.map((logement) => (
          <Link key={`housing-${logement.id}`} to={`/housing/${logement.id}`}>
            <Card
              cover={logement.cover}
              name={logement.title}
              id={logement.id}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home
