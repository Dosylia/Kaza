import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo-kasa.png'
import './header.scss'

function Header() {
    return(
        <header>
                <img src={Logo} alt="Logo kasa"/>
                <nav>
                <NavLink to="/" activeClassName="active" exact>Accueil</NavLink>
                <NavLink to="/apropos" activeClassName="active">A propos</NavLink>
                </nav>
        </header>
    )
}

export default Header