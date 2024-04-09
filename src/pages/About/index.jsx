import './about.scss'
import Banner from '../../components/Banner/'
import ImgBanner from '../../assets/img/banner-about.webp'

const banner = 'banner-about'
const pHide = 'pHide'

function About() {
  return (
    <main>
      <Banner img={ImgBanner} className={banner} classNameP={pHide} />
      <section></section>
    </main>
  )
}

export default About
