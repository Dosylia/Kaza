import './home.scss'
import Banner from '../../components/Banner/'
// import Card from '../../components/Card/'
import ImgBanner from '../../assets/img/banner-home.webp'

const banner = 'banner'
const pShow = 'pShow'

function Home() {
  return (
    <main>
      <Banner img={ImgBanner} className={banner} classNameP={pShow} />
      <section>{/* <Card cover={} name={} /> */}</section>
    </main>
  )
}

export default Home
