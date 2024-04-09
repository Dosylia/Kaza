import './banner.scss'

function Banner({ img, className, classNameP }) {
  return (
    <div className={className}>
      <img src={img} alt="Bannière paysage" />
      <p className={classNameP}>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner
