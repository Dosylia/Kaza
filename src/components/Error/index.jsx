import { Link } from 'react-router-dom'

function Error() {
    return(
        <div>
            <p className="404-error">404</p>
            <p>Oups! la page que vous demandez n'existe pas</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error