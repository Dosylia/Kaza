import Logo from '../../assets/img/logo-kasa-footer.png'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo kasa" />
      <div className="footer-content"></div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
