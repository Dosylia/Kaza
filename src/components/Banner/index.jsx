import './banner.scss'

function Banner({ img, className, classNameP }) {
  return (
    <div className={className}>
      <img src={img} alt="Bannière paysage" />
      <h1 className={classNameP}>{'Chez vous, \npartout et ailleurs'}</h1>
    </div>
  )
}

export default Banner
